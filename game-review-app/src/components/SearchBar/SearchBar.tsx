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
const RATING_DESC = "RATING_DESC"

interface SearchProps {
    setGameResults:(games:Game[]) => void
    showError:(msg:string) => void
}

const SearchBar = (props:SearchProps) => {

    const showError = props.showError
    const [q, setQ] = React.useState("")
    const [price, setPrice] = React.useState(Number.POSITIVE_INFINITY)
    const [genreIds, setGenreIds] = React.useState<number[]>([])
    const [platformIds, setPlatformIds] = React.useState<number[]>([])
    const [sortBy, setSortBy] = React.useState(CREATED_ASC)

    const setGameResults = props.setGameResults

    React.useEffect(() => {
        const delayDebounce = setTimeout(() => {
            getGames()
        }, 300)

        return () => clearTimeout(delayDebounce)
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

        api.get("games", {params: params})
            .then((res) => {
                setGameResults(res.data.games)
                if (res.data.games.length === 0) {
                    showError("No games found")
                }
        }, (error) => {
                showError(error.message)
            })
    }

    const updateQState = (event:React.ChangeEvent<HTMLInputElement>) => {
        setQ(event.target.value.trim())
    }

    const updateSortByState = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value)
    }

    return (
        <>
            <div className="searchContainer">
                <div className="searchInline">
                    <input type="text" value={q} className="searchBox" onChange={updateQState} placeholder="Search" maxLength={64}/>
                    <label style={{marginRight:12}}>Sort:</label>
                    <select name="sort" id="sort" className="sortInput" onChange={updateSortByState}>
                        <option value={ALPHABETICAL_ASC}>A-Z</option>
                        <option value={ALPHABETICAL_DESC}>Z-A</option>
                        <option value={PRICE_ASC}>Price, low to high</option>
                        <option value={PRICE_DESC}>Price, high to low</option>
                        <option value={CREATED_ASC}>Created, new to old</option>
                        <option value={CREATED_DESC}>Created, old to new</option>
                        <option value={RATING_ASC}>Rating, low to high</option>
                        <option value={RATING_DESC}>Rating, high to low</option>
                    </select>
                </div>
                <Filter setMaxPrice={setPrice} setGenreIds={setGenreIds} setPlatformIds={setPlatformIds} />
            </div>
        </>
    )
}

export default SearchBar;