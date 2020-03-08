var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Article, H3, H4, H2, H1, Image, Footer, Header, TextField, Button, UserForm } from './components.js';
import data from "./info.js";
var faq = data.faq;

var Help = function (_React$Component) {
  _inherits(Help, _React$Component);

  function Help(props) {
    _classCallCheck(this, Help);

    return _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).call(this, props));
  }

  _createClass(Help, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(Object.keys(faq));
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
            React.createElement(H2, { inner: "\u041F\u043E\u043C\u043E\u0449\u044C. \u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B" }),
            React.createElement(
              "section",
              null,
              Object.keys(faq).map(function (el, i) {
                return React.createElement(
                  "div",
                  { className: "Article", key: "sect" + i },
                  React.createElement(H3, { inner: faq[el].header }),
                  React.createElement(
                    "p",
                    null,
                    faq[el].text
                  )
                );
              })
            )
          )
        ),
        React.createElement(Footer, null)
      );
    }
  }]);

  return Help;
}(React.Component);

ReactDOM.render(React.createElement(Help, null), document.getElementById('root'));