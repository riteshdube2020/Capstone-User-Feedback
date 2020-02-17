import React from 'react';
import { connect } from 'react-redux';
import {getUsersearch} from '../actions/feedbacks';
import FeedbackList from './FeedbackList';


 class UsersearchList extends React.Component{

    constructor(props) {
        super(props); 
        this.onUseridChange = this.onUseridChange.bind(this);
             
        this.state = {
            newuserid : '',
            error:''
        }
    }
    
    onUseridChange(e) {
        const userid = e.target.value;
        this.setState((state) => ({ ...state, newuserid: userid }));
    }
     

render() { 
    return (
        <div>
            <form className="input-group mt-4 ml-4 w-50">
                <input type="text" className="form-control" value={this.state.newuserid} onChange={this.onUseridChange} placeholder="Enter Used-Id here..."/>
                <div className="input-group-append">
                    <button className="form-control btn btn-primary" onClick={event => {
                        event.preventDefault();
                        if(!this.state.newuserid){
                            this.setState((state) => ({ ...state, error: 'Enter User-Id for search' }));
                        }
                        else{
                            this.setState((state) => ({ ...state, error: '' }));
                            this.props.dispatch(getUsersearch(this.state.newuserid));
                        }
                    }}>Search</button>
                </div>
            </form>
            <div className="ml-4 my-2">
                {this.state.error && <b className="text-danger">{this.state.error}</b>}
            </div>
            <div className='container__list'>
                <FeedbackList />
            </div>
        </div>
    );

    }
}

export default connect()(UsersearchList);