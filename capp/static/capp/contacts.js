var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Article, H3, H4, H2, H1, Image, Footer, Header, TextField, Button, UserForm } from './components.js';

var Contacts = function (_React$Component) {
  _inherits(Contacts, _React$Component);

  function Contacts(props) {
    _classCallCheck(this, Contacts);

    return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call(this, props));
  }

  _createClass(Contacts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.transform = gsap.timeline({paused:true, defaults: {ease: Power1.easeInOut, duration: 0.3}});
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(
          "main",
          null,
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(H2, { inner: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }),
            React.createElement(
              "ul",
              null,
              React.createElement(
                "a",
                { href: "#/" },
                React.createElement(Image, { className: "hoverableImage", alt: "tg", src: tg })
              ),
              React.createElement(
                "a",
                { href: "#/" },
                React.createElement(Image, { className: "hoverableImage", alt: "vk", src: vk })
              ),
              React.createElement(
                "a",
                { href: "#/" },
                React.createElement(Image, { className: "hoverableImage", alt: "ig", src: ig })
              )
            )
          )
        )
      );
    }
  }]);

  return Contacts;
}(React.Component);

ReactDOM.render(React.createElement(Contacts, null), document.getElementById('root'));