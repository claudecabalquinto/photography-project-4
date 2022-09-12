import { Link } from "react-router-dom";
import './PhotoCard.css';
import * as photosAPI from '../../utilities/photos-api';;

export default function PhotoCard({ photo, setPhotos, user }) {

  async function handleDelete(id) {
    const allPhotos = await photosAPI.deletePhoto(id)
    setPhotos(allPhotos)
  }
  
    return (
      <article>
        <Link to={`/photos/${photo._id}`}>
        <img src={photo.url} alt={photo.title} />
        <div>{photo.title}</div>
        </Link>
        {photo.user === user._id && <button className="delete" onClick={(() => handleDelete(photo._id))}>Delete</button>}
      </article>
    );
  }