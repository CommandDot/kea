webpackJsonp([2],{1040:function(e,n,t){var r=t(584);"string"==typeof r&&(r=[[e.i,r,""]]);t(36)(r,{});r.locals&&(e.exports=r.locals)},1052:function(e,n,t){e.exports=t(366)},236:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(1040),c=(t.n(i),t(3)),u=t.n(c),l=t(20),s=(t.n(l),t(75)),p=(t.n(s),t(235));t.d(n,"a",function(){return d});var f,h,m=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),d=(f=t.i(l.kea)({}),f(h=function(e){function n(){var e,a,i,c;r(this,n);for(var u=arguments.length,l=Array(u),p=0;p<u;p++)l[p]=arguments[p];return a=i=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),i.handleRoute=function(e){var n=i.props.dispatch,r=e.target.attributes.href.value;e.preventDefault(),n(t.i(s.push)(r)),window.scrollTo(0,0)},c=a,o(i,c)}return a(n,e),m(n,[{key:"render",value:function(){return u.a.createElement("div",{className:"homepage-scene"},u.a.createElement("div",{style:{margin:20}},u.a.createElement(p.a,{id:0})),u.a.createElement("div",{style:{margin:20}},u.a.createElement("a",{href:"/guide/counter",onClick:this.handleRoute},"Read the guide"),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("a",{href:"https://www.github.com/mariusandra/kea"},"Fork on GitHub")))}}]),n}(c.Component))||h)},366:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(24),o=(t.n(r),t(236));n.default=t.i(r.createScene)({name:"homepage",component:o.a})},385:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(24),o=(t.n(r),t(236));n.default=t.i(r.createScene)({name:"homepage",component:o.a})},584:function(e,n,t){n=e.exports=t(33)(),n.push([e.i,".homepage-scene {\n  font-family: 'Helvetica Neue', 'Arial', sans-serif;\n  text-align: center;\n}\n\n.homepage-scene h1 em {\n  border-bottom: 1px dashed #888;\n  cursor: pointer;\n}\n\n.homepage-scene .slider-container {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n  @media (min-width: 960px) {\n\n  .homepage-scene .kea-slider {\n    height: 600px;\n    overflow: hidden;\n  }\n\n  .homepage-scene .kea-slider img {\n    position: absolute;\n  }\n  }\n",""])}},[1052]);