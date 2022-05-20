import React from "react";
import { Link } from "react-router-dom";


export default class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isError: {
                email: '',
                password: ''
            }
        }
    }

    regExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )

    formValid = ({ isError, ...rest }) => {
        let isValid = false;
        Object.values(isError).forEach(val => {
            if (val.length > 0) {
                isValid = false
            } else {
                isValid = true
            }
        });
        Object.values(rest).forEach(val => {
            if (val === null) {
                isValid = false
            } else {
                isValid = true
            }
        });
        return isValid;
    };

    onSubmit = e => {
        if (this.formValid(this.state)) {
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };

    formValChange = (e) => {
        e.preventDefault();
        const { email, value } = e.target;
        let isError = { ...this.state.isError };

        switch (email) {
            case "email":
                isError.email = this.regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            default:
                break;
        }

        console.log(isError, value)
        this.setState({
            isError,
            [email]: value
        });
    }

    render() {
        const { isError } = this.state;

        console.log(isError.na)
        return (
            <>
                <form>
                    <h3>Login Form</h3>

                    <div className="form-group">
                        <label>Enter Your Email</label>
                        <input type="email" className="form-control" name="email"
                            onChange={this.formValChange} />

                        {isError?.email.length > 0 && (
                            <span >{isError?.email}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Enter Your Password</label>
                        <input type="text" className="form-control" name="password"
                            onChange={this.formValChange} />

                        {isError?.password.length > 0 && (
                            <span >{isError?.password}</span>
                        )}
                    </div>
                    <br></br>
                    <button type="button" class="btn btn-primary">Login</button> <nbsp></nbsp>
                    <p class="mb-5 pb-lg-2">
                        Don't have an account?
                        <button type="button" class="btn btn-sucess"><Link to="/reg">Register here!</Link>
                        </button>

                    </p>

                </form>
            </>
        );

    }

}