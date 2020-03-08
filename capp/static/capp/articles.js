var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Article, H3, H4, H2, H1, Image, Footer, Header, TextField, Button, UserForm } from './components.js';
import data from "./info.js";
var info = data.info;

var Articles = function (_React$Component) {
  _inherits(Articles, _React$Component);

  function Articles(props) {
    _classCallCheck(this, Articles);

    var _this = _possibleConstructorReturn(this, (Articles.__proto__ || Object.getPrototypeOf(Articles)).call(this, props));

    _this.changeView = _this.changeView.bind(_this);
    // this.transform = null;
    return _this;
  }

  _createClass(Articles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("hey", info);
      // this.transform = gsap.timeline({paused:true, defaults: {ease: Power1.easeInOut, duration: 0.3}});
    }
  }, {
    key: "changeView",
    value: function changeView(e) {
      var viewButton = e.target;
      viewButton.style.pointerEvents = "none";
      // console.log(viewButton.innerHTML, viewButton.innerHTML === "Списком");
      // console.log("hey", document.getElementsByClassName("Article"));
      var ar = document.getElementsByClassName(viewButton.innerHTML === "Списком" ? "Article" : "StripeArticle");
      // console.log(ar, viewButton.innerHTML === "Списком");
      // gsap.to(viewButton.innerHTML === "Списком" ? "Article" : "StripeArticle", {duration: 1, scale: 0.1, y: 40, ease: "power1.inOut});
      var changeClass = function changeClass() {
        // console.log("ok");
        while (ar.length) {
          // console.log(ar[0], ar.length);
          ar[0].classList.add(viewButton.innerHTML === "Списком" ? "StripeArticle" : "Article");
          ar[0].classList.remove(viewButton.innerHTML === "Списком" ? "Article" : "StripeArticle");
        }
        viewButton.innerHTML = viewButton.innerHTML === "Списком" ? "Таблицей" : "Списком";
        viewButton.style.pointerEvents = "auto";
        gsap.to(viewButton.innerHTML === "Списком" ? ".Article" : ".StripeArticle", { duration: 0.3, opacity: 1, stagger: 0.1 });
      };
      gsap.to(viewButton.innerHTML === "Списком" ? ".Article" : ".StripeArticle", { duration: 0.3, opacity: 0, stagger: 0.1, onComplete: function onComplete() {
          return changeClass();
        } });
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
            React.createElement(H2, { inner: "\u0421\u0442\u0430\u0442\u044C\u0438" }),
            window.matchMedia("(max-width: 768px)").matches ? null : React.createElement(
              "button",
              { onClick: this.changeView, className: "Button" },
              "\u0421\u043F\u0438\u0441\u043A\u043E\u043C"
            ),
            React.createElement(
              "section",
              null,
              Array(Object.keys(info).length).fill(null).map(function (el, i) {
                return React.createElement(Article, { key: i, para: info[Object.keys(info)[i]].text, username: info[Object.keys(info)[i]].username, date: info[Object.keys(info)[i]].date, stars: "★".repeat(info[Object.keys(info)[i]].stars) });
              })
            )
          )
        ),
        React.createElement(Footer, null)
      );
    }
  }]);

  return Articles;
}(React.Component);

ReactDOM.render(React.createElement(Articles, null), document.getElementById('root'));