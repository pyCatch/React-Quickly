let helloWorldHeading = React.createElement('h1', null, 'Hello world!')

ReactDOM.render(
    React.createElement('h1', null, helloWorldHeading, helloWorldHeading),
    document.getElementById('content')
)