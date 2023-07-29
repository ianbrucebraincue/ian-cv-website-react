import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
    {
        title: 'CV',
        path: '/cv'
    },
    {
        title: 'Ian Bruce',
        path: '/'
    },
    {
        title: 'Projects',
        path: '/projects'
    }
];

export default function Navigation () {
    return (
        <nav className="site-nav-main" aria-labelledby="mainmenu">
            <h2 id="mainmenulabel" className="visuallyhidden">Main Menu</h2>
            <ul className="main-nav-links">
                { navLinks.map((link, index) => (
                    <li className="main-nav-link" key={index}>
                        <NavLink to={link.path}>{link.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}