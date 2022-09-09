import PhotoCard from '../../components/PhotoCard/PhotoCard';
import * as photosAPI from '../../utilities/photos-api';;

export default function PhotoSocialPage({ photos, setPhotos }) {
  
    async function handleDelete(id) {
      const allPhotos = await photosAPI.deletePhoto(id)
      setPhotos(allPhotos)
    }

  return (
    <div>
      <h1>Photo Social</h1> 
      {photos.map(p => <><PhotoCard photo={p} key={p._id} /> <button onClick={(() => handleDelete(p._id))}>Delete</button></>)}

    </div>

    
  );
}