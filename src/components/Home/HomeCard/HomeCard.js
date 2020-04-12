import React from 'react';

function HomeCard(props) {
    return (
        <div className="card mx-auto" style={{ width: "18rem", margin: "50px" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    )
}

export default HomeCard;