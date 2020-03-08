var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import data from "./info.js";
var info = data.info;

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {};
    _this.header = null;
    _this.logoContainer = null;
    _this.logo = React.createRef();
    _this.h2 = React.createRef();
    _this.transform = null;
    _this.counter = 0;
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.transform = gsap.timeline({ paused: true, defaults: { ease: Power1.easeInOut, duration: 0.3 } });
      // console.log(window.matchMedia("(max-width: 910px)"));
      window.matchMedia("(max-width: 910px)").matches ? this.transform.to(this.logoContainer, { opacity: 0, y: 10 }).to(this.header, { y: -60 }) : this.transform.to(this.logo.current, { height: "50px", width: "50px" }).to(this.h2.current, { lineHeight: "50px" }, "-=0.3").to(this.header, { y: -55 }, "-=0.3").to(this.logoContainer, { height: "50px", marginTop: "50px" }, "-=0.3");
      window.onscroll = function () {
        window.scrollY > 200 ? _this2.transform.play() : _this2.transform.reverse();
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "header",
        { ref: function ref(div) {
            return _this3.header = div;
          } },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "a",
            { ref: function ref(div) {
                return _this3.logoContainer = div;
              }, href: "/", className: "logo-container" },
            React.createElement(Image, { innerRef: this.logo, alt: "logo", src: logo }),
            React.createElement(H2, { innerRef: this.h2, inner: "Wind" })
          ),
          React.createElement(
            "div",
            { className: "abovePanel" },
            React.createElement(Image, { alt: "phone", src: phone, className: "phoneIcon" }),
            React.createElement(H2, { inner: "89009009000", className: "phoneHeader" }),
            React.createElement(Button, { inner: "\u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043C\u043D\u0435" }),
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
          ),
          React.createElement(
            "div",
            { className: "belowPanel" },
            React.createElement(
              "nav",
              null,
              location.pathname == "/" ? React.createElement(
                "a",
                { href: "#aboutUs" },
                "\u041E \u0441\u0435\u0440\u0432\u0438\u0441\u0435"
              ) : null,
              React.createElement(
                "a",
                { href: "/articles" },
                "\u0421\u0442\u0430\u0442\u044C\u0438"
              ),
              React.createElement(
                "a",
                { href: "#/" },
                "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C"
              ),
              React.createElement(
                "a",
                { href: "/reviews" },
                "\u041E\u0442\u0437\u044B\u0432\u044B"
              ),
              React.createElement(
                "a",
                { href: "/contacts" },
                "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
              ),
              React.createElement(
                "a",
                { href: "/help" },
                "\u041F\u043E\u043C\u043E\u0449\u044C"
              )
            ),
            window.location.href.includes("account") || window.location.href.includes("admin") ? React.createElement(
              "section",
              null,
              React.createElement(
                "a",
                { href: "/exit" },
                React.createElement(Button, { inner: "\u0412\u044B\u0439\u0442\u0438" })
              )
            ) : React.createElement(
              "section",
              null,
              React.createElement(
                "a",
                { href: "/login" },
                React.createElement(Button, { inner: "\u0412\u043E\u0439\u0442\u0438" })
              ),
              React.createElement(
                "a",
                { href: "/signUp" },
                React.createElement(Button, { inner: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" })
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Footer = function (_React$Component2) {
  _inherits(Footer, _React$Component2);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "footer",
        null,
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "a",
            { href: "/", className: "logo-container" },
            React.createElement(Image, { alt: "logo", src: logo }),
            React.createElement(H2, { inner: "Wind" })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "nav",
              null,
              React.createElement(
                "a",
                { href: "#/" },
                "\u041E \u0441\u0435\u0440\u0432\u0438\u0441\u0435"
              ),
              React.createElement(
                "a",
                { href: "/articles" },
                "\u0421\u0442\u0430\u0442\u044C\u0438"
              ),
              React.createElement(
                "a",
                { href: "#/" },
                "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C"
              ),
              React.createElement(
                "a",
                { href: "/reviews" },
                "\u041E\u0442\u0437\u044B\u0432\u044B"
              ),
              React.createElement(
                "a",
                { href: "#/" },
                "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
              ),
              React.createElement(
                "a",
                { href: "#/" },
                "\u041F\u043E\u043C\u043E\u0449\u044C"
              )
            ),
            React.createElement(
              "p",
              null,
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis accusantium, corrupti culpa alias reprehenderit rem nulla cumque minima est aut, quidem nisi totam sed corporis veniam excepturi, pariatur. Illo, veniam.Lorem ipsum dolor sit amet."
            )
          ),
          React.createElement(
            "aside",
            null,
            React.createElement(H2, { inner: "89009009000", className: "phoneHeader" }),
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
            ),
            window.location.href.includes("account") || window.location.href.includes("admin") ? React.createElement(
              "section",
              null,
              React.createElement(
                "a",
                { href: "/exit" },
                React.createElement(Button, { inner: "\u0412\u044B\u0439\u0442\u0438" })
              )
            ) : React.createElement(
              "section",
              null,
              React.createElement(
                "a",
                { href: "/login" },
                React.createElement(Button, { inner: "\u0412\u043E\u0439\u0442\u0438" })
              ),
              React.createElement(
                "a",
                { href: "/signUp" },
                React.createElement(Button, { inner: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" })
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var Carousel = function (_React$Component3) {
  _inherits(Carousel, _React$Component3);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this5 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this5.state = {
      counter: 0,
      switcher: Object.keys(info).length - 1,
      initPos: 0,
      endPos: 0
    };
    _this5.handleRight = _this5.handleRight.bind(_this5);
    _this5.handleLeft = _this5.handleLeft.bind(_this5);
    _this5.handleStay = _this5.handleStay.bind(_this5);
    _this5.onTouchStart = _this5.onTouchStart.bind(_this5);
    _this5.onTouchMove = _this5.onTouchMove.bind(_this5);
    _this5.onTouchEnd = _this5.onTouchEnd.bind(_this5);
    _this5.scrollable = React.createRef();
    return _this5;
  }

  // animate(time) {
  //   console.log(time)
  //   requestAnimationFrame(this.animate);
  // }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this6 = this;

      // this.animate;
      // console.log(this.scrollable.current);
      // this.setState({counter: this.scrollable.current.children[0].offsetWidth + 10});
      this.setState({ counter: this.state.counter - (this.scrollable.current.children[0].offsetWidth + 10) }, function () {
        [].forEach.call(_this6.scrollable.current.children, function (el) {
          el.style.transform = "translateX(" + _this6.state.counter + "px)";
        });
      });
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      [].forEach.call(this.scrollable.current.children, function (el) {
        el.style.transition = "none";
      });
      this.setState({ initPos: e.touches[0].clientX });
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      var delta = this.state.initPos - e.touches[0].clientX;
      console.log(delta);
      var dist = Math.abs(delta) > 1000 ? this.state.counter - (this.state.initPos - this.state.endPos) : this.state.counter - delta;
      [].forEach.call(this.scrollable.current.children, function (el) {
        el.style.transform = "translateX(" + dist + "px)";
      });
      this.setState({ endPos: Math.abs(delta) > 1000 ? this.state.endPos : e.touches[0].clientX });
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      var endDist = this.state.initPos - this.state.endPos;
      endDist > 70 ? this.handleRight() : Math.abs(endDist) < 70 ? this.handleStay() : this.handleLeft();
    }
  }, {
    key: "handleStay",
    value: function handleStay() {
      var _this7 = this;

      [].forEach.call(this.scrollable.current.children, function (el) {
        el.style.transition = '.3s';
        el.style.transform = "translateX(" + _this7.state.counter + "px)";
      });
    }
  }, {
    key: "handleLeft",
    value: function handleLeft() {
      var _this8 = this;

      // this.setState({counter: this.state.counter + (this.scrollable.current.children[0].offsetWidth + 10)}, () => {
      [].forEach.call(this.scrollable.current.children, function (el) {
        el.style.transition = '.3s';
        el.style.transform = "translateX(" + 0 + "px)";
      });
      setTimeout(function () {
        // [].forEach.call(this.scrollable.current.children, (el) => {
        //   el.style.transition = 'none';
        //   el.style.transform = "translateX(-"+297+"px)";
        //   // el.style.transition = '.3s';

        _this8.setState({ switcher: _this8.state.switcher === 0 ? Object.keys(info).length - 1 : _this8.state.switcher - 1 }, function () {
          [].forEach.call(_this8.scrollable.current.children, function (el) {
            el.style.transition = 'none';
            el.style.transform = "translateX(" + _this8.state.counter + "px)";
          });
        });
        // });
      }, 300);
      // });
    }
  }, {
    key: "handleRight",
    value: function handleRight() {
      var _this9 = this;

      [].forEach.call(this.scrollable.current.children, function (el) {
        el.style.transition = '.3s';
        el.style.transform = "translateX(" + (_this9.state.counter + _this9.state.counter) + "px)";
      });
      setTimeout(function () {
        // [].forEach.call(this.scrollable.current.children, (el) => {
        //   el.style.transition = 'none';
        //   el.style.transform = "translateX(-"+297+"px)";
        //   // el.style.transition = '.3s';

        _this9.setState({ switcher: _this9.state.switcher + 1 }, function () {
          [].forEach.call(_this9.scrollable.current.children, function (el) {
            el.style.transition = 'none';
            el.style.transform = "translateX(" + _this9.state.counter + "px)";
          });
        });
        // });
      }, 300);
    }

    // add it to section if you want touch scroll carousel:
    //onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}

  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      return React.createElement(
        "div",
        { className: "Carousel" },
        React.createElement(
          "div",
          { id: "left", onClick: this.handleLeft },
          React.createElement("img", { src: back, alt: "" })
        ),
        React.createElement(
          "section",
          { ref: this.scrollable },
          Array(Object.keys(info).length + 1).fill(null).map(function (el, i) {
            return React.createElement(Review, { key: i + _this10.state.switcher, para: info[Object.keys(info)[(i + _this10.state.switcher) % Object.keys(info).length]].text, username: info[Object.keys(info)[(i + _this10.state.switcher) % Object.keys(info).length]].username, date: info[Object.keys(info)[(i + _this10.state.switcher) % Object.keys(info).length]].date, stars: "★".repeat(info[Object.keys(info)[(i + _this10.state.switcher) % Object.keys(info).length]].stars) });
          })
          // Object.keys(info).map((block, index) =>
          //   <div key={index}>
          //     <p>{info[block].text}</p>
          //     <div className="details">
          //       <aside>
          //         <H4 inner={info[block].username}></H4>
          //         <H4 inner={info[block].date}></H4>
          //       </aside>
          //       <H3 inner={"★".repeat(info[block].stars)}></H3>
          //     </div>
          //   </div>
          // )

        ),
        React.createElement(
          "div",
          { id: "right", onClick: this.handleRight },
          React.createElement("img", { src: back, alt: "" })
        )
      );
    }
  }]);

  return Carousel;
}(React.Component);

var Review = function (_React$Component4) {
  _inherits(Review, _React$Component4);

  function Review() {
    _classCallCheck(this, Review);

    return _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).apply(this, arguments));
  }

  _createClass(Review, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "Review" },
        React.createElement(
          "p",
          null,
          this.props.para
        ),
        React.createElement(
          "div",
          { className: "details" },
          React.createElement(
            "aside",
            null,
            React.createElement(H4, { inner: this.props.username }),
            React.createElement(H4, { inner: this.props.date })
          ),
          React.createElement(H3, { inner: this.props.stars })
        )
      );
    }
  }]);

  return Review;
}(React.Component);

