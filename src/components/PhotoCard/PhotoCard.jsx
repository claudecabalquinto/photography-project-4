export default function PhotoCard({ photo }) {
  

    return (
      <article>
        <button type="submit">delete</button>
        <a href={`/photos/${photo._id}`}>
        <img src={photo.url} alt={photo.title} />
        <div>{photo.title}</div>
        </a>
      </article>
    );
  }