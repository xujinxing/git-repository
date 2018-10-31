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
  }, [_vm._v(_vm._s(_vm.floor.count) + " 人说好")]) : _vm._e()])
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
      }, " 人说好"]
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

var dataset = {
  tab: [{
    type: 'tab',
    tabs: [{ title: '首页', icon: 'https://gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png' }, { title: '耍帅', icon: 'https://gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png' }, { title: '旅行', icon: 'https://gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png' }, { title: '潮玩', icon: 'https://img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png' }, { title: '穿搭', icon: 'https://gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png' }]
  }],
  floor: [{
    type: 'floor',
    title: '就造专属感，给孩子寻个座椅好玩伴',
    desc: '犹记得儿时的风筝带着斑斓的色彩在天空飘过；那小河里躲迷藏的鱼虾，还待着小伙伴们一起去捕捉，如今的孩童没有了这些简单且纯粹的娱乐项目，生活在高楼城市中的他们，该当怎样度过自己的童年才是美好的？',
    pictures: ['https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg'],
    count: 237
  }, {
    type: 'floor',
    title: '睡袍穿不对，脱光也不媚！',
    desc: '“Ihatemynightgown（我讨厌我的睡袍）.”经典电影《罗马假日》中，赫本饰演的安妮公主躺在梦幻的宫廷大床上，抱怨她身上那华丽的大睡袍臃肿不便，为公主的浪漫逃逸埋下伏笔。想象一下，男朋友刚刚',
    pictures: ['https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'],
    count: 876
  }, {
    type: 'floor',
    title: '上天入海？运动相机帮你搞定',
    desc: '现如今相机好像成为了我们每个人必不可少的装备，不管是专业的相机还是我们可拍照的手机，我们使用到它的频率也越来越高。为了追求更好的拍摄质量，人们似乎也愿意花更多的钱去购买好的拍摄装备',
    pictures: ['https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'],
    count: 59
  }, {
    type: 'floor',
    title: '关于培根的那些事，教你吃得门清',
    desc: '培根一直被认为是早餐的头盘，早上烤两片面包，平底锅煎一片培根、一个鸡蛋，和生菜一起夹在面包中，有荤有素，就是一顿丰富美味的西式早餐。培根的英文名是“Bacon”，原意是烟熏的猪肋条肉，或烟熏背脊肉',
    pictures: ['https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg'],
    count: 3576
  }, {
    type: 'floor',
    title: '轻奢风来袭，皮艺床打造典雅居室',
    desc: '对于追求生活高品质感的小伙伴来说，皮艺家具是展现其高格调的途径之一。想要营造出奢华质感的卧室环境，大气庄重的皮床当然是不错的选择。特别是简欧风或是美式古典风格的家居环境，如果配以皮艺床简直就是点睛之笔',
    pictures: ['https://gw.alicdn.com/imgextra/i2/787557947/TB2erNKawoQMeJjy0FoXXcShVXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/787557947/TB2KANyaBUSMeJjy1zkXXaWmpXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i3/787557947/TB2lwdGayERMeJjy0FcXXc7opXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg'],
    count: 36
  }, {
    type: 'floor',
    title: '提高品质生活，从用好水开始',
    desc: '我们生活中每天都要喝水、用水，可是你真的喝到、用到好水了么？为了得到更高品质的生活，我们需要更多的好东西让我们的生活更有档次，那不如就从改变你每天都要亲密接触的水开始吧',
    pictures: ['https://gw.alicdn.com/imgextra/i2/1904229646/TB2dRg4dgoQMeJjy0FpXXcTxpXa_!!1904229646-2-daren.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i1/1904229646/TB2JtOjfOAKL1JjSZFoXXagCFXa_!!1904229646-2-daren.png_250x250.jpg', 'https://gw.alicdn.com/imgextra/i1/1904229646/TB2BSXjdwsSMeJjSspeXXa77VXa_!!1904229646-2-daren.png_250x250.jpg'],
    count: 74
  }, {
    type: 'floor',
    title: '酒鬼到了意大利，收不住的红酒心',
    desc: '意大利是一个集古典与艺术于一身的国度，这里是艺术的发源地之一，也是欧洲最早种植葡萄的国家之一。意大利的酿酒历史超过4000年，本地葡萄品种过千不止，古希腊人称其为“葡萄酒之国”',
    pictures: ['https://gw.alicdn.com/imgextra/i1/2872639756/TB21lwtXjihSKJjy0FiXXcuiFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i1/2872639756/TB2zgRJdwMPMeJjy1XdXXasrXXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg', 'https://gw.alicdn.com/imgextra/i2/2872639756/TB2Ki0NdBUSMeJjSspfXXX0VFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg'],
    count: 182
  }]
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
var initial = 'tab,floor';

var more = 'tab,floor';

var modal = weex.requireModule('modal');
exports.default = {
  components: { Tab: _Tab2.default, Floor: _Floor2.default },
  data: function data() {
    return {
      longList: createListData(initial)
    };
  },

  methods: {
    loadmore: function loadmore() {
      var _this = this;

      var newData = createListData(more);
      modal.toast({ message: 'loadmore (' + (this.longList.length + newData.length) + ')' });
      setTimeout(function () {
        var _longList;

        (_longList = _this.longList).push.apply(_longList, _toConsumableArray(newData));
      }, 0);
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('recycle-list', {
    staticClass: ["list"],
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
      "case": "tab",
      "append": "tree"
    }
  }, [_c('tab', {
    attrs: {
      "tabs": {
        "@binding": "item.tabs"
      },
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
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
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);