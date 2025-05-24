import React from 'react';
import GameList from "../components/GameList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import {ErrorBanner} from "../components/ErrorBanner";
import "./page.css"
import Footer from "../components/Footer";

const Games = () => {

    const [gameResults, setGameResults] = React.useState<Array<Game>>([])
    const [error, setError] = React.useState('')
    const [visible, setVisible] = React.useState(false)

    const showError = (msg: string) => {
        setError(msg)
        setVisible(true)
        setTimeout(() => setVisible(false), 5000);
    };

    return (
        <div className="page">
            <Header title="" />
            <SearchBar setGameResults={setGameResults} showError={showError}/>
            <ErrorBanner message={error} visible={visible} />
            <GameList games={gameResults}></GameList>
            <Footer title=""/>
        </div>
    )
}

export default Games;