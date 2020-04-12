import React from 'react';
import HomeCard from './HomeCard/HomeCard';

// Chuck Norris Categories Endpoint 
// https://api.chucknorris.io/jokes/categories

// Chuck Norris Joke Category Endpoint
// https://api.chucknorris.io/jokes/random?category={category}

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