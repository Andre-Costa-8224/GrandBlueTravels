import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import Api from "../../service/api";

const Perfil = () => {
  const { setUser } = useAuth();

  const [usu, setUsu] = useState([]);

  const userStorage = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ cpf: "" });
  };

  var butaosair = (
    <Link to={"/"} className="articlerow">
      <input
        type={"submit"}
        className="btn btn-primary"
        onClick={handleLogout}
        value={"SAIR"}
      ></input>
    </Link>
  );

  const cpfinit = userStorage.replace('"', "");

  const cpf = cpfinit.replace('"', "");

  useEffect(() => {
    Api.get(`/clientes/${cpf}`)
      .then((res) => {
        setUsu(res.data);
      })
      .catch((err) => window.alert(err));
  });

  const deletar = () => {
    const conf = window.confirm("Tem certeza  que deseja deletar?");
    if (conf) {
      Api.delete(`/clientes/${usu.id}`)
        .then(() => window.location.assign("/"))
        .catch((err) => window.alert(err));
      handleLogout();
    } else {
      window.location.reload();
    }
  };

  const nome = useRef();
  const inputcpf = useRef();
  const datadenascimento = useRef();
  const email = useRef();
  const senha = useRef();

  const atualizar = (event) => {
    event.preventDefault();

    Api.put("/clientes/", {
      id: usu.id,
      nome: nome.current.value,
      cpf: inputcpf.current.value,
      data_de_nascimento: datadenascimento.current.value,
      email: email.current.value,
      senha: senha.current.value,
    })
      .then(() => {
        window.alert("atualizado com sucesso!");
        window.location.reload();
      })
      .catch((err) => window.alert(err));
  };

  if (userStorage === null) {
    butaosair = (
      <Link to={"/perfil"} className="articlerow">
        <button type={"submit"} disabled className="btn btn-primary">
          SAIR
        </button>
      </Link>
    );
  }

  return (
    <div className="App-header">
      <h1
        className="text-light border bg-primary titperf"
        style={{ borderRadius: "5px", padding: "5px" }}
      >
        Perfil
      </h1>
      <section id="perfilcontainer" className="perfilcontainer">
        <br />

        <article className="articlerow">
          <br />
          <p className="pcampo">Nome:</p>
          <p className="pdado">{usu.nome}</p>
          <p className="pcampo">Data de nascimento:</p>
          <p className="pdado">{usu.data_de_nascimento}</p>
          <p className="pcampo">CPF:</p>
          <p className="pdado">{usu.cpf}</p>
          <p className="pcampo">Email:</p>
          <p className="pdado">{usu.email}</p>
          <br />
        </article>

        <article id="btns" className="articlerow">
          <button className="btn btn-danger" onClick={() => deletar()}>
            Excluir conta
          </button>
          <br />
          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Alterar dados
          </button>
          <br />
          <Link to="/passagens" className="btn btn-primary">
            Ver minhas passagens
          </Link>
          <br />
          {butaosair}
          <br />
        </article>

        <article>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    SEUS DADOS
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={atualizar}>
                    <label>Nome:</label>
                    <br />
                    <input
                      type={"text"}
                      ref={nome}
                      defaultValue={usu.nome}
                      required
                    ></input>
                    <br />
                    <label>CPF:</label>
                    <br />
                    <input
                      type={"number"}
                      ref={inputcpf}
                      defaultValue={usu.cpf}
                      required
                    ></input>
                    <br />
                    <label>Data de nascimento:</label>
                    <br />
                    <input
                      type={"date"}
                      ref={datadenascimento}
                      required
                      defaultValue={usu.data_de_nascimento}
                    ></input>
                    <br />
                    <label>Email:</label>
                    <br />
                    <input
                      type={"email"}
                      ref={email}
                      required
                      defaultValue={usu.email}
                    ></input>
                    <br />
                    <label>Senha:</label>
                    <br />
                    <input
                      id="pass"
                      required
                      type={"password"}
                      ref={senha}
                      defaultValue={usu.senha}
                    ></input>
                    <br />
                    <br />
                    <button type={"submit"} className="btn btn-primary">
                      Alterar
                    </button>
                    <br />
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Perfil;
