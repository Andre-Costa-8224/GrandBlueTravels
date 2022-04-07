import React from "react";

const RecuperarSenha = () => {
  return (
    <main className="App-header">
      <section className="fundobranco">
        <form>
          <label>Email para recupeção de senha: </label>
          <br />
          <br />
          <input type={"email"}></input>
          <br />
          <br />
          <input
            type={"submit"}
            className="btn btn-primary"
            value={"recuperar"}
          ></input>
        </form>
      </section>
    </main>
  );
};

export default RecuperarSenha;
