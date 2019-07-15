import React from 'react'
import Register from "../components/Register";
import Login from "../components/Login";

const Auth = ({addContact, login}) => {
    return (
        <div id="authPage">
            <Login login={login}/>
            <Register addContact={addContact}/>
        </div>
    )
}

export default Auth