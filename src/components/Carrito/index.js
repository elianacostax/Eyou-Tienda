import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

function Carrito() {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const toogleFalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  const resta = id =>{
    carrito.forEach(item =>{
      if(item.id === id){
        item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -=1;  
      }
      setCarrito([...carrito])
    })
  }

  const suma = id =>{
    carrito.forEach(item =>{
      if(item.id === id){
        item.cantidad +=1; 
      }
      setCarrito([...carrito])
    })
  }

  const removeProducto = (id) => {
    if (window.confirm("¿Quieres eliminar el producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
    }
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div
          className="carrito__close"
          onClick={() => {
            toogleFalse();
          }}
        >
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su Carrito</h2>

        <div className="carrito__center">
          {
            carrito.length === 0 ? <h2 style={{
              textAlign: "center", fontSize: "2rem"
            }}>
              Carrito Vacio
            </h2> : <> 
          {
            carrito.map((p) => (
            <div className="carrito__item" key={p.id}>
              <img src={p.image.default} alt={p.title} />
              <div>
                <h3>{p.title}</h3>
                <p className="price"> {p.price} </p>
              </div>
              <div>
                <box-icon name="up-arrow" type="solid" onClick={()=> suma(p.id)} ></box-icon>
                <p className="cantidad"> {p.cantidad} </p>
                <box-icon name="down-arrow" type="solid"  onClick={()=> resta(p.id)} ></box-icon>
              </div>
              <div
                className="remove__item"
                onClick={() => removeProducto(p.id)}
              >
                <box-icon name="trash"></box-icon>
              </div>
            </div>
          ))}
          </>
        }
        </div>

        <div className="carrito__footer">
          <h3>Total: $ {total} </h3>
          <button className="btn">Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
