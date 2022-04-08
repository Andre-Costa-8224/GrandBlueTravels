package com.br.gbtravels.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Cliente implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ClienteId;
	
	@Column(nullable=false, unique = true, length = 11)
	private String CPF;
	
	@Column(nullable = false)
	private String Nome;
	
	@Column(nullable = false)
	private Date Data_de_nascimento;
	
	@Column(nullable = false, unique = true)
	private String Email;
	
	@Column(nullable = false)
	private String Senha;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cliente")
	private List<Passagem> passagens = new ArrayList<>();
	
	public Cliente() {
		
	}
	
	
	
	public Cliente(String cPF, String nome, Date data_de_nascimento, String email, String senha) {
		super();
		CPF = cPF;
		Nome = nome;
		Data_de_nascimento = data_de_nascimento;
		Email = email;
		Senha = senha;
	}

	
	
	public Long getId() {
		return ClienteId;
	}



	public void setId(Long id) {
		ClienteId = id;
	}



	public String getCPF() {
		return CPF;
	}

	public void setCPF(String cPF) {
		CPF = cPF;
	}

	public String getNome() {
		return Nome;
	}

	public void setNome(String nome) {
		Nome = nome;
	}

	public Date getData_de_nascimento() {
		return Data_de_nascimento;
	}

	public void setData_de_nascimento(Date data_de_nascimento) {
		Data_de_nascimento = data_de_nascimento;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getSenha() {
		return Senha;
	}

	public void setSenha(String senha) {
		Senha = senha;
	}

	public List<Passagem> getPassagens() {
		return passagens;
	}

	public void setPassagens(List<Passagem> passagens) {
		this.passagens = passagens;
	}
	
}
