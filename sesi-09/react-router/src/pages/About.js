import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
    return (
        <div>
            <h1>Home</h1>
            <p>This is my Home page</p>
            <Link to='about-company'>About The Company</Link> | <Link to='about-me'>About Me</Link>
            <Outlet />
        </div>
    )
}

export default About;