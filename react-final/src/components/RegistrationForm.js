import React from "react"

export default class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            isError: {
                name: '',
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
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
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
            [name]: value
        });
    }

    render() {
        const { isError } = this.state;

        console.log(isError.name)
        return (
            <>
                <h3>Registration Form</h3>
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="form-group">
                        <label>Enter Your Name</label>
                        <input type="text" className="form-control" name="name"
                            onChange={this.formValChange} />

                        {isError.name.length > 0 && (
                            <span>{isError.name}</span>
                        )}
                    </div>
                    <br></br>
                    
                    <div class="col-md-6 mb-4">

                        <h6 class="mb-2 pb-1">Choose Gender: </h6>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                value="option1" checked />
                            <label class="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                value="option2" />
                            <label class="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                value="option3" />
                            <label class="form-check-label" for="otherGender">Other</label>
                        </div>

                    </div>
                    <div className="form-group">
                        <label>Enter Your Email</label>
                        <input type="email" className="form-control" name="email"
                            onChange={this.formValChange} />

                        {isError?.email.length > 0 && (
                            <span >{isError?.email}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Enter Password</label>
                        <input type="text" className="form-control" name="password"
                            onChange={this.formValChange} />

                        {isError?.password.length > 0 && (
                            <span >{isError?.password}</span>
                        )}
                    </div>
                    <br></br>
                    <button type="button" class="btn btn-success">Submit form</button> <nbsp></nbsp>
                    <button type="button" class="btn btn-warning">Reset all</button>
                </form>
            </>
        );

    }

}