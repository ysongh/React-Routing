import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';
import Users from '../Users/Users';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <NavLink 
                                    className="Course" 
                                    key={course.id}
                                    to={"/courses/" + course.id}
                                    exact
                                    >{course.title}</NavLink>
                            );
                        })
                    }
                </section>
                <Switch>
                    <Route path={"/courses/:id"} component={Course} />
                    <Route path="/users" component={Users} />
                    <Route render={() => (<h1>Not found</h1>) } />
                </Switch>
            </div>
        );
    }
}

export default Courses;