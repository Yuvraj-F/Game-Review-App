import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {api} from "../../utils";

const GameDetails = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [game, setGame] = React.useState<Game>()

    React.useEffect(() => {
        getGame()
    }, [])

    const getGame = () => {
        api.get(`games/${id}`)
            .then((res) => {
                setGame(res.data)
            }, (error) => {
                navigate("*")
            })
    }

    return (
        <>
        </>
    )
}

export default GameDetails;