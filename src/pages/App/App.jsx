import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewPhotoPage from '../NewPhotoPage/NewPhotoPage';
import PhotoSocialPage from '../PhotoSocialPage/PhotoSocialPage';
import PhotoDetailPage from '../PhotoDetailPage/PhotoDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/photos/new' element={<NewPhotoPage />} />
            <Route path='/photos' element={<PhotoSocialPage />} />
            <Route path='/photos/:id' element={<PhotoDetailPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
