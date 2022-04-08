package com.br.gbtravels.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://grand-blue-travels.vercel.app/")
@RequestMapping("/")
public class HomeController {
    
    @GetMapping
    public String acessar(){
        return "Status: Conexão efetuada com sucesso";
    }
    
}

