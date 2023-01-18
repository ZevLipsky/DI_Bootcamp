import React from 'react';
import User from './User';


class Users extends React.Component{
    constructor(){
        super();
        this.state = {
            arr:[]
        }
    }

    componentDidMount = () =>{
        this.getData()
    }

    componentDidUpdate = (pervProps, pervState) =>{
        console.log('pervState', pervState);
    }

    getData = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({arr:data})
        })
        .catch(e =>{
            console.log(e);
        })
    }
    render(){
        return(
        <div>
            <button onClick={this.getData}>GET USERS</button>
            <h1>My Users:</h1>
            
            {
                this.state.arr.map((item,index)=> {
                    return(
                        
                            <User key={index} user={item} />

                    )
                })
            }
        </div>
        )
    }

}
export default Users;