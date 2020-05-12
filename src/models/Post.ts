import Comment from '../types/Comment';

interface Post {
  userID: string;
  name: string;
  text: string;
  picture: string;
  likes: string[];
  comments: Comment[];
  date: Date;
}

export default Post;
