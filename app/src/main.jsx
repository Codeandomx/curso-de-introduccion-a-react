import React from 'react';
import ReactDOM from 'react-dom';

// creamos una lista de nombres
let names = ['Paulo', 'Cesar', 'Hugo', 'Carlos'];

// componente para elemento de lista
class Element extends React.Component
{
    render() {
        return (
            <li>Hola {this.props.name}</li>
        )
    }
};

// Componente contenedor para listas
class List extends React.Component
{
	render() {
        return (
            <ul>
                {this.props.names.map((name, index) => {
                    return <Element key={index.toString()} name={name} />
                })}
            </ul>
        )
    }
};

// Renderizamos el componente
const rootElement = document.getElementById('root');
const element = <List names={names} />;

ReactDOM.render(element, rootElement);