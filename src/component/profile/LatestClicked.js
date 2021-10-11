import React, { useState,useEffect } from 'react'
import Axios from 'axios'; 
import './style.css';  

function LatestClicked() {
 
    const [ keepAllLatestClicked,setkeepAllLatestCliked  ] = useState([]);
    const [ dataStatus,setdataStatus  ]     = useState('loading');
    
    // Run after load the html
    useEffect(() => { 
        let getId = document.querySelector('#root');
        let uid   = Number(getId.getAttribute("uid")); 
        Axios.post(`https://dev-mes.pantheonsite.io/custom_api/latest_clicked_roles/${uid}`)
        .then(res => { 
            if (res.data.data) {
                setkeepAllLatestCliked(res.data.data)
                setdataStatus('done')
            }
        })
        .catch(err => console.log(err));
    
    },[])

   
    // Creating Iteam to show
    let AllTheRoles = [];
    if (keepAllLatestClicked.length > 0) { 
        for (let i = 0; i < keepAllLatestClicked.length ; i++) { 
            AllTheRoles.push(
                <tr key={i}> 
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllLatestClicked[i].role_title}</a></td>  
                    <td><a href="https://dev-mes.pantheonsite.io/user/" target="_blank">{keepAllLatestClicked[i].user_name}</a></td>  
                    <td>{keepAllLatestClicked[i].lastopen}</td>  
                    <td>{keepAllLatestClicked[i].clicks}</td>  
                </tr>  
            ) 
        }
    }
   

    return (
        <div className="roles">
            <h2>Latest Clicked Roles <small>Total { keepAllLatestClicked.length }</small></h2> <br /> 

            <table className="table">
                <thead>
                    <tr>
                        <th>Role</th>
                        <th>Full Name</th>
                        <th>Last Opened</th>
                        <th>Clicks</th>
                    </tr>
                </thead>
                <tbody>

                    { dataStatus === "loading" ? "loading..." : AllTheRoles  }
                    
                </tbody>
            </table> 
        </div>
    )
}


export default LatestClicked;