import PhotoCard from '../../components/PhotoCard/PhotoCard';
import * as photosAPI from '../../utilities/photos-api';;

export default function PhotoSocialPage({ photos }) {
  
  async function handleDelete(id){
    await photosAPI.deletePhoto(id)
  }

  return (
    <div>
      <h1>Photo Social</h1> 
      {photos.map(p => <><PhotoCard photo={p} key={p._id} /> <button onClick={(() => handleDelete(p._id))}>Delete</button></>)}

    </div>

    
  );
}