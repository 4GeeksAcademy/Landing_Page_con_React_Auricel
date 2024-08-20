import React from "react";

const Cards = (props) => {
 console.log(props);
 return (
<div className="col-12 col-md-6 col-lg-3 mb-3"> 
    <div className="card-h100" style={props.style}>
        <img src={props.cardImage} className="card-img-top" alt="cardImage" />
        <div className="card-body">
            <h5 className="card-tittle">{props.cardTitle}</h5>
            <p className="card-text"> {props.cardText}</p>
        </div>

        <div className="card-footer text-center">
            <a className="btn btn-primary">{props.buttonText}</a>
        </div>

    </div>

</div>

 );

};

export default Cards;