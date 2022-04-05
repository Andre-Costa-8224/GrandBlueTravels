import React from "react";

import Passagem from "./Cards";

const Secao1 = () => {
  return (
    <>
      <main>
        <section className="App-header2">
          <article className="arttext">
            <p>
              Às vezes, precisamos viajar para bem longe para nos encontrarmos
              bem de perto. Além de um episódio turístico em outro país, outra
              cultura, outro modo de viver a vida, viajar também pode ser uma
              jornada para dentro de si mesmo. É pensando assim que um destino
              não é só um lugar, mas uma nova maneira de enxergar a vida.
            </p>
          </article>
        </section>

        <section>
          <article>
            <p
              className="text-light bg-dark"
              style={{ margin: "0", padding: "5px" }}
            >
              <span style={{ fontWeight: "bold" }}>
                Estas são as nossas viagens disponíveis:
              </span>
            </p>
            <Passagem />
          </article>
        </section>

        <section className="App-header2">
          <article className="arttext">
            <p>
              Viajar tem a ver com viver experiências: quanto mais completa de
              passeios, culturas, aventuras, descobertas e imersões sua viagem
              for, mais rico fica seu repertório e mais valem os dias fora de
              casa. É por isso que a GrandBlueTravel existe, dando diversas
              opções e segurança em suas escolhas.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default Secao1;
