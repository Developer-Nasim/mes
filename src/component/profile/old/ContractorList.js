import React, { useState,useEffect } from 'react'
import Axios from 'axios';  

function ContractorList() {
 
    const [ keepAllContractorList,setkeepAllContractorList  ] = useState([]);
    const [ dataStatus,setdataStatus  ]     = useState('loading');
    
    // Run after load the html
    useEffect(() => { 
        let getId = document.querySelector('#root');
        let uid   = Number(getId.getAttribute("uid")); 
        Axios.post(`https://dev-mes.pantheonsite.io/custom_api/contractor_list/${uid}`)
        .then(res => { 
            if (res.data.data) {
                setkeepAllContractorList(res.data.data)
                setdataStatus('done')
            }
        })
        .catch(err => console.log(err));
    
    },[])

  
    // Creating Iteam to show
    let AllTheRoles = [];
    if (keepAllContractorList.length > 0) { 
        for (let i = 0; i < keepAllContractorList.length ; i++) {  
            AllTheRoles.push(
                <tr key={i}> 
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllContractorList[i].contract_number}</a></td>  
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllContractorList[i].candidate_name}</a></td>  
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllContractorList[i].contract_status_name}</a></td>  
                    <td>{keepAllContractorList[i].start_date}</td>  
                    <td>{keepAllContractorList[i].finishing_date}</td>  
                    <td>{keepAllContractorList[i].pay_rate}</td>  
                    <td>{keepAllContractorList[i].charge_rate}</td>  
                    <td>{keepAllContractorList[i].charge_pay_ratio}</td>  
                    <td>{keepAllContractorList[i].occupation}</td>  
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllContractorList[i].company_name}</a></td>  
                    <td>{keepAllContractorList[i].medical_status}</td>  
                    <td>{keepAllContractorList[i].reference}</td>  
                    <td>{keepAllContractorList[i].roi}</td>  
                    <td>{keepAllContractorList[i].induction}</td>  
                </tr>  
            ) 
        }
    }
   

    return (
        <div className="roles">
            <h2>Contractor List<small>Total { keepAllContractorList.length }</small></h2> <br />  
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


export default ContractorList;