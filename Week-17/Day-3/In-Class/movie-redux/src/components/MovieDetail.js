import {useSelector} from 'react-redux';


const MovieDetail = (props) => {
    const details = useSelector(state => state.reducer_detail.details_movie)
    return(
        <div>
            <h1>MovieDetail</h1>
            <h2>Title: {details.title}</h2>
            <h2>Realse-Date: {details.releaseDate}</h2>
            <h2>Rating: {details.rating}</h2>
        </div>
    )
}
export default MovieDetail;