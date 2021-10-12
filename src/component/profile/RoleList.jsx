import React, {Component} from 'react';
import {Icon, Table} from 'semantic-ui-react'
import CustomTable from "./CustomTable";
import RoleListRow from "./RoleListRow";

const axios = require('axios');

class RoleList extends Component {

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
        let fetchUrl = this.props.baseUrl + "/custom_api/getroles/" + this.props.uid;

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

                    return <RoleListRow
                        item={item} key={response.data.data.indexOf(item)}
                    />;
                });

                let columns = [];
                columns.push(
                    <Table celled striped>
                        <Table.HeaderCell>Name </Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell className="last_one">Date</Table.HeaderCell> 
                    </Table>
                ); 

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
            <div className="roles_list"> 
                <h2>Roles List <small> Total { this.state.rows.length }</small></h2>   
                <CustomTable
                    columns={this.state.columns}
                    rows={this.state.rows}
                />
            </div>
        );
    }
}

export default RoleList;