import React, { useState,useEffect } from 'react'
import Axios from 'axios'; 
import './style.css';  

function RolesList() {
 
    const [ keepAllRoles,setkeepAllRoles  ] = useState([]);
    const [ dataStatus,setdataStatus  ]     = useState('loading');
    
    // Run after load the html
    useEffect(() => { 
        let getId = document.querySelector('#root');
        let uid   = Number(getId.getAttribute("uid"));
        let uuid  = getId.getAttribute("uuid");
        Axios.post(`https://dev-mes.pantheonsite.io/custom_api/getroles/${uid}`)
        .then(res => { 
            if (res.data.data) {
                setkeepAllRoles(res.data.data)
                setdataStatus('done')
            }
        })
        .catch(err => console.log(err));
   

    },[])

  
    // Creating Iteam to show
    let AllTheRoles = [];
    if (keepAllRoles.length > 0) { 
        for (let i = 0; i < keepAllRoles.length ; i++) {
            let haveMore = [];

            if (keepAllRoles[i].role_applications ) {
                for (let ix = 0; ix < keepAllRoles[i].role_applications.length; ix++) {
                    haveMore.push(
                        <tr key={ix}> 
                            <td><a href={"https://dev-mes.pantheonsite.io/user/"+keepAllRoles[i].role_applications[ix].app_creator_uid} target="_blank">{keepAllRoles[i].role_applications[ix].app_creator_name}</a></td> 
                            <td><a href={"https://dev-mes.pantheonsite.io/user/"+keepAllRoles[i].role_applications[ix].app_creator_uid} target="_blank">{keepAllRoles[i].role_applications[ix].app_title}</a></td> 
                            <td><a href={"https://dev-mes.pantheonsite.io/user/"+keepAllRoles[i].role_applications[ix].app_creator_uid} target="_blank">{keepAllRoles[i].role_applications[ix].app_date}</a></td> 
                        </tr>  
                    )
                }
            } 

            AllTheRoles.push(
                <div className="card" key={i}>
                    <div className="card-header" id={"heading"+i}>  
                        <button className={ keepAllRoles[i].role_applications ? "btn btn-link collapsed" : "btn btn-link collapsed after-none"} type="button" data-toggle="collapse" data-target={"#collapse"+i} aria-expanded="true" aria-controls={"collapse"+i}>
                            <span><a href={"https://dev-mes.pantheonsite.io/node/"+keepAllRoles[i].role_nid} target="_blank">{keepAllRoles[i].role_employer_name}</a></span>
                            <span><a href={"https://dev-mes.pantheonsite.io/node/"+keepAllRoles[i].role_nid} target="_blank">{keepAllRoles[i].role_title}</a>   </span> 
                        </button> 
                    </div> 
                    { keepAllRoles[i].role_applications ? 
                    <div id={"collapse"+i} className="collapse" aria-labelledby={"heading"+i} data-parent="#accordionExample">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Title</th> 
                                        <th scope="col">Date</th> 
                                    </tr>
                                </thead>
                                <tbody>

                                    { haveMore } 

                                </tbody>
                            </table> 
                        </div>
                    </div>
                    : "" }

                </div> 
            )
        }
    }
  
  
    return (
        <div className="roles">
            <h2>Roles List <small>Total { keepAllRoles.length }</small></h2> <br />
            <ul className="title">
                <li>Name</li>
                <li>Title</li> 
            </ul> 

            { dataStatus === "loading" ? "loading..." : 
                <div className="accordion" id="accordionExample">
                    { AllTheRoles }
                </div>
            }
            
        </div>
    )
}


export default RolesList;