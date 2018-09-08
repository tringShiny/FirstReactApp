import React,{Component} from 'react';
import './content.css';
import image1 from '../../assets/images/image1.jpg';

class Content2 extends Component{
    render(){
        
        return ( 
               <div class="row">
                    <h2 class="des">Description block</h2>
                    <img class="image" src={image1}/>
                </div>
                );
    }
}

export default Content2;
