import React from 'react';
import FeedbackList from './FeedbackList';
import {getFeedbacks} from '../actions/feedbacks';
import {connect} from 'react-redux';

const DashBoard = (props) => {
    props.fetchFeedbacks();
    return(
        <div className="justify-content-center">
            <FeedbackList />
        </div>
    );
};

const mapDispatchToStore = (dispatch) => {
    return {
        fetchFeedbacks: () => dispatch(getFeedbacks())
    }
}

export default connect(null,mapDispatchToStore)(DashBoard);