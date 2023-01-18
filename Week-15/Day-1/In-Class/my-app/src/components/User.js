import './User.css'

const User = props =>{
    return(
        <div>
            <h2>{props.user.name}</h2>
            <h2>{props.user.email}</h2>

        </div>
    )
}
export default User