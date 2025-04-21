import React from 'react';
import {api} from "../../utils";

const SearchBar = () => {

    const [q, setQ] = React.useState("")

    const updateQState = (event:React.ChangeEvent<HTMLInputElement>) => {
        setQ(event.target.value)
    }

    return (
        <>
            <input type="text" onChange={updateQState}/>
        </>
    )
}

export default SearchBar;