import { useState } from 'react';
import UpdateReviewForm from '../../components/UpdateReviewForm/UpdateReviewForm';

export default function ReviewCard({ r, photo, setPhotos, user }) {
    const [showUpdate, setShowUpdate] = useState(true);

    
    return (
        <>
        {showUpdate ? 
            <div>
               <h1> Reviews: </h1> 
               <p>review: {r.content}</p>
               <p>rating: {r.rating}</p>
                {r.user === user._id && <button onClick={() => setShowUpdate(!showUpdate)}>Edit</button>}
            </div>
        : 
        <>
        <button onClick={() => setShowUpdate(!showUpdate)}>Cancel</button>
                
                
        <UpdateReviewForm showUpdate={showUpdate} setShowUpdate={setShowUpdate} setPhotos={setPhotos} photoId={photo._id} review={r}/>
        </>
        }
        </>

    )
}