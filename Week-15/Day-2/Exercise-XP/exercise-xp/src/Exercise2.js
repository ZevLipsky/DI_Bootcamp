// Exercise 2
// Instructions
// Display a “Hello World!” message on the page.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"

const sum = 5 + 5;
const myelement = <h1>I Love JSX!</h1>;

const JSX = () => {
    return(
        <div>
            <h1>Hello World!</h1>
            {myelement}
            <p>React is {sum} times better with JSX</p>
        </div>
    )
}

export default JSX;