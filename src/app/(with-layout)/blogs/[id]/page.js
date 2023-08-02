import React from 'react';

const SingleBlog = ({ params }) => {



    return (
        <div>
            <h1>Blog in {params.id}</h1>
        </div>
    );
};

export default SingleBlog;