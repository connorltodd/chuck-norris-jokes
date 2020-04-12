import React from 'react';
import HomeCard from './HomeCard/HomeCard';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div className="container">
                <HomeCard />
            </div>
        )
    }

}

export default Home;