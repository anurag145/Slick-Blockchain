import React ,{Component}from 'react';
import axios from '../../axios';
import Block from '../../components/Block';
import './Blockchain.css';
import $ from 'jquery';
//import cryptojs from '../../sha256';
class Blockchain extends Component{
    state = {
        posts: []
        
       
    }
    componentDidMount () {
       // console.log(this.props);
        axios.get( '/data.json' )
            .then( response => {
               // console.log(response.data);
                const posts = [response.data];
                console.log(posts);
                const temp2=[];
                //const CrytoJs= temp2;
                posts.map(post => {
                    const temp= [];
                    for(let x in post)
                    {
                        temp.push(x)
                    }
                   console.log(post[temp[0]]);
                    
                    for(let x in temp)
                    {   //console.log(temp[x]);
                        temp2.push(post[temp[x]])
                    }
                   // console.log(temp2);
                    return temp2;
                });
                //const updatedPosts= 
                const updatedPosts =temp2.map(el=>{
                   
                  
                    console.log($(el)[0]);
                    return {
                        ...el,
                        author:"Anurag"
                    }
                });
                   
              //  console.log(updatedPosts)
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
              //  this.setState({error: true});
            });
    }


    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render(){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Block
                    key={post.timeStamp} 
                    title={post.timeStamp} 
                    author={post.beconName}
                   // clicked={() => this.postSelectedHandler(post.id)} 
                   />;
            });
        }

        return(
            <section className="Posts">
            {posts}
        </section>
        );
    }
}

export default Blockchain;