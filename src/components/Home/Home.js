import React from 'react';
import JokeCard from '../JokeCard/JokeCard';

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
                <JokeCard />
            </div>
        )
    }

}

export default Home;