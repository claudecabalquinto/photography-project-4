import './NewPhotoPage.css';
import PhotoForm from '../../components/PhotoForm/PhotoForm';

export default function NewPhotoPage({ user }) {

  return (
  <>
    <PhotoForm user={user} />
  </>
  );
}