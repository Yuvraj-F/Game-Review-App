import React from 'react';
import { useNavigate } from 'react-router-dom';
import {api} from "../utils";
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

    return (
        <>
            <div className="page">
                <Header title="Login" />
                <ErrorBanner message={error} visible={visible} />
                <Login showError={showError}/>
                <Footer title=""/>
            </div>
        </>
    )
}

export default LoginPage;