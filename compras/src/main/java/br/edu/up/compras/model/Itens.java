package br.edu.up.compras.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="itens")
public class Itens {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "descricao_produto", nullable = false)
	private String descricaoProduto;
	
	@Column(name = "quantidade", nullable = false)
	private double quantidade;
	
	@Column(name = "preco_uni")
	private double precoUni;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescricaoProduto() {
		return descricaoProduto;
	}

	public void setDescricaoProduto(String descricaoProduto) {
		this.descricaoProduto = descricaoProduto;
	}

	public double getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(double quantidade) {
		this.quantidade = quantidade;
	}

	public double getPrecoUni() {
		return precoUni;
	}

	public void setPrecoUni(double precoUni) {
		this.precoUni = precoUni;
	}
	
}
