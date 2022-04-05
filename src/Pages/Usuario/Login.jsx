import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import Api from "../../service/api";

const Acessar = () => {
  const [input, setInput] = useState({
    cpf: "",
  });

  const [login, setLogin] = useState({});

  const { setUser } = useAuth();

  const cpf = useRef();

  const senha = useRef();

  useEffect(() => {
    Api.get("/clientes/")
      .then((res) => {
        setLogin(res.data);
      })
      .catch((err) => console.log(err));
  });

  const handleLogin = (event) => {
    var finalcpf = "";
    var finalsenha = "";

    login.forEach((element) => {
      if (
        element.cpf === String(cpf.current.value) &&
        element.senha === String(senha.current.value)
      ) {
        localStorage.setItem("user", JSON.stringify(input.cpf));
        setUser("input");
        finalcpf = element.cpf;
        finalsenha = element.senha;
        event.preventDefault();
      }
    });

    if (finalcpf !== cpf.current.value && finalsenha !== senha.current.value) {
      event.preventDefault();
      alert("usuário ou senha incorretos!");
    } else {
      if (cpf.current.value === "" || senha.current.value === "") {
        event.preventDefault();
        alert("Nem todos os campos foram preenchidos");
      }
    }
  };

  return (
    <main className="App-header">
      <section className="fundobranco">
        <fieldset>
          <h1>Login</h1>
          <form>
            <label>CPF:</label>
            <br />
            <input
              type={"number"}
              onChange={(e) => setInput({ cpf: e.target.value })}
              ref={cpf}
            ></input>
            <br />
            <label>Senha:</label>
            <br />
            <input id="pass" type={"password"} ref={senha}></input>
            <br />
            <br />
            <input
              type={"submit"}
              className="btn btn-primary"
              value={"Entrar"}
              formAction={"/perfil"}
              id="btnlog"
              onClick={handleLogin}
            ></input>
            <br />
          </form>
          <br />
          <span>
            <Link to="/recovery">Esqueceu sua senha?</Link>
          </span>
        </fieldset>
        <br />
        <p>
          Não está cadastrado? Cadastre-se{" "}
          <span>
            <Link to="/cadastro">aqui</Link>
          </span>
        </p>
      </section>
      <p></p>
    </main>
  );
};

export default Acessar;
