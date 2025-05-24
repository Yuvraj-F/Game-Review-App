import "./register.css"
import React from "react";
import {useNavigate} from 'react-router-dom';
import {api} from "../../utils";
import "./register.css"

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
    const [showPassword, setShowPassword] = React.useState(false);
    const [profileImage, setProfileImage] = React.useState<File>()

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await api.post('/users/register', {firstName:firstName, lastName:lastName, email:email, password:password});

            navigate('/login');

        } catch (error: any) {
            showError(error.response?.statusText || 'Registration failed');
        }
    }

    // Icons by chat gpt --start--
    const Eye = () => (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );

    const EyeOff = () => (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3.5 5 10 5 10-5 10-5" />
            <path d="M3 17l1-2" />
            <path d="M6 19l1-2.5" />
            <path d="M10 20l0.5-3" />
            <path d="M15 20l-0.5-2.5" />
            <path d="M19 19l-1-2.5" />
            <path d="M22 16l-1-2" />
        </svg>
    );
    // Icons by chat gpt --end--

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
                    <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} required
                           className="textInput" minLength={6} maxLength={64} placeholder="Type your password"/>
                    <span className="togglePassword" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Eye /> : <EyeOff />}
                    </span>
                </div>
                <div className="inputInline">
                    <label style={{marginRight:12}}>Pick a Profile Picture: </label>
                        <input type="file" accept="image/png, image/jpg, image/jpeg, image/gif" onChange={(e) => setProfileImage(e.target.files?.[0])}
                        />
                </div>
                <button type="submit" className="primaryButton">Register</button>
            </form>
        </>
    )
}

export default Register;