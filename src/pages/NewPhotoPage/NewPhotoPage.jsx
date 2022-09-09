import PhotoForm from '../../components/PhotoForm/PhotoForm';

export default function NewPhotoPage({ user, photos, setPhotos }) {

  return (
  <>
    <PhotoForm user={user} photos={photos} setPhotos={setPhotos} />
  </>
  );
}