import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../service/api";

function Passagens() {
  const userStorage = localStorage.getItem("user");

  const [usu, setUsu] = useState([]);

  const cpfinit = userStorage.replace('"', "");

  const cpf = cpfinit.replace('"', "");

  useEffect(() => {
    Api.get(`/passagens/`)
      .then((res) => {
        //console.log(res.data)
        res.data.map((s) => {
          if (String(cpf) === s.cliente.cpf) {
            setUsu(res.data);
          }
          return "";
        });
      })
      .catch((err) => window.alert(err));
  });

  const deletar = (id) => {
    const conf = window.confirm("Tem certeza  que deseja deletar?");
    if (conf) {
      Api.delete(`/passagens/${id}`)
        .then(() => window.location.reload())
        .catch((err) => window.alert(err));
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="App-header">
      <section className="perfilpassagens">
        <h1
          className="text-light bg-primary"
          style={{ borderRadius: "8px", padding: "5px", textAlign: "center" }}
        >
          SUAS PASSAGENS:
        </h1>
        {usu.map((passagem) => {
          return (
            <div key={passagem.passagemId}>
              <hr />
              <article className="articlerow">
                <p className="pcampo">Destino:</p>
                <p className="pdado">{passagem.destino}</p>
                <p className="pcampo">Valor:</p>
                <p className="pdado">{passagem.valor}</p>
                <p className="pcampo">Código:</p>
                <p className="pdado">{passagem.codigo}</p>
                <p className="pcampo">Quantidade:</p>
                <p className="pdado">{passagem.quantidade}</p>
                <p className="pcampo">Data de embarque:</p>
                <p className="pdado">{passagem.data_embarque}</p>
              </article>
              <article id="btns" className="articlerow">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deletar(passagem.passagemId);
                  }}
                >
                  DELETAR
                </button>
                <br />
              </article>
            </div>
          );
        })}

        <p style={{ backgroundColor: "black", height: "1px", width: "100%" }}>
          _
        </p>

        <Link to="/perfil" className="btn btn-primary">
          VOLTAR
        </Link>
      </section>
    </div>
  );
}

export default Passagens;
