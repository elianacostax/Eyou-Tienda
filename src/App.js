import React from 'react'
import { Navbar, Carrito } from "./components";

import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./Routes/index.routes";
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Navbar />
      <Carrito />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
