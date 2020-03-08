var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { AccountData, AccountTable, H3, H4, H2, H1, Image, Footer, Header, TextField, Button, UserForm } from './components.js';

var Account = function (_React$Component) {
  _inherits(Account, _React$Component);

  function Account(props) {
    _classCallCheck(this, Account);

    return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));
  }

  _createClass(Account, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(
          'main',
          null,
          React.createElement(
            'div',
            { className: 'container' },
            React.createElement(AccountData, null),
            React.createElement(AccountTable, null)
          )
        ),
        React.createElement(Footer, null)
      );
    }
  }]);

  return Account;
}(React.Component);

ReactDOM.render(React.createElement(Account, null), document.getElementById('root'));