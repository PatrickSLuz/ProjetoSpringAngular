package br.edu.up.compras.controller;

import javax.validation.Valid;

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

	@Autowired
	private FornecedorRepository repository;

	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<Fornecedor> listAll() {
		System.out.print("\nmethod listAll on FornecedorController\n");
		Iterable<Fornecedor> list = repository.findAll();
		return list;
	}

	@GetMapping("/id={id}")
	public @ResponseBody Fornecedor getById(@PathVariable Integer id) {
		System.out.print("\nmethod getById on FornecedorController\nid = " + id + "\n");
		return repository.getOne(id);
	}

	@Transactional
	@PostMapping
	public Fornecedor add(@RequestBody @Valid Fornecedor entity) {
		System.out.print("\nmethod add on FornecedorController\nentity = " + entity + "\n");
		return repository.save(entity);
	}

	@DeleteMapping
	public Fornecedor delete(@PathVariable Integer id) {
		System.out.print("\nmethod delete on FornecedorController\nid = " + id + "\n");
		Fornecedor entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}

}
