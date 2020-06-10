package br.edu.up.compras.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.up.compras.model.Usuario;
import br.edu.up.compras.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;

	@GetMapping(produces = "application/json")
	public @ResponseBody Iterable<Usuario> listAll() {
		System.out.print("method listAll on UsuarioController\n");
		Iterable<Usuario> list = repository.findAll();
		return list;
	}

	@GetMapping("/id={id}")
	public @ResponseBody Usuario getById(@PathVariable Integer id) {
		System.out.print("method getById on UsuarioController\nid = " + id + "\n");
		return repository.getOne(id);
	}

	@Transactional
	@PostMapping("/login")
	public ResponseEntity<Usuario> login(@RequestBody Usuario entity) {
		System.out.print("method login on UsuarioController\n" + "login = " + entity.getLogin() + " - email = "
				+ entity.getEmail() + "\n");
		Usuario user = repository.getByLogin(entity.getLogin());
		if (user != null) {
			if (user.getEmail().equals(entity.getEmail())) {
				return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
			} else {
				return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
			}
		} else {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping
	public ResponseEntity<Usuario> add(@RequestBody @Valid Usuario entity) {
		System.out.print("method add on UsuarioController\nentity = " + entity + "\n");
		Usuario userLogin = repository.getByLogin(entity.getLogin());
		Usuario userEmail = repository.getByEmail(entity.getEmail());
		if (userLogin == null && userEmail == null) {
			Usuario user = repository.save(entity);
			return new ResponseEntity<>(user, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(null, HttpStatus.CONFLICT);
		}

	}

	@DeleteMapping
	public Usuario delete(@PathVariable Integer id) {
		System.out.print("method delete on UsuarioController\nid = " + id + "\n");
		Usuario entity = repository.getOne(id);
		repository.delete(entity);
		return entity;
	}

}
