package br.edu.up.compras.model;

import java.io.Serializable;

/**
 * 
 * Essa classe é necessária para armazenar o nome de usuário e a senha que recebemos do cliente.
 *
 */

public class JwtRequest implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7363269932125040752L;
	
	private String username;
	private String password;

	public JwtRequest()
	{
	}

	public JwtRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
	return this.username;
	}

	public void setUsername(String username) {
	this.username = username;
	}

	public String getPassword() {
	return this.password;
	}

	public void setPassword(String password) {
	this.password = password;
	}

}
