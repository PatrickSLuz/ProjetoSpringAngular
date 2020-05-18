package br.edu.up.compras.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="cotacao")
public class Cotacao implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Fornecedor fornecedor;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private RequisicaoItens requisicao_itens;
	
	@Column(name = "vlr_total")
	private double vlr_total;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Fornecedor getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

	public RequisicaoItens getRequisicao_itens() {
		return requisicao_itens;
	}

	public void setRequisicao_itens(RequisicaoItens requisicao_itens) {
		this.requisicao_itens = requisicao_itens;
	}

	public double getVlr_total() {
		return vlr_total;
	}

	public void setVlr_total(double vlr_total) {
		this.vlr_total = vlr_total;
	}
	
}
