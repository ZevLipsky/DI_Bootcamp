import Counter from "./Counter"
const Parent = (props) =>{
    if(props.username === 'admin'){
        return(
            <>
            <Counter/>
            </>
        )
    }
   return props.children
}
export default Parent