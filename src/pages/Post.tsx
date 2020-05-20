import React, {FC} from 'react';
// Routing
import {useParams, Link} from 'react-router-dom';
// Redux
import {compose} from '@reduxjs/toolkit';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {RootState} from '../store';
import Collections from '../constants/collections';
// Typing
import Post from '../models/Post';
import Comment from '../types/Comment';
import Routes from '../constants/routes';

interface IProps {
  post: Post;
}
/**
 * Display a Post and the related comments. Shows a form to add a comment.
 */
const PostPage: FC<IProps> = ({post}) => {
  console.log(post);
  return (
    <section className="container">
      <Link to={Routes.POSTS} className="btn btn-light">
        Back To Posts
      </Link>

      <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`${Routes.PROFILE}/${post.userID}`}>
            <img className="round-img" src={post.avatarUrl} alt={post.name} />
            <h4>{post.name}</h4>
          </Link>
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

      {/* <div className="posts">
      {post.comments?.map((c: Comment, i: number) => (
        <div className="post bg-white p-1 my-1" key={i}>
          <div>
            <a href="profile.html">
              <img className="round-img" src={c.avatarUrl} alt={c.name} />
              <h4>{c.name}</h4>
            </a>
          </div>
          <div>
            <p className="my-1">{c.text}</p>
          </div>
        </div>
      ))}
    </div> */}
    </section>
  );
};

/**
 * Container to fetch id params from thr URI and pass it to Profile page
 */
const PostPageContainer: FC = () => {
  const {id} = useParams();
  const Component = compose<FC>(
    firestoreConnect(() => [`${Collections.POSTS}/${id}`]),
    connect(({firestore: {data}}: RootState) => ({
      post: data.posts && data.posts[id],
    })),
  )(PostPage);

  return <Component />;
};

export default PostPageContainer;
