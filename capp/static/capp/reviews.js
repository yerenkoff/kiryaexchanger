var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { ReviewForm, Review, Carousel, H3, H4, H2, H1, Image, Footer, Header, TextField, Button, UserForm } from './components.js';
import data from "./info.js";
var info = data.info;

var Reviews = function (_React$Component) {
  _inherits(Reviews, _React$Component);

  function Reviews(props) {
    _classCallCheck(this, Reviews);

    return _possibleConstructorReturn(this, (Reviews.__proto__ || Object.getPrototypeOf(Reviews)).call(this, props));
  }

  _createClass(Reviews, [{
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
            React.createElement(H2, { inner: "\u041E\u0442\u0437\u044B\u0432\u044B \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432" }),
            React.createElement(
              "section",
              null,
              Array(Object.keys(info).length).fill(null).map(function (el, i) {
                return React.createElement(Review, { key: i, para: info[Object.keys(info)[i]].text, username: info[Object.keys(info)[i]].username, date: info[Object.keys(info)[i]].date, stars: "★".repeat(info[Object.keys(info)[i]].stars) });
              })
            ),
            React.createElement(ReviewForm, null)
          )
        ),
        React.createElement(Footer, null)
      );
    }
  }]);

  return Reviews;
}(React.Component);

ReactDOM.render(React.createElement(Reviews, null), document.getElementById('root'));