import React,{Component} from 'react';
import Content1 from '../content/content1';
import Content2 from '../content/content2';
import './mid_content.css';

class Midcontent extends Component{
    render(){
        return(
           <div>
               <div class="middle">
                <Content1/>
                <Content2/>
                <Content1/>
                <Content2/>
                <Content1/>
                <Content2/>
                </div>
           </div>
        );
    }
}
export default Midcontent;