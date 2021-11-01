import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="footer bg-dark py-5 text-white"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footone">
                                <img src="https://i.ibb.co/dPmt0dZ/02.png" />
                                <p>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h3 className="mb-4">Our Service</h3>
                            <ul className="list-inline fw-bold">
                                <li>All Vendors</li>
                                <li>Blog</li>
                                <li>Home</li>
                                <li>Home 2</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h3 className="mb-4">Quick Links</h3>
                            <ul className="list-inline fw-bold">
                                <li>Add A New Item</li>
                                <li>Manage All Orders</li>
                                <li>My Orders</li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h3 className="mb-4">Contact Us</h3>
                            <p><strong>Phone:</strong> +92300-400-2333</p>

                            <p><strong>Email:</strong> restaurant@gmail.com</p>

                            <div className="icon-area">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
