import axios from '../axios/axios';

const _addFeedback = (feedback) => ({
    type: 'ADD_FEEDBACK',
    feedback
});

export const addFeedback = (feedbackData = {
    title: '',
    source: '',
    userid: '',
    review: '',
    rating: ''
}) => {
    return (dispatch) => {
        const feedback = {
            title: feedbackData.title,
            review: feedbackData.review,
            source: feedbackData.source,
            userid: feedbackData.userid,
            rating: feedbackData.rating
        };

        return axios.post('addfeedback', feedback).then(result => {
            dispatch(_addFeedback(result.data));
        });
    };
};

const _removeFeedback = ({ id } = {}) => ({
    type: 'REMOVE_FEEDBACK',
    id
});

export const removeFeedback = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`feedbacks/${id}`).then(() => {
            dispatch(_removeFeedback({ id }));
        })
    }
};

const _editFeedback = (id, updates) => ({
    type: 'EDIT_FEEDBACK',
    id,
    updates
});

export const editFeedback = (id, updates) => {
    return (dispatch) => {
        return axios.put(`feedbacks/${id}`, updates).then(() => {
            dispatch(_editFeedback(id, updates));
        });
    }
};

const _getFeedbacks = (feedbacks) => ({
    type: 'GET_FEEDBACKs',
    feedbacks
});

export const getFeedbacks = () => {
    return (dispatch) => {
        return axios.get('sfeedbacks').then(result => {
            const feedbacks = [];

            result.data.forEach(item => {
                feedbacks.push(item);
            });

            dispatch(_getFeedbacks(feedbacks));
        });
    };
};

const _getUsersearch = (feedback) => ({
    type: 'USER_SEARCH',
    data:feedback
});
export const getUsersearch = (uid) => {
    console.log("inside search action"+uid);
    return (dispatch) => {
        return axios.get(`userfeedbacks/${uid}`).then(result => {
            const ufeedbacks = [];
            console.log(result.data)
            result.data.forEach(item => {
                ufeedbacks.push(item);
            });

            dispatch(_getUsersearch(ufeedbacks));
        });
    };
};

const _getRatingsearch = (feedback) => ({
    type: 'RATING_SEARCH',
    data:feedback
});
export const getRatingsearch = (uid) => {
    console.log("inside search action"+uid);
    return (dispatch) => {
        return axios.get(`feedbacksrating/${uid}`).then(result => {
            const rfeedbacks = [];
            console.log(result.data)
            result.data.forEach(item => {
                rfeedbacks.push(item);
            });

            dispatch(_getRatingsearch(rfeedbacks));
        });
    };
};