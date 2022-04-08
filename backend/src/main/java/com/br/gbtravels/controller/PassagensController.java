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

import com.br.gbtravels.models.Passagem;
import com.br.gbtravels.repositories.Passagens;

@RestController
@RequestMapping("/passagens")
@CrossOrigin(origins="https://grand-blue-travels.vercel.app/")
public class PassagensController {
	
	@Autowired
	public Passagens passagensDAO;
	
	@GetMapping
	public List<Passagem> pesquisar(){
		return passagensDAO.findAll();
	}
	
	@GetMapping("/{id}")
	public Passagem buscar(@PathVariable Long id) {
		return passagensDAO.findById(id).get();
	}
	
	@PostMapping
	public Passagem salvar(@RequestBody Passagem passagem) {
		return passagensDAO.save(passagem);
	}
	
	@DeleteMapping("/{id}")
	public void deletar(@PathVariable Long id) {
		passagensDAO.deleteById(id);
	}
	
	@PutMapping
	public Passagem alterar(@RequestBody Passagem passagem) {
		return passagensDAO.save(passagem);
	}
	
}
