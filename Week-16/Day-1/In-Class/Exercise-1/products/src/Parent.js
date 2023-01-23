const Parent = (props) => {
    console.log(props);
    if(props.auth === 'admin')return <h1>Parent</h1>
    
    return props.children
}
export default Parent;