import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

import logo from '../logo.svg';
import { routes } from './routes';
export const Navigation = () => {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(({ name, path }) => (
                  <li key={path}>
                    <NavLink to={path} activeClassName="nav-active" exact>{name}</NavLink>
                  </li>
                ))
              }

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={path}
                  render={() => {
                    return <Component />
                  }}
                />

              ))
            }
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}