import React from 'react';
import web from './images/img1.png';


function Common(props) {
    return (
        <div>
            <section id="header" className="d-flex align-items-center" >
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row" >
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-conent-center flex-column">
                                    <h1>
                                    {props.name} <strong className="brand-name" > Our Web Tech</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of tallented developer making websites
                                    </h2>
                                    <div className="mt-3 ">
                                        <a className="btn-get-started" href={props.visit}>{props.btname}</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="some" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Common;