const feedbacksReducerDefaultState = [];

export default (state = feedbacksReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_FEEDBACK': return [ ...state, action.feedback];
        case 'REMOVE_FEEDBACK': return state.filter(({ id }) => id !== action.id);
        case 'EDIT_FEEDBACK': return state.map((feedback) => {
                                if (feedback.id === action.id) {
                                    return { ...feedback, ...action.updates };
                                } 
                                else {
                                    return feedback;
                                }
                            });
        case 'GET_FEEDBACKs': return action.feedbacks;
        case 'USER_SEARCH': return action.data;
        case 'RATING_SEARCH': return action.data;
        default: return state;
    }
};