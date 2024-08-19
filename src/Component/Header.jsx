import React from 'react';
import { Link } from 'react-router-dom';


// Header Component
const Header = ({ title, subtitle, buttonText, imageSrc }) => (
    <div className="header">
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
           <Link 
           to = "/collection" > <button className="header-button">{buttonText}</button> </Link> 
        </div>

        <div>
            <img className="header-image" src={imageSrc} width="400" height="400" alt="Header" />
        </div>
    </div>
);

// Service Component
const Service = ({ services }) => (
    <div className="service">
        <div className="service-container-1">
            <div>
                <h2>We Provide Best</h2>
                <h2>And Overall Customer Experience</h2>
            </div>

            <div>
                <p className="textmain">|| We Ensure that our customers have the best shopping experience</p>
            </div>
        </div>

        <div className="service-container-2">
            {services.map((service, index) => (
                <div key={index}>
                    <i className={service.iconClass}></i>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    </div>
);

// Main App Component
const App = () => {
    const headerData = {
        title: "Level up your style",
        subtitle: "with our stunning Collections",
        buttonText: "Shop now",
        imageSrc: "img1nostra.jpg"
    };

    const serviceData = [
        {
            iconClass: 'fa-regular fa-smile',
            title: 'Satisfaction Guarantee',
            description: 'Our satisfaction guarantee ensures you get the best experience with our products. If you\'re not completely satisfied, we\'ll offer a full refund or replacement.'
        },
        {
            iconClass: 'fa-regular fa-smile',
            title: 'New Arrival EveryDay',
            description: 'We bring new arrivals every day to ensure that you have a fresh selection of products. Stay updated with our latest offerings.'
        },
        {
            iconClass: 'fa-solid fa-bolt',
            title: 'Quick & Fast Delivery',
            description: 'Our quick and fast delivery ensures you get your products as soon as possible. We prioritize timely delivery for your convenience.'
        }
    ];

    return (
        <div>
            <Header {...headerData} />
            <Service services={serviceData} />
        </div>
    );
};

export default App;
