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

/***/ "../../_commons/js/clases/GrupList.js":
/*!********************************************!*\
  !*** ../../_commons/js/clases/GrupList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GrupList\": () => (/* binding */ GrupList)\n/* harmony export */ });\nclass GrupList {\r\n\r\n    constructor() {\r\n        this.grupsList = [];\r\n\t\tthis.cargarLocalStorage();\r\n    }\r\n\r\n    addGroup(group) {\r\n        this.grupsList.push(group);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    autoIncrementId() {\r\n        return this.grupsList.at(-1) +1;\r\n    }\r\n\r\n    guardarLocalStorage() {\r\n        localStorage.setItem('groups', JSON.stringify(this.grupsList));\r\n    }\r\n\r\n    cargarLocalStorage() {\r\n        this.grupsList = (localStorage.getItem('groups')) ? JSON.parse(localStorage.getItem('groups')) : [];\r\n    }\r\n}\n\n//# sourceURL=webpack://chatapp/../../_commons/js/clases/GrupList.js?");

/***/ }),

/***/ "../../_commons/js/clases/UsuarisList.js":
/*!***********************************************!*\
  !*** ../../_commons/js/clases/UsuarisList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsuarisList\": () => (/* binding */ UsuarisList)\n/* harmony export */ });\nclass UsuarisList {\r\n\r\n\tusuaris;\r\n\r\n    constructor() {\r\n        this.usuaris = [];\r\n\t\tthis.obtenirDades().then((data) => this.usuaris = data);\r\n\r\n    }\r\n\r\n    async obtenirDades() {\r\n\t\t\r\n\t\tlet data1 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/usuaris.json');\r\n\t\tdata1 = await data1.json();\r\n\t\treturn data1;\r\n\t}\r\n}\n\n//# sourceURL=webpack://chatapp/../../_commons/js/clases/UsuarisList.js?");

/***/ }),

/***/ "../src/js/Messages.js":
/*!*****************************!*\
  !*** ../src/js/Messages.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Messages\": () => (/* binding */ Messages)\n/* harmony export */ });\nclass Messages {\r\n\r\n    constructor(id, author_id, message, created, pubpriv, dest_id) {\r\n        this.id = id;\r\n        this.author_id = author_id;\r\n        this.message = message;\r\n        this.created = created;\r\n        this.pubpriv = pubpriv;\r\n        this.dest_id = dest_id;\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://chatapp/../src/js/Messages.js?");

/***/ }),

