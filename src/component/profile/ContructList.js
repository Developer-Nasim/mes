import React, { useState,useEffect } from 'react'
import Axios from 'axios'; 
import './style.css';  

function ContructList() {
 
    const [ keepAllContructList,setkeepAllContructList  ] = useState([]);
    const [ dataStatus,setdataStatus  ]     = useState('loading');
    
    // Run after load the html
    useEffect(() => { 
        let getId = document.querySelector('#root');
        let uid   = Number(getId.getAttribute("uid")); 
        Axios.post(`https://dev-mes.pantheonsite.io/custom_api/contractor_list/${uid}`)
        .then(res => { 
            if (res.data.data) {
                setkeepAllContructList(res.data.data)
                setdataStatus('done')
            }
        })
        .catch(err => console.log(err));
    
    },[])

  
    // Creating Iteam to show
    let AllTheRoles = [];
    if (keepAllContructList.length > 0) { 
        for (let i = 0; i < keepAllContructList.length ; i++) {  
            AllTheRoles.push(
                <tr key={i}> 
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllContructList[i].contract_number}</a></td>  
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllContructList[i].candidate_name}</a></td>  
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllContructList[i].contract_status_name}</a></td>  
                    <td>{keepAllContructList[i].start_date}</td>  
                    <td>{keepAllContructList[i].finishing_date}</td>  
                    <td>{keepAllContructList[i].pay_rate}</td>  
                    <td>{keepAllContructList[i].charge_rate}</td>  
                    <td>{keepAllContructList[i].charge_pay_ratio}</td>  
                    <td>{keepAllContructList[i].occupation}</td>  
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllContructList[i].company_name}</a></td>  
                    <td>{keepAllContructList[i].medical_status}</td>  
                    <td>{keepAllContructList[i].reference}</td>  
                    <td>{keepAllContructList[i].roi}</td>  
                    <td>{keepAllContructList[i].induction}</td>  
                </tr>  
            ) 
        }
    }
   

    return (
        <div className="roles">
            <h2>Contractor List<small>Total { keepAllContructList.length }</small></h2> <br />  
            <table className="table">
                <thead>	
                    <tr>
                        <th>Contract Number</th>
                        <th>Name</th>
                        <th>Contract Status</th>
                        <th>Start Date</th>
                        <th>Finishing Date</th>
                        <th>Pay Rate</th>
                        <th>Charge rate</th>
                        <th>Ratio</th>
                        <th>Occupation</th>
                        <th>Company</th>
                        <th>Medical status</th>
                        <th>Reference</th>
                        <th>ROI</th>
                        <th>Induction</th>
                    </tr>
                </thead>
                <tbody>

                    { dataStatus === "loading" ? "loading..." : AllTheRoles  }
                    
                </tbody>
            </table> 
        </div>
    )
}


export default ContructList;