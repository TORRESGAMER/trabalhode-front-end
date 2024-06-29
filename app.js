import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div>
        <h1>suamelhorviagem.com</h1>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/list" component={ListPage} />
          <Route path="/details/:id" component={DetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
