import ReviewForm from '../../components/ReviewForm/ReviewForm';
import { useParams } from "react-router-dom";


export default function PhotoDetailPage({ setPhotos }) {
    const { photoId } = useParams();

    return (
        <>
            <h1>PhotoDetailPage</h1>
            <ReviewForm photoId={photoId} setPhotos={setPhotos} />
        </>
    );
}