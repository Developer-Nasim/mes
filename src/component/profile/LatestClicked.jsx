import React, {Component} from 'react';
import {Icon, Table} from 'semantic-ui-react'
import CustomTable from "./CustomTable"; 
import Atag from "./a_tag"; 
import Title from "./title";

const axios = require('axios');

class LatestClicked extends Component {

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

        let fetchUrl = this.props.baseUrl + "/custom_api/latest_clicked_roles/" + this.props.uid;

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
                        <Table.Cell collapsing><Atag link="/user/">{item.role_title}</Atag> </Table.Cell>
                        <Table.Cell collapsing><Atag link="/user/">{item.user_name}</Atag> </Table.Cell>
                        <Table.Cell collapsing>{item.lastopen}</Table.Cell> 
                        <Table.Cell collapsing>{item.clicks}</Table.Cell> 
                    </Table.Row>  
                });

                			 
                let columns = [];
                columns.push(<Table.HeaderCell>Role</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Full Name</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Last Opened</Table.HeaderCell>);
                columns.push(<Table.HeaderCell>Clicks</Table.HeaderCell>);

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
                <Title title="Latest Clicked Roles" total={ this.state.rows.length }/> 
                <CustomTable
                    columns={this.state.columns}
                    rows={this.state.rows}
                />
            </div>
        );
    }
}

export default LatestClicked;
