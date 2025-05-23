import React from 'react';
import {api} from "../../utils";
import {Link, useNavigate} from "react-router-dom";
import "./gameList.css";
import PlatformTagList from "./PlatformTagList";
import {GameImage, UserImage} from "../Image";
import {Rating} from "../GameDetails";

interface gameProp {
    game:Game
    genres: Genre[];
    platforms: Platform[];
}

const GameListObject = (props: gameProp) => {

    const navigate = useNavigate();

    const game = props.game
    const genre = props.genres.find(g => g.genreId === game.genreId) || {genreId: -1, name: ""}
    const platforms = props.platforms.filter(p => game.platformIds.includes(p.platformId))
    const creationDate = new Date(game.creationDate).toLocaleDateString()

    return (
        <>
            <div className="gameListObject" onClick={() => navigate(`/games/${game.gameId}`)}>
                <div className="gameContent">
                    <GameImage gameId={game.gameId}/>
                    <div className="gameDetails">
                        <div style={{fontSize:20}}>{game.title}</div>
                        <div>by {game.creatorFirstName} {game.creatorLastName}</div>
                        <div>${game.price}</div>
                    </div>
                    <div className="genreTag">{genre.name}
                    </div>
                    <div className="gameListObjectFooter">
                        <div>{creationDate}</div>
                        <div className="ratingText">{game.rating}/10</div>
                    </div>
                </div>
                <div className="userImageConnector"/>
                <div className="gameExtendedContent">
                    <UserImage userId={game.creatorId}/>
                    <PlatformTagList platforms={platforms} />
                </div>
            </div>
        </>
    )
}

export default GameListObject;