/***/ "../src/js/MessagesList.js":
/*!*********************************!*\
  !*** ../src/js/MessagesList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessagesList\": () => (/* binding */ MessagesList)\n/* harmony export */ });\nclass MessagesList {\r\n\r\n    constructor() {\r\n        this.messageList = [];\r\n        this.cargarLocalStorage();\r\n    }\r\n\r\n    addMessage(message) {\r\n        this.messageList.push(message);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    autoIncrementId() {\r\n        let id = this.messageList.length > 0 ? this.messageList.at(-1).id : 0;\r\n\t\treturn id;\r\n    }\r\n\r\n    guardarLocalStorage() {\r\n        localStorage.setItem('messages', JSON.stringify(this.messageList));\r\n    }\r\n\r\n    cargarLocalStorage() {\r\n        this.messageList = (localStorage.getItem('messages')) ? JSON.parse(localStorage.getItem('messages')) : [];\r\n    }\r\n}\n\n//# sourceURL=webpack://chatapp/../src/js/MessagesList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _xampp_htdocs_projecte_web_commons_js_clases_UsuarisList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_commons/js/clases/UsuarisList */ \"../../_commons/js/clases/UsuarisList.js\");\n/* harmony import */ var _xampp_htdocs_projecte_web_chatapp_src_js_Messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/js/Messages */ \"../src/js/Messages.js\");\n/* harmony import */ var _xampp_htdocs_projecte_web_chatapp_src_js_MessagesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/MessagesList */ \"../src/js/MessagesList.js\");\n/* harmony import */ var _xampp_htdocs_projecte_web_commons_js_clases_GrupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_commons/js/clases/GrupList */ \"../../_commons/js/clases/GrupList.js\");\n\r\n\r\n\r\n\r\n\r\n//COMPONENTES DEL FORMULARIO\r\nlet cbPublic = document.getElementById(\"cbPublic\");\r\nlet tfGrupo = document.getElementById(\"tfGrupo\");\r\nlet cbPrivado = document.getElementById(\"cbPrivado\");\r\nlet tfUsuario = document.getElementById(\"tfUsuario\");\r\nlet taMensaje = document.getElementById(\"taMensaje\");\r\nlet btEnviar = document.getElementById(\"btEnviar\");\r\nlet divPublic = document.getElementById(\"containerPublic\");\r\nlet divPrivate = document.getElementById(\"containerPrivate\");\r\n\r\n//EVENTLISTENER DE LOS CHECKBOX\r\ncbPrivado.addEventListener(\"change\", ocultacionDiv());\r\ncbPublic.addEventListener(\"change\", ocultacionDiv());\r\n\r\n//EVENTLISTENER DE LOS BOTONES\r\nbtEnviar.addEventListener(\"click\", enviarMensaje());\r\n\r\n//FUNCION DE OCULTAR LOS DIV EN FUNCION DE LOS CHECKBOX MARCADOS\r\nfunction ocultacionDiv() {\r\n\r\n    if(cbPublic.checked) {\r\n\r\n        divPrivate.style.display = \"none\";\r\n\r\n    } else {\r\n\r\n        divPrivate.style.display = \"block\";\r\n    }\r\n\r\n    if(cbPrivado.checked) {\r\n\r\n        divPublic.style.display = \"none\";\r\n\r\n    } else {\r\n\r\n        divPublic.style.display = \"block\";\r\n    }\r\n}\r\n\r\n//FUNCION DE COGER LA FECHA ACTUAL DEL SISTEMA\r\nfunction fechaActual() {\r\n\r\n    var hoy = new Date();\r\n    var dia = today.getDate();\r\n    var mes = today.getMonth() + 1;\r\n    var any = today.getFullYear();\r\n\r\n    if (dia < 10) {\r\n        dia = '0' + dia;\r\n    }\r\n\r\n    if (mes < 10) {\r\n        mes = '0' + mes;\r\n    }\r\n\r\n    hoy = mes + '/' + dia + '/' + any;\r\n\r\n    return hoy;\r\n}\r\n\r\n//FUNCION DE GUARDAR EL MENSAJE\r\nfunction enviarMensaje() {\r\n\r\n    var pubpriv;\r\n    var cuerpoMensaje = taMensaje.value;\r\n    let listaUsuarios = new _xampp_htdocs_projecte_web_commons_js_clases_UsuarisList__WEBPACK_IMPORTED_MODULE_0__.UsuarisList();\r\n\r\n    //SE EJECUTA CUANDO EL CHECKBOX PUBLIC ES SELECCIONADO\r\n    if(cbPublic.checked) {\r\n\r\n        var nombreGrupo = tfGrupo.value;\r\n        pubpriv = cbPublic.value;\r\n\r\n        let listaGrupos = new _xampp_htdocs_projecte_web_commons_js_clases_GrupList__WEBPACK_IMPORTED_MODULE_3__.GrupList();\r\n\r\n        //POR CADA GRUPO EN EL ARRAY, SI EL NOMBRE DE GRUPO INTRODUCIDO COINCIDE CON UNO DEL ARRAY\r\n        listaGrupos.forEach(grup => {\r\n\r\n            if(listaGrupos[grup].name == nombreGrupo) {\r\n\r\n                //AUTHOR_ID CORRESPONDIENTE AL PRIMER ELEMENTO DEL ARRAY DE USUARIOS (NO SE QUE USUARIO HACE ESTO)\r\n                var mensaje = new _xampp_htdocs_projecte_web_chatapp_src_js_Messages__WEBPACK_IMPORTED_MODULE_1__.Messages(listaGrupos.autoIncrementId(), listaUsuarios[0].id_usuari, cuerpoMensaje, fechaActual(), pubpriv, listaGrupos[grup].id);\r\n\r\n                //CARGAR ARRAY DE MENSAJES E INSERTAR EL MENSAJE CREADO\r\n                let listaMensajes = new _xampp_htdocs_projecte_web_chatapp_src_js_MessagesList__WEBPACK_IMPORTED_MODULE_2__.MessagesList();\r\n                listaMensajes.addMessage(mensaje);\r\n\r\n                alert(\"Missatge enviat!!\");\r\n            }\r\n\r\n        });\r\n    }\r\n\r\n    //SE EJECUTA CUANDO EL CHECKBOX PRIVADO ES SELECCIONADO\r\n    if(cbPrivado.checked) {\r\n\r\n        var destinatario = tfUsuario.value;\r\n        pubpriv = cbPrivado.value;\r\n\r\n        //POR CADA USUARIO EN EL ARRAY, SI EL USERNAME INTRODUCIDO COINCIDE CON UNO DEL ARRAY\r\n        listaUsuarios.forEach(user => {\r\n\r\n            if(listaUsuarios[user].username == destinatario) {\r\n    \r\n                //AUTHOR_ID CORRESPONDIENTE AL PRIMER ELEMENTO DEL ARRAY DE USUARIOS (NO SE QUE USUARIO HACE ESTO)\r\n                let mensaje = new _xampp_htdocs_projecte_web_chatapp_src_js_Messages__WEBPACK_IMPORTED_MODULE_1__.Messages(listaMensajes.autoIncrementId(), listaUsuarios[0].id_usuari, cuerpoMensaje, fechaActual(), pubpriv, listaUsuarios[user].id_usuari);\r\n\r\n                //CARGAR ARRAY DE MENSAJES E INSERTAR EL MENSAJE CREADO\r\n                let listaMensajes = new _xampp_htdocs_projecte_web_chatapp_src_js_MessagesList__WEBPACK_IMPORTED_MODULE_2__.MessagesList();\r\n                listaMensajes.addMessage(mensaje);\r\n\r\n                alert(\"Missatge enviat!!\");\r\n            }\r\n\r\n        });\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://chatapp/./src/index.js?");

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