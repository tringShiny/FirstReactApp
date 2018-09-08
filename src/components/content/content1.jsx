import React,{Component} from 'react';
import './content.css';

class Content1 extends Component{
    // state={
    //     rowValue: 0
    // };
    
    
    render(){
        
        return ( 
               <div class="row">
                    <img class="image" src={require('../../assets/images/image1.jpg')}/>
                    <h2 class="des">Description block</h2>    
                </div>
                );
    }
}

export default Content1;

