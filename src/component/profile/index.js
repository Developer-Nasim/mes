import React, { useState,useRef,useEffect } from 'react'
import Axios from 'axios'; 
import './style.css';

function Profle() {

    const [ keepAllRoles,setkeepAllRoles  ] = useState([]);
    // https://dev-mes.pantheonsite.io/custom_api/getroles/52453

    useEffect(() => {
        let getId = document.querySelector('#root');
        let uid   = Number(getId.getAttribute("uid"));
        let uuid  = getId.getAttribute("uuid"); 
        Axios.post(`https://dev-mes.pantheonsite.io/custom_api/getroles/${uid}`)
        .then(res => {
            if (res.data.data) {   
                setkeepAllRoles(res.data.data)
            }
        }) 
    },[])

    let AllTheRoles = [];
    if (keepAllRoles.length > 0) { 
        for (let i = 0; i < keepAllRoles.length ; i++) {
            let haveMore = [];

            if (keepAllRoles[i].role_applications ) {
                for (let ix = 0; ix < keepAllRoles[i].role_applications.length; ix++) {
                    haveMore.push(
                        <tr key={ix}> 
                            <td><a href="#">{keepAllRoles[i].role_applications[ix].app_creator_name}</a></td> 
                            <td><a href="#">{keepAllRoles[i].role_applications[ix].app_title}</a></td> 
                            <td><a href="#">{keepAllRoles[i].role_applications[ix].app_date}</a></td> 
                        </tr> 
                    )
                }
            } 

            AllTheRoles.push(
                <div className="card" key={i}>
                    <div className="card-header" id={"heading"+i}> 
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={"#collapse"+i} aria-expanded="true" aria-controls={"collapse"+i}>
                            <span>{keepAllRoles[i].role_employer_name}</span>    
                            <span>{keepAllRoles[i].role_title}</span>    
                        </button>
                    </div> 
                    <div id={"collapse"+i} className="collapse" aria-labelledby={"heading"+i} data-parent="#accordionExample">
                        <div className="card-body">
                            { keepAllRoles[i].role_applications ? 
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
                            : "No data avileable" }
                        </div>
                    </div>
                </div> 
            )
        }
    }
 

    return (
        <div className="profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 profile-details">
                        <h5>User Name</h5>
                    </div>
                    <div className="col-lg-8">
                        <div className="roles">
                            <ul className="title">
                                <li>Name</li>
                                <li>Title</li>
                            </ul>
                            <div className="accordion" id="accordionExample">
                                { AllTheRoles }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}


export default Profle;