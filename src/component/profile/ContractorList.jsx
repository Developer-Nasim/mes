import React, {Component} from 'react';
import {Icon, Table} from 'semantic-ui-react'
import CustomTable from "./CustomTable"; 
import Atag from "./a_tag"; 

const axios = require('axios');

class ContractorList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rows: [],
            columns: null,
        }

    }

    componentDidMount() {
        this.pullData();
    }

    pullData = () => {

        let fetchUrl = this.props.baseUrl + "/custom_api/contractor_list/" + this.props.uid;

        var config = {
            method: 'get',
            url: fetchUrl,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        axios(config)
            .then(function (response) { 
                
                let rows = response.data.data.map(item => {  
                    return <Table.Row key={response.data.data.indexOf(item)}>
                        <Table.Cell collapsing>
                            <Atag href="https://dev-mes.pantheonsite.io/user/">{item.contract_number}</Atag> 
                        </Table.Cell>
                        <Table.Cell collapsing>
                            <Atag href="https://dev-mes.pantheonsite.io/user/">{item.candidate_name}</Atag> 
                        </Table.Cell>
                        <Table.Cell collapsing>
                            <Atag href="https://dev-mes.pantheonsite.io/user/">{item.contract_status_name}</Atag> 
                        </Table.Cell> 
                        <Table.Cell collapsing>{item.start_date}</Table.Cell> 
                        <Table.Cell collapsing>{item.finishing_date}</Table.Cell> 
                        <Table.Cell collapsing>{item.pay_rate}</Table.Cell> 
                        <Table.Cell collapsing>{item.charge_rate}</Table.Cell> 
                        <Table.Cell collapsing>{item.charge_pay_ratio}</Table.Cell> 
                        <Table.Cell collapsing>{item.occupation}</Table.Cell>  
                        <Table.Cell collapsing>
                            <Atag href="https://dev-mes.pantheonsite.io/user/">{item.company_name}</Atag> 
                        </Table.Cell>  
                        <Table.Cell collapsing>{item.medical_status}</Table.Cell> 
                        <Table.Cell collapsing>{item.reference}</Table.Cell> 
                        <Table.Cell collapsing>{item.roi}</Table.Cell> 
                        <Table.Cell collapsing>{item.induction}</Table.Cell> 
                    </Table.Row>  
                });  	  
  
                let columns = [];
                columns.push(<Table.HeaderCell>Contract Number</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Name</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Contract Status</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Start Date</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Finishing Date</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Pay Rate</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Charge rate</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Ratio</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Occupation</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Company</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Medical status</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Reference</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>ROI</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Induction</Table.HeaderCell>);

                this.setState({
                    rows: rows,
                    columns: columns
                })
            }
                .bind(this))
            .catch(function (error) {
                    console.log(error);
                }
            );

    }


    render() {

        if (!this.state.columns) {
            return (<div>Loading</div>);
        }

        return (
            <div>
                <h2>Contractor List<small> Total { this.state.rows.length }</small></h2> 
                <CustomTable
                    columns={this.state.columns}
                    rows={this.state.rows}
                />
            </div>
        );
    }
}

export default ContractorList;
