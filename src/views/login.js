import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import 'bootswatch/dist/flatly/bootstrap.css'
import { withRouter } from 'react-router-dom'

import UsuarioService from "../app/service/usuarioService";
import LocalStorageService from "../app/service/localStorageService";

import { mensagemErro } from '../components/toastr'

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    entrar = async () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then( response => {
            localStorage.setItem("usuario_logado", JSON.stringify(response.data))
            this.props.history.push("/home")
        }).catch( erro => {
            mensagemErro(erro.response.data)
        })
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    render() {
        return (
                <div className="row">
                    <div className="col-md-6" style={ {position : 'relative', left: '300px'} }>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                            <FormGroup label="Email" htmlFor="exampleInputEmail1">
                                                <input
                                                type="email"
                                                value={this.state.email}
                                                onChange={e => this.setState({email: e.target.value})}
                                                className="form-control"
                                                id="exampleInputEmail"
                                                aria-describedby="emailHelp"
                                                placeholder="Digite o Email"
                                                />
                                            </FormGroup>
                                            <br/>
                                            <FormGroup label="Senha" htmlFor="">
                                            <input
                                                type="password"
                                                value={this.state.senha}
                                                onChange={e => this.setState({senha: e.target.value})}
                                                className="form-control"
                                                id="exampleInputPassword"
                                                aria-describedby="examppleInputPassword1"
                                                placeholder="Password"
                                                />
                                            </FormGroup>
                                            <br/>
                                            <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                            <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
        )
    }

}

export default withRouter( Login )
