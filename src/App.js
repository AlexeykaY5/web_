import './styles/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/homePage';



function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product/:productId" component={Product} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
