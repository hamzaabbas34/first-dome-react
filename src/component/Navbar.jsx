import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="container">
                <div className="nav">
                    <div className="log">
                        <h1>Information Word</h1>
                    </div>
                    <div className="navitems">
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Herosection">Main</Link>
                        <Link to="/">Content</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
