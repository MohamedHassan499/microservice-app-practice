import { useEffect, useState } from "react";

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState({});
  const [countComments, setCountComments] = useState(0);
  useEffect(() => {
    setCountComments(Object.keys(comments).length);
  }, [comments]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/posts/${postId}/comments`
        );
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const renderedComments = Object.values(comments).map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return (
    <>
      <p>{countComments} Comments</p>
      <ul>{renderedComments}</ul>
    </>
  );
};
