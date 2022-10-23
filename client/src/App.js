import { useEffect, useState } from "react";
import { CreatePost } from "./components/CreatePost";
import { Post } from "./components/Post";

function App() {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchData();
  }, []);
  const renderedPosts = Object.values(posts).map((post) => {
    return <Post key={post.id} postId={post.id} title={post.title} />;
  });
  return (
    <>
      <CreatePost />
      <hr style={{ width: "70%", margin: "20px" }} />
      {renderedPosts}
    </>
  );
}

export default App;
