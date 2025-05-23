import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header";
import {GameDetails} from "../components/GameDetails";
import "./page.css";
import {api} from "../utils";

const defaultGame = {
    gameId: -1,
    title: "",
    description: "",
    genreId: -1,
    creatorId: -1,
    creatorFirstName: "",
    creatorLastName: "",
    rating: -1,
    platformIds:[-1],
    price:-1,
    creationDate: "",
    numberOfOwners: -1,
    numberOfWishlists: -1
}

const Game = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [game, setGame] = React.useState<GameDetails>(defaultGame)

    React.useEffect(() => {
            getGame()
    }, [id])

    const getGame = () => {
        api.get(`games/${id}`)
            .then((res) => {
                setGame(res.data)
            }, (error) => {
                navigate("*")
            })
    }


    return (
        <div className="page">
            {/*<Header title="Game" />*/}
            <div className="flexContainer">
                <GameDetails game={game}></GameDetails>
            </div>

        </div>
    )
}

export default Game;