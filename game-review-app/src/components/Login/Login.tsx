import React from 'react';
import {useNavigate} from 'react-router-dom';
import {api} from "../../utils";
import "./login.css"

interface LoginProps {
    showError: (error:string) => void
}

const Login = (props:LoginProps) => {

    const navigate = useNavigate()
    const showError = props.showError
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await api.post('/users/login', {email:email, password:password});
            const token = res.data.token;

            localStorage.setItem('authToken', token);

            navigate('/');

        } catch (error: any) {
            showError(error.response?.data?.error || 'Login failed');
        }
    }

    return (
        <>
            <form onSubmit={handleLogin} className="formStyle">
                <div className="inputInline">
                    <label style={{marginRight:12}}>Email: </label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                           className="textInput" maxLength={64} placeholder="type your email"/>
                </div>
                <div className="inputInline">
                    <label style={{marginRight:12}}>Password: </label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                           className="textInput" maxLength={64} placeholder="type your password"/>
                </div>
                <button type="submit" className="primaryButton">Log In</button>
            </form>
        </>
    )
}

export default Login;