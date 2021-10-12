import React from 'react' 
import './style.css';
import RoleList from "./RoleList";
import LatestClicked from "./LatestClicked";
import ContractorList from "./ContractorList";
import PlacementList from "./PlacementList"; 
// import LatestClicked from './old/LatestClicked'
// import ContractorList from './old/ContractorList'
// import PlacementList from './old/PlacementList'

function Profle() {
 
    return (
        <div className="profile-area"> 
            <div className="container">
                <div className="row"> 
  
                    <div className="col-lg-6">
                        <RoleList
                            baseUrl={'https://dev-mes.pantheonsite.io/'}
                            uid={52453}
                        />
                    </div>
                    <div className="col-lg-6">
                        <LatestClicked
                            baseUrl={'https://dev-mes.pantheonsite.io/'}
                            uid={52453}
                        />
                    </div>
                    <div className="col-lg-12">
                        <ContractorList
                            baseUrl={'https://dev-mes.pantheonsite.io/'}
                            uid={52453}
                        />
                    </div>
                    <div className="col-lg-12">
                        <PlacementList
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