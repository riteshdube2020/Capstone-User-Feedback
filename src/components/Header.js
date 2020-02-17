import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="section-heading text-center">
        <h2 className="navbar-link jumbotron">Capstone Project: User Feedback</h2>

        <div>
			<ul className="list-group list-group-horizontal justify-content-center">
            <NavLink to='/' className="list-group-item" exact={true}>Dashboard</NavLink>
            <NavLink to='/add' className="list-group-item">Add-Feedback</NavLink>
            <NavLink to='/usersearch' className="list-group-item">Search By User</NavLink>
            <NavLink to='/ratingsearch' className="list-group-item">Search By Rating</NavLink>
			</ul>
        </div>
    </header>


);

export default Header;