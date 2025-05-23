import React from 'react';
import "./errorBanner.css"

type ErrorBannerProps = {
    message: string
    visible: boolean
}

const ErrorBanner = ({ message, visible }: ErrorBannerProps) => {
    const errorClass = visible ? 'errorBanner' : 'errorBanner fade-out'
    return (
        <>
            <div className={errorClass}>
                err: {message}
            </div>
        </>
    )
}

export default ErrorBanner;