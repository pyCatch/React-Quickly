class DateTimeNow extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString()
        return <span>Current date and time is {dateTimeNow}</span>
    }
}

let helloWorldReactComponent = <h1>Hello World!</h1>
class HelloWorld extends React.Component {
    render() {
        return <div>
            {helloWorldReactComponent}
            {helloWorldReactComponent}
        </div>
    }
}

ReactDOM.render(
    <DateTimeNow/>,
    document.getElementById('content')
)

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('contentHeader')
)