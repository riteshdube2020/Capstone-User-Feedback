import React from 'react';
import FeedbackForm from './FeedbackForm';
import { connect } from 'react-redux';
import { addFeedback } from '../actions/feedbacks';

const AddFeedback = (props) => (
    <div>
        <FeedbackForm
            onSubmitFeedback={(feedback) => {
                props.dispatch(addFeedback(feedback));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddFeedback);
