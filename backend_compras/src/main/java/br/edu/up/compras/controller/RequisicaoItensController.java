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

import br.edu.up.compras.model.RequisicaoItens;
import br.edu.up.compras.repository.RequisicaoItensRepository;

@RestController
@RequestMapping("/requisicao_itens")
public class RequisicaoItensController {

	private static final Logger logger = LoggerFactory.getLogger(RequisicaoItensController.class);

	@Autowired
	private RequisicaoItensRepository repository;

	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<RequisicaoItens> listAll() {
		logger.info("List all RequisicaoItens");
		Iterable<RequisicaoItens> list = repository.findAll();
		return list;
	}

	@GetMapping("/id={id}")
	public @ResponseBody RequisicaoItens getById(@PathVariable Integer id) {
		logger.info("Get RequisicaoItens by id - " + id);
		return repository.getOne(id);
	}

	@Transactional
	@PostMapping
	public RequisicaoItens add(@RequestBody @Valid RequisicaoItens entity) {
		logger.info("Save RequisicaoItens");
		return repository.save(entity);
	}

	@DeleteMapping
	public RequisicaoItens delete(@PathVariable Integer id) {
		logger.info("Delete RequisicaoItens id - " + id);
		RequisicaoItens entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}

}
