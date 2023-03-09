import React from "react";
import { withRouter } from "react-router-dom"
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelectMenu from "../../components/selectMenu";
import LancamentosTable from "./lancamentos-table";

class ConsultaLancamentos extends React.Component{
    
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
            {label: 'Despesa', value: 1},
            {label: 'Receita', value: 2}
        ]

        const lancamentos = [
            {id: 1, descricao: 'Salário', valor: 500, mes: 1, tipo: 'Receita', status: 'Efetivado'}
        ]

        return(
            <Card title="Consulta Lançamento">
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" label="Ano: *">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    id="inputAno"
                                    aria-describedby="emailHelp"
                                    placeholder="Digite o Ano"/>
                            </FormGroup>
                            <FormGroup htmlFor="inputMes" label="Mês: ">
                                <SelectMenu id="inputMes" className="form-select" lista={meses}/>
                            </FormGroup>
                            <FormGroup htmlFor="inputTipo" label="Tipo: ">
                                <SelectMenu id="inputTipo" className="form-select" lista={tipo}/>
                            </FormGroup>
                            <button type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <LancamentosTable lancamentos={lancamentos}/>
                    </div>
                </div>

            </Card>
        )
    }

}

export default withRouter(ConsultaLancamentos);