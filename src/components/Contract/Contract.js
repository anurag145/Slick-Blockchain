import React from 'react';
import './Contract.css';
const contract = props =>{
    let classname="Contract";
    let TimeB="Waiting for Appliance activation";
    if(props.conditionB==='true')
     {classname+=" Executed";
        TimeB="Executed At "+props.tB;
    }
    return ( 
     
        <article className={classname}> 
            <div>
                <div>
                    {props.username}
                </div>
                <div>
                    <p>Condition A First contact: {props.conditionA}</p>
                </div>
                <div>
                    <p>Condition B Second contact: {props.conditionB}</p>
                </div>
                <div>
                   {TimeB}
                    </div>
            </div>
        </article>
    );

}

export default contract;