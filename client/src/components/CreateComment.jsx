import { useState } from "react";

export const CreateComment = ({ postId }) => {
  const [comment, setComment] = useState("");
  const handleClick = (e) => {
    console.log(comment);
    fetch(`http://localhost:3001/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: comment }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <form>
      <input type="text" value={comment} onChange={handleChange} />
      <input type="submit" onClick={handleClick} />
    </form>
  );
};
