import React from "react";

import '../custom.css'
import Rotas from "./rotas";
import Navbar from "../components/navbar";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Navbar/>
        <Rotas/>
      </div>
    )
  }
}

export default App
