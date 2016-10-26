import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Match, Link, Miss} from 'react-router';
import Counter from './Counter';
import Composed from './Composed';
import Props from './Props';
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
        <li><Link to="/counter">Basic</Link></li>
        <li><Link to="/composed">Composed</Link></li>
        <li><Link to="/props">Props</Link></li>
        <li><Link to="/generic">Generic</Link></li>
      </ul>
      <div>
        <Match exactly pattern="/" component={Counter} />
        <Match pattern="/counter" component={Counter} />
        <Match pattern="/composed" component={Composed} />
        <Match pattern="/props" component={Props} />
        <Match pattern="/generic" component={Generic} />
        <Miss component={NoMatch}/>
      </div>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

