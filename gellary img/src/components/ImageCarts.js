export default function ImageCarts({ card }) {
  const { id, user, userImageURL, views, likes, downloads, tags } = card;

  return (
    <div className="card">
      <img alt="" src={userImageURL} />
      <h3>{user}</h3>
      <ul>
        <li>
          Views: <span>{views}</span>
        </li>
        <li>
          downloads: <span>{downloads}</span>
        </li>
        <li>
          Likes: <span>{likes}</span>
        </li>
      </ul>
      <ul className="tags">
        <li>{tags}</li>
      </ul>
    </div>
  );
}
