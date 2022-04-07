import React, { useRef } from "react";
import Api from "../../service/api";

const Cadastro = () => {
  const nome = useRef();
  const cpf = useRef();
  const datadenascimento = useRef();
  const email = useRef();
  const senha = useRef();

  const enviar = (event) => {
    event.preventDefault();

    Api.post("/clientes/", {
      nome: nome.current.value,
      cpf: cpf.current.value,
      data_de_nascimento: datadenascimento.current.value,
      email: email.current.value,
      senha: senha.current.value,
    })
      .then(() => {
        window.alert("Cadastrado com sucesso!");
        window.location.assign("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="App-header">
      <section className="fundobranco">
        <fieldset onSubmit={enviar}>
          <h1>Cadastro</h1>
          <form>
            <label>Nome:</label>
            <br />
            <input type={"text"} ref={nome} required></input>
            <br />
            <label>CPF:</label>
            <br />
            <input type={"number"} ref={cpf} required></input>
            <br />
            <label>Data de nascimento:</label>
            <br />
            <input type={"date"} required ref={datadenascimento}></input>
            <br />
            <label>Email:</label>
            <br />
            <input type={"email"} required ref={email}></input>
            <br />
            <label>Senha:</label>
            <br />
            <input id="pass" required type={"password"} ref={senha}></input>
            <br />
            <br />
            <button
              type={"submit"}
              formAction={"/"}
              className="btn btn-primary"
            >
              Cadastrar
            </button>
            <br />
          </form>
        </fieldset>
      </section>
    </main>
  );
};

export default Cadastro;
