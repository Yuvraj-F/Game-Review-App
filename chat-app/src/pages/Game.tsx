import React from 'react';
import Header from "../components/Header";
import GameDetails from "../components/GameDetails";
import "./page.css";

const Game = () => {

    const [game, setGame] = React.useState<Game>()

    return (
        <div className="page">
            <Header title="Game" />
            <GameDetails></GameDetails>
        </div>
    )
}

export default Game;