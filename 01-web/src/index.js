import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Match, Link, Miss} from 'react-router';
import Counter from './Counter';
import Composed from './Composed';
import Generic from './Generic';
import './index.css';

const NoMatch = ({location}) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Basic Counter</Link></li>
        <li><Link to="/composed">Composed Counter</Link></li>
        <li><Link to="/generic">Generic Counter</Link></li>
      </ul>
      <div>
        <Match exactly pattern="/" component={() => (
          <div>All Things Open Demos</div>
        )} />
        <Match pattern="/counter" component={Counter} />
        <Match pattern="/composed" component={Composed} />
        <Match pattern="/generic" component={Generic} />
        <Miss component={NoMatch}/>
      </div>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

