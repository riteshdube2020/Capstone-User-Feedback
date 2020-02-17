import React from 'react';
import { connect } from 'react-redux';
import { removeFeedback } from '../actions/feedbacks';

const Feedback = ({ id, title, rating, userid, review,source, dispatch }) => (  
    <ul className="list-group m-4">
        <li className="list-group-item"><strong className="col-md-6">ID:</strong>{id}</li>
        <li className="list-group-item"><strong className="col-md-6">Title:</strong>{title}</li>
        <li className="list-group-item"><strong className="col-md-6">UserId:</strong>{userid}</li>
        <li className="list-group-item"><strong className="col-md-6">Rating:</strong>{rating}</li>
        <li className="list-group-item"><strong className="col-md-6">Source:</strong>{source}</li>
        {{review} && <li className="list-group-item text-justify"><strong className="col-md-6">Review:</strong>{review}</li>}
        <button onClick={() => {
            dispatch(removeFeedback({ id }));
        }}>Delete</button>
    </ul>
);

export default connect()(Feedback)