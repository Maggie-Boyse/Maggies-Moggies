import "../PostItem/PostItem.scss";

function PostItem({ post }) {
  return (
    <section className="post">
      <div key={post.id} className="post__item">
        <h3 className="post__username">{post.username}</h3>
        <p className="post__body">{post.post_body}</p>
        <p className="post__timestamp">{post.created_at}</p>
      </div>
    </section>
  );
}

export default PostItem;
