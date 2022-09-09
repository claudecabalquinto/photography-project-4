import ReviewForm from '../../components/ReviewForm/ReviewForm';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import { useParams } from "react-router-dom";
import { useState } from 'react';


export default function PhotoDetailPage({ setPhotos, photos }) {
    const [reviews, setReviews] = useState([]);
    const { photoId } = useParams();
    const photo = photos.find(p => p._id == photoId)

    return (
        <>
            <h1>PhotoDetailPage</h1>
            <img src={photo.url} alt={photo.title} />
            <ReviewForm photoId={photoId} setPhotos={setPhotos} />
            
            Review:{photo.reviews.map(r => r.content)}<br />
            Rating:{photo.reviews.map(r => r.rating)}
            
            
            
            
        </>
    );
}