import React from 'react';

const NavBar = () => {
    return (
        <nav class = "navbar">
            <ul>
                {links.map((link, index) => (
                    <li key = {index}>{link}</li>
                ))}
            </ul>

        </nav>
    );
};

export default NavBar;