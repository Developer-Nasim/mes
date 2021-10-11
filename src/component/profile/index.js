import React from 'react' 
import './style.css';  
import RolesList from './RolesList'
import LatestClicked from './LatestCliked'
import ContructList from './ContructList'
import PlacementList from './PlacementList'

function Profle() {
 
    return (
        <div className="profile-area"> 
            <div className="container">
                <div className="row"> 

                    {/* Roles list show here */}
                    <div className="col-lg-5"> <RolesList /> </div>
                    <div className="col-lg-7"> <LatestClicked /> </div> 
                    <div className="col-lg-12 mt-5"> <ContructList /> </div>
                    <div className="col-lg-12 mt-5"> <PlacementList /> </div> 

                </div>
            </div>
        </div> 
    )
}


export default Profle;