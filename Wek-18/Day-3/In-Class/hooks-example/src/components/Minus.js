import { useContext } from "react";
import { AppContext } from "../App";

const Minus = props =>{
    const {setCount } = useContext(AppContext)
    return(
        <>
        <button onClick={()=>(setCount(count => count-1))} >Minus</button>

        
        </>
    )
}

export default Minus;