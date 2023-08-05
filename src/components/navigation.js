import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useOutsideClick from "../useOutsideClick";

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
    const ref = useRef();
    const [mobileOpen, setMobileOpen] = useState(false);

    useOutsideClick(ref, () => {
        if (mobileOpen) {
            setMobileOpen(false);
        }
    });

    function toggleMobileNav (event) {
        event.nativeEvent.stopImmediatePropagation();
        setMobileOpen(!mobileOpen);
    };

    return (
        <nav className="site-nav-main" aria-labelledby="mainmenu">
            <h2 id="mainmenulabel" className="visuallyhidden">Main Menu</h2>
            <div className="mobile-nav-header" aria-labelledby="mainmenu-mobile">
                <NavLink to="/">
                    Ian Bruce
                </NavLink>
                <button className="hamburger" onClick={toggleMobileNav}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
            <ul ref={ref} className={`main-nav-links ${mobileOpen ? "active" : ""}`}>
                { navLinks.map((link, index) => (
                    <li className="main-nav-link" key={index}>
                        <NavLink to={link.path}>{link.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}