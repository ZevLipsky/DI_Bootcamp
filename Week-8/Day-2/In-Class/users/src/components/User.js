import './User.css'
// import Avatar from '@mui/material/Avatar';

import ToggleButton from '@mui/material/ToggleButton';

const User = (props) =>{
    console.log('propers=>', props);
    const {name,username,email,id} = props;

   let style={display:'inline-block',
         margin:'20px', 
         border:'1px solid black',
         padding:'20px',
         textAlign: 'center'}


    return(
        <div className='dib m20 b1sb tac'>
            {/* <Avatar alt="" src={`https://robohash.org/${id}`} /> */}
            <img src ={`https://robohash.org/${id}`} />
            <h1> {name}</h1>
            <h3> {username}</h3>
            <p> {email}</p>
    
        </div>
    )
}

export default User