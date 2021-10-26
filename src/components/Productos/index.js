import React, {useContext} from "react";
import {DataContext} from '../../context/DataProvider'
import {ProductoItem} from '../../components'

function ProductosLista() {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  
 
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        
        {
          productos.map(p =>(
            <ProductoItem
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
            category={p.category}
            cantidad={p.cantidad}
            />

          ))
        }

      </div>
    </>
  );
}

export default ProductosLista;
