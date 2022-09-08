import { Link } from "react-router-dom";

export default function PhotoCard({ photo }) {

    return (
      <article>
        <Link to={`/photos/${photo._id}`}>
        <img src={photo.url} alt={photo.title} />
        <div>{photo.title}</div>
        </Link>
      </article>
    );
  }