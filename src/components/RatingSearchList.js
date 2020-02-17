import React from 'react';
import { connect } from 'react-redux';
import {getRatingsearch} from '../actions/feedbacks';
import FeedbackList from './FeedbackList';


 class RatingSearchList extends React.Component{

    constructor(props) {
        super(props); 
        this.onRatingChange = this.onRatingChange.bind(this);
             
        this.state = {
            newrating : '',
            error:''
        }
    }
    
    onRatingChange(e) {
        const rating = e.target.value;
        this.setState((state) => ({ ...state, newrating: rating }));
    }
     

render() { 
    return (
        <div>
            <form className="input-group mt-4 ml-4 w-50">
                <input type="text" className="form-control" value={this.state.newrating} onChange={this.onRatingChange} placeholder="Enter Rating here..."/>
                <div className="input-group-append">
                    <button className="form-control btn btn-primary" onClick={event => {
                        event.preventDefault();
                        if(!this.state.newrating){
                            this.setState((state) => ({ ...state, error: 'Enter Rating for search' }));
                        }
                        else{
                            this.setState((state) => ({ ...state, error: '' }));
                            this.props.dispatch(getRatingsearch(this.state.newrating));
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

export default connect()(RatingSearchList);