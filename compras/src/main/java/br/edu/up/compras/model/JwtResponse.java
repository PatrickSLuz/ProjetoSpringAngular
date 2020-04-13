package br.edu.up.compras.model;

import java.io.Serializable;

/**
 * 
 * Essa classe é necessária para criar uma resposta contendo o JWT a ser retornado ao usuário.
 *
 */

public class JwtResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5773266217851320293L;

	private final String jwttoken;

	public JwtResponse(String jwttoken) {
		this.jwttoken = jwttoken;
	}

	public String getToken() {
		return this.jwttoken;
	}
	
}
