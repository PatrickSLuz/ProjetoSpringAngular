package br.edu.up.compras.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.edu.up.compras.model.Requisicao;

public interface RequisicaoRepository extends JpaRepository<Requisicao, Integer>{

	@Query(value = "SELECT * FROM requisicao WHERE status = ?", nativeQuery = true)
	Iterable<Requisicao> getAllByStatus(String status);
	
}
