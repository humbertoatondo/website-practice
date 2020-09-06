import './HomeMain.css';

import React from 'react';

class HomeMain extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="central-container">
                    <div className="text-container">
                        <h1 className="home-main-title">Our creativity is your success</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Fugit, dolorum.
                        </p>
                        <button className="learn-more-button">Learn More</button>
                    </div>
                    <img 
                        className="iso-image"
                        src={require("../../images/teamwork.png")}
                        alt="Teamwork"    
                    />
                </div>
            </div>
        );
    }
}

export default HomeMain;