import React from 'react';
import { connect } from 'react-redux';
import Feedback from '../components/Feedback';


const FeedbackListFiltered = (props) => (
    <div>
        <ul>
            
            {props.ufeedbacks.map(feedback => {
                return (
                    <li key={feedback.id}>
                        <Feedback feedback={feedback} />
                    </li>
                );
            })}
        </ul>

        

    </div>
);

const mapStateToProps = (state) => {
    return {
        ufeedbacks: state
    };
}

export default connect(mapStateToProps)(FeedbackListFiltered);