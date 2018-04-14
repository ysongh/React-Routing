import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
    componentDidMount(){
        this.parseQueryParams();
    }
    
    componentDidUpdate(){
        this.parseQueryParams();
    }
    
    parseQueryParams(){
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        // entries is a method from URLSearchParams
        for (let param of query.entries()){
            if (this.state.courseTitle !== param[1]){
                // store the course title to this state
                this.setState({courseTitle: param[1]});
            }
        }
    }
    
    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                {/* match is from react package */}
                <p>You selected the Course with ID: {this.props.match.params.courseid}</p>
            </div>
        );
    }
}

export default Course;