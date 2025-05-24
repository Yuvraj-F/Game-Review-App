import React from 'react';
import {GameImage, UserImage} from "../Image";
import {DateTimeFormat} from "../../utils"
import Rating from "./Rating";
import PlatformTagList from "../GameList/PlatformTagList";

interface GameDetailsProps {
    game: GameDetails
    genres: Genre[];
    platforms: Platform[];
}

const GameDetails = (props:GameDetailsProps) => {

    const game = props.game
    const genre = props.genres.find(g => g.genreId === game.genreId) || {genreId: -1, name: ""}
    const platforms = props.platforms.filter(p => game.platformIds.includes(p.platformId))

    const creationDateTime = new Date(game.creationDate)
    const creationDate = DateTimeFormat.getDate(creationDateTime);
    const creationTime = DateTimeFormat.getTime(creationDateTime);



    const getPlatforms = platforms.map(platform =>
        <li key={platform.platformId} className="platformTag">{platform.name}</li>
    )

    return (
        <>
            <GameImage gameId={game.gameId} large={true}/>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <div className="descriptionContainer">
                    <div style={{fontSize:40, fontWeight:"bold"}}>{game.title}</div>
                    <div>{game.description}</div>
                    <div className="genreTag">{genre.name}</div>
                    <div className="platformContainerRow" style={{margin:0}}>
                        <ul style={{margin:4, padding:0}}>
                            {getPlatforms}
                        </ul>
                    </div>
                </div>
            </div>

            <Rating rating={game.rating}/>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:8}}>
                <div>Created by </div>
                <UserImage userId={game.creatorId}/>
                <div>{game.creatorFirstName} {game.creatorLastName}</div>
                <div>on {creationDate}</div>
                <div>at {creationTime}</div>
            </div>

            <div>Number of owners: {game.numberOfOwners}</div>
            <div>Number of wishlists: {game.numberOfWishlists}</div>
        </>
    )
}

export default GameDetails;