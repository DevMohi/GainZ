import services1 from '../../../images/Services/services1.png'
import services2 from '../../../images/Services/services2.png'
import services3 from '../../../images/Services/services3.png'
import React from 'react';
import Service from '../Service/Service';

const Services = () => {

    const services = [
        { id: 1, name: "World Class Experts ", description: "Learn From the best ", images: services3, price: "$500" },
        { id: 2, name: "Freedom Pack", description: "24/7 Assist ", images: services2, price: "50$" },
        { id: 3, name: "Support&Review", description: "Best in the town", images: services1, price: "300$" }
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