// let helloWorldHeading = React.createElement('h1', null, 'Hello world!')
let hello = React.createElement('h1', null, 'Hello,')
let world = React.createElement('h1', null, 'world!')

// Cоздадим свой класс наследуясь от React.Component
class HelloWorld extends React.Component {
    // Создаем или переопределяем метод render()
    render() {
        // Реализуем команду return, что бы класс React мог вызвать render у HelloWorld и получить div с двумя h1
        return React.createElement('div', null, hello, world)
    }
}

ReactDOM.render(
    React.createElement(HelloWorld, null),
    document.getElementById('content')
)