import React from 'react' 
import './style.css';  
import RoleList2 from "./v2/RoleList2";
// import LatestClicked from './LatestClicked'
// import ContractorList from './ContractorList'
// import PlacementList from './PlacementList'

function Profle() {
 
    return (
        <div className="profile-area"> 
            <div className="container">
                <div className="row"> 

                    {/* Roles list show here */}
                    <div className="col-lg-5">
                        <RoleList2
                            baseUrl={'https://dev-mes.pantheonsite.io/'}
                            uid={52453}
                        />
                    </div>
                    {/*<div className="col-lg-7"> <LatestClicked /> </div> */}
                    {/*<div className="col-lg-12 mt-5"> <ContractorList /> </div>*/}
                    {/*<div className="col-lg-12 mt-5"> <PlacementList /> </div> */}

                </div>
            </div>
        </div> 
    )
}


export default Profle;