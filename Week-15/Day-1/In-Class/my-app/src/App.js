import logo from './logo.svg';
import './App.css';
import Child from './Child'
import ChildClass  from './ChildClass';
import User from './components/User';
import users from './users.json'
//props

function App() {
  // const user = [
  //   {id:1, name:'Ella', email:'ella@fmail.com'},
  //   {id:2, name:'Kitty', email:'kitty@fmail.com'},
  //   {id:3, name:'Anna', email:'anna@fmail.com'}
  // ]



  return (
    <div className="App">
      <header >
        {/* <Child name='John' email='jjj@gmail.com'/>
        <ChildClass />
        <User name={users[0].name} email={users[0].email} />
        <User name={users[1].name} email={users[1].email} />
        <User name={users[2].name} email={users[2].email} /> */}
        {
          users.map((item,index)=>{
            return(
              <div key ={index} style ={{
                display: 'inline-block',
                border: '1px solid grey',
                margin: '15px',
                padding: '20px',
                backgroundColor: 'lightcoral'}} >
              <User user={item} />
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
