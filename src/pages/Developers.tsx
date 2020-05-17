import React, {FC} from 'react';
// Redux
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {RootState} from '../store';
// Style
import Header from '../components/Header';
import DevProfile from '../components/DevProfile';
import {DevSummary} from '../models/Dev';

interface IProps {
  developers: DevSummary[];
}
/**
 * Developers list page
 */
const Developers: FC<IProps> = ({developers}) => (
  <section className="container">
    <Header
      title="Developers"
      lead="Browse and connect with developers"
      icon="connectdevelop"
    />
    <div className="profiles">
      {developers?.map(dev => (
        <DevProfile key={dev.id} {...dev} />
      ))}
    </div>
  </section>
);

export default compose<FC>(
  firestoreConnect(() => ['users']), // or { collection: 'users' }
  connect((state: RootState, props) => ({
    developers: state.firestore.ordered.users,
  })),
)(Developers);
