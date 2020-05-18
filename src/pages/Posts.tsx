import React, {FC} from 'react';
import Post, {dummyPost as post} from '../models/Post';
import Header from '../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import Routes from '../constants/routes';
import {Link} from 'react-router-dom';

/**
 * A Dev's Posts list
 */
const Posts: FC = () => {
  const posts: Post[] = [post, post];

  const removeLike = (e: React.MouseEvent<HTMLButtonElement>) =>
    new Error('Not implemented yet.');
  const addLike = (e: React.MouseEvent<HTMLButtonElement>) =>
    new Error('Not implemented yet.');

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
            {posts.map((post: Post) => (
              <div className="post bg-white p-1 my-1" key={post.id}>
                <div>
                  <Link to={`${Routes.PROFILE}/${post.userID}`}>
                    <img
                      src={post.avatarUrl}
                      alt={post.name}
                      className="round-img"
                    />
                    <h4>{post.name}</h4>
                  </Link>
                </div>
                <div>
                  <p className="my-1">{post.text}</p>
                  <button className="btn btn-light" onClick={addLike}>
                    <FontAwesomeIcon icon={faThumbsUp} /> {post.likes.length}
                  </button>
                  <button className="btn btn-light" onClick={removeLike}>
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </button>
                  <Link
                    to={`${Routes.POST}/${post.id}`}
                    className="btn btn-primary"
                  >
                    Discussion
                  </Link>
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
