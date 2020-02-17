import React from 'react';
//import BookForm from './BookForm';
import FeedbackForm from '../components/FeedbackForm';
import { connect } from 'react-redux';
//import { editBook } from '../actions/books';
import { editFeedback } from '../actions/feedbacks';

const EditFeedback = (props) => (
    <div className='container__box'>
        <FeedbackForm
            feedback={props.feedback}
            onSubmitFeedback={(feedback) => {
                props.dispatch(editFeedback(props.feedback.id, feedback));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        feedback: state.find((feedback) =>
            feedback.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditFeedback);