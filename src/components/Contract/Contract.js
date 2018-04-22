import React from 'react';
import './Contract.css';
const contract = props =>{
    let classname="Contract";
    let TimeB="Status: Pending";
    if(props.conditionB==='true')
     {classname+=" Executed";
        TimeB="Status: Executed At "+props.tB;
    }
    return ( 
     
        <article className={classname}> 
            <div>
                <div>
                    {props.username}
                </div>
                <div >
                    <p>Conditions For fulfilment: </p>
                    <p> First contact: {props.conditionA}</p>
                    <p> Second contact: {props.conditionB}</p>
                </div>
                 <div className="Result">
                   {TimeB}
                    </div>
            </div>
        </article>
    );

}

export default contract;