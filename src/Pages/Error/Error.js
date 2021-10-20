import React from 'react';

const Error = () => {
    return (
        // 404 route 
        <div> 
            <div className=" p-5 mx-auto align-self-center justify-content-center">
                <img width="400px" height="300px" className="  mx-auto d-block" src="https://png.pngtree.com/png-vector/20191031/ourlarge/pngtree-socket-404-error-page-for-desktop-and-mobile-png-image_1928856.jpg" alt="" />
                <h1 className="text-center">THIS PAGE CANNOT BE FOUND</h1>
                <p className="text-center">We are really sorry, but page you requested is missing :( Perhaps searching again can help.</p>
            </div>
        </div>
    );
};

export default Error;