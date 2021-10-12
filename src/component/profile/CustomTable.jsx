import React, {Component} from 'react'; 
import {Icon, Table} from 'semantic-ui-react'

class CustomTable extends Component {

    render() {
        return (
            <Table celled striped fixed>
                <Table.Header>
                    <Table.Row>
                        {this.props.columns}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.rows}
                </Table.Body>
            </Table>
        );
    }
}

export default CustomTable;