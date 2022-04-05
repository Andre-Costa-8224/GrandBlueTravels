import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../service/api";

const Passagem = () => {
  const [viagem, setViagem] = useState([]);

  useEffect(() => {
    Api.get("/destinos/")
      .then((res) => {
        setViagem(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="carditem">
        {viagem.map((viagem) => (
          <div key={viagem.id_destinos} className="divcard">
            <img src={viagem.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{viagem.lugar}</h5>
              <p className="card-text">
                <span style={{ textDecoration: "underline" }}>
                  valor da primeira classe
                </span>
                :{" "}
                <span style={{ fontWeight: "bold" }}>
                  {viagem.valorprimeiraclasse}
                </span>
              </p>
              <p className="card-text">
                <span style={{ textDecoration: "underline" }}>
                  valor da econômica
                </span>
                :{" "}
                <span style={{ fontWeight: "bold" }}>
                  {viagem.valoreconomica}
                </span>
              </p>
              <Link to={"/destinos"} className="btn btn-primary">
                comprar
              </Link>
            </div>
          </div>
        ))}

        {/* 
        <div className="divcard">
          <img
            src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={'/'} className="btn btn-primary">
              comprar
            </Link>
          </div>
        </div>
        
        <div className="divcard">
          <img
            src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={'/'} className="btn btn-primary">
              comprar
            </Link>
          </div>
        </div>

        <div className="divcard">

          <img
            src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={'/'} className="btn btn-primary">
              comprar
            </Link>
          </div>
        </div>
        <div className="divcard">
          <img
            src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={'/'} className="btn btn-primary">
              comprar
            </Link>
          </div>
        </div>
        */}
      </section>
    </div>
  );
};

export default Passagem;
