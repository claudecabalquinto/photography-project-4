import PhotoForm from '../../components/PhotoForm/PhotoForm';
import PhotoCard from '../../components/PhotoCard/PhotoCard'


export default function NewPhotoPage({ user }) {

  return (
  <>
    <PhotoForm user={user} />
  </>
  );
}