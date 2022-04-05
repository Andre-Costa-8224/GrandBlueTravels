import React, { useEffect, useRef, useState } from "react";
import Api from "../../service/api";

const Destinos = () => {
  const [viagem, setViagem] = useState([]);

  const [qtddest, setQtddest] = useState({
    qtd: "",
  });

  const [datadest, setDatadest] = useState({
    data: "",
  });

  const [usu, setUsu] = useState([]);

  const userStorage = localStorage.getItem("user");

  var lugar = document.getElementById("destino");

  const nomelugar = useRef();
  const valorpclasee = useRef();
  const valoreco = useRef();
  const imagem = useRef();

  var cpf = "";

  var func = function (params) {
    return params;
  };

  var fun;

  try {
    var cpfinit = userStorage.replace('"', "");
    cpf = cpfinit.replace('"', "");
  } catch (error) {
    fun = func(error);
  }

  const mostrarDest = () => {
    Api.get("/destinos/")
      .then((res) => {
        setViagem(res.data);
      })
      .catch((err) => console.log(err));
  };

  const btnMostra = () => {
    mostrarDest();
    let btn = document.getElementById("btninit");
    btn.hidden = true;
    let formu = document.getElementById("formulario");
    formu.hidden = false;
    if (fun !== undefined) {
      console.log(fun);
    }
  };

  useEffect(() => {
    Api.get(`/clientes/${cpf}`)
      .then((res) => {
        setUsu(res.data);
      })
      .catch((err) => window.alert(err));
  });

  const comprar = (event) => {
    event.preventDefault();
    var lbl = lugar.options[lugar.selectedIndex].value;
    var valor = lugar.options[lugar.selectedIndex].label;

    const generateRandomString = (num) => {
      let result1 = Math.random().toString(36).substring(0, num);

      return result1;
    };

    if (userStorage === null) {
      window.alert("Você precisa fazer login antes de comprar!");
    } else {
      Api.post("/passagens/", {
        codigo: generateRandomString(16).slice(2),
        cliente: usu,
        destino: lbl,
        data_embarque: datadest.data,
        valor: valor,
        quantidade: qtddest.qtd,
      })
        .then(() => {
          window.alert("Compra finalizada!");
          window.location.assign("/");
        })
        .catch((err) => window.alert(err));
    }
  };

  const enviar = (event) => {
    event.preventDefault();
    if (cpf.length > 0) {
      if (cpf === "12345678910" && String(usu.senha) === "40028922") {
        Api.post("/destinos", {
          lugar: nomelugar.current.value,
          valoreconomica: valoreco.current.value,
          valorprimeiraclasse: valorpclasee.current.value,
          img: imagem.current.value,
        })
          .then(() => {
            window.alert("Destino adicionado com sucesso!");
            window.location.assign("/");
          })
          .catch((err) => {
            console.log(err);
            window.alert(err);
          });
      } else {
        window.alert("apenas o administrador pode adicionar novos destinos");
        window.location.reload();
      }
    } else {
      window.alert("apenas o administrador pode adicionar novos destinos");
      window.location.reload();
    }
  };

  return (
    <div>
      <main className="App-header">
        <br />
        <section className="fundobranco">
          <button
            className="btn btn-primary"
            type="submit"
            id="btninit"
            onClick={btnMostra}
          >
            Mostrar destinos
          </button>
          <fieldset id="formulario" hidden>
            <h1>Voos</h1>
            <form onSubmit={comprar}>
              <label>
                <span style={{ fontWeight: "bold" }}>
                  Estas são as nossas viagens disponíveis:
                </span>
              </label>
              <br />
              <span style={{ fontWeight: "bold" }}>R$</span>
              <select id="destino">
                {viagem.map((lug) => {
                  return (
                    <optgroup label={lug.lugar} key={lug.id_destinos}>
                      <option value={lug.lugar}>{lug.valoreconomica}</option>
                      <option value={lug.lugar}>
                        {lug.valorprimeiraclasse}
                      </option>
                    </optgroup>
                  );
                })}
              </select>
              <br />
              <label>Quantidade de passagens:</label>
              <br />
              <input
                required
                type={"number"}
                onChange={(e) => {
                  setQtddest({ qtd: e.target.value });
                }}
              ></input>
              <br />
              <label>Data e hora:</label>
              <br />
              <input
                required
                type={"datetime-local"}
                onChange={(e) => {
                  setDatadest({ data: e.target.value });
                }}
              ></input>
              <br />
              <br />
              <button className="btn btn-primary" type="submit">
                Comprar
              </button>
              <br />
            </form>
          </fieldset>
        </section>
        <br />
        <section id="adicionadest" className="fundobranco">
          <h1>Adicionar novo destino</h1>
          <h3>Função disponível apenas para administrador</h3>
          <form onSubmit={enviar}>
            <label>Lugar:</label>
            <br />
            <input type="text" ref={nomelugar} required />
            <br />
            <label>Valor de primeira classe:</label>
            <br />
            <input type={"number"} ref={valorpclasee} required></input>
            <br />
            <label>Valor de econômica:</label>
            <br />
            <input type={"number"} ref={valoreco} required></input>
            <br />
            <label>Link da imagem:</label>
            <br />
            <input type={"url"} ref={imagem} required></input>
            <br />
            <br />
            <input
              type={"submit"}
              className="btn btn-primary"
              value={"Enviar"}
            ></input>
            <br />
          </form>
        </section>
        <br />
      </main>
    </div>
  );
};

export default Destinos;
