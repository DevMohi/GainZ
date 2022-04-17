import services1 from '../../../images/Services/services1.png'
import services2 from '../../../images/Services/services2.png'
import services3 from '../../../images/Services/services3.png'
import React from 'react';
import Service from '../Service/Service';

const Services = () => {

    const services = [
        { id: 1, name: "World Class Experts", description: "Learn From the best", images: services3 },
        { id: 2, name: "Freedom", description: "24/7 Open", images: services2 },
        { id: 3, name: "Support&Review", description: "Best in the town", images: services1 }
    ]


    return (
        <div className='container my-5'>
            <h1 className='text-center'>Our Services</h1>
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