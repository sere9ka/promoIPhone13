/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n\r\n\r\n\r\n\r\nseamless.polyfill();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n    const chItems = document.querySelectorAll('.characteristics__item')\r\n\r\n    const chChange = (indexActive) => {\r\n        chItems.forEach((item, index) => {\r\n            if (index != indexActive) {\r\n                const chButton = item.querySelector('.characteristics__title')\r\n                const chDesc = item.querySelector('.characteristics__description')\r\n                chDesc.style.height = ''\r\n                chButton.classList.remove('active')\r\n                chDesc.classList.remove('open')\r\n            }\r\n            \r\n        })\r\n    }\r\n\r\n    chItems.forEach((item, index) => {\r\n        const chButton = item.querySelector('.characteristics__title')\r\n        const chDesc = item.querySelector('.characteristics__description')\r\n\r\n        chButton.addEventListener('click', () => {\r\n            chChange(index)\r\n            if (chDesc.classList.contains('open')) {\r\n                chDesc.style.height = ''\r\n            } else {\r\n                chDesc.style.height = chDesc.scrollHeight + 'px'\r\n            }\r\n            chButton.classList.toggle('active')\r\n            chDesc.classList.toggle('open')\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://3dglo/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const body = document.querySelector('body')\r\n\r\n    const goToScroll = (link) => {\r\n        const id = link.getAttribute('href').substring(1)\r\n        const section = document.getElementById(id)\r\n        if (section) {\r\n            seamless.elementScrollIntoView(section, {\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            })\r\n        } else {\r\n            seamless.elementScrollIntoView(document.querySelector(\"#characteristics\"), {\r\n                behavior: \"smooth\",\r\n                block: \"center\",\r\n                inline: \"center\",\r\n            });\r\n        }\r\n    }\r\n    \r\n    body.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        let link = e.target\r\n        if (e.target.closest('.header-menu__item') || e.target.closest('.card-details__link-characteristics')) { \r\n            goToScroll(link)\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://3dglo/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabs = document.querySelectorAll('.card-detail__change')\r\n    const tabTitle = document.querySelector('.card-details__title')\r\n    const tabImg = document.querySelector('.card__image_item')\r\n    const price = document.querySelector('.card-details__price')\r\n    const title = document.querySelector('title')\r\n\r\n\r\n    const tabsOptions = [\r\n        {\r\n            name: \"Graphite\",\r\n            memory: \"128\",\r\n            price: \"60000\",\r\n            img: \"img/iPhone-graphite.webp\"\r\n        },\r\n        {\r\n            name: \"Silver\",\r\n            memory: \"256\",\r\n            price: \"65000\",\r\n            img: \"img/iPhone-silver.webp\"\r\n        },\r\n        {\r\n            name: \"Sierra Blue\",\r\n            memory: \"512\",\r\n            price: \"70000\",\r\n            img: \"img/iPhone-sierra_blue.webp\"\r\n        }\r\n    ]\r\n\r\n    const changeContent = (index) => {\r\n        tabTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`\r\n        price.textContent = `${tabsOptions[index].price}₽`\r\n        title.textContent = `iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`\r\n \r\n        tabImg.setAttribute('src', ` ${tabsOptions[index].img}`)\r\n    }\r\n\r\n    const chacngeActive = (indexClickedTab) => {\r\n        tabs.forEach((tab, index) => {\r\n            tab.classList.remove('active')\r\n\r\n            if (index === indexClickedTab) {\r\n                tab.classList.add('active')\r\n            }\r\n        })\r\n        changeContent(indexClickedTab)\r\n    }\r\n\r\n    tabs.forEach((tab, index) => {\r\n        tab.addEventListener('click', () => {\r\n            chacngeActive(index)\r\n        })\r\n    })\r\n\r\n    changeContent(0)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;