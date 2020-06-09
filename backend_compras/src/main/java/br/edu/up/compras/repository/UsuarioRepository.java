package br.edu.up.compras.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.edu.up.compras.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	@Query(value = "SELECT * FROM usuario WHERE login = :login", nativeQuery = true)
	Usuario getByLogin(@Param(value = "login") String login);

	@Query(value = "SELECT * FROM usuario WHERE email = :email", nativeQuery = true)
	Usuario getByEmail(@Param(value = "email") String email);

}
