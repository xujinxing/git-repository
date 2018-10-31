// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\noder-weex\\src\\components\\Tab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0b832535"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "tabbar": {
    "flexDirection": "row",
    "backgroundColor": "#FF4563"
  },
  "tab": {
    "height": "120",
    "width": "150",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "active": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "backgroundColor": "rgb(218,59,85)",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "active": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    },
    "tab-panels": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    }
  },
  "icon": {
    "width": "45",
    "height": "45"
  },
  "title": {
    "fontSize": "28",
    "color": "#FFFFFF",
    "marginTop": "10"
  },
  "tab-panels": {
    "position": "relative",
    "width": 3750,
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "stretch",
    "backgroundColor": "#F5F5F5",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "panel": {
    "width": "750",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "content": {
    "fontSize": "100",
    "color": "#707070"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    tabs: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      activeTab: 0
    };
  },

  computed: {
    panels: function panels() {
      return this.tabs.map(function (tab) {
        return { content: tab.title };
      });
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["tabbar"]
  }, [_c('div', {
    staticClass: ["tab", "active"],
    style: {
      left: _vm.activeTab * 150 + 'px'
    }
  }), _vm._l((_vm.tabs), function(tab, i) {
    return _c('div', {
      key: i,
      staticClass: ["tab"],
      on: {
        "click": function($event) {
          _vm.activeTab = i
        }
      }
    }, [_c('image', {
      staticClass: ["icon"],
      attrs: {
        "src": tab.icon
      }
    }), _c('text', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(tab.title))])])
  })], 2), _c('div', {
    staticClass: ["tab-panels"],
    style: {
      left: _vm.activeTab * -750 + 'px'
    }
  }, _vm._l((_vm.panels), function(panel, pi) {
    return _c('div', {
      key: pi,
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["content"]
    }, [_vm._v(_vm._s(panel.content))])])
  }))])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["tabbar"]
  }, [_c('div', {
    staticClass: ["tab", "active"],
    staticStyle: {
      "left": {
        "@binding": "activeTab * 150 + 'px'"
      }
    }
  }), _c('div', {
    key: {
      "@binding": "i"
    },
    staticClass: ["tab"],
    attrs: {
      "[[repeat]]": {
        "@expression": "tabs",
        "@alias": "tab",
        "@index": "i"
      }
    },
    on: {
      "click": function($event) {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        _vm.activeTab = _vm.i
      }
    }
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": {
        "@binding": "tab.icon"
      }
    }
  }), _c('text', {
    staticClass: ["title"],
    attrs: {
      "value": {
        "@binding": "tab.title"
      }
    }
  })])]), _c('div', {
    staticClass: ["tab-panels"],
    staticStyle: {
      "left": {
        "@binding": "activeTab * -750 + 'px'"
      }
    }
  }, [_c('div', {
    key: {
      "@binding": "pi"
    },
    staticClass: ["panel"],
    attrs: {
      "[[repeat]]": {
        "@expression": "panels",
        "@alias": "panel",
        "@index": "pi"
      }
    }
  }, [_c('text', {
    staticClass: ["content"],
    attrs: {
      "value": {
        "@binding": "panel.content"
      }
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Tab = __webpack_require__(4);

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Tab2.default.el = '#root';
new Vue(_Tab2.default);

/***/ })
/******/ ]);