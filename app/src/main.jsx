import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
let name = 'Codeando';

const element = (
    <div className="main">
        <h1>Hola!</h1>
        <h2>Bienvenidos a {name}</h2>
		    <img src="logo.png" />
    </div>
);

ReactDOM.render(
    element,
    rootElement
);