package br.edu.up.compras.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="endereco")
public class Endereco implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@NotNull(message = "field.required")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_endereco", nullable = false)
	private Integer idEndereco;
	
	@NotNull(message = "field.required")
	@Column(name = "cep", nullable = false)
	private String cep;
	
	@NotNull(message = "field.required")
	@Column(name = "logradouro", nullable = false)
	private String logradouro;
	
	@NotNull(message = "field.required")
	@Column(name = "numero", nullable = false)
	private String numero;
	
	@Column(name = "complemento")
	private String complemento;
	
	@NotNull(message = "field.required")
	@Column(name = "bairro", nullable = false)
	private String bairro;
	
	@NotNull(message = "field.required")
	@Column(name = "localidade", nullable = false)
	private String localidade;
	
	@NotNull(message = "field.required")
	@Column(name = "uf", nullable = false)
	private char uf;

	public Integer getIdEndereco() {
		return idEndereco;
	}

	public void setIdEndereco(Integer idEndereco) {
		this.idEndereco = idEndereco;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getLocalidade() {
		return localidade;
	}

	public void setLocalidade(String localidade) {
		this.localidade = localidade;
	}

	public char getUf() {
		return uf;
	}

	public void setUf(char uf) {
		this.uf = uf;
	}
	
}
