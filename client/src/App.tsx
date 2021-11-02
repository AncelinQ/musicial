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
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { StandardLayout } from './layouts';

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
  faStar
);

const App: FC = () => {
  return (
    <StandardLayout>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/ads" component={AdPage} />
        </Switch>
      </Router>
    </StandardLayout>
  );
};

export default App;
