import React from 'react';

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
            <ul>
                { navLinks.map((link, index) => (
                    <li key={index}>
                        <a href="{link.path}">{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}