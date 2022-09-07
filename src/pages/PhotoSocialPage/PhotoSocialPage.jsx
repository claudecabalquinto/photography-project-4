import { useState, useRef, useEffect } from 'react';
import * as photosAPI from '../../utilities/photos-api';
import PhotoCard from '../../components/PhotoCard/PhotoCard'

export default function PhotoSocialPage() {
    const [photos, setPhotos] = useState([]);
    // Use a ref prop on the <input> in the JSX to
    // create a reference to the <input>, i.e.,
    // inputRef.current will be the <input> DOM element
    const fileInputRef = useRef();

  useEffect(function () {
    photosAPI.getAll().then(photos => setPhotos(photos));
  }, []);

  return (
    <div>
      <h1>Photo Social</h1> 
      {photos.map(p => <PhotoCard photo={p} key={p._id} />)}
    </div>
  );
}