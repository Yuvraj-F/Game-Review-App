import {api} from "../../utils";
import "./image.css";

interface GameImageProp {
    gameId:number|string
    large?:boolean
}

const GameImage = (props:GameImageProp) => {

    const gameId = props.gameId
    const gameImage = api.defaults.baseURL + `games/${gameId}/image`


    let styleClass = "gameImage"
    if (props.large) {
        styleClass = "gameImageLarge"
    }

    return (
        <img src={gameImage} className={styleClass} alt="404. Image not found."/>
    )
}

export default GameImage;