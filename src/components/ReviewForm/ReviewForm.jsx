import { useState } from 'react';
import * as photosAPI from '../../utilities/photos-api';

export default function ReviewForm({ photoId, setPhotos }) {
    const [review, setReview] = useState({
        content: "",
        rating: 5,
    });

    async function handleSubmit(evt) {
        evt.preventDefault()
        let photos = await photosAPI.addReview(review, photoId)
        setPhotos(photos)
    }
    
    function handleChange(evt) {
        const newReview = {...review, [evt.target.name]: evt.target.value };
        setReview(newReview);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input name='content' onChange={handleChange} value={review.content} type='text' placeholder="Review" /><br />
        <label>Rating</label>
        <select onChange={handleChange} value={review.rating} name='rating'>
            <option value='5'>5</option>
            <option value='4'>4</option>
            <option value='3'>3</option>
            <option value='2'>2</option>
            <option value='1'>1</option>
        </select><br />
        <button type="submit">Submit</button>
        </form>
        <hr />
        
        
        </>

    )
}