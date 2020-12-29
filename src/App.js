import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Alert } from './components/layout/Alert';
import { Navbar } from './components/layout/Navbar';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';

const App = () => {
  const state = useSelector((state) => state);
  return (
    <Router>
      <div>
        <Navbar />
        {state.error && <Alert />}
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
