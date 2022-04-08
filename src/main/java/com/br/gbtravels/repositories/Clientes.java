package com.br.gbtravels.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.gbtravels.models.Cliente;

public interface Clientes extends JpaRepository<Cliente, Long> {
	Cliente findByCPF(String CPF);
}
