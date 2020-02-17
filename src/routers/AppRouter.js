import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import NotFound from '../components/NotFound';
import AddFeedback from '../components/AddFeedback';
import UsersearchList from '../components/UsersearchList';
import RatingSearchList from '../components/RatingSearchList'

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />                              
                <Route path="/add" component={AddFeedback} />
                <Route path="/usersearch" component={UsersearchList} />
                <Route path="/ratingsearch" component={RatingSearchList} /> 
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;