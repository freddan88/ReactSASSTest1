import React from 'react';

const header = () => {
    return (
        <nav className="main-nav">
            <h3>LOGO</h3>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/links">Links</a></li>
                <li><a href="/downloads">Downloads</a></li>
                <li><a href="/tutorials">Tutorials</a></li>
            </ul>
        </nav>
    );
};

export default header;