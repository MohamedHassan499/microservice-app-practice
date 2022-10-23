import styles from "../styles/CreatePost.module.css";

import { Comments } from "./Comments";
import { CreateComment } from "./CreateComment";

export const Post = ({ title, postId }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      <Comments postId={postId} />
      <CreateComment postId={postId} />
    </div>
  );
};
