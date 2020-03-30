package br.edu.up.compras.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="fornecedor")
public class Fornecedor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "cpf_cnpj", nullable = false)
	private String cpf_cnpj;
	
	@Column(name = "nome_razao", nullable = false)
	private String nome_razao;
	
	@Column(name = "rg_inscricao")
	private String rg_inscricao;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	@Column(name = "telefone")
	private String telefone;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Endereco endereco;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCpf_cnpj() {
		return cpf_cnpj;
	}

	public void setCpf_cnpj(String cpf_cnpj) {
		this.cpf_cnpj = cpf_cnpj;
	}

	public String getNome_razao() {
		return nome_razao;
	}

	public void setNome_razao(String nome_razao) {
		this.nome_razao = nome_razao;
	}

	public String getRg_inscricao() {
		return rg_inscricao;
	}

	public void setRg_inscricao(String rg_inscricao) {
		this.rg_inscricao = rg_inscricao;
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
