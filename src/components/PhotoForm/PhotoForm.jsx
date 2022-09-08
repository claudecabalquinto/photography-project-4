import { useState, useRef, useEffect } from 'react';
import * as photosAPI from '../../utilities/photos-api';
import PhotoCard from '../../components/PhotoCard/PhotoCard'

export default function PhotoForm({ setPhotos, photos }) {
    const [title, setTitle] = useState('');
    // const [photos, setPhotos] = useState([]);
    // Use a ref prop on the <input> in the JSX to
    // create a reference to the <input>, i.e.,
    // inputRef.current will be the <input> DOM element
    const fileInputRef = useRef();

    // useEffect(function () {
    //     photosAPI.getAll().then(photos => setPhotos(photos));
    // }, []);

    async function handleUpload() {
        // Use FormData object to send the inputs in the fetch request
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
        const formData = new FormData();
        formData.append('title', title);
        formData.append('photo', fileInputRef.current.files[0]);
        const newPhoto = await photosAPI.upload(formData);
        console.log(newPhoto, photos, "upload")
        setPhotos([newPhoto, ...photos]);
        // Clear the description and file inputs
        setTitle('');
        fileInputRef.current.value = '';
    }

    return (
        <main>
            <section>
                <input type="file" ref={fileInputRef} />
                <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" />
                <button onClick={handleUpload}>Upload Photo</button>
            </section>
        </main>
    );
}