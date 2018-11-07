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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "E:\\workspace\\noder-weex\\src\\components\\Floor.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9efd97a8"
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "row": {
    "flexDirection": "row"
  },
  "floor": {
    "marginBottom": "15",
    "backgroundColor": "#FFFFFF"
  },
  "floor-title": {
    "fontSize": "40",
    "textAlign": "center",
    "paddingTop": "35",
    "paddingBottom": "25"
  },
  "floor-desc": {
    "lines": 2,
    "color": "#999999",
    "fontSize": "30",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "floor-image-box": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "20"
  },
  "floor-image": {
    "width": "245",
    "height": "245"
  },
  "floor-comment": {
    "color": "#52bfe6",
    "fontSize": "32",
    "textAlign": "right",
    "paddingRight": "50",
    "marginTop": "25",
    "marginBottom": "20"
  }
}

/***/ }),
/* 2 */
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

exports.default = {
  props: ['floor']
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["floor"]
  }, [_c('text', {
    staticClass: ["floor-title"]
  }, [_vm._v(_vm._s(_vm.floor.title))]), _c('text', {
    staticClass: ["floor-desc"],
    attrs: {
      "lines": "2"
    }
  }, [_vm._v(_vm._s(_vm.floor.desc))]), _c('div', {
    staticClass: ["floor-image-box", "row"]
  }, _vm._l((_vm.floor.pictures), function(source, x) {
    return _c('image', {
      key: x,
      staticClass: ["floor-image"],
      attrs: {
        "src": source
      }
    })
  })), (_vm.floor.count) ? _c('text', {
    staticClass: ["floor-comment"]
  }, [_vm._v(_vm._s(_vm.floor.count) + " 点击数")]) : _vm._e()])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["floor"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('text', {
    staticClass: ["floor-title"],
    attrs: {
      "value": {
        "@binding": "floor.title"
      }
    }
  }), _c('text', {
    staticClass: ["floor-desc"],
    attrs: {
      "lines": "2",
      "value": {
        "@binding": "floor.desc"
      }
    }
  }), _c('div', {
    staticClass: ["floor-image-box", "row"]
  }, [_c('image', {
    key: {
      "@binding": "x"
    },
    staticClass: ["floor-image"],
    attrs: {
      "src": {
        "@binding": "source"
      },
      "[[repeat]]": {
        "@expression": "floor.pictures",
        "@alias": "source",
        "@index": "x"
      }
    }
  })]), _c('text', {
    staticClass: ["floor-comment"],
    attrs: {
      "[[match]]": "floor.count",
      "value": [{
        "@binding": "floor.count"
      }, " 点击数"]
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
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
var __vue_template__ = __webpack_require__(15)
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
  "tabcontainer": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0
  },
  "tabbar": {
    "flexDirection": "row",
    "backgroundColor": "#444444"
  },
  "tab": {
    "height": "120",
    "width": "150",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "active": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "backgroundColor": "#333333",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "active": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    }
  },
  "title": {
    "fontSize": "28",
    "color": "#FFFFFF",
    "marginTop": "10"
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
  },
  methods: {
    toggle: function toggle(i) {
      this.activeTab = i;
      this.$emit('toggle', this.tabs[i].tab);
    }
  }
};

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
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
__vue_options__.__file = "E:\\workspace\\noder-weex\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
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
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": "750",
    "backgroundColor": "#EFEFEF"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tab = __webpack_require__(4);

var _Tab2 = _interopRequireDefault(_Tab);

var _Floor = __webpack_require__(0);

var _Floor2 = _interopRequireDefault(_Floor);

var _OverlayButton = __webpack_require__(16);

var _OverlayButton2 = _interopRequireDefault(_OverlayButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
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

var stream = weex.requireModule('stream');
var dom = weex.requireModule('dom');

var dataset = {
  floor: []
};

// generate list data
function createListData(order) {
  var array = [];
  var list = order.split(/[\s,]+/);
  for (var i = 0; i < list.length; i += 1) {
    var candidates = dataset[list[i]];
    array = array.concat(candidates);
  }
  return array;
}
var initial = 'floor';

var more = 'floor';

var modal = weex.requireModule('modal');
exports.default = {
  components: { Tab: _Tab2.default, Floor: _Floor2.default, OverlayButton: _OverlayButton2.default },
  data: function data() {
    return {
      marginTop: 0,
      longList: createListData(initial),
      tabs: [{ title: '主页' }, { title: '精华', tab: 'good' }, { title: '分享', tab: 'share' }, { title: '问答', tab: 'ask' }, { title: '招聘', tab: 'job' }],
      tab: undefined,
      page: 1
    };
  },
  created: function created() {
    this.getListData();
  },
  mounted: function mounted() {
    var _this = this;

    dom.getComponentRect(this.$refs.tab, function (_ref) {
      var size = _ref.size;

      _this.marginTop = size.height + 'px';
    });
  },

  methods: {
    loadmore: function loadmore() {
      var _this2 = this;

      this.page += 1;
      this.getListData(function () {
        var newData = createListData(more);
        modal.toast({ message: 'loadmore (' + (_this2.longList.length + newData.length) + ')' });
        setTimeout(function () {
          var _longList;

          (_longList = _this2.longList).push.apply(_longList, _toConsumableArray(newData));
        }, 0);
      });
    },
    toggleTab: function toggleTab(tab) {
      this.tab = tab;
      this.page = 1;
      this.getListData();
    },
    getListData: function getListData(callback) {
      var _this3 = this;

      var params = {
        page: this.page || 1,
        limit: 10
      };
      if (this.tab) {
        params.tab = this.tab;
      }
      var paramStr = Object.keys(params).reduce(function (sum, key) {
        if (sum === '') {
          return '?' + key + '=' + params[key];
        }
        return sum + '&' + key + '=' + params[key];
      }, '');
      stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'https://cnodejs.org/api/v1/topics' + paramStr
      }, function (res) {
        if (res.data.success) {
          dataset.floor = res.data.data.map(function (item) {
            return {
              type: 'floor',
              title: item.title,
              desc: item.content,
              pictures: [item.author.avatar_url],
              count: item.visit_count
            };
          });
          if (callback) {
            callback(dataset.floor);
          } else {
            _this3.longList = createListData(initial);
          }
        }
      });
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('recycle-list', {
    staticClass: ["list"],
    style: {
      marginTop: _vm.marginTop
    },
    appendAsTree: true,
    attrs: {
      "listData": _vm.longList,
      "bindingExpression": "longList",
      "alias": "item",
      "index": "index",
      "switch": "type",
      "append": "tree"
    },
    on: {
      "loadmore": _vm.loadmore
    }
  }, [_c('cell-slot', {
    appendAsTree: true,
    attrs: {
      "case": "floor",
      "append": "tree"
    }
  }, [_c('floor', {
    attrs: {
      "floor": {
        "@binding": "item"
      },
      "@inRecycleList": true
    }
  })], 1)], 1), _c('tab', {
    ref: "tab",
    attrs: {
      "tabs": _vm.tabs
    },
    on: {
      "toggle": _vm.toggleTab
    }
  }), _c('overlay-button')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["tabcontainer"]
  }, [_c('div', {
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
          _vm.toggle(i)
        }
      }
    }, [_c('text', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(tab.title))])])
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "E:\\workspace\\noder-weex\\src\\components\\OverlayButton.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3bdbae7c"
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "overlay": {
    "position": "fixed",
    "bottom": "45",
    "left": "45",
    "height": "90",
    "width": "90",
    "borderRadius": "45",
    "backgroundColor": "rgba(0,0,0,0.7)",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "icon": {
    "flex": 1,
    "width": "25",
    "height": "25"
  }
}

/***/ }),
/* 18 */
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

var navigator = weex.requireModule('navigator');

exports.default = {
  methods: {
    toLogin: function toLogin() {
      navigator.push({
        url: 'http://10.100.146.15:8081/login.js',
        animated: "true"
      });
    }
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["overlay"],
    on: {
      "click": _vm.toLogin
    }
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": "https://vuejs.org/images/logo.png"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);