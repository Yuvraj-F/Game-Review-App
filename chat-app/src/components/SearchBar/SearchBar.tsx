import React from 'react';
import {api} from "../../utils";
import "./searchBar.css";

interface SearchProps {
    setGameResults:(games:Game[]) => void
}

const SearchBar = (props:SearchProps) => {

    const [q, setQ] = React.useState("")
    const [params, setParams] = React.useState({params: {}})
    const setGameResults = props.setGameResults

    React.useEffect(() => {
        getGames()
    }, [params])

    const getGames = () => {
        api.get("games", params)
            .then((res) => {
            setGameResults(res.data.games)
        }, (error) => {
            })
    }

    const updateQState = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim() !== "") {
            setParams({params: {q:event.target.value.trim()}})
        } else {
            setParams({params: {}})
        }
        setQ(event.target.value)
    }

    return (
        <>
            <div className="box">
                <input type="text" value={q} className="searchBox" onChange={updateQState} placeholder="Search"/>
            </div>
        </>
    )
}

export default SearchBar;