import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
            <div className='flex gap-5 font-bold'>
                <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/">Home</a>
                <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/about">About</a>
                <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/contact">Contact</a>
                <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/dashboard">Dashboard</a>
                <a className='w-fit hover:bg-gray-400 px-4 py-2 rounded-lg' href="/blogs">Blogs</a>
            </div>
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