
import './Ex4.css';
const Ex4 = ()=>{
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return(
        <>
        <h1 style={style_header}>THIS IS A HEADER</h1>
        <p className="para">this is a paragraph</p>
        <a href="#">this is a link</a>
        <form>
            <label value="this is a form:"/>
            <label value="enter your name:" />
            <input type="text" />
            <button>submit</button>
        </form>
        <img src="https://robohash.org/1" alt="profile"/>
        <ul>
            <li>coffee</li>
            <li>tea</li>
            <li>milk</li>
        </ul>
        </>
    )
}
export default Ex4;