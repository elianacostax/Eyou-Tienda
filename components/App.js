import { useState } from "react";





const App = () => {

  const [valor, setValor] = useState(0); // HOOK
const [estadoDeshabilitado, setEstadoDeshabilitado] = useState(true);
  const agregarleUno = () => {
    //valor = valor + 1;
    setValor(valor + 1);
    setEstadoDeshabilitado(false);
  };

  const restarleUno = () => {
    if(valor===1){
      setEstadoDeshabilitado(true)
    }
    setValor(valor - 1);
    
    }
  

  const restablecer = () => {
    setValor(0);
    if(valor === 0 ){ setEstadoDeshabilitado(true)
    };
  }

 
  return (
    <div className="App">
      <div>{valor}</div>
      <button onClick={agregarleUno}> + </button>
      <button disabled={estadoDeshabilitado} onClick={restarleUno}> - </button>
      <button onClick={restablecer}> Restablecer </button>
    </div>
  );
};




export default App;




