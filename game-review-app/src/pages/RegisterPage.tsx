import React from 'react';
import { useNavigate } from 'react-router-dom';
import {isLoggedIn} from "../utils";
import Header from "../components/Header";
import {ErrorBanner} from "../components/ErrorBanner";
import {Register} from "../components/Register"
import Footer from "../components/Footer";


const RegisterPage = () => {

    const navigate = useNavigate();

    const [error, setError] = React.useState('')
    const [visible, setVisible] = React.useState(false)

    const showError = (msg: string) => {
        setError(msg)
        setVisible(true)
        setTimeout(() => setVisible(false), 8000);
    };

    React.useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <>
            <div className="page">
                <Header showError={showError}/>
                <ErrorBanner message={error} visible={visible} />
                <h1>Register</h1>
                <Register showError={showError}/>
                <Footer/>
            </div>
        </>
    )
}

export default RegisterPage;