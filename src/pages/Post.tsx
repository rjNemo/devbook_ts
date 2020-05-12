import React, {FC} from 'react';
import Post, {dummyPost as post} from '../models/Post';
import Comment from '../types/Comment';

/**
 * Display a Post and the related comments. Shows a form to add a comment.
 */
const PostPage: FC<Post> = () => (
  <section className="container">
    <a href="posts.html" className="btn btn-light">
      Back To Posts
    </a>

    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img className="round-img" src={post.picture} alt={post.name} />
          <h4>{post.name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{post.text}</p>
      </div>
    </div>

    <div className="post-form">
      <div className="post-form-header bg-primary">
        <h3>Leave A Comment</h3>
      </div>
      <form className="form my-1">
        <textarea
          name="text"
          cols={30}
          rows={5}
          placeholder="Comment on this post"
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>

    <div className="posts">
      {post.comments.map((c: Comment, i: number) => (
        <div className="post bg-white p-1 my-1" key={i}>
          <div>
            <a href="profile.html">
              <img className="round-img" src={c.picture} alt={c.name} />
              <h4>{c.name}</h4>
            </a>
          </div>
          <div>
            <p className="my-1">{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PostPage;
