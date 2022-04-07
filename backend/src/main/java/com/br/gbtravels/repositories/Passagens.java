package com.br.gbtravels.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.gbtravels.models.Passagem;

public interface Passagens extends JpaRepository<Passagem, Long> {

}
