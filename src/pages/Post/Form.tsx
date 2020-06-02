import React, {FC} from 'react';

interface IProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  text: string;
}

const PostForm: FC<IProps> = ({text, handleChange, handleSubmit}) => (
  <div className="post-form">
    <div className="post-form-header bg-primary">
      <h3>Leave A Comment</h3>
    </div>
    <form className="form my-1" onSubmit={handleSubmit}>
      <textarea
        name="text"
        cols={30}
        rows={5}
        placeholder="Comment on this post"
        value={text}
        onChange={handleChange}
      ></textarea>
      <input type="submit" className="btn btn-dark my-1" value="Submit" />
    </form>
  </div>
);

export default PostForm;
