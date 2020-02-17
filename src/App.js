import React from 'react';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const store = getAppStore();

const App = () => (
        <Provider store={store}>
            <AppRouter />
        </Provider>
);

export default App;