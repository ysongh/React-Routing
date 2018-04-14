import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, NavLink, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
//import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import NoMatch from './components/NoMatch/NoMatch';

class App extends Component {
  render () {
    return (
      // BrowserRouter enable router features
      <BrowserRouter>
        <div className="App">
          <header>
            <h1>Welcome</h1>
            {/* dont use <a>, it will reload the page */}
            <nav>
              <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}} >
                <li style={{margin: '10px', display: 'inline-block'}}>
                   <NavLink to="/courses">Courses</NavLink>
                </li>
                <li style={{margin: '10px', display: 'inline-block'}}>
                   <NavLink to='/users'>Users</NavLink>
                </li>
              </ul>
                   
                    
            </nav>
          </header>
          
          <Switch>
              <Route path="/users" component={Users} />
              {/*<Route path="/courses/:courseid" component={Course} /> */}
              <Route path="/courses" component={Courses} />
              <Redirect from="all-courses" to="/courses" />
              {/* Catch any unknown page and display a error page*/}
              <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
