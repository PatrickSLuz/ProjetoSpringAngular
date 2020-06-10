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

import br.edu.up.compras.model.Cotacao;
import br.edu.up.compras.repository.CotacaoRepository;

@RestController
@RequestMapping("/cotacao")
public class CotacaoController {

	@Autowired
	private CotacaoRepository repository;

	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<Cotacao> listAll() {
		System.out.print("\nmethod listAll on CotacaoController\n");
		Iterable<Cotacao> list = repository.findAll();
		return list;
	}

	@GetMapping("/id={id}")
	public @ResponseBody Cotacao getById(@PathVariable Integer id) {
		System.out.print("\nmethod getById on CotacaoController\nid = " + id + "\n");
		return repository.getOne(id);
	}

	@Transactional
	@PostMapping
	public Cotacao add(@RequestBody @Valid Cotacao entity) {
		System.out.print("\nmethod add on CotacaoController\nentity = " + entity + "\n");
		return repository.save(entity);
	}

	@DeleteMapping
	public Cotacao delete(@PathVariable Integer id) {
		System.out.print("\nmethod delete on CotacaoController\nid = " + id + "\n");
		Cotacao entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}

}
