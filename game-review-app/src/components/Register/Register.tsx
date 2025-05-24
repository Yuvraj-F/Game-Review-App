import "./register.css"
import React from "react";
import {useNavigate} from 'react-router-dom';
import {api} from "../../utils";

interface RegisterProps {
    showError: (error:string) => void
}

const Register = (props:RegisterProps) => {

    const navigate = useNavigate()

    const showError = props.showError
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await api.post('/users/register', {firstName:firstName, lastName:lastName, email:email, password:password});

            navigate('/login');

        } catch (error: any) {
            showError(error.response?.statusText || 'Registration failed');
        }
    }

    return (
        <>
            <form onSubmit={handleRegister} className="formStyle">
                <div className="inputInline">
                    <label style={{marginRight:12}}>First Name: </label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required
                           className="textInput" minLength={1} maxLength={64} placeholder="Type your first name"/>
                </div>
                <div className="inputInline">
                    <label style={{marginRight:12}}>Last Name: </label>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required
                           className="textInput" minLength={1} maxLength={64} placeholder="Type your last name"/>
                </div>
                <div className="inputInline">
                    <label style={{marginRight:12}}>Email: </label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                           className="textInput" minLength={1} maxLength={256} placeholder="Type your email"/>
                </div>
                <div className="inputInline">
                    <label style={{marginRight:12}}>Password: </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                           className="textInput" minLength={6} maxLength={64} placeholder="Type your password"/>
                </div>
                <button type="submit" className="primaryButton">Register</button>
            </form>
        </>
    )
}

export default Register;