var Article = function (_React$Component5) {
  _inherits(Article, _React$Component5);

  function Article() {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
  }

  _createClass(Article, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "Article" },
        React.createElement(H3, { inner: this.props.username }),
        React.createElement(H4, { inner: this.props.date }),
        React.createElement(Image, { src: sb }),
        React.createElement(
          "p",
          null,
          this.props.para
        ),
        React.createElement(
          "a",
          { href: "" },
          React.createElement(Button, { inner: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435" })
        )
      );
    }
  }]);

  return Article;
}(React.Component);

var ReviewForm = function (_React$Component6) {
  _inherits(ReviewForm, _React$Component6);

  function ReviewForm(props) {
    _classCallCheck(this, ReviewForm);

    return _possibleConstructorReturn(this, (ReviewForm.__proto__ || Object.getPrototypeOf(ReviewForm)).call(this, props));
  }

  _createClass(ReviewForm, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { className: "ReviewForm", action: "", method: "post" },
        React.createElement(H3, { inner: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432" }),
        React.createElement(H4, { inner: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430*" }),
        React.createElement("textarea", { name: "", id: "", cols: "30", rows: "10" }),
        React.createElement(
          "label",
          { htmlFor: "" },
          React.createElement(Button, { inner: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432", onClick: function onClick(e) {
              return e.preventDefault();
            } }),
          "  \u043E\u0442 \u0412\u0430\u0448\u0435\u0433\u043E \u0438\u043C\u0435\u043D\u0438"
        )
      );
    }
  }]);

  return ReviewForm;
}(React.Component);

