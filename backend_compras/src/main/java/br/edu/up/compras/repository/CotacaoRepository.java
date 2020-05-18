package br.edu.up.compras.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.up.compras.model.Cotacao;

public interface CotacaoRepository extends JpaRepository<Cotacao, Integer>{

}
