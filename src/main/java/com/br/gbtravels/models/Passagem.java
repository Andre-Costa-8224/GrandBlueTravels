package com.br.gbtravels.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class Passagem implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long PassagemId;
	
	@Column(nullable=false,unique=true)
	private String codigo;
	
	@Column(nullable= false)
	private String Destino;
	
	@Column(nullable= false)
	private Date Data_embarque;
	
	@Column(nullable= false)
	private Float Valor;
	
	@Column(nullable= false)
	private Long Quantidade;
	
	@ManyToOne
	@JoinColumn
	private Cliente cliente;
	
	public Passagem() {
		
	}
	
	public Passagem(String codigo, String destino, Date data_embarque, Float valor, Long qtd) {
		super();
		this.codigo = codigo;
		Destino = destino;
		Data_embarque = data_embarque;
		Valor = valor;
		Quantidade = qtd;
	}

	public Passagem(Cliente cliente) {
		super();
		this.cliente.setCPF(cliente.getCPF());
		this.cliente.setData_de_nascimento(cliente.getData_de_nascimento());
		this.cliente.setEmail(cliente.getEmail());
		this.cliente.setNome(cliente.getNome());
		this.cliente.setId(cliente.getId());
		this.cliente.setPassagens(cliente.getPassagens());
		this.cliente.setSenha(cliente.getSenha());
	}



	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getDestino() {
		return Destino;
	}

	public void setDestino(String destino) {
		Destino = destino;
	}

	public Date getData_embarque() {
		return Data_embarque;
	}

	public void setData_embarque(Date data_embarque) {
		Data_embarque = data_embarque;
	}

	public Float getValor() {
		return Valor;
	}

	public void setValor(Float valor) {
		Valor = valor;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Long getPassagemId() {
		return PassagemId;
	}

	public void setPassagemId(Long id) {
		PassagemId = id;
	}

	public Long getQuantidade() {
		return Quantidade;
	}

	public void setQuantidade(Long quantidade) {
		Quantidade = quantidade;
	}
	
}
