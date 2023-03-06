import React from "react";

import 'toastr/build/toastr.min.js'

import 'toastr/build/toastr.css'
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
