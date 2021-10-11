import React, { useState,useRef,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios, { Axios } from "axios";

var qs = require('qs');
var data = qs.stringify({});


function AuthPoc() { 

    const loginData = useState({user_name: "",user_password: ""});
    const TheName = useRef();
    const ThePass = useRef(); 
    const { user_name,user_password } = loginData;

    let getId = document.querySelector('#root');
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('loggedin')) {
            history.push('/')
        }
    },[])
    // Find data
    const FindData = (uname,pass) => { 

        let uuid  = getId.getAttribute("uuid"); 
 
        var config = {
            method: 'get',
            url: 'https://dev-mes.pantheonsite.io/jsonapi/user/user/'+uuid,
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: uname,
                password: pass
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            if (response.data.data) {
                let StorInLocal = {name:response.data.data.attributes.display_name,id:response.data.data.id};
                localStorage.setItem("loggedin", JSON.stringify(StorInLocal))
                history.push('/')
            } 
        })
        .catch(function (error) {
            console.log(error);
        });







    } 

    // Submit
    const SubmitNow = (e) => {
        e.preventDefault(); 
        if (TheName.current.value !== "" && ThePass.current.value !== "") {
            FindData(user_name,user_password )
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center"> 
                        <form className="loginform" onSubmit={ (e) => SubmitNow(e) }>
                            <h2>Login</h2>
                            <label htmlFor="name">
                                User name
                                <input type="text" name="user_name" id="name" placeholder="User name" value={user_name} ref={TheName}/>
                            </label>
                            <label htmlFor="password">
                                Password
                                <input type="password" id="password" name="user_password" value={user_password} ref={ThePass}/>
                            </label>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPoc;