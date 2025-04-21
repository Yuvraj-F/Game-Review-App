import React from 'react';
import {api} from "../../utils";
import "./gameList.css";

interface gameProp {
    game:Game
}

const GameListObject = (props: gameProp) => {

    const game = props.game
    const image = `http://localhost:4941/api/v1/games/${game.gameId}/image`;

    // React.useEffect(() => {
    //     console.log(image)
    // }, [image])

    // let imageType;
    //
    // React.useEffect(() => {
    //     api.get("games/"+game.gameId+"/image")
    //         .then((res) => {
    //             imageType = res.headers["Content-Type"]
    //             image = Buffer.from(res.data, "binary").toString("base64")
    //         })
    //
    // }, [])

    return (
        <div>
            <div className="gameListObject">
                {/*<img src={`data:image/${imageType};base64,${image}`} alt="Cover Image"/>*/}
                <img src={image} className="coverImageStyle" alt="Cover Image"/>
                <div className="gameContent">
                    <p>Tile: {game.title}</p>
                    <p>Price: ${game.price}</p>
                    <p>Rating: {game.rating}</p>
                </div>
            </div>
        </div>
    )
}

export default GameListObject;