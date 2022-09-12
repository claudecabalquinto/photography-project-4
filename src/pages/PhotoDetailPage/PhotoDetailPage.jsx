import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import UpdateReviewForm from '../../components/UpdateReviewForm/UpdateReviewForm';
import { useParams } from "react-router-dom";
import { useState } from 'react';


export default function PhotoDetailPage({ user, setPhotos, photos }) {
    const { photoId } = useParams();
    const photo = photos.find(p => p._id == photoId);
   
    let reviews = photo.reviews.map(r => <ReviewCard user={user} setPhotos={setPhotos} photo={photo} key={r._id} r={r} />)

    return (
        <>
            <h1>PhotoDetailPage</h1>
            <img src={photo.url} alt={photo.title} />
            <ReviewForm photoId={photoId} setPhotos={setPhotos} />
            <br />
            
            
            {reviews}
            
             
            
        </>
    );
}