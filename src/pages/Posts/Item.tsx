import React, {FC} from 'react';
// Routing
import {Link} from 'react-router-dom';
import Routes from '../../constants/routes';
// Styling
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';

import Post from '../../models/Post';

interface IProps {
  post: Post;
  addLike: (
    postID: string,
  ) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PostsItem: FC<IProps> = ({post, addLike}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <Link to={`${Routes.PROFILE}/${post.userID}`}>
        <img src={post.avatarUrl} alt={post.name} className="round-img" />
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
      <Link to={`${Routes.POST}/${post.id}`} className="btn btn-primary">
        Discussion
      </Link>
    </div>
  </div>
);

export default React.memo(PostsItem);
