import React from 'react';
import {api} from "../../utils";
import "./searchBar.css";
import Filter from "./SearchFilter";

const ALPHABETICAL_ASC = "ALPHABETICAL_ASC"
const ALPHABETICAL_DESC = "ALPHABETICAL_DESC"
const PRICE_ASC = "PRICE_ASC"
const PRICE_DESC = "PRICE_DESC"
const CREATED_ASC = "CREATED_ASC"
const CREATED_DESC = "CREATED_DESC"
const RATING_ASC = "RATING_ASC"
const RATING_DESC = " RATING_DESC"

interface SearchProps {
    setGameResults:(games:Game[]) => void
}

const SearchBar = (props:SearchProps) => {

    const [q, setQ] = React.useState("")
    const [price, setPrice] = React.useState(Number.POSITIVE_INFINITY)
    const [genreIds, setGenreIds] = React.useState<number[]>([])
    const [platformIds, setPlatformIds] = React.useState<number[]>([])
    const [sortBy, setSortBy] = React.useState(CREATED_ASC)

    const setGameResults = props.setGameResults

    React.useEffect(() => {
        getGames()
    }, [q, price, genreIds, platformIds, sortBy])


    const getGames = () => {

        let params = {}

        if (q.trim() !== "") {
            params = {...params, q:q.trim()}
        }

        if (price !== Number.POSITIVE_INFINITY) {
            params = {...params, price:price}
        }

        if (genreIds.length !== 0) {
            params = {...params, genreIds:genreIds}
        }

        if (platformIds.length !== 0) {
            params = {...params, platformIds:platformIds}
        }

        params = {...params, sortBy:sortBy}
        console.log(`params: ${JSON.stringify(params)}`)

        api.get("games", {params: params})
            .then((res) => {
            setGameResults(res.data.games)
        }, (error) => {
            })
    }

    const updateQState = (event:React.ChangeEvent<HTMLInputElement>) => {
        setQ(event.target.value.trim())
    }

    return (
        <>
            <div className="searchContainer">
                <input type="text" value={q} className="searchBox" onChange={updateQState} placeholder="Search"/>
                <Filter setMaxPrice={setPrice} setGenreIds={setGenreIds} setPlatformIds={setPlatformIds} />
            </div>
        </>
    )
}

export default SearchBar;