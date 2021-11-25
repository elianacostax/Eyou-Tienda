import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { FaCartPlus, FaReadme  } from "react-icons/fa";

 const ProductoItem = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/producto/${id}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn"> <FaCartPlus /> </button>
        <div>
        <Link to={`/producto/${id}`} className="btn">Ver mas <FaReadme/> </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductoItem;
