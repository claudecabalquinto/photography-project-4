import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
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
            <br />
            <ReviewCard photos={photos} photo={photo} />
            
        </>
    );
}