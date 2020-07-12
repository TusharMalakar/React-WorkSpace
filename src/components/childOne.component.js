import React, {Component} from 'react';


class ChildOneComponent extends Component{
    
    
    childFunction=(e)=>{
        e.preventDefault();
        this.props.functionCallFromParent("Hello From childOne");
    }


    render(){
        return(
            <div>   
                <button onClick={this.childFunction.bind(this)}>Click</button>
            </div>
        );
    }
}
export default ChildOneComponent;