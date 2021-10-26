import React from "react";
import { Header, Paginas, Carrito } from "./components";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import {DataProvider} from './context/DataProvider'

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <Carrito/>
        <Paginas />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
