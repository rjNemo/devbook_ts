import React, {FC, useState} from 'react';
// Redux
import {compose} from '@reduxjs/toolkit';
import {connect, useSelector} from 'react-redux';
import {firestoreConnect, WithFirestoreProps} from 'react-redux-firebase';
import {RootState} from '../../store';
import {selectProfile} from '../../store/firebase';
// Style
import Header from '../../components/Header';
// Typing
import Post from '../../models/Post';
import Collections from '../../constants/collections';

import PostsForm from './Form';
import PostsItem from './Item';

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

    if (post && id && !post.likes.includes(id)) {
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

        <PostsForm
          text={text}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <div className="posts">
          {posts?.map((post: Post) => (
            <PostsItem post={post} addLike={addLike} key={post.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default compose<FC>(
  firestoreConnect(() => [Collections.POSTS]), // or { collection: 'users' }
  connect((state: RootState) => ({
    posts: state.firestore.ordered.posts,
  })),
)(Posts);
