package br.edu.up.compras.service;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService{

	/**
	 * 
	 * Implementa a interface Spring Security UserDetailsService. 
	 * Ele substitui o loadUserByUsername para buscar detalhes do 
	 * usuário no banco de dados usando o nome de usuário. 
	 * O Spring Security Authentication Manager chama esse método 
	 * para obter os detalhes do usuário no banco de dados ao autenticar 
	 * os detalhes do usuário fornecidos pelo usuário. Aqui estamos obtendo 
	 * os detalhes do usuário em uma Lista de usuários codificada
	 *
	 */
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		if ("javainuse".equals(username)) {
			return new User("javainuse", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("Usuário não encontrado: " + username);
		}
	}

}
