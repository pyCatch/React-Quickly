class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'h1',
            this.props,
            'Hello ' + this.props.frameworkName + ' World!!!'
        )
    }
}

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, {
            id: 'ember',
            frameworkName: 'Ember.js',
            title: 'A framework for creating ambitious web applications.'
        }),
        React.createElement(HelloWorld, {
            id: 'backbone',
            frameworkName: 'Backbone.js',
            title: 'Backbone.js gives structure to web applications...'
        }),
        React.createElement(HelloWorld, {
            id: 'angular',
            frameworkName: 'Angular.js',
            title: 'Superheroic JavaScript MVW Framework'
        })
    ),
    document.getElementById('content')
)

// let greeting = React.createElement('h1', null, 'Hello!')
//
// class HelloWorld extends React.Component {
//     render() {
//         return React.createElement('h1', this.props, 'MHello ' + this.props.frameworkName + '!');
//     }
// }
// ReactDOM.render(
//     React.createElement(
//         'div',
//         null,
//         React.createElement(HelloWorld, {
//             id: 'ember',
//             frameworkName: 'Ember.js',
//             title: 'A framework for creating ambitious web applications.'}),
//         React.createElement(HelloWorld, {
//             id: 'backbone',
//             frameworkName: 'Backbone.js',
//             title:'Backbone.js gives structure to web applications...'}),
//         React.createElement(HelloWorld, {
//             id: 'angular',
//             frameworkName: 'Angular.js',
//             title:'Superheroic JavaScript MVW Framework'}),
//     ),
//     document.getElementById('content')
// )