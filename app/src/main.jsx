import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component
{
	// Declaramos los estados locales
	constructor(props)
	{
		super(props);
		this.state = {
			date: new Date()
		};
	}
	componentDidMount()
    {
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }
	// Código para renderizar
    render()
    {
        return (
            <div>
                <h1>Bienvenidos a Codeando</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    };
}; 

// Renderizamos el componente
const rootElement = document.getElementById('root');
const element = <Clock />;

ReactDOM.render(element, rootElement);