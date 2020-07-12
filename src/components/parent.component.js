import React, {Component} from 'react';
import ChildOneComponent from './childOne.component';
import ChildTwoComponent from './childTwo.component';


class ParentComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            value_key:""
        }
    }


    parentFunction=(data_from_child)=>{
        this.setState({value_key:data_from_child});
    }
    
    render(){
        return(
            <div>      
                <ChildOneComponent functionCallFromParent={this.parentFunction.bind(this)}/>
                <ChildTwoComponent valueFromParent={this.state.value_key}/>
            </div>
        );
    }
}
export default ParentComponent;