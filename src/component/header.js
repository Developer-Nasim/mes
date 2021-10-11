import React from 'react'
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="logo">
                            <Link to="/"><img src={props.logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <div className="menu">
                            <ul>
                                <li><Link to="/">Home</Link></li> 
                                { !localStorage.getItem('loggedin') ? <li><Link to="/login">Login</Link></li> : "" } 
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;