import { Typography } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { AutenticarContexto } from "../../components/context/AutenticarContexto";

function Produtos({ nome_loja }) {
  const { token } = useContext(AutenticarContexto);

  return (
    <div className="container">
      <Typography variant="h4" component="h4">
        {nome_loja}
      </Typography>

      <h1>Protudos, cara</h1>
    </div>
  );
}
export default Produtos;