var RegisterForm = function (_React$Component7) {
  _inherits(RegisterForm, _React$Component7);

  function RegisterForm(props) {
    _classCallCheck(this, RegisterForm);

    return _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));
  }

  _createClass(RegisterForm, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { className: "RegisterForm", action: "", method: "post" },
        React.createElement(H3, { inner: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }),
        React.createElement(TextField, { placeholder: "E-mail" }),
        React.createElement(TextField, { placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C" }),
        React.createElement(
          "label",
          { htmlFor: "" },
          React.createElement("checkbox", null),
          " \u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F ",
          React.createElement(
            "a",
            { href: "#/" },
            "\u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F"
          )
        ),
        React.createElement(Button, { inner: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" })
      );
    }
  }]);

  return RegisterForm;
}(React.Component);

var AccountData = function (_React$Component8) {
  _inherits(AccountData, _React$Component8);

  function AccountData(props) {
    _classCallCheck(this, AccountData);

    return _possibleConstructorReturn(this, (AccountData.__proto__ || Object.getPrototypeOf(AccountData)).call(this, props));
  }

  _createClass(AccountData, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "AccountData" },
        React.createElement(
          "section",
          null,
          React.createElement(H2, { inner: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442" }),
          React.createElement(H3, { inner: "\u0413\u043E\u0433\u043E\u043B\u044C \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432\u0438\u0447" }),
          React.createElement(H4, { inner: "kirya@kirthree.com" }),
          React.createElement(H4, { inner: "+7 988 187 1678" }),
          React.createElement(
            "h4",
            null,
            "\u041F\u0430\u0441\u043F\u043E\u0440\u0442 ",
            React.createElement(
              "span",
              null,
              "\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D"
            )
          ),
          React.createElement(H4, { inner: "BTC \u043A\u043E\u0448\u0435\u043B\u0451\u043A \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430:" }),
          React.createElement(H4, { className: "walletH4", inner: "123-123-123-123-123" }),
          React.createElement(Button, { inner: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435" })
        ),
        React.createElement(
          "section",
          null,
          React.createElement(
            "h4",
            null,
            "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0435\u0444\u0435\u0440\u0430\u043B\u043E\u0432: ",
            React.createElement(
              "span",
              null,
              "12"
            )
          ),
          React.createElement(
            "h4",
            null,
            "\u0420\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435 \u0437\u0430 \u0432\u0441\u0451 \u0432\u0440\u0435\u043C\u044F: ",
            React.createElement(
              "span",
              null,
              "0.5 BTC"
            )
          ),
          React.createElement(H4, { inner: "\u0420\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442:" }),
          React.createElement(
            "a",
            { href: "#/" },
            "https://google.com/"
          ),
          React.createElement(H4, { inner: "\u0420\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430 Telegram:" }),
          React.createElement(
            "a",
            { href: "#/" },
            "https://t.me/"
          )
        )
      );
    }
  }]);

  return AccountData;
}(React.Component);

