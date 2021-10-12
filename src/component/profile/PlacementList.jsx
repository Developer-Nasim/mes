import React, {Component} from 'react';
import {Icon, Table} from 'semantic-ui-react'
import CustomTable from "./CustomTable"; 
import Atag from "./a_tag"; 

const axios = require('axios');

class PlacementList extends Component {

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

        let fetchUrl = this.props.baseUrl + "/custom_api/placement_list/" + this.props.uid;

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
                    return <Table.Row  key={response.data.data.indexOf(item)+Math.random()}>
                        <Table.Cell collapsing><Atag href="https://dev-mes.pantheonsite.io/user/">{item.candidate_name}</Atag> </Table.Cell>
                        <Table.Cell collapsing><Atag href="https://dev-mes.pantheonsite.io/user/">{item.company_name}</Atag> </Table.Cell> 
                        <Table.Cell collapsing>{item.job_title}</Table.Cell> 
                        <Table.Cell collapsing>{item.start_date}</Table.Cell> 
                        <Table.Cell collapsing>{item.salary_package}</Table.Cell>
                        <Table.Cell collapsing>{item.invoice_amount}</Table.Cell> 
                        <Table.Cell collapsing>{item.invoice_paid}</Table.Cell> 
                    </Table.Row>  
                });

                			 
                let columns = []; 
                columns.push(<Table.HeaderCell>Candidate Name</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Company</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Job Title</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Start Date</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Salary Package</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Inv Amount</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Invoice paid</Table.HeaderCell>);

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
                <h2>Placement List for Recruiter Profile <small> Total { this.state.rows.length }</small></h2>   
                <CustomTable
                    columns={this.state.columns}
                    rows={this.state.rows}
                />
            </div>
        );
    }
}

export default PlacementList;
