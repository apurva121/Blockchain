'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
    //We are in the browser and metamask is running

    web3 = new _web2.default(window.web3.currentProvider);
} else {
    //we are not on the browswer OR the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/57c73c6a0f62468c92b7999e828fdf56');
    web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBQ0EsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sQUFBUCxTQUFjLEFBQW5ELGFBQStELEFBQzNEO0FBRUE7O1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUpELE9BSUssQUFDRDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUdBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNIO0FBQ0Q7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkQ6L1NvZnR3YXJlX3ByZXAvQmxvY2tjaGFpbi9raWNrc3RhcnQifQ==