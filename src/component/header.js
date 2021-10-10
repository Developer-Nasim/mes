import React, { useState,useRef,useEffect } from 'react'

function Header(props) {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="logo">
                            <a href="#"><img src={props.logo} alt="" /></a>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <div className="menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Services</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;