package com.br.gbtravels.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.gbtravels.models.Cliente;
import com.br.gbtravels.repositories.Clientes;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins="https://grand-blue-travels.vercel.app/")
public class ClientesController {

	@Autowired
	public Clientes clientesDAO;
	
	@GetMapping
	public List<Cliente> pesquisar(){
		return clientesDAO.findAll();
	}
	
	@GetMapping("/{cpf}")
	public Cliente buscar(@PathVariable String cpf) {
		return clientesDAO.findByCPF(cpf);
	}
	
	@PostMapping
	public Cliente salvar(@RequestBody Cliente cliente) {
		return clientesDAO.save(cliente);
	}
	
	@DeleteMapping("/{id}")
	public void deletar(@PathVariable Long id) {
		clientesDAO.deleteById(id);
	}
	
	@PutMapping
	public Cliente alterar(@RequestBody Cliente cliente) {
		return clientesDAO.save(cliente);
	}
}
