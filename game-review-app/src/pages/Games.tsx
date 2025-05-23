import React from 'react';
import GameList from "../components/GameList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import "./page.css";

const Games = () => {

    const [gameResults, setGameResults] = React.useState<Array<Game>>([])

    return (
        <div className="page">
            {/*<Header title="Games" />*/}
            <SearchBar setGameResults={setGameResults}/>
            <GameList games={gameResults}></GameList>
        </div>
    )
}

export default Games;