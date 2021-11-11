import React, {useState} from 'react';
import Card from './Card.jsx';
import web from './images/img2.jpg';

function Service() {
    const [data, setData] = useState([
        {
            imgsrc : web,
            title : 'web'
        },
        {
            imgsrc : web,
            title : 'web'
        },
        {
            imgsrc : web,
            title : 'web'
        },
        {
            imgsrc : web,
            title : 'web'
        },
        {
            imgsrc : web,
            title : 'web'
        },
        {
            imgsrc : web,
            title : 'web'
        }
    ])
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center head1" >Our Services</h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {data.map((v, i)=>{
                                return <Card key={i} imgsrc={v.imgsrc} title={v.title} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;