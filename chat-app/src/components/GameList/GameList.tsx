import React from 'react';
import {api} from "../../utils"
import GameListObject from "./GameListObject";
import "./gameList.css";

interface GameListProp {
    games?: Game[]
}

const GameList = (props:GameListProp) => {

    const [games, setGames] = React.useState<Array<Game>>([])

    React.useEffect(() => {
        if (props.games) {
            setGames(props.games)
        } else {
            get_games();
        }
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