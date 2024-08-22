import React from "react";
import "../../styles/Cards.css"

const Cards = (props) => {
 console.log(props);
 return (
<div className="col-12 col-md-6 col-lg-3 mb-3" > 
    <div className="card h-100">
        <img src={props.cardImage} className="card-img-top h-75" alt="cardImage" />
        <div className="card-body">
            <h5 className="card-tittle">{props.cardTitle}</h5>
            <p className="card-text"> {props.cardText}</p>
        </div>

        <div className="card-footer text-center">
            <a className="btn btn-primary estilo" target="_blank">{props.bottonText}</a>
        </div>

    </div>

</div>

 );

};

export default Cards;