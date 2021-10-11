import React, { useState,useEffect } from 'react' 
import './style.css';  
import RolesList from './RolesList'

function Profle() {
 
    return (
        <div className="profile-area"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 profile-details"> 
                       
                    </div>
                    {/* Roles list show here */}
                    <div className="col-lg-8">
                       <RolesList /> 
                    </div>
                </div>
            </div>
        </div> 
    )
}


export default Profle;