import React from 'react'
import Register from "../components/Register";
import Login from "../components/Login";

const Auth = (props) => {
    return (
        <div id="authPage">
            <Login login={props.login}/>
            <Register addContact={props.addContact}/>
        </div>
    )
}

export default Auth