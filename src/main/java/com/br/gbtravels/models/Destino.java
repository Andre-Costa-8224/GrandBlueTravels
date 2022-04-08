package com.br.gbtravels.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Destino implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_destinos;
	
	@Column(nullable = false)
	private String Lugar;
	
	@Column(nullable = false)
	private Float Valorprimeiraclasse;
	
	@Column(nullable=false)
	private Float Valoreconomica;
	
	@Column(nullable=false)
	private String Img;
	
	public Destino() {
		
	}
	
	

	public Destino(Long id_destinos, String lugar, Float valorprimeiraclasse, Float valoreconomica, String img) {
		super();
		Id_destinos = id_destinos;
		Lugar = lugar;
		Valorprimeiraclasse = valorprimeiraclasse;
		Valoreconomica = valoreconomica;
		Img = img;
	}



	public Long getId_destinos() {
		return Id_destinos;
	}

	public void setId_destinos(Long id_destinos) {
		Id_destinos = id_destinos;
	}

	public String getLugar() {
		return Lugar;
	}

	public void setLugar(String lugar) {
		Lugar = lugar;
	}
	
	public Float getValorprimeiraclasse() {
		return Valorprimeiraclasse;
	}

	public void setValorprimeiraclasse(Float valorprimeiraclasse) {
		Valorprimeiraclasse = valorprimeiraclasse;
	}

	public Float getValoreconomica() {
		return Valoreconomica;
	}

	public void setValoreconomica(Float valoreconomica) {
		Valoreconomica = valoreconomica;
	}

	public String getImg() {
		return Img;
	}

	public void setImg(String img) {
		Img = img;
	}
	
}
