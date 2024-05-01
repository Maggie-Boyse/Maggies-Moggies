import "./CommBoard.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CommBoard() {
  const { postId } = useParams();
  const [postsData, setPostsData] = useState([]);

  const fetchPosts = async () => {
    const postsReq = await axios.get(`${API_URL}/posts`);
    const postsData = postsReq.data;
    setPostsData(postsData);
    console.log(postsData);
  };
  useEffect(() => {
    fetchPosts();
  }, [postId]);
  // if (!postsData) {
  //   return <p>... Loading Community Board details ...</p>;
  // }

  return (
    <div className="board">
      <h2 className="board__title">Posts From Our Community!</h2>
      <h3 className="board__username">{postsData.username}</h3>
      <p className="board__body">{postsData.post_body}</p>
      <p className="board__timestamp">{postsData.created_at}</p>
    </div>
  );
}

export default CommBoard;
