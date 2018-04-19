import React ,{Component}from 'react';
import axios from '../../axios';
import Contract from '../../components/Contract/Contract';
import './Smartcontract.css'

class Smartcontract extends Component{
  state={
      error:false,
      contracts:[]
  }
    componentDidMount()
    {     let contracts=[];
        axios.get('/contracts.json').then(res=>{
            const data = [res.data];
        
           
            data.map(el=>{
                for(let x in el)
                {
                    contracts.push(el[x]);
                }
                return contracts;
            });
            this.setState({contracts:contracts})
        }).catch(error=>{
            console.log(error);
        });
        console.log(contracts);
    }
    render(){
        let list=<p style={{textAlign: 'center'}}>Something went wrong!</p>;
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
        }
        return <section className="Smartcontract">
            {list}
            </section>
    }
}

export default Smartcontract;