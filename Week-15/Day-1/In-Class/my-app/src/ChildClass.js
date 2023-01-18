import React from 'react'

class ChildClass extends React.Component{
    constructor(props){
        super(props);
       console.log('pc=>', props);
    }
    render(){
        return (
            <div>
                <h2>Child Class component</h2>
            </div>
        )
    }
}

export default ChildClass