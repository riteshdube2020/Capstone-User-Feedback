import React from 'react';
import { connect } from 'react-redux';
import Feedback from './Feedback';


const FeedbackList1 = (props) => (
    <div>
        Feedback List:
        <ul>
            
            {props.ufeedbacks.map(feedback => {
                return (
                    <li key={feedback.id}>
                        <Feedback {...feedback} />
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

export default connect(mapStateToProps)(FeedbackList1);