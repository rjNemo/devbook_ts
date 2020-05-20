import React, {FC, useState} from 'react';
// Redux
import {compose} from '@reduxjs/toolkit';
import {connect, useSelector} from 'react-redux';
import {firestoreConnect, WithFirestoreProps} from 'react-redux-firebase';
import {RootState} from '../store';
import {selectProfile} from '../store/firebase';
// Routing
import {Link} from 'react-router-dom';
import Routes from '../constants/routes';
// Style
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
// Typing
import Post from '../models/Post';
import Collections from '../constants/collections';

interface IProps extends WithFirestoreProps {
  posts: Post[];
}
/**
 * A Dev's Posts list
 */
const Posts: FC<IProps> = ({posts, firestore, firebase}) => {
  const [text, setText] = useState('');
  const {avatarUrl, displayName} = useSelector(selectProfile);
  const id = firebase.auth().currentUser?.uid;

  const newPost = {
    userID: id,
    name: displayName,
    text,
    avatarUrl,
    likes: [] as string[],
    comments: [],
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    firestore
      .add(Collections.POSTS, newPost)
      .then(() => setText(''))
      .catch(err => console.error(err));
  };
  // const removeLike = (e: React.MouseEvent<HTMLButtonElement>) =>
  //   new Error('Not implemented yet.');
  const addLike = (postID: string) => (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    const post = posts.find(p => p.id === postID);

    if (post) {
      firestore
        .update(`${Collections.POSTS}/${post.id}`, {likes: [...post.likes, id]})
        .catch(err => console.error(err));
    }
  };

  return (
    <section className="container">
      <Header title="Posts" lead="Welcome to the community" />
      <div className="post-form">
        <div className="post-form-header bg-primary">
          <h3>Say Something</h3>
        </div>

        <form className="form my-1" onSubmit={handleSubmit}>
          <textarea
            cols={30}
            rows={5}
            placeholder="Create a post"
            value={text}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" className="btn btn-dark my-1" />
        </form>
        <div className="posts">
          {posts?.map((post: Post) => (
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
                <button className="btn btn-light" onClick={addLike(post.id)}>
                  <FontAwesomeIcon icon={faThumbsUp} /> {post.likes?.length}
                </button>
                {/* <button className="btn btn-light" onClick={removeLike}>
    <FontAwesomeIcon icon={faThumbsDown} />
  </button> */}
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
      </div>
    </section>
  );
};

export default compose<FC>(
  firestoreConnect(() => ['posts']), // or { collection: 'users' }
  connect((state: RootState) => ({
    posts: state.firestore.ordered.posts,
  })),
)(Posts);
