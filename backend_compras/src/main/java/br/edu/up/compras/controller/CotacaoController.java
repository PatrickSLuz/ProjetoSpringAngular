package br.edu.up.compras.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.up.compras.model.Cotacao;
import br.edu.up.compras.model.RequisicaoItens;
import br.edu.up.compras.repository.CotacaoRepository;
import br.edu.up.compras.repository.RequisicaoItensRepository;
import br.edu.up.compras.repository.RequisicaoRepository;

@RestController
@RequestMapping("/cotacao")
public class CotacaoController {

	private static final Logger logger = LoggerFactory.getLogger(CotacaoController.class);

	@Autowired
	private CotacaoRepository repository;

	@Autowired
	private RequisicaoRepository requisicaoRepository;

	@Autowired
	private RequisicaoItensRepository itensRepository;

	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<Cotacao> listAll() {
		logger.info("List all Cotacoes");
		Iterable<Cotacao> list = repository.findAll();
		return list;
	}

	@GetMapping("/id={id}")
	public @ResponseBody Cotacao getById(@PathVariable Integer id) {
		logger.info("Get Cotacao by id - " + id);
		return repository.getOne(id);
	}

	@Transactional
	@PostMapping
	public Cotacao add(@RequestBody @Valid Cotacao entity) {
		logger.info("Save Cotacao");
		Integer idRequisicao = entity.getRequisicao().getIdRequisicao();
		List<RequisicaoItens> itens = entity.getRequisicao().getItens();

		requisicaoRepository.updateCotacao(true, idRequisicao);
		requisicaoRepository.updateStatus("EM_COTACAO", idRequisicao);
		for (RequisicaoItens item : itens) {
			itensRepository.updatePrecoUni(item.getPrecoUni(), item.getIdRequisicaoItens());
		}
		return repository.save(entity);
	}

	@DeleteMapping
	public Cotacao delete(@PathVariable Integer id) {
		logger.info("Delete Cotacao id - " + id);
		Cotacao entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}

}
