import React, {FC} from 'react';
import Comment from '../../types/Comment';

interface IProps {
  comments: Comment[];
}

const PostComments: FC<IProps> = ({comments}) => (
  <div className="posts">
    {comments?.map(({name, avatarUrl, text}: Comment, i: number) => (
      <div className="post bg-white p-1 my-1" key={i}>
        <div>
          <a href="profile.html">
            <img className="round-img" src={avatarUrl} alt={name} />
            <h4>{name}</h4>
          </a>
        </div>
        <div>
          <p className="my-1">{text}</p>
        </div>
      </div>
    ))}
  </div>
);

export default PostComments;
