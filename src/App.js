import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import { logout } from './services/fetch-utils';
import ListPage from './ListPage';

import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetch() {
      const user = await getUser();

      if (user) setUser(user);
    }

    fetch();
  }, []);

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <Router>
      <div className='App'>
        <header>
          { user && <a onClick={handleLogout} >Logout</a> }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user 
                  ? <Link to="/shopping-list" /> 
                  : <AuthPage />
              }
            </Route>
            <Route exact path="/shopping-list">
              {
                user 
                  ? <ListPage />
                  : <Redirect to="/" /> 
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );}