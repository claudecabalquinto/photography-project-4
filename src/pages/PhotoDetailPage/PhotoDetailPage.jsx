import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { useParams } from "react-router-dom";



export default function PhotoDetailPage({ user, setPhotos, photos }) {
    const { photoId } = useParams();
    if (!photos.length) return null;
    const photo = photos.find(p => p._id == photoId);
   
    let reviews = photo.reviews.map(r => <ReviewCard user={user} setPhotos={setPhotos} photo={photo} key={r._id} r={r} />)

    return (
        <>
            <h1>Leave a Review</h1>
            <img src={photo.url} alt={photo.title} />
            <ReviewForm photoId={photoId} setPhotos={setPhotos} />
            <br />
            
            
            {reviews}
            
        
            
        </>
    );
}