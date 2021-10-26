import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProductosLista } from "..";
import { Inicio } from "../Inicio";
import {ProductoDetalle} from "../Productos/ProductoDetalle";

function Paginas() {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={ProductosLista} />
        <Route path="/productos/:id" exact component={ProductoDetalle} />

      </Switch>
    </section>
  );
}

export default Paginas;
