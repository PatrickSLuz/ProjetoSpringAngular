package br.edu.up.compras.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.edu.up.compras.model.Requisicao;

public interface RequisicaoRepository extends JpaRepository<Requisicao, Integer> {

	@Query(value = "SELECT * FROM requisicao WHERE status = ?", nativeQuery = true)
	Iterable<Requisicao> getAllByStatus(String status);

	@Modifying
	@Query(value = "UPDATE requisicao SET cotacao_realizada = :realizada WHERE id_requisicao = :idRequisicao", nativeQuery = true)
	void updateCotacao(@Param(value = "realizada") boolean realizada,
			@Param(value = "idRequisicao") Integer idRequisicao);

	@Modifying
	@Query(value = "UPDATE requisicao SET status = :status WHERE id_requisicao = :idRequisicao", nativeQuery = true)
	void updateStatus(@Param(value = "status") String status,
			@Param(value = "idRequisicao") Integer idRequisicao);

}
