import './App.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Home />
            </div>
        );
    }
}

export default App;