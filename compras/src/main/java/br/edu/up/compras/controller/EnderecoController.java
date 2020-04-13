package br.edu.up.compras.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@Autowired
	private EnderecoRepository repository;
	
	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<Endereco> listAll(){
		System.out.print("\nmethod listAll on EnderecoController\n");
		Iterable<Endereco> list = repository.findAll();
		return list;
	}
	
	@GetMapping("/id={id}")
	public @ResponseBody Endereco getById(@PathVariable Integer id) {
		System.out.print("\nmethod getById on EnderecoController\nid = " + id + "\n");
		return repository.getOne(id);
	}
	
	@PostMapping
	public Endereco add(@RequestBody @Valid Endereco entity) {
		System.out.print("\nmethod add on EnderecoController\nentity = " + entity + "\n");
		return repository.save(entity);
	}
	
	@DeleteMapping
	public Endereco delete(@PathVariable Integer id) {
		System.out.print("\nmethod delete on EnderecoController\nid = " + id + "\n");
		Endereco entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}

}
