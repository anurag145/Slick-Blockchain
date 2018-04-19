import React, { Component } from 'react';
import Blockchain from '../Blockchain/Blockchain';
import Smartcontract from '../Smartcontract/Smartcontract';

import './Main.css';
import {Route,Link} from 'react-router-dom'

class Main extends Component {
   

   
   
    render () {
       
        return (
            <div className="Main">
                <header>
               
                    <nav>
                    <div style={{float:"left" , margin: '15px',color:"#9d9d9d", fontSize:"150%"}}>Slick</div>
                        <ul>
                           <li><Link to="/" >Home</Link></li>
                           <li><Link to="/blockchain">Blockchain</Link></li>
                           <li><a href="https://github.com/anurag145/Slick-Blockchain">Source</a></li> 
                        </ul>
                    </nav>
                </header>
                <div>
                 <Route path='/' exact component={Smartcontract}/>

                                  <Route path='/blockchain' exact component={Blockchain}/>
               </div>
            </div>
        );
    }
}

export default Main;