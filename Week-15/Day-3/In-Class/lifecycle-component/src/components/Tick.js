import React, {Component} from 'react';

class Tick extends Component{
    constructor(){
        super();
        this.state ={
            title: 'Tick Title'
        }

        }
        
        changeTitle = () =>{
            console.log('changeTitle');
            this.setState({title:'A new Title'})
    }
    render(){
        return(
            <div>
            {this.state.title}
            <div>
                <button onClick={this.changeTitle}>Change Title</button>
            </div>
            </div>
        )
    }
}

export default Tick;