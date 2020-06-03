package br.edu.up.compras.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import br.edu.up.compras.service.JwtUserDetailsService;
import io.jsonwebtoken.ExpiredJwtException;

/**
 * 
 * O JwtRequestFilter estende a classe Spring Web Filter OncePerRequestFilter.
 * Para qualquer solicitação recebida, esta classe Filter é executada. Ele
 * verifica se a solicitação possui um token JWT válido. Se ele tiver um token
 * JWT válido, ele definirá a autenticação no contexto, para especificar que o
 * usuário atual será autenticado.
 *
 */

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		
		if(request.getRequestURI().equals("/user") && request.getMethod().equals("POST")) {
			// nao precisa de token para cadastrar usuario
			logger.info("POST de /user");
		} else {
			final String requestTokenHeader = request.getHeader("Authorization");
			
			String username = null;
			String jwtToken = null;

			// O token JWT está no formato "token do portador".
			// Remova a palavra Bearer e obtenha apenas o Token
			if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
				jwtToken = requestTokenHeader.substring(7);
				try {
					username = jwtTokenUtil.getUsernameFromToken(jwtToken);
				} catch (IllegalArgumentException e) {
					System.out.println("Unable to get JWT Token");
				} catch (ExpiredJwtException e) {
					System.out.println("JWT Token has expired");
				}
			} else {
				logger.warn("JWT Token não começa com a String Bearer");
			}
			// Depois de obter o token, valide-o.
			if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
				UserDetails userDetails = this.jwtUserDetailsService.loadUserByUsername(username);
				// se o token for válido, configure o Spring Security para definir manualmente a
				// autenticação
				if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {
					UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
							userDetails, null, userDetails.getAuthorities());
					usernamePasswordAuthenticationToken
							.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
					// Depois de definir a autenticação no contexto, especificamos
					// que o usuário atual está autenticado. Então passa o
					// Configurações de segurança da primavera com êxito.
					SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
				}
			}
			chain.doFilter(request, response);
		}
		
	}

}
