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

import com.br.gbtravels.models.Destino;
import com.br.gbtravels.repositories.Destinos;

@RestController
@CrossOrigin(origins = "https://grand-blue-travels.vercel.app/")
@RequestMapping("/destinos")
public class DestinosController {

	@Autowired
	public Destinos destinosDAO;
	
	@GetMapping
	public List<Destino> pesquisar(){
		return destinosDAO.findAll();
	}
	
	@GetMapping("/{id_destinos}")
	public Destino buscar(@PathVariable Long id_destinos) {
		return destinosDAO.findById(id_destinos).get();
	}
	
	@PostMapping
	public Destino salvar(@RequestBody Destino destino) {
		return destinosDAO.save(destino);
	}
	
	@DeleteMapping
	public void deletar(@PathVariable Long id_destinos) {
		destinosDAO.deleteById(id_destinos);
	}
	
	@PutMapping
	public Destino alterar(@RequestBody Destino destino) {
		return destinosDAO.save(destino);
	}
	
}
