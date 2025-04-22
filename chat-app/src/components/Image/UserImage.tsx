import {api} from "../../utils";
import "./image.css";

interface GameImageProp {
    userId:number|string
}

const UserImage = (props:GameImageProp) => {

    const userId = props.userId
    const userImage = api.defaults.baseURL + `users/${userId}/image`

    const handleError = (event:React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png"
    }

    return (
        <img src={userImage} className="userImage" alt="" onError={handleError} />
    )
}

export default UserImage;