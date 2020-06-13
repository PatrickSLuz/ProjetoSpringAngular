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

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Entity
@Table(name = "requisicao_itens")
public class RequisicaoItens implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_requisicao_itens")
	private Integer idRequisicaoItens;

	@NotNull(message = "field.required")
	@Column(name = "id_requisicao", nullable = false)
	private Integer idRequisicao;

	@NotNull(message = "field.required")
	@Column(name = "descricao_produto", nullable = false)
	private String descricaoProduto;

	@NotNull(message = "field.required")
	@Column(name = "quantidade", nullable = false)
	private double quantidade;

	@Column(name = "preco_uni", precision = 2, scale = 10)
	private double precoUni;

	public Integer getIdRequisicaoItens() {
		return idRequisicaoItens;
	}

	public void setIdRequisicaoItens(Integer idRequisicaoItens) {
		this.idRequisicaoItens = idRequisicaoItens;
	}

	public Integer getIdRequisicao() {
		return idRequisicao;
	}

	public void setIdRequisicao(Integer idRequisicao) {
		this.idRequisicao = idRequisicao;
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
