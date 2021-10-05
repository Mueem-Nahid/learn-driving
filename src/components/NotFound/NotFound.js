import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        // <div className="container col-md-6 my-5 p-5 text-center">
        //     <h1 className="fst-italic fw-bolder">
        //         Oops!
        //     </h1>
        //     <h2>
        //         404 Not Found
        //     </h2>
        //     <div className="mb-5">
        //         Sorry, an error has occured, Requested page not found!
        //     </div>
        // </div>
        <section className="page_404">
            <div className="container">
                <div className="row"> 
                    <div className="col-sm-12">
                        <div className="col-sm-12 col-sm-offset-1 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div> 
                            <div className="contant_box_404">
                                <h3 className="h2">
                                Look like you're lost
                                </h3>
                                <p>The page you are looking for not avaible!</p>
                                <a href="/home" className="link_404">Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;