const App = () => {
    const { useState } = React;
    let [state, setState] = useState([1, 2, 3, 4]);
    const handler = index => {
        setState(newState)
    }
    let list = a.map((item, index) => {
    return <MyButton onClick={() => handler(index)} key={index}></MyButton>
});
    return <div>{list}</div>
};
const MyButton = ({ onClick }) => {
    let { Button } = ReactBootStrap;
    return 
    <Button onClick={onClick}>
        Click Me
        </Button>;
    
};


ReactDOM.render(<App />, document.getElementById("root"));