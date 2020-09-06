import './HomeCards.css';
import React from 'react';

import ServiceCard from '../ServiceCard/ServiceCard';

class HomeCards extends React.Component {
    render() {
        return (
            <div className="home-cards-container">
                <div className="home-cards-central-container">
                    <h1 className="home-cards-text">We provide a wide range</h1>
                    <div className="home-cards-cards-container">
                        <ServiceCard gridAreaName="first" type="design" />
                        <ServiceCard gridAreaName="second" type="code" />
                        <ServiceCard gridAreaName="third" type="video" />
                        <ServiceCard gridAreaName="fourth" type="seo" />
                        <ServiceCard gridAreaName="fifth" type="marketing" />
                        <ServiceCard gridAreaName="sixth" type="infographics" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCards;