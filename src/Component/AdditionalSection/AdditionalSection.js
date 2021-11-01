import React from 'react';
import  './AdditionalSection.css';

const AdditionalSection = () => {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="order-section">
                            <div>
                                <h5 className="text-warning fw-bold">DINE IN OR TAKE AWAY</h5>
                                <h1 className="fw-bold my-3">Get Your Order 24/7 Right At Your Doorsteps</h1>
                                <p>Plant-based diets may offer an advantage over those that are not plant based with respect to prevention and management of diabetes. the adventist health studies found that vegetarians have approximately half the risk of developing diabetes</p>
                                <div className="btn-area mt-4">
                                    <a href="#" className="btn btn-warning btn-lg">Food Order</a>
                                    <a href="#" className="btn btn-dark btn-lg ms-4">Search Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://i.ibb.co/yF01YhD/Online-delivery-1.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalSection;