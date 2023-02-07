import { useContext } from "react"
import { AppContext } from "../App"

const TextA = (props) => {
    const {txt} = useContext(AppContext)
    return(
        <>
        <h1>Text A </h1>
        <h3>{txt}</h3>
        </>
    )
}

export default TextA