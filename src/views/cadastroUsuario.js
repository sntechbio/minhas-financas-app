import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { withRouter } from 'react-router-dom';
import UsuarioService from "../app/service/usuarioService";
import { mensagemSucesso, mensagemErro } from "../components/toastr"

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }
    
    cadastrar = () => {
        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            senhaRepeticao: this.state.senhaRepeticao
        }

        if (this.state.senha != this.state.senhaRepeticao) {
            mensagemErro("As senhas não correspondem")
            return;
        }

        if (this.state.nome == ''){
            mensagemErro("Nome não pode ser um campo vazio")
            return
        }

        if (this.state.email == ''){
            mensagemErro("O campo e-mail não pode ser vazio")
            return
        }

        if (this.state.senha == ''){
            mensagemErro("Senha não pode ser vazia")
            return
        }

        this.service.salvar(usuario)
            .then( response => {
                mensagemSucesso("Usuário cadastrado com sucesso!")
                this.history.push('/login')
            }).catch(error => {
                mensagemErro(error.response.data)
            })
    }

    cancelar = () => {
        this.props.history.push('/Login')
    }

    render() {
        return(
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input className="form-control" type="nome" id="inputNome" name="nome" onChange={e => this.setState({nome: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input className="form-control" type="email" id="inputEmail" name="email" onChange={e => this.setState({email: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input className="form-control" type="password" id="inputSenha" name="senha" onChange={e => this.setState({senha: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                    <input className="form-control" type="password" id="inputSenhaRepetir" name="senha" onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                                </FormGroup>
                                <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                                <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </Card>
        )
    }

}

export default withRouter( CadastroUsuario )