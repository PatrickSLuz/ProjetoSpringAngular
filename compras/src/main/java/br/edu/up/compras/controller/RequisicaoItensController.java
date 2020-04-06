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

import br.edu.up.compras.model.RequisicaoItens;
import br.edu.up.compras.model.repository.RequisicaoItensRepository;

@RestController
@RequestMapping("/requisicao_itens")
public class RequisicaoItensController {
	
	@Autowired
	private RequisicaoItensRepository repository;

	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<RequisicaoItens> listAll(){
		System.out.print("\nmethod listAll on RequisicaoItensController\n");
		Iterable<RequisicaoItens> list = repository.findAll();
		return list;
	}
	
	@GetMapping("/id={id}")
	public @ResponseBody RequisicaoItens getById(@PathVariable Integer id) {
		System.out.print("\nmethod getById on RequisicaoItensController\nid = " + id + "\n");
		return repository.getOne(id);
	}
	
	@PostMapping
	public RequisicaoItens add(@RequestBody @Valid RequisicaoItens entity) {
		System.out.print("\nmethod add on RequisicaoItensController\nentity = " + entity + "\n");
		return repository.save(entity);
	}
	
	@DeleteMapping
	public RequisicaoItens delete(@PathVariable Integer id) {
		System.out.print("\nmethod delete on RequisicaoItensController\nid = " + id + "\n");
		RequisicaoItens entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}
	
}
