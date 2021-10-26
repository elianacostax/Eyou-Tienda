import React, {useContext, useEffect, useState} from "react";
import { DataContext } from "../../context/DataProvider";
import { useParams } from "react-router";


export const ProductoDetalle = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos;
    const params = useParams();

    console.log(params.id)


    return (
     <div>
         <h1>Detalle del producto</h1>
     </div>
    );
  };