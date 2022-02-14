import React from "react";

const Card = (props) => {
    return (
        <>
        <div className=" tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
           <img src= {props.imgscr} alt="Robot"/>
           <div className=" bg-light-yellow ma2 grow ">
               <h2>{props.name}</h2>
               <p>{props.username}</p>
               <h3>{props.email}</h3>
           </div>
        </div>
        </>
    );
}
 export default Card;