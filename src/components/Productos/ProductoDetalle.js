import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { useParams } from "react-router-dom";
import {ProductoItem} from '../../components'


export const ProductoDetalle = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const [url, setUrl] = useState(0);
  const [images, setImages] = useState("");
  let item = 0;

  const params = useParams();

  useEffect(() => {
    productos.forEach((producto) => {
        item = 0;
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
      }
    });
  }, [params.id, productos]);

  useEffect(() => {
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values);
  }, [url, params.id]);

  const handleInput = (e) => {
    const number = e.target.value.toString().padStart(2, "01");
    setUrl(number);
    console.log(number);
  };

  if (detalle.length < 1) return null;

  console.log(detalle);

  return (
    <>
      {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">$ {detalle.price}</p>
          <div className="grid">
            <p className="nuevo">Nuevo</p>
            <div className="size">
              <select placeholder="Tamaño">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
              </select>
              <p>Tamaño</p>
            </div>
          </div>

          <button onClick={()=>addCarrito(detalle.id)} >Añadir al carrito</button>

          {url ? (
            <img src={images} alt={detalle.title} />
          ) : (
            <img src={detalle.image.default} alt={detalle.title} />
          )}

          <input
            type="range"
            min="1"
            max="36"
            step="1"
            value={url}
            onChange={handleInput}
          />

          <div className="description">
            <p>
              
              <b>Descripcion:</b> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis efficitur nunc dolor, et sodales massa
              facilisis eu. Aenean vulputate tincidunt ante, nec bibendum dui
              pulvinar sed. Nullam pharetra enim eu urna feugiat pretium. In
              eget nibh libero. Praesent ligula est, viverra sed ipsum at,
              sollicitudin ultricies metus. Donec quam ante, commodo suscipit
              ornare porta, rutrum nec turpis. Donec sollicitudin sapien non ex
              dignissim pulvinar. Sed ultrices lorem vitae dui luctus, vitae
              
            </p>
          </div>
        </div>
      }


      <h2 className="relacionados"> Productos Relacionados</h2>
      <div className="productos">
          {
              productos.slice(0, 4).map((p)=>{
                  if(detalle.category === p.category){

                    return <ProductoItem
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    price={p.price}
                    image={p.image}
                    category={p.category}
                    cantidad={p.cantidad}
                    />
                  
                  }
              })
          }
      </div>

    </>
  );
};
