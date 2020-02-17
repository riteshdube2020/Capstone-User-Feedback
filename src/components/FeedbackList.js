import React from 'react';
import { connect } from 'react-redux';                                                                                      
import Feedback from './Feedback';

const FeedbackList = (props) => (
    <div>
        {props.feedbacks.map(feedback => {
            return (
                <div key={feedback.id}>
                    <Feedback {...feedback} />
                </div>
            );
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        feedbacks: state
    };
}

export default connect(mapStateToProps)(FeedbackList);