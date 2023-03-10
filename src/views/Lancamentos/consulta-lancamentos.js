import React from "react";
import { withRouter } from "react-router-dom"
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import LancamentosTable from "./lancamentos-table";
import LancamentoService from "../../app/service/lancamentoService";
import * as messages from '../../components/toastr'

class ConsultaLancamentos extends React.Component{

    state = {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        lancamentos: []
    }

    constructor(){
        super();
        this.service = new LancamentoService();
    }

    buscar = () => {

        if(!this.state.ano){
            messages.mensagemErro('O preenchimento do campo ano é obrigatório')
            return false;
        }

        const usuarioLogado = JSON.parse(localStorage.getItem("usuario_logado"))
        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            descricao: this.state.descricao,
            usuario: usuarioLogado.id
        }

        this.service.consultar(lancamentoFiltro)
            .then(response => {
                this.setState({ lancamentos: response.data })
            }).catch(error => {
                console.log(error)
            })
    }

    editar = (id) => {
        console.log(id)
    }

    deletar = (id) => {
        console.log(id)
    }
    
    render(){

        const meses = [
            {label: 'Selecione...', value: ''},
            {label: 'Janeiro', value: 1},
            {label: 'Fevereiro', value: 2},
            {label: 'Março', value: 3},
            {label: 'Abril', value: 4},
            {label: 'Maio', value: 5},
            {label: 'Junho', value: 6},
            {label: 'Julho', value: 7},
            {label: 'Agosto', value: 8},
            {label: 'Setembro', value: 9},
            {label: 'Outubro', value: 10},
            {label: 'Novembro', value: 11},
            {label: 'Dezembro', value: 12}

        ]

        const tipo = [
            {label: 'Selecione...', value: ''},
            {label: 'Despesa', value: 'DESPESA'},
            {label: 'Receita', value: 'RECEITA'}
        ]

        const lancamentos = [
            {id: 1, descricao: 'Salário', valor: 500, mes: 1, tipo: 'Receita', status: 'Efetivado'}
        ]

        return(
            <Card title="Consulta Lançamento">
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">

                            <FormGroup htmlFor="inputAno" label="Ano: ">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    id="inputAno"
                                    value={this.state.ano}
                                    onChange={e => this.setState({ano: e.target.value})}
                                    aria-describedby="emailHelp"
                                    placeholder="Digite o Ano..."/>
                            </FormGroup>

                            <FormGroup htmlFor="inputMes" label="Mês: ">
                                <SelectMenu id="inputMes"
                                            value={this.state.mes}
                                            onChange={e => this.setState({mes: e.target.value})}
                                            className="form-select"
                                            lista={meses}/>
                            </FormGroup>

                            <FormGroup htmlFor="inputDescricao" label="Descricao: ">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    id="inputDescricao"
                                    value={this.state.descricao}
                                    onChange={e => this.setState({descricao: e.target.value})}
                                    placeholder="Digite a descricao..."/>
                            </FormGroup>

                            <FormGroup htmlFor="inputTipo" label="Tipo: ">
                                <SelectMenu id="inputTipo" 
                                            value={this.state.tipo}
                                            onChange={e => this.setState({tipo: e.target.value})}
                                            className="form-select" 
                                            lista={tipo}/>
                            </FormGroup>

                            <button onClick={this.buscar} type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <LancamentosTable lancamentos={this.state.lancamentos}
                                            deleteAction={this.deletar}/>
                    </div>
                </div>

            </Card>
        )
    }

}

export default withRouter(ConsultaLancamentos);