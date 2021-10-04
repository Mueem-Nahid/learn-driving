import React from 'react';

const NotFound = () => {
    return (
        <div className="container col-md-6 my-5 p-5 text-center">
            <h1 className="fst-italic fw-bolder">
                Oops!
            </h1>
            <h2>
                404 Not Found
            </h2>
            <div className="mb-5">
                Sorry, an error has occured, Requested page not found!
            </div>
        </div>
    );
};

export default NotFound;