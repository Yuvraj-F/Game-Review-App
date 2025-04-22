import React from "react";
import "./gameDetails.css";

interface RatingProp {
    rating:number
}

const Rating = (props:RatingProp) => {

    const rating = props.rating

    const ratingColor = () => {
        if (rating < 4) {
            return "red"
        } else if (rating < 7) {
            return "yellow"
        } else {
            return "green"
        }
    }



    return (
        <>
            <div className="ratingBase">
                <div className="ratingRing" style={{"backgroundColor":ratingColor()}}>
                    <div className="ratingDisplay" style={{color:ratingColor()}}>
                        {rating}/10
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rating;