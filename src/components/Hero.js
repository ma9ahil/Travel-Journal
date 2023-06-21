import React from "react";

export default function Hero(props){
    console.log(props)
    return(
       <div className="hero">
        <div className="holder">
        <img className="place-image" src={props.img}></img>
        </div>
        <div className="rows">
        <div className="location"> <h3>{props.location}</h3></div>
        <a className="google-links" href={props.lk}>View on Google Maps</a>
        <h1 className="title">{props.title}</h1>
        <h2 className="date">{props.sD}-{props.eD}</h2>
        <p className="description">{props.desc}</p>
        </div>
       </div> 
    );
}