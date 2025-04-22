import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {api} from "../../utils";
import {GameImage, UserImage} from "../Image";
import Rating from "./Rating";

interface GameDetailsProps {
    game: GameDetails
}

const GameDetails = (props:GameDetailsProps) => {

    const game = props.game


    return (
        <>
            <GameImage gameId={game.gameId} large={true}/>
            <div>
                <h1>{game.title}</h1>
                <div>{game.description}</div>
            </div>
            <Rating rating={game.rating}/>
        </>
    )
}

export default GameDetails;