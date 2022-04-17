import services1 from '../../../images/Services/services1.png'
import services2 from '../../../images/Services/services2.png'
import services3 from '../../../images/Services/services3.png'
import React from 'react';
import Service from '../Service/Service';

const Services = () => {

    const services = [
        { id: 1, name: "World Class Expert ", description: "Learn Personally From Me, and be the best version of yourself", images: services3, price: "$100" },
        { id: 2, name: "Freedom Pack", description: "Get Tips From Me and workout yourself, be brave!!", images: services2, price: "50$" },
        { id: 3, name: "Support&Review", description: "Get Reviewed every week on your progress by me", images: services1, price: "30$" }
    ]


    return (
        <div className='container my-5'>
            <h1 className='text-center'>Our Service Packages</h1>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;