import React ,{Component}from 'react';
import axios from '../../axios';
import Block from '../../components/Block';
import './Blockchain.css';
import CryptoJS from 'crypto-js';
class Blockchain extends Component{
    
    state = {
        prev:'0000000000000000000000000000000000000000000000000000000000000000',
        blocks:[],
        error:false
    }
    maxNonce=5000;
    difficulty=2;
    pattern='00';
    
    
    componentDidMount () {
        let tempPrev=this.state.prev;
         let tempBlocks=[];
      axios.get('/data.json').then(res=>{
         const data =[res.data];
        
         
             let block;
          
            data.map(el=>{
            for(let x in el){
             block=el[x];
                       
             if(block.hash ==='11')         
              for(let y =0;y<=this.maxNonce;y++)
              if(block.hash.substr(0,this.difficulty)===this.pattern)
              { block.nonce=y-1;
              break;
              }
              else
              block.hash=CryptoJS.SHA256(y+tempPrev+block.userName+block.tA+block.tB).toString(CryptoJS.enc.Hex);
              
              
              console.log(block.tA)
              block ={...block,prev:tempPrev};
              tempPrev=block.hash;
             

              tempBlocks.push(block)
              
            }  
            return tempBlocks
        });
                
              
                
               
          
     
      this.setState({blocks: tempBlocks,prev:tempPrev});
      }).catch(error=>{
          console.log(error);
        this.setState({error: true});
      });
     
      
    }

    render(){
        let chain = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            
            chain = this.state.blocks.map(el => {
               
                return <Block
                    key={el.hash} 
                    hash={el.hash}
                    prev={el.prev} 
                    username={el.userName}
                    tA={el.tA}
                    tB={el.tB} 
                    nonce={el.nonce}
                
                   />;
            });
        }

        return(
            <section className="Chain">
            {chain}
        </section>
        );
    }
}

export default Blockchain;