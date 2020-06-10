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

import br.edu.up.compras.model.Fornecedor;
import br.edu.up.compras.repository.FornecedorRepository;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

	private static final Logger logger = LoggerFactory.getLogger(FornecedorController.class);

	@Autowired
	private FornecedorRepository repository;

	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<Fornecedor> listAll() {
		logger.info("List all Fornecedores");
		Iterable<Fornecedor> list = repository.findAll();
		return list;
	}

	@GetMapping("/id={id}")
	public @ResponseBody Fornecedor getById(@PathVariable Integer id) {
		logger.info("Get Fornecedor by id - " + id);
		return repository.getOne(id);
	}

	@Transactional
	@PostMapping
	public Fornecedor add(@RequestBody @Valid Fornecedor entity) {
		logger.info("Save Fornecedor");
		return repository.save(entity);
	}

	@DeleteMapping
	public Fornecedor delete(@PathVariable Integer id) {
		logger.info("Delete Fornecedor id - " + id);
		Fornecedor entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}

}
