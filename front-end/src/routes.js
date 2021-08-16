import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AutenticarContexto } from "./components/context/AutenticarContexto";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Produtos from "./pages/Home";
import { useEffect } from "react";

function Routes() {
  const [token, setToken] = useState();
  const [nome_loja, setNome_loja] = useState();

  useEffect(() => {
    async function getProdutos() {
      const res = await fetch("https://desafio-m03.herokuapp.com/produtos ", {
        method: "GET",
        headers: {
          Autorization: `Bearer${token}`,
        },
      });
    }
    getProdutos();
  }, []);

  return (
    <AutenticarContexto.Provider value={{ token, setToken }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/produtos" component={Produtos} />
        </Switch>
      </Router>
    </AutenticarContexto.Provider>
  );
}

export default Routes;
//.
