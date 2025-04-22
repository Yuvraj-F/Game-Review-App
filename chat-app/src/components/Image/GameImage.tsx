import {api} from "../../utils";
import "./image.css";

interface GameImageProp {
    gameId:number
}

const GameImage = (props:GameImageProp) => {

    const gameId = props.gameId
    const gameImage = api.defaults.baseURL + `games/${gameId}/image`

    const handleError = (event:React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png"
    }

    return (
        <img src={gameImage} className="gameImage" alt="" onError={handleError} />
    )
}

export default GameImage;