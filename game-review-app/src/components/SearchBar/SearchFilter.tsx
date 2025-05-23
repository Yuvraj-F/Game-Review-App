import React from "react";
import {api} from "../../utils";

interface filterProps{
    setMaxPrice: (price:number) => void
    setGenreIds: (genres:number[]) => void
    setPlatformIds: (platforms:number[]) => void
}

const Filter = (props:filterProps) => {

    const {setMaxPrice, setGenreIds, setPlatformIds} = props
    const [price, setPrice] = React.useState(Number.POSITIVE_INFINITY)
    // const [genreIds, setGenreIds] = React.useState([])
    // const [platformIds, setPlatformIds] = React.useState([])
    const [selectedGenres, setSelectedGenres] = React.useState<Genre[]>([])
    const [selectedPlatforms, setSelectedPlatforms] = React.useState<Platform[]>([])

    React.useEffect(() => {
        api.get("games/genres")
            .then((res) => {
                setSelectedGenres(res.data)
            }, (error) =>{
            })

        api.get("games/platforms")
            .then((res) => {
                setSelectedPlatforms(res.data)
            }, (error) =>{
            })
    }, [])

    const updatePriceState = (event:React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value

        if (val === "") {
            setPrice(NaN)
            setMaxPrice(Number.POSITIVE_INFINITY);
            return;
        }

        const price = parseInt(val, 10)
        setMaxPrice(price)
        setPrice(price)
    }

    const getGenres = () => {
        return (
            selectedGenres.map((genre:Genre) =>
                <button key={genre.genreId} className="genreButton">{genre.name}</button>
            )
        )

    }

    const getPlatforms = () => {
        return (
            selectedPlatforms.map((platform:Platform) =>
                <button key={platform.platformId} className="platformButton">{platform.name}</button>
            )
        )

    }

    return (
        <>
            <div className="filtersContainer">
                <div>
                    <label style={{margin:4}}>Max Price: </label>
                    <span className="dollarSign">$</span>
                    <input type="number" min="0" value={price} id="price" onChange={updatePriceState} className="priceInput"
                        placeholder="Type numerical price"/>
                </div>
                <div className="genreContainer">
                    <ul>
                        {getGenres()}
                    </ul>
                </div>
                <div className="platformContainerRow">
                    <ul>
                        {getPlatforms()}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Filter;