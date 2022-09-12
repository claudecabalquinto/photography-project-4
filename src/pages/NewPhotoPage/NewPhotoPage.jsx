import PhotoForm from '../../components/PhotoForm/PhotoForm';
import './NewPhotoPage.css'

export default function NewPhotoPage({ user, photos, setPhotos }) {

  return (
  <>
    <h1>Start by selecting a photo to upload below:</h1>
    <PhotoForm user={user} photos={photos} setPhotos={setPhotos} />
  </>
  );
}