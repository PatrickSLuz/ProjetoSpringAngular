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

import br.edu.up.compras.model.Endereco;
import br.edu.up.compras.repository.EnderecoRepository;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

	private static final Logger logger = LoggerFactory.getLogger(EnderecoController.class);

	@Autowired
	private EnderecoRepository repository;

	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<Endereco> listAll() {
		logger.info("List all Enderecos");
		Iterable<Endereco> list = repository.findAll();
		return list;
	}

	@GetMapping("/id={id}")
	public @ResponseBody Endereco getById(@PathVariable Integer id) {
		logger.info("Get Endereco by id - " + id);
		return repository.getOne(id);
	}

	@Transactional
	@PostMapping
	public Endereco add(@RequestBody @Valid Endereco entity) {
		logger.info("Save Endereco");
		return repository.save(entity);
	}

	@DeleteMapping
	public Endereco delete(@PathVariable Integer id) {
		logger.info("Delete Endereco id - " + id);
		Endereco entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}

}
