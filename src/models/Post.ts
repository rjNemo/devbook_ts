import Comment from '../types/Comment';

interface Post {
  //   userID: string;
  name: string;
  text: string;
  picture: string;
  //   likes: string[];
  comments: Comment[];
  //   date: Date;
}

export const dummyPost: Post = {
  picture:
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  name: 'John Doe',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?',
  comments: [
    {
      picture:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'John Doe',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt solutasuscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?',
    },
    {
      picture:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      name: 'Ruidy Nemo',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt solutasuscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate aliquam?',
    },
  ],
};

export default Post;
