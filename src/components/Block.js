import React from 'react';


import './Block.css';

const post = (props) => {
  
    return(
    <article className="Post" onClick={props.clicked}>
        
        <div className="UserName">
         UserName: {props.username}
        
        </div>
        <div>
            <p>Room Timestamp: {props.tA}</p>
        <p>Appliance Timestamp: {props.tB}</p>
            </div>
        <div className="hash">
        <h1>Nonce: {props.nonce}</h1>
        <h1>Prev: {props.prev}</h1>
        <h1>Hash: {props.hash}</h1>
        </div>
        
            
    
    </article>
    );
};

export default post;