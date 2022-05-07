class HelloWorld extends React.Component{
    render() {
        return (
            <div>
                <h1>1. HelloWorld!</h1>
                <h1>2. HelloWorld!</h1>
            </div>
        )
    }
}
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)