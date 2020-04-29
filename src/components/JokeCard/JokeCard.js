import React from 'react';

function JokeCard(props) {
  return (
    <div className="card mx-auto " style={{ width: '18rem', margin: '50px' }}>
      <img src={props.icon_url} className="card-img-top mt-2" alt="..." style={{ height: '50px', width: '50px', margin: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title text-center">{props.categories}</h5>
        <p className="card-text text-center">{props.value}</p>
      </div>
    </div>
  );
}

export default JokeCard;
