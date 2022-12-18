import React from 'react'


class Products extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[]
        }

    }
    componentDidMount(){
        fetch('http://localhost:5000/api/products')
        .then(res => res.json())
        .then(data => {
            this.setState({products:data})
        })
        .catch(e)
    }
    render(){
        <div>
            {
                this.state.products(item =>{
                    return(
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    }
}