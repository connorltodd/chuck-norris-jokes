import React from 'react';

function JokeCard(props) {
    return (
        <div className="card mx-auto" style={{ width: "18rem", margin: "50px" }}>
            <img src={props.icon_url} className="card-img-top" alt="..." style={{ height: "50px", width: "50px" }} />
            <div className="card-body">
                <h5 className="card-title">{props.categories}</h5>
                <p className="card-text">{props.value}</p>
            </div>
        </div>
    )
}

export default JokeCard;