import React from 'react';

function Contact() {
    return (
        <div>
            <div className="mt-5">
                <h1 className="text-center">Contact US</h1>
            </div>

            <div className="container" >
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">

                        <form>

                        <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Phone</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mobbile number" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;