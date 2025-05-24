import React from 'react';
import {DateTimeFormat, api} from "../../utils"
import {UserImage} from "../Image";
import "./review.css"

interface ReviewProps {
    gameId: number
}

const Reviews = (props: ReviewProps) => {
    const gameId = props.gameId
    const [reviews, setReviews] = React.useState<Review[]>([])

    React.useEffect(() => {
        api.get(`games/${gameId}/reviews`)
            .then((res) => {
                setReviews(res.data)
        }, (error) => {

            })
    }, [gameId])

    const getReviews = reviews.map(review => {
        const creationDateTime = new Date(review.timestamp)
        const creationDate = DateTimeFormat.getDate(creationDateTime);
        const creationTime = DateTimeFormat.getTime(creationDateTime);

        const descriptionStyle = review.review === undefined || review.review === null || review.review === ""?
                                                         {color:"var(--blue-disable)", margin:8} : {margin:8}

        if (review.review === undefined || review.review === null || review.review === "") {
            review.review = "..."
        }

        return (
            <li key={review.timestamp} className="reviewItem">
                <UserImage userId={review.reviewerId}/>
                <div className="reviewContainer">
                    <div>{review.reviewerFirstName} {review.reviewerLastName}: </div>
                    <div style={descriptionStyle}>{review.review}</div>
                    <div className="timeStyle">{creationDate} {creationTime}</div>
                </div>
                <div className="ratingStyle">{review.rating}/10</div>
            </li>
            )
        }
    )

    if (reviews.length === 0) {
        return (
            <>
                <div className="reviewsContainer">
                    <h1>No reviews yet</h1>
                    <br/>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="reviewsContainer">
                <h1>Reviews ({reviews.length})</h1>
                <br/>
                <ul style={{listStyle:"none"}}>
                    {getReviews}
                </ul>
            </div>
        </>
    )
}

export default Reviews;