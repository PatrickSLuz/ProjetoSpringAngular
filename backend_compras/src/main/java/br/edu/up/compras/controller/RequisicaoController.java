package br.edu.up.compras.controller;

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

import br.edu.up.compras.model.Requisicao;
import br.edu.up.compras.model.RequisicaoItens;
import br.edu.up.compras.repository.RequisicaoItensRepository;
import br.edu.up.compras.repository.RequisicaoRepository;

@RestController
@RequestMapping("/requisicao")
public class RequisicaoController {

	private static final Logger logger = LoggerFactory.getLogger(RequisicaoController.class);

	@Autowired
	private RequisicaoRepository repository;

	@Autowired
	private RequisicaoItensRepository itensRepository;

	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<Requisicao> listAll() {
		logger.info("List all Requisicoes");
		Iterable<Requisicao> list = repository.findAll();
		return list;
	}

	@GetMapping("/id={id}")
	public @ResponseBody Requisicao getById(@PathVariable Integer id) {
		logger.info("Get Requisicao by id - " + id);
		return repository.getOne(id);
	}

	@GetMapping("/status={status}")
	public @ResponseBody Iterable<Requisicao> listAllByStatus(@PathVariable String status) {
		logger.info("List all Requisicoes by Status - " + status);
		Iterable<Requisicao> list = repository.getAllByStatus(status);
		return list;
	}

	@Transactional
	@PostMapping
	public Requisicao add(@RequestBody @Valid Requisicao entity) {
		logger.info("Save Requisicao");
		Requisicao requisicao = repository.save(entity);
		RequisicaoItens reqItem;
		for (RequisicaoItens item : requisicao.getItens()) {
			reqItem = new RequisicaoItens();
			reqItem.setIdRequisicao(requisicao.getIdRequisicao());
			reqItem.setDescricaoProduto(item.getDescricaoProduto());
			reqItem.setQuantidade(item.getQuantidade());
			reqItem.setCotacaoRealizada(false);
			itensRepository.save(reqItem);
		}
		return requisicao;
	}

	@DeleteMapping
	public Requisicao delete(@PathVariable Integer id) {
		logger.info("Delete Requisicao id - " + id);
		Requisicao entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}

}
