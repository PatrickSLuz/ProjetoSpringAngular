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

import br.edu.up.compras.model.Requisicao;
import br.edu.up.compras.model.RequisicaoItens;
import br.edu.up.compras.repository.RequisicaoItensRepository;
import br.edu.up.compras.repository.RequisicaoRepository;

@RestController
@RequestMapping("/requisicao")
public class RequisicaoController {

	@Autowired
	private RequisicaoRepository repository;
	
	@Autowired
	private RequisicaoItensRepository itensRepository;
	
	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<Requisicao> listAll(){
		System.out.print("method listAll on RequisicaoController\n");
		Iterable<Requisicao> list = repository.findAll();
		return list;
	}
	
	@GetMapping("/id={id}")
	public @ResponseBody Requisicao getById(@PathVariable Integer id) {
		System.out.print("method getById on RequisicaoController\nid = " + id + "\n");
		return repository.getOne(id);
	}
	
	@GetMapping("/status={status}")
	public @ResponseBody Iterable<Requisicao> listAllByStatus(@PathVariable String status){
		System.out.print("method listAllByStatus on RequisicaoController\nstatus = " + status + "\n");
		Iterable<Requisicao> list = repository.getAllByStatus(status);
		return list;
	}
		
	@PostMapping
	public Requisicao add(@RequestBody @Valid Requisicao entity) {
		System.out.print("method add on RequisicaoController\nentity = " + entity + "\n");
		Requisicao requisicao = repository.save(entity);
		RequisicaoItens reqItem;
		for(RequisicaoItens item : requisicao.getItens()) {
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
		System.out.print("method delete on RequisicaoController\nid = " + id + "\n");
		Requisicao entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}
	
}
