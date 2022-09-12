import PhotoCard from '../../components/PhotoCard/PhotoCard';


export default function PhotoSocialPage({ user, photos, setPhotos }) {
  
   

  return (
    <div>
      <h1>Photo Social</h1> 
      {photos.map(p => <PhotoCard photo={p} key={p._id} setPhotos={setPhotos} user={user} /> )}
     
    </div>

    
  );
}