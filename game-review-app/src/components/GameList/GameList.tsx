import React from 'react';
import {api} from "../../utils"
import GameListObject from "./GameListObject";
import "./gameList.css";

interface GameListProp {
    games?: Game[]
}

const GameList = (props:GameListProp) => {

    const [games, setGames] = React.useState<Array<Game>>([])
    const [genres, setGenres] = React.useState<Array<Genre>>([]);
    const [platforms, setPlatforms] = React.useState<Array<Platform>>([]);

    React.useEffect(() => {
        if (props.games) {
            setGames(props.games)
        }
    }, [props.games])

    React.useEffect(() => {
        api.get("games/genres")
            .then((res) => {
                setGenres(res.data);
            }, (error) =>{
            })

        api.get("games/platforms")
            .then((res) => {
                setPlatforms(res.data);
            }, (error) =>{
            })
    }, [])

    const game_objects = () => games.map(game =>
        <GameListObject
            key={game.gameId}
            game={game}
            genres={genres}
            platforms={platforms}
        />
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