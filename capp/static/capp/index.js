var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Carousel, H3, H4, H2, H1, Image, Footer, Header, TextField, Button, UserForm } from './components.js';

window.onclick = function () {
  [].forEach.call(document.getElementsByClassName("hideable"), function (el) {
    el.style.opacity = 0;
    // console.log(el);
    setTimeout(function () {
      el.style.display = "none";
    }, 300);
  });
};
// window.onload = () => console.log(window.scrollY);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      optionList: {
        Сбербанк: [1.8, sb],
        Уралсиб: [2.5, bank1],
        Киви: [2.0, kiwi],
        Биткоин: [1736.2, btc]
      }
    };
    _this.getList = _this.getList.bind(_this);
    _this.setOption = _this.setOption.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.inputChange = _this.inputChange.bind(_this);
    // this.animate = this.animate.bind(this);
    _this.gainField = React.createRef();
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
    // requestAnimationFrame(this.animate);


    // animate(time) {

    //   requestAnimationFrame(this.animate);
    // };

  }, {
    key: "getList",
    value: function getList(e) {
      e.preventDefault();
      e.stopPropagation();
      var btn = e.target;
      var ul = btn.nextElementSibling;
      console.log(btn);

      ul.style.display == 'block' ? setTimeout(function () {
        ul.style.display = 'none';
      }, 300) : ul.style.display = 'block';
      ul.style.opacity == 1 ? ul.style.opacity = 0 : setTimeout(function () {
        ul.style.opacity = 1;
      }, 0);
    }
  }, {
    key: "setOption",
    value: function setOption(e) {
      var option = e.target;
      Object.assign(option.parentElement.previousElementSibling.children[1].style, { transform: "translateY(30px)", opacity: 0, "transition": ".1s" });
      setTimeout(function () {
        Object.assign(option.parentElement.previousElementSibling.children[0].style, { transform: "translateY(30px)", opacity: 0, "transition": ".1s" });
      }, 30);
      setTimeout(function () {
        option.parentElement.previousElementSibling.children[0].innerHTML = option.innerHTML;
        option.parentElement.previousElementSibling.children[1].src = option.dataset.src;
        Object.assign(option.parentElement.previousElementSibling.children[1].style, { transform: "translateY(-30px)", "transition": "0s" });
        Object.assign(option.parentElement.previousElementSibling.children[0].style, { transform: "translateY(-30px)", "transition": "0s" });
      }, 100);
      setTimeout(function () {
        Object.assign(option.parentElement.previousElementSibling.children[1].style, { transform: "translateY(0px)", opacity: 1, "transition": ".1s" });
      }, 200);
      setTimeout(function () {
        Object.assign(option.parentElement.previousElementSibling.children[0].style, { transform: "translateY(0px)", opacity: 1, "transition": ".1s" });
      }, 230);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.gainField.current.style.border = "2px solid #7986CB";
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.gainField.current.style.border = "2px dashed #dddddd";
    }
  }, {
    key: "inputChange",
    value: function inputChange(e) {
      var t = e.target;
      this.gainField.current.value = t.value == "" ? "" : t.value * this.state.optionList[t.parentElement.children[0].children[0].innerHTML][0];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
            React.createElement(H1, { inner: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0431\u043C\u0435\u043D 24/7" }),
            React.createElement(H3, { inner: "\u0421\u043E\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u043E\u0431\u043C\u0435\u043D \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441" }),
            React.createElement(H2, { inner: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u043E\u0431\u043C\u0435\u043D\u0430" }),
            React.createElement(
              "form",
              { action: "", method: "post" },
              React.createElement(
                "section",
                null,
                React.createElement(
                  "button",
                  { onClick: this.getList, className: "Button" },
                  React.createElement(
                    "span",
                    null,
                    "\u0411\u0438\u0442\u043A\u043E\u0438\u043D"
                  ),
                  React.createElement("img", { src: btc, alt: "\u0431\u0438\u0442\u043E\u043A" })
                ),
                React.createElement(
                  "ul",
                  { className: "hideable" },
                  Object.keys(this.state.optionList).map(function (el, index) {
                    return React.createElement(
                      "li",
                      { onClick: _this2.setOption, "data-src": _this2.state.optionList[el][1], key: index },
                      el
                    );
                  })
                ),
                React.createElement("input", { placeholder: "\u041E\u0442\u0434\u0430\u0451\u0442\u0435", onChange: this.inputChange, onBlur: this.handleBlur, onFocus: this.handleFocus, type: "number" })
              ),
              React.createElement(
                "button",
                { onClick: function onClick(e) {
                    return e.preventDefault();
                  }, className: "Button" },
                React.createElement(
                  "span",
                  null,
                  "\u279E"
                )
              ),
              React.createElement(
                "section",
                null,
                React.createElement(
                  "button",
                  { onClick: this.getList, className: "Button" },
                  React.createElement(
                    "span",
                    null,
                    "\u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A"
                  ),
                  React.createElement("img", { src: sb, alt: "\u0431\u0438\u0442\u043E\u043A" })
                ),
                React.createElement(
                  "ul",
                  { className: "hideable" },
                  Object.keys(this.state.optionList).map(function (el, index) {
                    return React.createElement(
                      "li",
                      { onClick: _this2.setOption, "data-src": _this2.state.optionList[el][1], key: index },
                      el
                    );
                  })
                ),
                React.createElement("input", { placeholder: "\u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435", ref: this.gainField, type: "number", disabled: true })
              )
            ),
            React.createElement(H2, { inner: "\u041D\u0430\u043C \u0434\u043E\u0432\u0435\u0440\u044F\u044E\u0442" }),
            React.createElement(H3, { inner: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439" }),
            React.createElement(
              "section",
              { className: "chartSection" },
              React.createElement(
                "div",
                { className: "chart-container" },
                React.createElement("canvas", { id: "chart0" })
              ),
              React.createElement(H4, { inner: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439" })
            ),
            React.createElement(
              "section",
              { className: "chartSection" },
              React.createElement(
                "div",
                { className: "chart-container" },
                React.createElement("canvas", { id: "chart1" })
              ),
              React.createElement(H4, { inner: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u0441\u0434\u0435\u043B\u043E\u043A" })
            ),
            React.createElement(H3, { id: "aboutUs", inner: "\u041E \u0441\u0435\u0440\u0432\u0438\u0441\u0435" }),
            React.createElement(
              "p",
              null,
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptatem minus perferendis iusto aspernatur non voluptate illo unde, dicta. Vitae illum quidem porro deleniti obcaecati neque, ipsa quas maiores. Facilis. ipsum dolor sit amet, consectetur adipisicing elit. Id officiis eveniet natus officia repudiandae temporibus dolore, necessitatibus hic iure, atque omnis suscipit corporis dolorem a est quos architecto assumenda reprehenderit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel minima, porro nihil fuga saepe pariatur ipsum alias fugit molestiae vitae excepturi cupiditate eligendi numquam velit modi maiores quidem nostrum voluptatum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt incidunt laboriosam corporis minus quibusdam. Nostrum quia, quod, libero vel, officiis magnam impedit dolore, temporibus illo porro minima odio doloribus nesciunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure animi fuga, mollitia maxime ea aliquam error obcaecati fugiat temporibus. Iusto facere doloremque perferendis hic dolorum maxime quasi placeat unde fugit."
            ),
            React.createElement(H3, { inner: "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0430\u043C\u0438" }),
            React.createElement(
              "p",
              null,
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eius modi cum natus, ratione enim consequuntur cupiditate, odio non impedit voluptas, veritatis. Reprehenderit adipisci, vel hic et ratione suscipit officia!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque cum minus aliquid fuga nihil blanditiis fugiat dignissimos iste culpa! Quam neque tenetur ipsam repellendus id in cumque autem atque minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa minus impedit tempore sequi deleniti alias repellendus error dicta quaerat expedita, modi, nulla sed quis ea debitis illum libero porro enim."
            ),
            React.createElement(H3, { className: "carouselHeader", inner: "\u041E\u0442\u0437\u044B\u0432\u044B \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432" }),
            React.createElement(Carousel, null),
            React.createElement(Button, { onClick: function onClick() {
                return window.location.href = "/reviews";
              }, inner: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438" })
          )
        ),
        React.createElement(Footer, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

var ctx0 = document.getElementById('chart0');
var ctx1 = document.getElementById('chart1');
// var ctx2 = document.getElementById('chart2');

var myChart = new Chart(ctx0, {
  type: 'bar',
  data: {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [{
      label: 'Количество пользователей',
      data: [50, 60, 70, 80, 78, 90, 120, 150, 160, 150, 200, 250],
      backgroundColor: ['#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB'],
      borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      labels: {
        // This more specific font property overrides the global property
        // fontColor: '#999',
      },
      tooltips: {
        backgroundColor: "#4cc"
      }
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontFamily: 'Rubik, sans-serif'
        }
      }]
    }
  }
});

var myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [{
      label: 'Количество сделок',
      data: [80, 30, 50, 100, 50, 80, 100, 80, 110, 120, 150, 200],
      backgroundColor: ['#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB', '#7986CB'],
      borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      labels: {
        // This more specific font property overrides the global property
        // fontColor: '#999',
      },
      tooltips: {
        backgroundColor: "#4cc"
      }
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontFamily: 'Rubik, sans-serif'
        }
      }]
    }
  }
});