var AccountTable = function (_React$Component9) {
  _inherits(AccountTable, _React$Component9);

  function AccountTable(props) {
    _classCallCheck(this, AccountTable);

    return _possibleConstructorReturn(this, (AccountTable.__proto__ || Object.getPrototypeOf(AccountTable)).call(this, props));
  }

  _createClass(AccountTable, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "AccountTable" },
        React.createElement(
          "section",
          null,
          React.createElement(H2, { inner: "BTC: 123.133" }),
          React.createElement(Button, { inner: "\u041A\u0443\u043F\u0438\u0442\u044C" }),
          React.createElement(Button, { inner: "\u041F\u0440\u043E\u0434\u0430\u0442\u044C" }),
          React.createElement(Button, { inner: "\u0412\u044B\u0432\u0435\u0441\u0442\u0438" })
        ),
        React.createElement(
          "table",
          null,
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                "\u0414\u0430\u0442\u0430"
              ),
              React.createElement(
                "th",
                null,
                "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F"
              ),
              React.createElement(
                "th",
                null,
                "\u041A\u0443\u0440\u0441 \u0420\u0443\u0431/BTC"
              ),
              React.createElement(
                "th",
                null,
                "\u0421\u0443\u043C\u043C\u0430"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "11.11.11"
              ),
              React.createElement(
                "td",
                null,
                "\u041F\u043E\u043A\u0443\u043F\u043A\u0430"
              ),
              React.createElement(
                "td",
                null,
                "328 328.98"
              ),
              React.createElement(
                "td",
                null,
                "13.12"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "11.11.11"
              ),
              React.createElement(
                "td",
                null,
                "\u041F\u043E\u043A\u0443\u043F\u043A\u0430"
              ),
              React.createElement(
                "td",
                null,
                "328 328.98"
              ),
              React.createElement(
                "td",
                null,
                "13.12"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "11.11.11"
              ),
              React.createElement(
                "td",
                null,
                "\u041F\u043E\u043A\u0443\u043F\u043A\u0430"
              ),
              React.createElement(
                "td",
                null,
                "328 328.98"
              ),
              React.createElement(
                "td",
                null,
                "13.12"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "11.11.11"
              ),
              React.createElement(
                "td",
                null,
                "\u041F\u043E\u043A\u0443\u043F\u043A\u0430"
              ),
              React.createElement(
                "td",
                null,
                "328 328.98"
              ),
              React.createElement(
                "td",
                null,
                "13.12"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "11.11.11"
              ),
              React.createElement(
                "td",
                null,
                "\u041F\u043E\u043A\u0443\u043F\u043A\u0430"
              ),
              React.createElement(
                "td",
                null,
                "328 328.98"
              ),
              React.createElement(
                "td",
                null,
                "13.12"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "11.11.11"
              ),
              React.createElement(
                "td",
                null,
                "\u041F\u043E\u043A\u0443\u043F\u043A\u0430"
              ),
              React.createElement(
                "td",
                null,
                "328 328.98"
              ),
              React.createElement(
                "td",
                null,
                "13.12"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "11.11.11"
              ),
              React.createElement(
                "td",
                null,
                "\u041F\u043E\u043A\u0443\u043F\u043A\u0430"
              ),
              React.createElement(
                "td",
                null,
                "328 328.98"
              ),
              React.createElement(
                "td",
                null,
                "13.12"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "11.11.11"
              ),
              React.createElement(
                "td",
                null,
                "\u041F\u043E\u043A\u0443\u043F\u043A\u0430"
              ),
              React.createElement(
                "td",
                null,
                "328 328.98"
              ),
              React.createElement(
                "td",
                null,
                "13.12"
              )
            )
          )
        )
      );
    }
  }]);

  return AccountTable;
}(React.Component);

