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

    const handleError = (event:React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png"
    }

    return (
        <img src={gameImage} className={styleClass} alt="" onError={handleError} />
    )
}

export default GameImage;