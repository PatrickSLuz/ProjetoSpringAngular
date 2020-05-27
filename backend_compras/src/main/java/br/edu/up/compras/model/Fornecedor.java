package br.edu.up.compras.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="fornecedor")
public class Fornecedor implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@NotNull(message = "field.required")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_fornecedor", nullable = false)
	private Integer idFornecedor;
	
	@NotNull(message = "field.required")
	@Column(name = "cpf_cnpj", nullable = false)
	private String cpfCnpj;
	
	@NotNull(message = "field.required")
	@Column(name = "nome_razao", nullable = false)
	private String nomeRazao;
	
	@Column(name = "rg_inscricao")
	private String rgInscricao;
	
	@NotNull(message = "field.required")
	@Column(name = "email", nullable = false)
	private String email;
	
	@Column(name = "telefone")
	private String telefone;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Endereco endereco;

	public Integer getIdFornecedor() {
		return idFornecedor;
	}

	public void setIdFornecedor(Integer idFornecedor) {
		this.idFornecedor = idFornecedor;
	}

	public String getCpfCnpj() {
		return cpfCnpj;
	}

	public void setCpfCnpj(String cpfCnpj) {
		this.cpfCnpj = cpfCnpj;
	}

	public String getNomeRazao() {
		return nomeRazao;
	}

	public void setNomeRazao(String nomeRazao) {
		this.nomeRazao = nomeRazao;
	}

	public String getRgInscricao() {
		return rgInscricao;
	}

	public void setRgInscricao(String rgInscricao) {
		this.rgInscricao = rgInscricao;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	
}
