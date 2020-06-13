package br.edu.up.compras.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.edu.up.compras.model.RequisicaoItens;

public interface RequisicaoItensRepository extends JpaRepository<RequisicaoItens, Integer> {

	@Modifying
	@Query(value = "UPDATE requisicao_itens SET preco_uni = :precoUni WHERE id_requisicao_itens = :idRequisicaoItens", nativeQuery = true)
	void updatePrecoUni(@Param(value = "precoUni") double precoUni,
			@Param(value = "idRequisicaoItens") Integer idRequisicaoItens);

}
