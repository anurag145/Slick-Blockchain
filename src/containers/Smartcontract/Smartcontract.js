import React ,{Component}from 'react';
import axios from '../../axios';
import Contract from '../../components/Contract/Contract';
import './Smartcontract.css'

import firebase from '../../firebaseConfig';

class Smartcontract extends Component{
  state={
      error:false,
      contracts:[]
  }
    componentDidMount()
    {    
        
        let contracts=[];
      
        axios.get('/contracts.json').then(res=>{
            console.log(res.data);
            const data = [res.data];
        
           
            data.map(el=>{
                let y=0;
                for(let x in el)
                {    
                   el[x] ={...el[x],count:y}
                   y++;
                  
                    contracts.push(el[x]); 
                    firebase.database().ref('/contracts/'+el[x].tA).set(el[x]).then(res=>{
                        if(el[x].conditionB==='false')
                        firebase.database().ref('/contracts/'+el[x].tA).on('value',(snapshot)=>{
                            console.log("hello")
                              let temp=snapshot.val().tB;
                              let temp1=snapshot.val().conditionB;
                              let temp2=snapshot.val().count;
                              if(temp1==='true')
                            firebase.database().ref('/data/'+el[x].tA).set({
                                tA:el[x].tA,
                                tB:temp,
                                userName:el[x].userName,
                                nonce:0,
                                hash:'11'
                            }).then(res=>{
                                   let con=this.state.contracts;
                                   con[temp2].tB=temp;
                                   con[temp2].conditionB=temp1;
                                   firebase.database().ref('/contracts/'+el[x].tA).off();
                                this.setState({contracts:con});

                            });
                            
                        });
                    });
                    
                }    
                return contracts;

            });
            console.log(contracts);
            this.setState({contracts:contracts})
            
        }).catch(error=>{
            console.log(error);
        });
        console.log(contracts);
    }
    render(){
        let list=<p style={{textAlign: 'center'}}>No Contract yet</p>;
        if(this.state.contracts.length!==0)
        if(!this.state.error)
        {
           list = this.state.contracts.map(el=>{
               return <Contract
                    key={el.tA}
                    username={el.userName}
                    conditionA={el.conditionA}
                    conditionB={el.conditionB}
                    tB={el.tB}
               />                              
           })
        }else
        list=<p style={{textAlign: 'center'}}>Something went wrong!</p>;

        return <section className="Smartcontract">
            {list}
            </section>
    }
}

export default Smartcontract;