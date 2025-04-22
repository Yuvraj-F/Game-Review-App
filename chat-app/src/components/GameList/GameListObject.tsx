import React from 'react';
import {api} from "../../utils";
import {Link, useNavigate} from "react-router-dom";
import "./gameList.css";
import PlatformTagList from "./PlatformTagList";
import {GameImage, UserImage} from "../Image";

interface gameProp {
    game:Game
}

const GameListObject = (props: gameProp) => {

    const navigate = useNavigate();

    const game = props.game
    const [genre, setGenre] = React.useState<Genre>({genreId:-1, name:""})
    const [platforms, setPlatforms] = React.useState<Array<Platform>>([])
    const creationDate = new Date(game.creationDate).toLocaleDateString()
    const creationTime = new Date(game.creationDate).toLocaleTimeString()

    React.useEffect(() => {
        api.get("games/genres")
            .then((res) => {
                const genres:Genre[] = res.data;
                setGenre(genres
                    .filter(genre => genre.genreId === game.genreId)[0])
            }, (error) =>{
            })

        api.get("games/platforms")
            .then((res) => {
                const platforms:Platform[] = res.data;
                setPlatforms(platforms
                    .filter(platform => game.platformIds.includes(platform.platformId)))
            }, (error) =>{
            })
    }, [])

    return (
        <>
            <div className="gameListObject" onClick={() => navigate(`/games/${game.gameId}`)}>
                <div className="gameContent">
                    <GameImage gameId={game.gameId}/>
                    <div className="gameDetails">
                        <div>Tile: {game.title}</div>
                        <div>Rating: {game.rating}</div>
                        <div>Creator: {game.creatorFirstName} {game.creatorLastName}</div>
                        <div>Genre: {genre.name}</div>
                        <div>Price: ${game.price}</div>
                        <div>Created: {creationDate}</div>
                        <div>Created: {creationTime}</div>
                    </div>
                </div>
                <div className="gameExtendedContent">
                    <UserImage userId={game.creatorId}/>
                    <PlatformTagList platforms={platforms} />
                </div>
            </div>
        </>
    )
}

export default GameListObject;