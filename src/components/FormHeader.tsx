import React, {FC} from 'react';
import Header from './Header';

interface IProps {
  title: string;
  lead: string;
  icon?: string;
}

const FormHeader: FC<IProps> = props => (
  <>
    <Header {...props} />
    <small>* marks required fields</small>
  </>
);

export default FormHeader;
