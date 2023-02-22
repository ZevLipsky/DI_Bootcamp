import './App.css';
import React from 'react';
import User from './components/User';
import Search from './components/Search';
import {connect} from 'react-redux';
import { getUsers } from './redux/actions';

class App extends React.Component{

  //  constructor(){
  //     super();
  //     this.state={
  //       // arr:[],
  //       text: ''
  //     }
  //   }

    // handleSearch = (e) => {
    //   this.setState({text:e.target.value})

    // } 

    componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // this.setState({arr:data})
        this.props.getData(data)
      })
      
      .catch(e => {
        console.log(e);
      })
    }
  render(){
   
    

  const filterUsers = this.props.users.filter(item => {
    return item.name.toLowerCase().includes(this.props.text.toLowerCase())
  })
  return (
    <div className="App">
      <header className="App-header">
        <Search handleSearch={this.handleSearch} />
     {
      filterUsers.map(item=> {
        return<User user={item} key={item.id}></User>
      })
     }
      </header>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return{
    users: state.arr,
    text: state.text
  
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getData: (arr) => dispatch(getUsers(arr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
