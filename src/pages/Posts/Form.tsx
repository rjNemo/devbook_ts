import React, {FC} from 'react';

interface IProps {
  text: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const PostsForm: FC<IProps> = ({text, handleSubmit, handleChange}) => (
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
);

export default PostsForm;
