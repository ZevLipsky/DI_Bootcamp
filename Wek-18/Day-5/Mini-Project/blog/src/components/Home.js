import picture from '../blog.png'
import React from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../App';


function Home(props) {
  
  const {postNum,setPostNum}=useContext(AppContext);
  return (
    <>
      
        <h1 className='tc'>Home</h1>
        {
          props.posts.length !== 0 ? props.posts.map(item => {
            return (
              <div className='flex postDiv' key={item.id}>
                <img src={picture} />
                <div>
                 <Link to={`/${item.id}`}> <h2 onClick={() => setPostNum(item.id)}>{item.title}</h2></Link>
                  <p>{item.body}</p>
                </div>

              </div>
            )
          }) : <h2>No Posts To Show...</h2>
        }
      
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)