import React from 'react';
import { useNavigate } from 'react-router-dom';
import {isLoggedIn} from "../utils";
import Header from "../components/Header";
import {ErrorBanner} from "../components/ErrorBanner";
import Footer from "../components/Footer";
import {Login} from "../components/Login"

const LoginPage = () => {

    const navigate = useNavigate();

    const [error, setError] = React.useState('')
    const [visible, setVisible] = React.useState(false)

    const showError = (msg: string) => {
        setError(msg)
        setVisible(true)
        setTimeout(() => setVisible(false), 5000);
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
                <h1>Login</h1>
                <Login showError={showError}/>
                <Footer/>
            </div>
        </>
    )
}

export default LoginPage;