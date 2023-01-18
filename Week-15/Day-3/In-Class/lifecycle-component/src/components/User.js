const User = (props) => {
    return(
        <div>
            <img src={`https://robohash.org/${props.user.id}`}/>
            <h2>{props.user.name}</h2>
            <h2>{props.user.email}</h2>
            <h2>{props.user.username}</h2>

        </div>
    )
}
export default User;