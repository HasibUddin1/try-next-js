import React from 'react';
import Navbar from '../components/Navbar';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {children}
            </div>
            <div>
                <h1>Footer</h1>
            </div>
        </div>
    );
};

export default WithLayout;