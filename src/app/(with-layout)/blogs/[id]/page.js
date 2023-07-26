import React from 'react';

const SingleBlog = ({params}) => {
    return (
        <div>
            <h1>This is Single Blog Component {params.id}</h1>
        </div>
    );
};

export default SingleBlog;