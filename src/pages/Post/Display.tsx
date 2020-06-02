import React, {FC} from 'react';
// Routing
import {Link} from 'react-router-dom';
import Routes from '../../constants/routes';

import Post from '../../models/Post';

const PostDisplay: FC<{post: Post}> = ({
  post: {name, userID, avatarUrl, text},
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <Link to={`${Routes.PROFILE}/${userID}`}>
        <img className="round-img" src={avatarUrl} alt={name} />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1">{text}</p>
    </div>
  </div>
);

export default PostDisplay;
