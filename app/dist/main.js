'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    // Declaramos los estados locales
    function Button(props) {
        _classCallCheck(this, Button);

        // Inicializamos el estado del componente
        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.state = {
            count: 0
        };
        // Enlazamos this al manejador de evento
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    // Manejador de evento de nuestro boton


    _createClass(Button, [{
        key: 'handleClick',
        value: function handleClick(e) {
            e.preventDefault();
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
        // Código para renderizar

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Bienvenidos a Codeando'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#', onClick: this.handleClick },
                    this.state.count
                )
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

;

// Renderizamos el componente
var rootElement = document.getElementById('root');
var element = _react2.default.createElement(Button, null);

_reactDom2.default.render(element, rootElement);