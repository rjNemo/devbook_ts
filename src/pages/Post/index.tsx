import React, {FC} from 'react';
// Routing
import {useParams, Link} from 'react-router-dom';
import Routes from '../../constants/routes';
// Redux
import {compose} from '@reduxjs/toolkit';
import {connect, useSelector} from 'react-redux';
import {firestoreConnect, WithFirestoreProps} from 'react-redux-firebase';
import {RootState} from '../../store';
import {selectProfile} from '../../store/firebase';
import Collections from '../../constants/collections';
// Typing
import Post from '../../models/Post';
import Comment from '../../types/Comment';
// Form
import useForm from '../../hooks';

import PostForm from './Form';
import PostComments from './Comments';
import PostDisplay from './Display';

interface IProps extends WithFirestoreProps {
  post: Post;
}

/**
 * Display a Post and the related comments. Shows a form to add a comment.
 */
const PostComponent: FC<IProps> = ({post, firestore}) => {
  const {avatarUrl, displayName} = useSelector(selectProfile);
  const newComment: Comment = {
    name: displayName ?? 'error',
    avatarUrl: avatarUrl ?? 'error',
    text: '',
  };

  const {formData, handleChange, resetForm} = useForm(newComment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    firestore
      .update(`${Collections.POSTS}/${post.id}`, {
        comments: [...post.comments, formData],
      })
      .then(() => resetForm())
      .catch(err => console.error(err));
  };

  return (
    <section className="container">
      <Link to={Routes.POSTS} className="btn btn-light">
        Back To Posts
      </Link>

      <PostDisplay post={post} />

      <PostForm
        text={formData.text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <PostComments comments={post.comments} />
    </section>
  );
};

/**
 * Container to fetch id params from thr URI and pass it to Profile page
 */
const PostPage: FC = () => {
  const {id} = useParams();
  const Component = compose<FC>(
    firestoreConnect(() => [`${Collections.POSTS}/${id}`]),
    connect(({firestore: {data}}: RootState) => ({
      post: data.posts && {...data.posts[id], id},
    })),
  )(PostComponent);

  return <Component />;
};

export default PostPage;
