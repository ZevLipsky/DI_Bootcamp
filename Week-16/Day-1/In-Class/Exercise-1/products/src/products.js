import React from 'react';

class Products extends React.Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount = () => {
        fetch(process.env.REACT_APP_BASE_URL + '/api/products')
        .then(res => res.json())
        .then(data => {
            this.setState({products:data})
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render(){
        return(
            <div>
            <h1>Shop</h1>
            {
                this.state.products.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h4>{item.name}</h4>
                            <h5>{item.price}</h5>
                            </div>
                    )
                })
            }
            </div>
        )
    }
}
export default Products;