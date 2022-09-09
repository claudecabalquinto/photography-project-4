import { useState } from 'react';
import { useParams } from "react-router-dom";

export default function ReviewCard({ photos, photo }) {
    const [reviews, setReviews] = useState([]);
    const { photoId } = useParams();
    

    return (
        <>
            <div>
                Reviews: <hr />{photo.reviews.map(r => <div key={r._id} >Review: {r.content} <br /> Rating:{r.rating} </div>)}<br /> 
            </div>
        </>

    )
}