var H4 = function (_React$Component10) {
  _inherits(H4, _React$Component10);

  function H4() {
    _classCallCheck(this, H4);

    return _possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).apply(this, arguments));
  }

  _createClass(H4, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h4",
        { className: "H4 " + this.props.className },
        this.props.inner
      );
    }
  }]);

  return H4;
}(React.Component);

var H3 = function (_React$Component11) {
  _inherits(H3, _React$Component11);

  function H3() {
    _classCallCheck(this, H3);

    return _possibleConstructorReturn(this, (H3.__proto__ || Object.getPrototypeOf(H3)).apply(this, arguments));
  }

  _createClass(H3, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h3",
        { id: this.props.id, className: "H3 " + this.props.className },
        this.props.inner
      );
    }
  }]);

  return H3;
}(React.Component);

var H2 = function (_React$Component12) {
  _inherits(H2, _React$Component12);

  function H2(props) {
    _classCallCheck(this, H2);

    return _possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).call(this, props));
    // this.h2 = React.createRef();
  }

  _createClass(H2, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h2",
        { ref: this.props.innerRef, className: "H2 " + this.props.className },
        this.props.inner
      );
    }
  }]);

  return H2;
}(React.Component);

var H1 = function (_React$Component13) {
  _inherits(H1, _React$Component13);

  function H1() {
    _classCallCheck(this, H1);

    return _possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).apply(this, arguments));
  }

  _createClass(H1, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        { className: "H1" },
        this.props.inner
      );
    }
  }]);

  return H1;
}(React.Component);

