import { useContext } from "react";
import { AppContext } from "../App";

const Plus = props =>{
    const {setCount } = useContext(AppContext)
    return(
        <>
        <button onClick={()=>(setCount(count => count+1))} >Plus</button>

        
        </>
    )
}

export default Plus;