import { useState } from "react";


function Form() {
  const [leyenda, setLeyenda] = useState("");
  const [LeyendaCopiado, setLeyendaCopiado] = useState("");
  const [disabled, setDisabled] = useState(true);

  const cargarLeyenda = (e) => {
    setLeyenda(e.target.value);
    if (e.target.value.length === ""){
      limpiarLeyenda( );
      setDisabled(true)
    }else {
      setLeyenda(e.target.value);
      setDisabled(false)
    }
  };

  const copiarLeyenda = () => {
    setLeyendaCopiado(leyenda);
  };

  const limpiarLeyenda = () => {
    setLeyenda(" ");
    setLeyendaCopiado(" ")
  }

  return (
    <div className="App">
      <input
        name="leyenda"
        onChange={(e) => cargarLeyenda(e)}
        placeholder="Nombre"
        type="text"
      />
      <br />
      <button onClick={copiarLeyenda} > Mostar leyenda</button> <br />
      <button onClick={limpiarLeyenda} disabled={disabled}> Limpiar leyenda</button> <br />
      <input value={LeyendaCopiado} />
    </div>
  );
};
export default Form;
