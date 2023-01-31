import {useSelector, useDispatch} from 'react-redux';
import { DETAIL } from '../redux/reducer';

const MovieList = (props) => {
    const list = useSelector(state => state.reducer_list.movie_list);
    const dispatch = useDispatch()
    return(
        <div style = {{display: 'inline-block', width: '600px'}}>
           <h1> MovieList</h1>
           {
            list.map((item,index)=>{
                return(
                    <div key={index}>
                    {item.title}
                    <button onClick={()=>dispatch({type:DETAIL, payload:item})}>Detail</button>
                    </div>
                )
                
            })
           }
        </div>
    )
}
export default MovieList;