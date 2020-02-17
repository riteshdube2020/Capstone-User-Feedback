import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import feedbacks from '../reducers/feedbacks';

export default () => {
    return createStore(feedbacks, applyMiddleware(thunk));
};