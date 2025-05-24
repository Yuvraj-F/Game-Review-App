import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header";
import {GameDetails} from "../components/GameDetails";
import "./page.css";
import {api} from "../utils";
import {ErrorBanner} from "../components/ErrorBanner";
import Footer from "../components/Footer";

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
    const [error, setError] = React.useState('')
    const [visible, setVisible] = React.useState(false)
    const [genres, setGenres] = React.useState<Array<Genre>>([]);
    const [platforms, setPlatforms] = React.useState<Array<Platform>>([]);

    const showError = (msg: string) => {
        setError(msg)
        setVisible(true)
        setTimeout(() => setVisible(false), 5000);
    };

    React.useEffect(() => {
            getGame()
    }, [id])

    React.useEffect(() => {
        api.get("games/genres")
            .then((res) => {
                setGenres(res.data);
            }, (error) =>{
            })

        api.get("games/platforms")
            .then((res) => {
                setPlatforms(res.data);
            }, (error) =>{
            })
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
        <div className="page">
            <Header title="" />
            <ErrorBanner message={error} visible={visible} />
            <div className="flexContainer">
                <GameDetails game={game} genres={genres} platforms={platforms}></GameDetails>
            </div>
            <Footer title=""/>
        </div>
    )
}

export default Game;