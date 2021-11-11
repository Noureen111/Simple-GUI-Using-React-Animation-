import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (

        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/">Noureen</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a activeclassname="manu_active" className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a activeclassname="manu_active" className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item active">
                                    <a activeclassname="manu_active" className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item active">
                                    <a activeclassname="manu_active" className="nav-link" href="/contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Navbar;