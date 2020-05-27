package br.edu.up.compras.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

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
	@NotNull(message = "field.required")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_cotacao", nullable = false)
	private Integer idCotacao;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Fornecedor fornecedor;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Requisicao requisicao;
	
	@NotNull(message = "field.required")
	@Column(name = "vlr_total", nullable = false, precision = 2, scale = 10)
	private double vlrTotal;

	public Integer getIdCotacao() {
		return idCotacao;
	}

	public void setIdCotacao(Integer id) {
		this.idCotacao = id;
	}

	public Fornecedor getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

	public Requisicao getRequisicao() {
		return requisicao;
	}

	public void setRequisicao(Requisicao requisicao) {
		this.requisicao = requisicao;
	}

	public double getVlrTotal() {
		return vlrTotal;
	}

	public void setVlrTotal(double vlrTotal) {
		this.vlrTotal = vlrTotal;
	}
	
}
