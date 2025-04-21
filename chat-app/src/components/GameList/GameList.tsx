import React from 'react';
import {api} from "../../utils"
import GameListObject from "./GameListObject";
import "./gameList.css";

const GameList = () => {

    const [games, setGames] = React.useState<Array<Game>>([])

    React.useEffect(() => {
        get_games();
    }, [])

    const get_games = () => {
        api.get("/games")
            .then((res) => {
                setGames(res.data.games)
            }, (error) => {

            })
    }

    const game_objects = () => games.map(game =>
        <GameListObject key={game.gameId} game={game}/>
    )

    return (
        <>
            <div className="gameListStyle">
                {game_objects()}
            </div>

        </>
    )
}

export default GameList;