import React, {FC} from 'react';
import Post, {dummyPost as post} from '../models/Post';
import Header from '../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

const Posts: FC = () => {
  const posts: Post[] = [post, post];

  return (
    <section className="container">
      <Header title="Posts" lead="Welcome to the community" />
      <div className="post-form">
        <div className="post-form-header bg-primary">
          <h3>Say Something</h3>
        </div>

        <form className="form my-1">
          <textarea cols={30} rows={5} placeholder="Create a post"></textarea>
          <input type="submit" value="Submit" className="btn btn-dark my-1" />
          <div className="posts">
            {posts.map((post: Post, i: number) => (
              <div className="post bg-white p-1 my-1" key={i}>
                <div>
                  <a href="profile.html">
                    <img
                      src={post.picture}
                      alt={post.name}
                      className="round-img"
                    />
                    <h4>{post.name}</h4>
                  </a>
                </div>
                <div>
                  <p className="my-1">{post.text}</p>
                  <button className="btn btn-light">
                    <FontAwesomeIcon icon={faThumbsUp} /> {post.likes.length}
                  </button>
                  <button className="btn btn-light">
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </button>
                  <a href="post.html" className="btn btn-primary">
                    Discussion
                  </a>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Posts;