var Image = function (_React$Component14) {
  _inherits(Image, _React$Component14);

  function Image(props) {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
    // this.logo = React.createRef();
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return React.createElement("img", { ref: this.props.innerRef, className: "Image " + this.props.className, src: this.props.src, alt: this.props.alt });
    }
  }]);

  return Image;
}(React.Component);

var TextField = function (_React$Component15) {
  _inherits(TextField, _React$Component15);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
  }

  _createClass(TextField, [{
    key: "render",
    value: function render() {
      return React.createElement("input", { name: this.props.name, onChange: this.props.onChange, autoCorrect: "off", className: "TextField " + this.props.className, type: this.props.type, placeholder: this.props.placeholder });
    }
  }]);

  return TextField;
}(React.Component);

var Button = function (_React$Component16) {
  _inherits(Button, _React$Component16);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.props.onClick, className: "Button", type: this.props.type },
        this.props.inner
      );
    }
  }]);

  return Button;
}(React.Component);

var UserForm = function (_React$Component17) {
  _inherits(UserForm, _React$Component17);

  function UserForm() {
    _classCallCheck(this, UserForm);

    return _possibleConstructorReturn(this, (UserForm.__proto__ || Object.getPrototypeOf(UserForm)).apply(this, arguments));
  }

  _createClass(UserForm, [{
    key: "render",
    value: function render() {
      var _this25 = this;

      return React.createElement(
        "form",
        { onSubmit: this.props.onSubmit, action: "" },
        this.props.formFields && Object.keys(this.props.formFields).map(function (field, index) {
          return React.createElement(_this25.props.formFields[field].element, { name: _this25.props.formFields[field].name, key: index, inner: _this25.props.formFields[field].inner, onChange: _this25.props.formFields[field].onChange, onClick: _this25.props.formFields[field].onClick, placeholder: _this25.props.formFields[field].placeholder, className: _this25.props.formFields[field].className, type: _this25.props.formFields[field].type }, []);
        })
      );
    }
  }]);

  return UserForm;
}(React.Component);

export { Article, AccountData, AccountTable, ReviewForm, Review, Carousel, H3, H4, H2, H1, Image, Footer, Header, TextField, Button, UserForm };