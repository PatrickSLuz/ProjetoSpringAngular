package br.edu.up.compras.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Entity
@Table(name = "requisicao")
public class Requisicao implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_requisicao")
	private Integer idRequisicao;

	@OneToOne()
	private Usuario solicitante;

	@OneToMany(mappedBy = "idRequisicao")
	private List<RequisicaoItens> itens;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "data")
	private Date data;

	@Enumerated(EnumType.STRING)
	@NotNull(message = "field.required")
	@Column(name = "status", nullable = false)
	private StatusRequisicao status;

	@NotNull(message = "field.required")
	@Column(name = "observacao", nullable = false)
	private String observacao;

	// true = Realizada
	// false = Não Realizada
	@NotNull(message = "field.required")
	@Column(name = "cotacao_realizada", columnDefinition = "tinyint default 0")
	private Boolean cotacaoRealizada;

	public Integer getIdRequisicao() {
		return idRequisicao;
	}

	public void setIdRequisicao(Integer idRequisicao) {
		this.idRequisicao = idRequisicao;
	}

	public Usuario getSolicitante() {
		return solicitante;
	}

	public void setSolicitante(Usuario solicitante) {
		this.solicitante = solicitante;
	}

	public List<RequisicaoItens> getItens() {
		return itens;
	}

	public void setItens(List<RequisicaoItens> itens) {
		this.itens = itens;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public StatusRequisicao getStatus() {
		return status;
	}

	public void setStatus(StatusRequisicao status) {
		this.status = status;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public Boolean getCotacaoRealizada() {
		return cotacaoRealizada;
	}

	public void setCotacaoRealizada(Boolean cotacaoRealizada) {
		this.cotacaoRealizada = cotacaoRealizada;
	}

}
