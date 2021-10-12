import React, {Component} from 'react';
import {Icon, Table} from 'semantic-ui-react'
import Atag from "./a_tag"; 

class RoleListRow extends Component {


    constructor(props) {
        super(props);

        this.state = {
            exp: 'hidden'
        }
    }


    show = (c) =>{
        if(this.state.exp === "hidden"){
            this.setState({exp: 'show'});
        }else{ 
            this.setState({exp: 'hidden'});
        }
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
                            
                            <Table.Cell collapsing>
                                <Atag link={"/node/"+item.role_nid}><Icon name='folder'/> {item.role_employer_name}</Atag>
                            </Table.Cell>
                            <Table.Cell collapsing>
                                <Atag link={"/node/"+item.role_nid}>{item.role_title}</Atag>
                            </Table.Cell>
                            <Table.Cell collapsing>
                                {item.role_publish_date}
                            </Table.Cell>    
                            <Table.Cell collapsing textAlign='right'>
                                {apps > 0 ?
                                    (<span onClick={this.show}>({apps}) {this.state.exp === "show" ? "-" : "+"}</span>)
                                    : (null)
                                }
                            </Table.Cell>
                        </Table.Row> 
                        {/* If have any data under the Roles */}
                        {item.role_applications ? 
                            item.role_applications.map((datas) => 
                                <Table.Row className={this.state.exp} key={item.role_applications.indexOf(datas)}>
                                    <Table.Cell collapsing>
                                        <Atag link={"/user/"+datas.app_creator_uid}>{datas.app_creator_name}</Atag>
                                    </Table.Cell>
                                    <Table.Cell collapsing>
                                        <Atag link={"/user/"+datas.app_creator_uid}>{datas.app_title}</Atag>
                                    </Table.Cell>
                                    <Table.Cell collapsing>{datas.app_date}</Table.Cell> 
                                </Table.Row> 
                            )
                        : ""}

                    </Table>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default RoleListRow;