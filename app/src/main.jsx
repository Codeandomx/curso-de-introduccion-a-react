import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component
{
	// Declaramos los estados locales
	constructor(props)
	{
		super(props);
        // Inicializamos el estado del componente
		this.state = {
			count: 0
		};
        // Enlazamos this al manejador de evento
        this.handleClick = this.handleClick.bind(this);
	}
    // Manejador de evento de nuestro boton
    handleClick(e)
    {
        e.preventDefault();
        this.setState((prevState) => ({
            count: (prevState.count + 1)
        }));
    }
	// Código para renderizar
    render()
    {
        return (
            <div>
                <h1>Bienvenidos a Codeando</h1>
                <a href="#" onClick={this.handleClick}>
                    {this.state.count}
                </a>                
            </div>
        );
    };
};

// Renderizamos el componente
const rootElement = document.getElementById('root');
const element = <Button />;

ReactDOM.render(element, rootElement);