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
@Table(name="requisicao_itens")
public class RequisicaoItens {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Requisicao requisicao;
	
	@Column(name = "descricao_produto", nullable = false)
	private String descricao_produto;
	
	@Column(name = "quantidade", nullable = false)
	private double quantidade;
	
	@Column(name = "preco_uni")
	private double preco_uni;
	
	@Column(name = "cotacao_realizada", columnDefinition = "int default 0")
	private int cotacao_realizada; // flag: 0=Não Realizada e 1=Realizada

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Requisicao getRequisicao() {
		return requisicao;
	}

	public void setRequisicao(Requisicao requisicao) {
		this.requisicao = requisicao;
	}

	public String getDescricao_produto() {
		return descricao_produto;
	}

	public void setDescricao_produto(String descricao_produto) {
		this.descricao_produto = descricao_produto;
	}

	public double getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(double quantidade) {
		this.quantidade = quantidade;
	}

	public double getPreco_uni() {
		return preco_uni;
	}

	public void setPreco_uni(double preco_uni) {
		this.preco_uni = preco_uni;
	}

	public int getCotacao_realizada() {
		return cotacao_realizada;
	}

	public void setCotacao_realizada(int cotacao_realizada) {
		this.cotacao_realizada = cotacao_realizada;
	}
	
}
