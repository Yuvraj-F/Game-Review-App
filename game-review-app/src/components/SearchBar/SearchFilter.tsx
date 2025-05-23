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
    const [selectedGenreIds, setSelectedGenreIds] = React.useState<number[]>([])
    const [selectedPlatformIds, setSelectedPlatformIds] = React.useState<number[]>([])
    const [Genres, setSelectedGenres] = React.useState<Genre[]>([])
    const [Platforms, setSelectedPlatforms] = React.useState<Platform[]>([])

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

    const updateGenreState = (genre:Genre) => {
        setSelectedGenreIds(prev => {
            const newGenreIds = prev.includes(genre.genreId)
                ? prev.filter(id => id !== genre.genreId)
                : [...prev, genre.genreId]

            setGenreIds(newGenreIds)
            return newGenreIds
        })
    }

    const updatePlatformState = (platform:Platform) => {
        setSelectedPlatformIds(prev => {
            const newPlatformIds = prev.includes(platform.platformId)
                ? prev.filter(id => id !== platform.platformId)
                : [...prev, platform.platformId]

            setPlatformIds(newPlatformIds)
            return newPlatformIds
        })

    }

    const getGenres = () => {
        return (
            Genres.map((genre:Genre) => {
                    const buttonClass = selectedGenreIds.includes(genre.genreId)? "genreButton selected": "genreButton"
                    return (
                        <button key={genre.genreId} className={buttonClass}
                            onClick={() => updateGenreState(genre)}>
                        {genre.name}
                    </button>
                    )
                }
            )
        )

    }

    const getPlatforms = () => {
        return (
            Platforms.map((platform:Platform) => {
                const buttonClass = selectedPlatformIds.includes(platform.platformId)? "platformButton selected": "platformButton"
                return (
                    <button key={platform.platformId} className={buttonClass}
                            onClick={() => updatePlatformState(platform)}>
                        {platform.name}
                    </button>
                    )
                }
            )
        )

    }

    return (
        <>
            <div className="filtersContainer">
                <div style={{margin:8}}>
                    <label style={{marginRight:4}}>Max Price: </label>
                    <span className="dollarSign">$</span>
                    <input type="number" min="0" value={price.toString()} id="price" onChange={updatePriceState} className="priceInput"
                        placeholder="Type numerical price"/>
                </div>
                <div className="genreContainer">
                    <label>Genres: </label>
                    <ul style={{margin:4, padding:0}}>
                        {getGenres()}
                    </ul>
                </div>
                <div className="platformContainerRow">
                    <label>Platforms: </label>
                    <ul style={{margin:4, padding:0}}>
                        {getPlatforms()}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Filter;