import React, { useState,useEffect } from 'react'
import Axios from 'axios';  

function PlacementList() {
 
    const [ keepAllPlacementList,setkeepAllPlacementList  ] = useState([]);
    const [ dataStatus,setdataStatus  ]     = useState('loading');
    
    // Run after load the html
    useEffect(() => { 
        let getId = document.querySelector('#root');
        let uid   = Number(getId.getAttribute("uid")); 
        Axios.post(`https://dev-mes.pantheonsite.io/custom_api/placement_list/${uid}`)
        .then(res => { 
            if (res.data.data) {
                setkeepAllPlacementList(res.data.data)
                setdataStatus('done')
            }
        })
        .catch(err => console.log(err));
    
    },[])

  
    // Creating Iteam to show
    let AllTheRoles = [];
    if (keepAllPlacementList.length > 0) { 
        for (let i = 0; i < keepAllPlacementList.length ; i++) {  
            AllTheRoles.push(
                <tr key={i}> 
                    <td><a href="#" target="_blank">{keepAllPlacementList[i].candidate_name}</a></td>  
                    <td><a href="#" target="_blank">{keepAllPlacementList[i].company_name}</a></td>  
                    <td>{keepAllPlacementList[i].job_title}</td>  
                    <td>{keepAllPlacementList[i].start_date}</td>  
                    <td>{keepAllPlacementList[i].salary_package}</td>  
                    <td>{keepAllPlacementList[i].invoice_amount}</td>  
                    <td>{keepAllPlacementList[i].invoice_paid}</td>   
                </tr>  
            ) 
        }
    }
   

    return (
        <div className="roles">
            <h2>Placement List for Recruiter Profile<small>Total { keepAllPlacementList.length }</small></h2> <br />  
            <table className="table">
                <thead>	
                    <tr> 
                        <th>Candidate Name</th>
                        <th>Company</th>
                        <th>Job Title</th>
                        <th>Start Date</th>
                        <th>Salary Package</th>
                        <th>Inv Amount</th>
                        <th>Invoice paid</th> 
                    </tr>
                </thead>
                <tbody>
                    
                    { dataStatus === "loading" ? "loading..." : AllTheRoles  }
                    
                </tbody>
            </table> 
        </div>
    )
}


export default PlacementList;