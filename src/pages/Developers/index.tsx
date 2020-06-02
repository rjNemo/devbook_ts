import React, {FC} from 'react';
// Redux
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {RootState} from '../../store';
// Style
import DevProfile from './Profile';
import Header from '../../components/Header';

import {DevSummary} from '../../models/Dev';

import Collections from '../../constants/collections';

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
  firestoreConnect(() => [Collections.USERS]),
  connect((state: RootState) => ({
    developers: state.firestore.ordered.users,
  })),
)(Developers);
