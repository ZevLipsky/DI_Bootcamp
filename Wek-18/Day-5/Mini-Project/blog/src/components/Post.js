import React from 'react'
import { connect } from 'react-redux';
import { useContext } from 'react';
import {AppContext } from '../App';
import { Link ,useNavigate} from 'react-router-dom';
import { deletePost } from '../actions/postActions';


function Post(props) {
    const navigate=useNavigate();
    const {postNum,setPostNum}=useContext(AppContext);
    const handleClick=()=>{
        props.deleteP(postNum);
        navigate('/');
    }
  return (
    <>    
        <h2>{props.posts.find(item=>postNum==item.id).title}</h2>
        <p>{props.posts.find(item=>postNum==item.id).body}</p>
        <button onClick={handleClick}>delete</button>
        <Link to='/'>back</Link>
    </>
  )
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        deleteP:(postNum)=>dispatch(deletePost(postNum))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)