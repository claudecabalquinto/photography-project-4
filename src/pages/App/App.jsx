import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewPhotoPage from '../NewPhotoPage/NewPhotoPage';
import PhotoSocialPage from '../PhotoSocialPage/PhotoSocialPage';
import PhotoDetailPage from '../PhotoDetailPage/PhotoDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import * as photosAPI from '../../utilities/photos-api';;

export default function App() {
  const [user, setUser] = useState(getUser())
  const [photos, setPhotos] = useState([]);
  // Use a ref prop on the <input> in the JSX to
  // create a reference to the <input>, i.e.,
  // inputRef.current will be the <input> DOM element
  const fileInputRef = useRef();

  useEffect(() => {
    async function getAllPhotos () {
      let allPhotos = await photosAPI.getAll();
      setPhotos(allPhotos)
    }
    getAllPhotos();  
  }, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/photos/new' element={<NewPhotoPage photos={photos} setPhotos={setPhotos} />} />
            <Route path='/photos' element={<PhotoSocialPage photos={photos} setPhotos={setPhotos} user={user} />} />
            <Route path='/photos/:photoId' element={<PhotoDetailPage user={user} photos={photos} setPhotos={setPhotos} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
