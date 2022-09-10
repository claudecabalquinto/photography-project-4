import { useState } from 'react';
import * as photosAPI from '../../utilities/photos-api';

export default function UpdateReviewForm({ setPhotos, showUpdate, setShowUpdate, review }) {
    const [formData, setFormData] = useState({
        content: review.content,
        rating: review.rating,
    });

    async function handleSubmit(evt) {
        evt.preventDefault()
        let photos = await photosAPI.addUpdateReview(formData, review._id)
        setPhotos(photos)
        setShowUpdate(!showUpdate)
    }
    
    function handleChange(evt) {
        const newReview = {...formData, [evt.target.name]: evt.target.value };
        setFormData(newReview);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input name='content' onChange={handleChange} value={formData.content} type='text' placeholder="review" /><br />
        <label>Rating</label>
        <select onChange={handleChange} value={formData.rating} name='rating'>
            <option value='5'>5</option>
            <option value='4'>4</option>
            <option value='3'>3</option>
            <option value='2'>2</option>
            <option value='1'>1</option>
        </select><br />
        <button type="submit">Update</button>
        </form>
        
        
        </>

    )
}