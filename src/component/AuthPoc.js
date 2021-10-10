import React, {Component} from 'react';
import axios from "axios";

var qs = require('qs');
var data = qs.stringify({});

class AuthPoc extends Component {


    componentDidMount() {

        var uname = 'katie@miningemployment.com.au';
        var pass = 'Password123!';

        var config = {
            method: 'get',
            url: 'https://dev-mes.pantheonsite.io/jsonapi/user/user/46bb80b9-73e0-4c58-bb93-1d125ad58daf',
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
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AuthPoc;