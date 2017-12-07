/**
 * Created by Roman on 07.12.2017.
 */

var app = React.createElement('div', {},
    React.createElement('h1',{}, 'hi i am header inside div'),
    React.createElement('ul', {},
        React.createElement('li', {},
            React.createElement('h2',{}, 'hi i am list item')
        ),
        React.createElement('li', {},
            React.createElement('h2',{}, 'hi i am list item')
        )
    )
);

ReactDOM.render(
    app,
    document.getElementById('app')
);