import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AdPage, HomePage, LoginPage } from './pages';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faEnvelope,
  faUserCircle,
  faSignInAlt,
  faSignOutAlt,
  faPlusSquare,
  faSearch,
  faMapMarkedAlt,
  faHeart,
  faStar,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { StandardLayout } from './layouts';
import MusicianPage from './pages/musicians-page';
import BandPage from './pages/bands-page';

library.add(
  fab,
  faBars,
  faEnvelope,
  faUserCircle,
  faSignInAlt,
  faSignOutAlt,
  faPlusSquare,
  faSearch,
  faMapMarkedAlt,
  faHeart,
  faStar,
  faMapMarkerAlt
);

const App: FC = () => {
  return (
    <StandardLayout>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/ads" component={AdPage} />
          <Route exact path="/bands" component={BandPage} />
          <Route exact path="/musicians" component={MusicianPage} />
        </Switch>
      </Router>
    </StandardLayout>
  );
};

export default App;
