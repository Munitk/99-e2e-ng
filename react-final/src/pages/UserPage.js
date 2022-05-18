import React from "react";

export default class UserPage extends React.Component {

    constructor() {
        super();

        this.state = {
            uname: 'THBS',
            age: 20,
            addr: 'BNG'
        }
    }

    updateAddress() {
        this.setState({
            addr: 'HYD'
        })
    }

    render() {
        return (
            <div>
                User Name :  {this.state.uname} <br></br>
                User Age :  {this.state.age} <br></br>
                User addr :  {this.state.addr} <br></br>
            </div>
        )
    }

}