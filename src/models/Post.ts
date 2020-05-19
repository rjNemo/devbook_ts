import Comment from '../types/Comment';

/**
 * Post send by a dev
 */
interface Post {
  id: string;
  userID?: string;
  name?: string;
  text: string;
  avatarUrl?: string;
  likes: string[];
  comments: Comment[];
  //   date: Date;
}

/**
 * sample Post for development and tests
 */
export const dummyPost: Post = {
  id: '12',
  userID: '42',
  avatarUrl:
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  name: 'John Doe',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?',
  comments: [
    {
      avatarUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'John Doe',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt solutasuscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?',
    },
    {
      avatarUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Ruidy Nemo',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt solutasuscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?',
    },
  ],
  likes: ['0', '42'],
};

export default Post;
