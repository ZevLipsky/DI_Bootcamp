import { useContext } from "react";
import { AppContext } from "../App";
import TextA from "./TextA";

const Text = (props) => {
    const {txt, setTxt} = useContext(AppContext);

    return(
        <>
        <h2>{txt}</h2>
        <input type='text' onChange={(e)=>setTxt(e.target.value)}/>
        <TextA />
        </>
    )
}
export default Text;