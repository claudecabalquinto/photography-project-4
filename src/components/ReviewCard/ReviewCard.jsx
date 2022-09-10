import { useState } from 'react';
import { useParams } from "react-router-dom";
import * as photosAPI from '../../utilities/photos-api';
import UpdateReviewForm from '../../components/UpdateReviewForm/UpdateReviewForm';

export default function ReviewCard({ r, photo, setPhotos }) {
    const [showUpdate, setShowUpdate] = useState(true);

    
    return (
        <>
        {showUpdate ? 
            <div>
               <h1> Reviews: </h1> 
               <p>review: {r.content}</p>
               <p>rating: {r.rating}</p>
                <button onClick={() => setShowUpdate(!showUpdate)}>Edit</button>
            </div>
        : 
        <>
        <button onClick={() => setShowUpdate(!showUpdate)}>Cancel</button>
                
                
        <UpdateReviewForm showUpdate={showUpdate} setShowUpdate={setShowUpdate} setPhotos={setPhotos} review={r}/>
        </>
        }
        </>

    )
}