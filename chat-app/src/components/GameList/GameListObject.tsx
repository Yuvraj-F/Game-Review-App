import React from 'react';
import {api} from "../../utils";
import "./gameList.css";
import PlatformTagList from "./PlatformTagList";

interface gameProp {
    game:Game
}

const GameListObject = (props: gameProp) => {

    const [genre, setGenre] = React.useState<Genre>({genreId:-1, name:""})
    const [platforms, setPlatforms] = React.useState<Array<Platform>>([])
    const game = props.game
    const gameImage = `http://localhost:4941/api/v1/games/${game.gameId}/image`;
    const creatorImage = `http://localhost:4941/api/v1/users/${game.creatorId}/image`;

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
            <div className="gameListObject">
                <div className="gameContent">
                    <img src={gameImage} className="coverImageStyle" alt=""/>
                    <div className="gameDetails">
                        <div>Tile: {game.title}</div>
                        <div>Price: ${game.price}</div>
                        <div>Rating: {game.rating}</div>
                        <div>Creator: {game.creatorFirstName} {game.creatorLastName}</div>
                        <div>Genre: {genre.name}</div>
                    </div>
                </div>
                <div className="gameExtendedContent">
                    <img src={creatorImage} className="creatorImageStyle" alt="" onError={(e) => {
                        e.currentTarget.src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png";
                    }}/>
                    <PlatformTagList platforms={platforms} />
                </div>
            </div>
        </>
    )
}

export default GameListObject;