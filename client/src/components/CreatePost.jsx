import { useState } from "react";
import styles from "../styles/CreatePost.module.css";

export const CreatePost = () => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(title);
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Create Post</h1>
      <p>Title</p>
      <form>
        <input type="text" value={title} onChange={handleChange} />
        <input type="submit" onClick={handleClick} />
      </form>
    </div>
  );
};
