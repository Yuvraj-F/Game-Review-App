import React from "react";
import {useNavigate} from 'react-router-dom';
import {api, isLoggedIn} from "../../utils";
import "./logout.css"

interface LogoutProps {
    showError: (msg:string) => void
}

const Logout = (props:LogoutProps) => {

    const navigate = useNavigate()
    const showError = props.showError

    const handleLogout = () => {
        api.post("/users/logout")
            .then((res) => {
                localStorage.removeItem("authToken")
                navigate("/login")
            }, (error) => {
                showError(error.response?.statusText || 'Logout failed')
            })
    }

    return (
        <>
            {isLoggedIn() && (
                <button onClick={handleLogout} className="logoutButton">Log out</button>
            )}
        </>
    )
}

export default Logout;