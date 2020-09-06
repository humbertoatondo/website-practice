import './Home.css';
import React from 'react';

import HomeMain from '../HomeMain/HomeMain';
import HomeCards from '../HomeCards/HomeCards';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeMain />
                <HomeCards />
                <HomeMain />
            </div>
        )
    }
}

export default Home;