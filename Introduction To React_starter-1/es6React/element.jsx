const Hello = props => {
    const name = props.name;
    return (<h1> Hello {name} </h1> )
}
// React Render an Element 


//===========================
ReactDOM.render(<Hello name= "Francis"/>, document.getElementById('root'))