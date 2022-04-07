import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";

const Cabecalho = () => {
  const login = (
    <Link to={"/login"} className="links">
      LOGIN
    </Link>
  );

  const perf = (
    <Link to={"/perfil"} className="links">
      PERFIL
    </Link>
  );

  var btn = "";

  const { user } = useAuth();

  //user necessário para atualização da situação se está em
  //login, console.log() meramente atribui um uso sem utilidade para remoção de warning.
  console.log(user === null);

  const userStorage = localStorage.getItem("user");

  if (userStorage === null) {
    btn = login;
  } else {
    btn = perf;
  }

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand logotxt" to="/">
            GrandBlue Travels
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="listmenu navbar-nav">
              <li>
                <Link to="/" className="links">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/destinos" className="links">
                  DESTINOS
                </Link>
              </li>

              <li>
                <Link to="/sobre" className="links">
                  ABOUT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="listmenu">
            <li>{btn}</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Cabecalho;
