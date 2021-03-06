import React from 'react';
import web from './images/img2.jpg';


function Card(props) {
    return (
        <div className="col-md-4 col-10 mx-auto">
             <div className="card mb-5">
                    <div className="card mx-auto" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={props.imgsrc} alt={props.title} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;