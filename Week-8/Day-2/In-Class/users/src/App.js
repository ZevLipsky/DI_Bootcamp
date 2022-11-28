import User from './components/User'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let usersData = [
    {id:1, name:'Tim', username:'timtim', email:'tim@gmail.com'},
    {id:2, name:'Mary', username:'marymary', email:'mary@gmail.com'},
    {id:3, name:'John', username:'johnjohn', email:'john@gmail.com'}

  ]
  return (
    <div >
      {
        usersData.map(item =>{
          return(
            <User name ={item.name} username={item.username} email ={item.email} id={item.id} />
          )
        })
      }
    </div>
  );
}

export default App;
