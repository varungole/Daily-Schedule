import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import authService from "../services/auth.service";

import { withRouter } from "../commons/with-router";

const required = value => {
    if(!value)
    {
        return (
            <div className="alert-danger" role="alert">
                This field is Required!
            </div>
        )
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }


    onChangePassword(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        
    }
}