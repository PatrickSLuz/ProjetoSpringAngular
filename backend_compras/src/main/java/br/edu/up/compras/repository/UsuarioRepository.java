package br.edu.up.compras.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.up.compras.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
