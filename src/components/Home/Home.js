import React from 'react';
import axios from 'axios';
import JokeCard from '../JokeCard/JokeCard';

// Chuck Norris Categories Endpoint
// https://api.chucknorris.io/jokes/categories

// Chuck Norris Joke Category Endpoint
// https://api.chucknorris.io/jokes/random?category={category}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      joke: [],
    };
  }


  componentDidMount() {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then((response) => this.setState({ categories: response.data }));
  }

    getJoke = (category) => {
    	axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    		.then((response) => this.setState({ joke: response.data }));
    }

    render() {
    	console.log(this.state);
    	return (
      <div className="container">
        <JokeCard {...this.state.joke} />
        {this.state.categories.map((category) => (
          <button
            className="btn btn-success"
            key={category}
            onClick={() => this.getJoke(category)}
            style={{ width: '100px', margin: '10px' }}
          >
            {category}
          </button>
    			))}
      </div>
    	);
    }
}

export default Home;
