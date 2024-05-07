import "./CommBoard.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../PostItem/PostItem";

function CommBoard() {
  const { postId } = useParams();
  const [postsData, setPostsData] = useState([]);
  const [postList, setPostList] = useState([]);

  const fetchPosts = async () => {
    const postsReq = await axios.get(`${API_URL}/posts`);
    const postsData = postsReq.data;
    setPostList(postsData);
    setPostsData(postsData);
  };
  useEffect(() => {
    fetchPosts();
  }, [postId]);
  if (postsData.length === 0) {
    return <p>... Loading Community Board details ...</p>;
  }

  const postToLoad = postId ? postId : postList[0].id;

  return (
    <div className="board">
      <h2 className="board__title">Posts From Our Community!</h2>
      <div className="board__posts">
        {postsData.map((post) => (
          <PostItem key={post.id} post={post} postToLoad={postToLoad} />
        ))}
      </div>
    </div>
  );
}

export default CommBoard;
