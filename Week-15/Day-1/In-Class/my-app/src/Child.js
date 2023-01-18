const Child = (props) =>{
    console.log('props=>',props);
    const {name, email} = props;
    return(
        <div>
            <h1>Child component</h1>
            {name}
            <h3>{email}</h3>
        </div>
    )
}

export default Child