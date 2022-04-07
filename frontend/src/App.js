import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cabecalho from "./Pages/Home/Header";
import Secao1 from "./Pages/Home/Section";
import Destinos from "./Pages/Viagens/Destination";
import Acessar from "./Pages/Usuario/Login";
import RecuperarSenha from "./Pages/Usuario/Recovery";
import Cadastro from "./Pages/Usuario/Subscribe";
import { Rodape } from "./Pages/Home/Footer";
import Sobre from "./Pages/Home/About";
import { AuthProvider } from "./providers/auth";
import Perfil from "./Pages/Usuario/profile";
import Passagens from "./Pages/Passagens/Ticket";

const App = () => {
  
  return (
    <AuthProvider>
    <Router>
    <Cabecalho/>
      <Routes>
        <Route path="/" exact element={<Secao1 />} />
        <Route path="/destinos" element={<Destinos/>} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Acessar />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recovery" element={<RecuperarSenha/>}></Route>
        <Route path="/perfil" element={<Perfil/>}></Route>
        <Route path="/passagens" element={<Passagens/>}></Route>
      </Routes>
    </Router>
    <Rodape/>
    </AuthProvider>
  );
};

export default App;
