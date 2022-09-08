export default function PhotoCard({ photo }) {
  

    return (
      <article>
        <a href={`/photos/${photo._id}`}>
        <img src={photo.url} alt={photo.title} />
        <div>{photo.title}</div>
        </a>
      </article>
    );
  }