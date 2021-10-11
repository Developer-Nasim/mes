import React, {Component} from 'react';
import {Icon, Table} from 'semantic-ui-react'

class RoleListRow extends Component {


    constructor(props) {
        super(props);

        this.state = {
            exp: 'hidden'
        }
    }


    show = (c) =>{
        this.setState({exp: 'show'});
    }



    render() {

        let item = this.props.item;
        let apps = 0;
        if (item.role_applications) {
            apps = item.role_applications.length;
        }

        return (
            <Table.Row>
                <Table.Cell>
                    <Table celled striped>
                        <Table.Row>
                            <Table.Cell>
                                <Icon name='folder'/> {item.role_employer_name}
                            </Table.Cell>
                            <Table.Cell>{item.role_title}</Table.Cell>
                            <Table.Cell collapsing textAlign='right'>
                                {apps > 0 ?
                                    (<span onClick={this.show}>({apps}) +</span>)
                                    : (null)
                                }
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className={this.state.exp}>
                            <Table.Cell collapsing>
                                the extra text
                            </Table.Cell>
                        </Table.Row>
                    </Table>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default RoleListRow;