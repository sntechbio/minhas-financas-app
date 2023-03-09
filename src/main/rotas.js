import React from "react";
import Login from '../views/login'
import Home from "../views/home";
import { Route, Switch, HashRouter } from 'react-router-dom'
import CadastroUsuario from "../views/cadastroUsuario";
import ConsultaLancamentos from "../views/Lancamentos/consulta-lancamentos";

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/cadastro-usuarios' component={CadastroUsuario} />
                <Route path='/consulta-lancamentos' component={ConsultaLancamentos}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas