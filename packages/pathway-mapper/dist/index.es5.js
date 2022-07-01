module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("autobind-decorator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cytoscape");

/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = JSON.parse("{\"ACC-2016-TP53-RB-pathway\":[\"ACC-2016-TP53-RB-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDK4\\twyMGXBw8cUj6\\tGENE\\t-1\\t262\\t231\\t\",\"RB1\\tLrJe2ktmcVzK\\tGENE\\t-1\\t262\\t340\\t\",\"CDKN2A\\tN18olkvEcUJu\\tGENE\\t-1\\t387\\t127\\t\",\"TP53\\t-VLZ5keBcXa3\\tGENE\\t-1\\t488\\t340\\t\",\"MDM2\\t79evo3OUcVFA\\tGENE\\t-1\\t488\\t231\\t\",\"CCNE1\\t-le5m2j6cWa2\\tGENE\\t-1\\t80\\t340\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"d3auWK_1cit5\\t79evo3OUcVFA\\t-VLZ5keBcXa3\\tINHIBITS\",\"w4Yp60k9chhi\\tN18olkvEcUJu\\t79evo3OUcVFA\\tINHIBITS\",\"XhRgnqAscgwV\\tN18olkvEcUJu\\twyMGXBw8cUj6\\tINHIBITS\",\"0E_Xe1cUckq-\\twyMGXBw8cUj6\\tLrJe2ktmcVzK\\tINHIBITS\",\"K9h1lRMzclc1\\t-le5m2j6cWa2\\tLrJe2ktmcVzK\\tINHIBITS\"],\"ACC-2016-WNT-signaling-pathway\":[\"ACC-2016-WNT-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CTNNB1\\taS-MtgKvdBTI\\tGENE\\t-1\\t396\\t371\\t\",\"MEN1\\tWoDJQ15LdCGw\\tGENE\\t-1\\t615\\t371\\t\",\"APC\\tquRewaVqdAAg\\tGENE\\t-1\\t396\\t277\\t\",\"WNT\\tg2oPjTN1c_MF\\tFAMILY\\t-1\\t396\\t183\\t\",\"ZNRF3\\tD1VT3C7Tc9uz\\tGENE\\t-1\\t396\\t87\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"mcDc9E8ddKPh\\tWoDJQ15LdCGw\\taS-MtgKvdBTI\\tINHIBITS\",\"xhr-qCdhdMnS\\tg2oPjTN1c_MF\\tquRewaVqdAAg\\tINHIBITS\",\"MRNaHfmqdLIB\\tquRewaVqdAAg\\taS-MtgKvdBTI\\tINHIBITS\",\"V58DLRlddN04\\tD1VT3C7Tc9uz\\tg2oPjTN1c_MF\\tINHIBITS\"],\"BLCA-2014-Histone-modification-pathway\":[\"BLCA-2014-Histone-modification-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KDM1A\\tibAwJma20izY\\tGENE\\t-1\\t330\\t280\\t\",\"K9 (Ac, me1-3)\\tUdMq7kedz9FO\\tPROCESS\\t-1\\t441\\t185\\t\",\"K4 (me1-3)\\t6Itl25k-0F3S\\tPROCESS\\t-1\\t214\\t185\\t\",\"KDM6B\\tKGmluEtPHXqp\\tGENE\\t_aOp5kW01GfD\\t685\\t332\\t\",\"KDM4B\\t5_51HfxoHY9n\\tGENE\\tWWAQi_-h1FbJ\\t500\\t329\\t\",\"H3\\t_L15u0RJ0Eq5\\tPROCESS\\t-1\\t1128\\t185\\t\",\"K36 (me1-3)\\tyE8mFlUU0AcJ\\tPROCESS\\t-1\\t785\\t185\\t\",\"KDM1B\\tf-uYX8eW0o-j\\tGENE\\t-1\\t330\\t338\\t\",\"K27 (Ac, me1-3)\\tqU2DuUfoz_fU\\tPROCESS\\t-1\\t612\\t185\\t\",\"K79 (me1-3)\\tsGOXj0dB0CoY\\tPROCESS\\t-1\\t945\\t185\\t\",\"KDM4A\\tZN4FWAEl0yGP\\tGENE\\t-1\\t859\\t280\\t\",\"KDM5B\\t2NfOJGRNHYQB\\tGENE\\tNnEeq-Df1E_j\\t151\\t333\\t\",\"KDM4A\\tw2_Nlv2xHY9d\\tGENE\\tWWAQi_-h1FbJ\\t500\\t280\\t\",\"Demethylases\\tHX269Het1CgI\\tPROCESS\\t-1\\t1107\\t280\\t\",\"KDM4A-KDM4B\\tWWAQi_-h1FbJ\\tCOMPARTMENT\\t-1\\t500\\t304\\t\",\"KDM5A-KDM5B\\tNnEeq-Df1E_j\\tCOMPARTMENT\\t-1\\t151\\t306\\t\",\"KDM6A\\ttsbexFtHHXqU\\tGENE\\t_aOp5kW01GfD\\t685\\t280\\t\",\"KDM5A\\tZGtryZF-HYPy\\tGENE\\tNnEeq-Df1E_j\\t151\\t280\\t\",\"KDM6A-KDM6B\\t_aOp5kW01GfD\\tCOMPARTMENT\\t-1\\t685\\t306\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"QFzccFLP1rXn\\tUdMq7kedz9FO\\tqU2DuUfoz_fU\\tBINDS\",\"1iLfbX2611ie\\tsGOXj0dB0CoY\\t_L15u0RJ0Eq5\\tBINDS\",\"KtQPDuFH2B4M\\tNnEeq-Df1E_j\\t6Itl25k-0F3S\\tACTIVATES\",\"1ufB4tsp2MbY\\tZN4FWAEl0yGP\\tyE8mFlUU0AcJ\\tACTIVATES\",\"F6Hoq3VR2Fbi\\tibAwJma20izY\\t6Itl25k-0F3S\\tACTIVATES\",\"c5Dw1pvh2GJ7\\tibAwJma20izY\\tUdMq7kedz9FO\\tACTIVATES\",\"B85D8ro61xLn\\tyE8mFlUU0AcJ\\tsGOXj0dB0CoY\\tBINDS\",\"e_aGaIGw1pWA\\t6Itl25k-0F3S\\tUdMq7kedz9FO\\tBINDS\",\"EVjpyavJ2DfI\\tf-uYX8eW0o-j\\t6Itl25k-0F3S\\tACTIVATES\",\"f0P9R0dZ2J5O\\t_aOp5kW01GfD\\tqU2DuUfoz_fU\\tACTIVATES\",\"g_eFQ6zG2Hu-\\tWWAQi_-h1FbJ\\tUdMq7kedz9FO\\tACTIVATES\",\"T1GuzceK1uZK\\tqU2DuUfoz_fU\\tyE8mFlUU0AcJ\\tBINDS\"],\"BLCA-2014-RTK-RAS-PI(3)K-pathway\":[\"BLCA-2014-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"ERBB2\\taqgx5yiY4na1\\tGENE\\tG_Vyif7SpoW2\\t584\\t98\\t\",\"NRAS\\tAbEoLGCY4sp9\\tGENE\\tydhBmSAbpTKc\\t476\\t183\\t\",\"TSC2\\tUD1lE2yO48n8\\tGENE\\t2_7tyoaRphSY\\t503\\t496\\t\",\"PIK3CA\\ts5486n5gpU_K\\tGENE\\t-1\\t658\\t184\\t\",\"PTEN\\ttiSgM3o0pX_z\\tGENE\\t-1\\t860\\t184\\t\",\"FGFR3\\t5yUJdgCL4naU\\tGENE\\tG_Vyif7SpoW2\\t272\\t98\\t\",\"Survival\\tt8b0oOIypis0\\tPROCESS\\t-1\\t791\\t584\\t\",\"HRAS\\tLtxngbVT4spa\\tGENE\\tydhBmSAbpTKc\\t322\\t183\\t\",\"RAS\\tG_Vyif7SpoW2\\tFAMILY\\t-1\\t506\\t98\\t\",\"STK11\\t8wk4zb43pfsu\\tGENE\\t-1\\t317\\t469\\t\",\"INPP4B\\tlGy7ILYwpZag\\tGENE\\t-1\\t804\\t266\\t\",\"MTOR\\tVyT8z_EcpexB\\tGENE\\t-1\\t722\\t470\\t\",\"TSC\\t2_7tyoaRphSY\\tFAMILY\\t-1\\t503\\t470\\t\",\"Proliferation\\t1PYLl_CZpjUH\\tPROCESS\\t-1\\t665\\t584\\t\",\"EGFR\\tMO1TWgRb4nbC\\tGENE\\tG_Vyif7SpoW2\\t429\\t98\\t\",\"RAS\\tydhBmSAbpTKc\\tFAMILY\\t-1\\t399\\t183\\t\",\"AKT\\tEuvUiqD6pbqL\\tGENE\\t-1\\t659\\t349\\t\",\"TSC1\\tlj3YtBzu48oT\\tGENE\\t2_7tyoaRphSY\\t503\\t444\\t\",\"ERBB3\\tSUuAzaJ-4nar\\tGENE\\tG_Vyif7SpoW2\\t739\\t98\\t\",\"NF1\\tevdrZPc3pW-g\\tGENE\\t-1\\t399\\t270\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"arJi2bQrqEdS\\tevdrZPc3pW-g\\tydhBmSAbpTKc\\tINHIBITS\",\"F1IgAgZPppxS\\tG_Vyif7SpoW2\\tydhBmSAbpTKc\\tACTIVATES\",\"OqD_HmKHqQIw\\tEuvUiqD6pbqL\\t2_7tyoaRphSY\\tINHIBITS\",\"PY7KfKiCqL9D\\tlGy7ILYwpZag\\ts5486n5gpU_K\\tINHIBITS\",\"0PkuH29SqKeN\\ttiSgM3o0pX_z\\ts5486n5gpU_K\\tINHIBITS\",\"zNMzC5CMqORJ\\ts5486n5gpU_K\\tEuvUiqD6pbqL\\tACTIVATES\",\"UB7BIf_SqRqo\\t2_7tyoaRphSY\\tVyT8z_EcpexB\\tINHIBITS\",\"OQI-iqX2qTLl\\t8wk4zb43pfsu\\t2_7tyoaRphSY\\tACTIVATES\",\"9Vm-zOAgqGbc\\tydhBmSAbpTKc\\ts5486n5gpU_K\\tACTIVATES\",\"uN421vA1qaeA\\tVyT8z_EcpexB\\tt8b0oOIypis0\\tACTIVATES\",\"ZTgU7FgfqZmN\\tVyT8z_EcpexB\\t1PYLl_CZpjUH\\tACTIVATES\"],\"BLCA-2014-TP53-RB-pathway\":[\"BLCA-2014-TP53-RB-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Cell cycle progression\\tok7nDiB9oQJI\\tPROCESS\\t-1\\t414\\t436\\t\",\"CCNE1\\thm8HJrbqoWfo\\tGENE\\t-1\\t414\\t353\\t\",\"TP53\\tJYRUofjRoSmI\\tGENE\\t-1\\t605\\t179\\t\",\"MDM2\\t2XKi6b0joGD_\\tGENE\\t-1\\t413\\t179\\t\",\"E2F3\\tmz71J5tHoOtX\\tGENE\\t-1\\t219\\t436\\t\",\"Apoptosis\\t4-9gyc8LoX1s\\tPROCESS\\t-1\\t689\\t264\\t\",\"CDKN2A\\t9A-DhP0-oFUi\\tGENE\\t-1\\t219\\t179\\t\",\"CCND1\\tCsMIDjOQoHLw\\tGENE\\t-1\\t219\\t264\\t\",\"FBXW7\\tmULNbFKfoZFg\\tGENE\\t-1\\t625\\t353\\t\",\"ATM\\tjsI1OPG9oTvl\\tGENE\\t-1\\t605\\t85\\t\",\"CDKN1A\\tmBClqwIZoU7d\\tGENE\\t-1\\t526\\t264\\t\",\"RB1\\t-ACCNJRfoNBI\\tFAMILY\\t-1\\t219\\t353\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"B1RLlLrEo4cn\\tmz71J5tHoOtX\\tok7nDiB9oQJI\\tACTIVATES\",\"As7hIoBSo17y\\tCsMIDjOQoHLw\\t-ACCNJRfoNBI\\tINHIBITS\",\"mjgKjVX6ow0m\\t2XKi6b0joGD_\\tJYRUofjRoSmI\\tINHIBITS\",\"5BaXTZDuo7H8\\tmULNbFKfoZFg\\thm8HJrbqoWfo\\tINHIBITS\",\"PMdhVppIoyDR\\tJYRUofjRoSmI\\tmBClqwIZoU7d\\tACTIVATES\",\"w2p9WUJxo22X\\t-ACCNJRfoNBI\\tmz71J5tHoOtX\\tINHIBITS\",\"0hmD92TIo0ux\\t9A-DhP0-oFUi\\tCsMIDjOQoHLw\\tINHIBITS\",\"RfMPHF4FouzT\\tjsI1OPG9oTvl\\tJYRUofjRoSmI\\tACTIVATES\",\"toSMm4K7owET\\tJYRUofjRoSmI\\t2XKi6b0joGD_\\tACTIVATES\",\"LPb5J4Quo8EC\\tmBClqwIZoU7d\\thm8HJrbqoWfo\\tINHIBITS\",\"_PGdKZ50o5vL\\thm8HJrbqoWfo\\t-ACCNJRfoNBI\\tINHIBITS\",\"Vcmxazyaoz8N\\t9A-DhP0-oFUi\\t2XKi6b0joGD_\\tINHIBITS\",\"sABkuA1_oywi\\tJYRUofjRoSmI\\t4-9gyc8LoX1s\\tACTIVATES\"],\"BRCA-2012-Cell-cycle-signaling-pathway\":[\"BRCA-2012-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"BRCA2\\tVHmofL2iBtHB\\tGENE\\t9ZypvHQTebqG\\t302\\t521\\t\",\"p53/p21\\tK8vhHZlJewmz\\tPROCESS\\t-1\\t16\\t368\\t\",\"Cell-cycle arrest\\trsfgLtPJBro0\\tPROCESS\\tPve6lcOCerP2\\t518\\t505\\t\",\"BRCA1\\tPqa6yIQ4BtGs\\tGENE\\t9ZypvHQTebqG\\t145\\t521\\t\",\"ATM\\tTQqdq6ZHdybO\\tGENE\\t-1\\t-54\\t427\\t\",\"S/G2/M checkpoints\\teokFGf8gBroW\\tPROCESS\\tPve6lcOCerP2\\t518\\t452\\t\",\"S-phase entry\\tplt5oIp7Broo\\tPROCESS\\tPve6lcOCerP2\\t518\\t401\\t\",\"Cell cycle\\tPve6lcOCerP2\\tFAMILY\\t-1\\t518\\t453\\t\",\"RB1\\tCequZQzRd8SZ\\tGENE\\t-1\\t321\\t329\\t\",\"BRCA\\t9ZypvHQTebqG\\tFAMILY\\t-1\\t223\\t521\\t\",\"CCNE1\\tglg_i-QQdz9z\\tGENE\\t-1\\t133\\t329\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"GjwkZT93eu2S\\tCequZQzRd8SZ\\tPve6lcOCerP2\\tACTIVATES\",\"vbkfiLK9etui\\t9ZypvHQTebqG\\tPve6lcOCerP2\\tACTIVATES\",\"dQvMCZFxeWIc\\tglg_i-QQdz9z\\tCequZQzRd8SZ\\tINHIBITS\",\"OyM7Rh_ueTR2\\tTQqdq6ZHdybO\\tglg_i-QQdz9z\\tINHIBITS\",\"fcvz9ztueiRb\\tTQqdq6ZHdybO\\t9ZypvHQTebqG\\tACTIVATES\"],\"BRCA-2012-RTK-RAS-PI(3)K-pathway\":[\"BRCA-2012-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PIK3R1\\tLTI-_zA12M8_\\tGENE\\tQl_rV6PWbR4f\\t561\\t293\\t\",\"MAP3K1\\tV2U7rAinbMri\\tGENE\\t-1\\t803\\t220\\t\",\"IKBKB\\tv5be8J7cbT7P\\tGENE\\t-1\\t812\\t416\\t\",\"AKT1\\t2eyyNjOs2P7t\\tGENE\\tb8_iWiV3bSnI\\t738\\t293\\t\",\"PI3K\\tQl_rV6PWbR4f\\tFAMILY\\t-1\\t481\\t293\\t\",\"NF-kB\\tf-dza7Cyd34R\\tPROCESS\\t-1\\t940\\t406\\t\",\"PTEN\\tvmp2PR9WbESK\\tGENE\\t-1\\t480\\t218\\t\",\"Proliferation\\tQgBC5rX5baS9\\tPROCESS\\t-1\\t1277\\t416\\t\",\"MAP2K4\\thDh8Gi4cbOJg\\tGENE\\t-1\\t1075\\t220\\t\",\"ERBB2\\tkuccSffw2Nzs\\tGENE\\tTi_1UFukcA6d\\t205\\t220\\t\",\"PIK3CA\\tj3qYklwW2M9a\\tGENE\\tQl_rV6PWbR4f\\t402\\t293\\t\",\"AKT3\\tpH6LKha-2P8C\\tGENE\\tb8_iWiV3bSnI\\t897\\t293\\t\",\"PAK1\\tVjIN5hOKbQmQ\\tGENE\\t-1\\t480\\t416\\t\",\"AKT\\tb8_iWiV3bSnI\\tFAMILY\\t-1\\t818\\t293\\t\",\"CCND1\\tPKgbIo4AbVyY\\tGENE\\t-1\\t1084\\t416\\t\",\"RTK\\tTi_1UFukcA6d\\tFAMILY\\t-1\\t205\\t292\\t\",\"JNK/JUN Mediated Apoptosis\\t-MmWzJ2DbXrO\\tPROCESS\\t-1\\t1300\\t211\\t\",\"IGF1R\\tL4qe8zf82Nz8\\tGENE\\tTi_1UFukcA6d\\t205\\t293\\t\",\"EGFR\\tq9k-_XR32Nze\\tGENE\\tTi_1UFukcA6d\\t205\\t364\\t\",\"Evading apoptosis\\tg1G4oW6RbY6F\\tPROCESS\\t-1\\t1274\\t293\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"fhs_9IT6cUqw\\tb8_iWiV3bSnI\\tg1G4oW6RbY6F\\tACTIVATES\",\"teIhB-fucGLJ\\tVjIN5hOKbQmQ\\tb8_iWiV3bSnI\\tACTIVATES\",\"huxShVp3cIQO\\tQl_rV6PWbR4f\\tb8_iWiV3bSnI\\tACTIVATES\",\"WtHX5Q0hcXDM\\tPKgbIo4AbVyY\\tQgBC5rX5baS9\\tACTIVATES\",\"wAq3PQHjcaoH\\tb8_iWiV3bSnI\\tv5be8J7cbT7P\\tACTIVATES\",\"HE2KQFFscPqE\\thDh8Gi4cbOJg\\tPKgbIo4AbVyY\\tACTIVATES\",\"kzZuvBjdcQut\\tPKgbIo4AbVyY\\thDh8Gi4cbOJg\\tINHIBITS\",\"R6qp66fdcDsp\\tTi_1UFukcA6d\\tQl_rV6PWbR4f\\tACTIVATES\",\"8xgflgJ1cSju\\tv5be8J7cbT7P\\tPKgbIo4AbVyY\\tACTIVATES\",\"i-Pphq4BcWBa\\tb8_iWiV3bSnI\\tQgBC5rX5baS9\\tACTIVATES\",\"4s_OHeX4cTjW\\thDh8Gi4cbOJg\\t-MmWzJ2DbXrO\\tACTIVATES\",\"fegnTqNPcJpy\\tV2U7rAinbMri\\thDh8Gi4cbOJg\\tACTIVATES\",\"tj1nKgy9cExZ\\tvmp2PR9WbESK\\tQl_rV6PWbR4f\\tINHIBITS\"],\"BRCA-2012-TP53-pathway\":[\"BRCA-2012-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP53\\tAtC08ZQJc2KU\\tGENE\\t-1\\t491\\t349\\t\",\"Apoptosis\\toHj1iu9Nc3_k\\tPROCESS\\t-1\\t491\\t453\\t\",\"MDM4\\teUAyFKEv_rSt\\tGENE\\tY4IgKFahc81t\\t690\\t375\\t\",\"MDM2\\tEDekyeJO_rSa\\tGENE\\tY4IgKFahc81t\\t690\\t319\\t\",\"AKT1\\tnWtQqBkt_evA\\tGENE\\t-1\\t491\\t245\\t\",\"CHEK2\\tEZw1mFjYc0Pb\\tGENE\\t-1\\t300\\t350\\t\",\"MDM\\tY4IgKFahc81t\\tFAMILY\\t-1\\t690\\t347\\t\",\"ATM\\tDEtr5Wpj_eup\\tGENE\\t-1\\t300\\t245\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"EQR_Azwj_evL\\tDEtr5Wpj_eup\\tEZw1mFjYc0Pb\\tACTIVATES\",\"sV9ZEeJ9dMg3\\tY4IgKFahc81t\\tAtC08ZQJc2KU\\tINHIBITS\",\"kudrU-U-_evP\\tnWtQqBkt_evA\\tAtC08ZQJc2KU\\tINHIBITS\",\"hxwMi4kydOBT\\tAtC08ZQJc2KU\\toHj1iu9Nc3_k\\tACTIVATES\",\"uh5qfjUjdKB7\\tEZw1mFjYc0Pb\\tAtC08ZQJc2KU\\tACTIVATES\"],\"Cell Cycle\":[\"Cell Cycle\",\"\",\"Regulation of mitotic cell cycle progression involving a signaling cascade of cyclins and cyclin-dependent kinases as well as a number of regulatory checkpoints.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"MDM2\\txPwjUPwi3Y86\\tGENE\\t-1\\t413\\t179\",\"CDKN1A\\tFQbPaPlV3Y9Q\\tGENE\\t-1\\t526\\t264\",\"FBXW7\\t_Honmyd33Y9K\\tGENE\\t-1\\t625\\t353\",\"CCND1\\tKf3hsGsT3Y9F\\tGENE\\t-1\\t219\\t264\",\"Cell cycle progression\\tyazwmMvz3Y8y\\tPROCESS\\t-1\\t414\\t436\",\"CCNE1\\t4-ZVTw8b3Y81\\tGENE\\t-1\\t414\\t353\",\"Apoptosis\\tSwnDUEnB3Y8_\\tPROCESS\\t-1\\t689\\t264\",\"RB1\\tAFGazwPj3Y9U\\tFAMILY\\t-1\\t219\\t353\",\"E2F3\\tb7YoPaEx3Y88\\tGENE\\t-1\\t219\\t436\",\"CDKN2A\\tE6EgzvEy3Y9C\\tGENE\\t-1\\t219\\t179\",\"TP53\\tmIL53nP63Y83\\tGENE\\t-1\\t605\\t179\",\"ATM\\t4fc8CUod3Y9N\\tGENE\\t-1\\t605\\t85\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"3H557euy3Y9b\\t_Honmyd33Y9K\\t4-ZVTw8b3Y81\\tINHIBITS\\t\",\"rC-lNx0W3Y9d\\tAFGazwPj3Y9U\\tb7YoPaEx3Y88\\tINHIBITS\\t\",\"Qm2ZEnCl3Y9Z\\tKf3hsGsT3Y9F\\tAFGazwPj3Y9U\\tINHIBITS\\t\",\"pPO3_YVM3Y9e\\tE6EgzvEy3Y9C\\tKf3hsGsT3Y9F\\tINHIBITS\\t\",\"pGNnucwd3Y9g\\tmIL53nP63Y83\\txPwjUPwi3Y86\\tACTIVATES\\t\",\"ygTYWu2k3Y9k\\tE6EgzvEy3Y9C\\txPwjUPwi3Y86\\tINHIBITS\\t\",\"tq-BTuks3Y9i\\tFQbPaPlV3Y9Q\\t4-ZVTw8b3Y81\\tINHIBITS\\t\",\"HPSR11Er3Y9b\\tmIL53nP63Y83\\tFQbPaPlV3Y9Q\\tACTIVATES\\t\",\"h7AyF28j3Y9n\\tmIL53nP63Y83\\tSwnDUEnB3Y8_\\tACTIVATES\\t\",\"vYHEvpqL3Y9f\\t4fc8CUod3Y9N\\tmIL53nP63Y83\\tACTIVATES\\t\",\"4ELiZPT23Y9j\\t4-ZVTw8b3Y81\\tAFGazwPj3Y9U\\tINHIBITS\\t\",\"jDEpTZhK3Y9X\\tb7YoPaEx3Y88\\tyazwmMvz3Y8y\\tACTIVATES\\t\",\"_gVnliZV3Y9a\\txPwjUPwi3Y86\\tmIL53nP63Y83\\tINHIBITS\\t\"],\"COADREAD-2012-RTK-RAS-PI(3)K-pathway\":[\"COADREAD-2012-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"IRS2\\tZvdL-fZM3WuZ\\tGENE\\t-1\\t189\\t452\\t\",\"PIK3CA\\tMBUXnNN2z5Dt\\tGENE\\taDGGPsUl3doC\\t189\\t525\\t\",\"KRAS\\trKR_2SY2z0N3\\tGENE\\tD6EmJIZx6Gzg\\t555\\t462\\t\",\"ERBB2\\tStF--npjzyS_\\tGENE\\tjs1qiakd6GP4\\t404\\t298\\t\",\"IGF2\\tWv-EmNFT15yN\\tGENE\\t-1\\t189\\t298\\t\",\"PI3K\\taDGGPsUl3doC\\tFAMILY\\t-1\\t110\\t526\\t\",\"BRAF\\tPUJ8AKki53pG\\tGENE\\t-1\\t479\\t549\\t\",\"NRAS\\t8s1jKwvjz0Nm\\tGENE\\tD6EmJIZx6Gzg\\t406\\t462\\t\",\"Cell survival\\t1UmcnGh24P6f\\tPROCESS\\t-1\\t323\\t697\\t\",\"ERBB3\\tdg3Vl9qGzyTZ\\tGENE\\tjs1qiakd6GP4\\t556\\t300\\t\",\"IGF1R\\tcYzz8jlS2HaK\\tGENE\\t-1\\t189\\t380\\t\",\"RAS\\tD6EmJIZx6Gzg\\tFAMILY\\t-1\\t480\\t462\\t\",\"PIK3R1\\to9hOOpRM0I1T\\tGENE\\taDGGPsUl3doC\\t32\\t527\\t\",\"RTK\\tjs1qiakd6GP4\\tFAMILY\\t-1\\t480\\t299\\t\",\"Translation\\tRmlBMHs64SgD\\tPROCESS\\t-1\\t478\\t696\\t\",\"Proliferation\\trlRx40Am4Oyw\\tPROCESS\\t-1\\t164\\t697\\t\",\"PTEN\\ttSZugv-P3gVw\\tGENE\\t-1\\t29\\t452\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"6Shu_O4w4GqO\\tcYzz8jlS2HaK\\tZvdL-fZM3WuZ\\tACTIVATES\",\"kgTzvfUL0djR\\tMBUXnNN2z5Dt\\tRmlBMHs64SgD\\tNONE\",\"LrWZyqWL6OUk\\tD6EmJIZx6Gzg\\tPUJ8AKki53pG\\tACTIVATES\",\"MIyPv49C6PmS\\tPUJ8AKki53pG\\trlRx40Am4Oyw\\tACTIVATES\",\"6nSDsRMc6QPJ\\tPUJ8AKki53pG\\t1UmcnGh24P6f\\tACTIVATES\",\"AQSQDQcZ0XWo\\tZvdL-fZM3WuZ\\tMBUXnNN2z5Dt\\tACTIVATES\",\"ZfrWje290c1T\\tMBUXnNN2z5Dt\\t1UmcnGh24P6f\\tACTIVATES\",\"_hzFGzTL6RE2\\tPUJ8AKki53pG\\tRmlBMHs64SgD\\tACTIVATES\",\"bp_I0EHv0cD4\\tMBUXnNN2z5Dt\\trlRx40Am4Oyw\\tACTIVATES\",\"PQG4E-ga6Mza\\tjs1qiakd6GP4\\tD6EmJIZx6Gzg\\tACTIVATES\",\"NKPl8Kdr0I1e\\to9hOOpRM0I1T\\tMBUXnNN2z5Dt\\tINHIBITS\",\"OoqtDBRI0V5J\\ttSZugv-P3gVw\\tMBUXnNN2z5Dt\\tINHIBITS\",\"Vqm7Wl0M4AE0\\tWv-EmNFT15yN\\tcYzz8jlS2HaK\\tACTIVATES\",\"09Csuz540e3h\\tMBUXnNN2z5Dt\\tRmlBMHs64SgD\\tACTIVATES\"],\"COADREAD-2012-TGF-B-signaling-pathway\":[\"COADREAD-2012-TGF-B-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TGF-B\\tnTPdmpNKy_zW\\tGENE\\t-1\\t-38\\t-358\\t\",\"ACVR2A\\t4qJ5NXmkEupe\\tGENE\\tRckLIrYUzEOc\\t278\\t-262\\t\",\"TGFBR2\\t7GmKbJadEtyf\\tGENE\\t5i_MJPAPzCI1\\t44\\t-262\\t\",\"ACTIVIN\\tZc2sWHBVzArX\\tGENE\\t-1\\t360\\t-358\\t\",\"ACVR2A-ACVR1B\\tRckLIrYUzEOc\\tCOMPARTMENT\\t-1\\t360\\t-262\\t\",\"SMAD\\t7j1T7wlqzcoy\\tFAMILY\\t-1\\t158\\t-86\\t\",\"SMAD2\\tEgBC5uQzE1qC\\tGENE\\t7j1T7wlqzcoy\\t82\\t-117\\t\",\"SMAD4\\tQuKCy3EaE1pk\\tGENE\\t7j1T7wlqzcoy\\t160\\t-55\\t\",\"MYC\\tBIYl4Hkdzdoj\\tGENE\\t-1\\t-65\\t74\\t\",\"TGFBR1-TGFBR2\\t5i_MJPAPzCI1\\tCOMPARTMENT\\t-1\\t-38\\t-262\\t\",\"TGFBR1\\tjQFRXXNIEtyK\\tGENE\\t5i_MJPAPzCI1\\t-121\\t-262\\t\",\"ACVR1B\\tRSw1VMOMEupS\\tGENE\\tRckLIrYUzEOc\\t443\\t-262\\t\",\"SMAD3\\tx-JW3Hq6E1qN\\tGENE\\t7j1T7wlqzcoy\\t235\\t-117\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"2jvzewjJ0UDH\\t5i_MJPAPzCI1\\t7j1T7wlqzcoy\\tACTIVATES\",\"X5m06a6REtyq\\tjQFRXXNIEtyK\\t7GmKbJadEtyf\\tBINDS\",\"76dv_Epi0O5A\\tnTPdmpNKy_zW\\t5i_MJPAPzCI1\\tACTIVATES\",\"RBUTTCdV0RK3\\tZc2sWHBVzArX\\tRckLIrYUzEOc\\tACTIVATES\",\"4m5j1DYC0VIG\\tRckLIrYUzEOc\\t7j1T7wlqzcoy\\tACTIVATES\",\"aVez8qmz0X7C\\t7j1T7wlqzcoy\\tBIYl4Hkdzdoj\\tINHIBITS\",\"dMNeGuPcEupl\\t4qJ5NXmkEupe\\tRSw1VMOMEupS\\tBINDS\"],\"COADREAD-2012-TP53-pathway\":[\"COADREAD-2012-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Proliferation\\tFD2DCZc_8Eck\\tPROCESS\\t-1\\t569\\t199\\t\",\"TP53\\t2LzUgOci77hf\\tGENE\\t-1\\t386\\t239\\t\",\"DNA replication stress\\teArivqeT78y7\\tPROCESS\\t-1\\t204\\t145\\t\",\"ATM\\tB4xPctkP764L\\tGENE\\t-1\\t386\\t145\\t\",\"Oncogenic stress\\tR-scgH-q793l\\tPROCESS\\t-1\\t204\\t239\\t\",\"Cell survival\\tltgdAJkI8Hs-\\tPROCESS\\t-1\\t569\\t266\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"igOuMrr-QXvV\\tR-scgH-q793l\\t2LzUgOci77hf\\tACTIVATES\",\"WlE3wQIvQdms\\t2LzUgOci77hf\\tltgdAJkI8Hs-\\tINHIBITS\",\"nfX2BMaKQcgf\\t2LzUgOci77hf\\tFD2DCZc_8Eck\\tINHIBITS\",\"gVpKeF6ZQW1o\\teArivqeT78y7\\tB4xPctkP764L\\tACTIVATES\",\"KXWREHzWQaXR\\tB4xPctkP764L\\t2LzUgOci77hf\\tACTIVATES\"],\"COADREAD-2012-WNT-signaling-pathway\":[\"COADREAD-2012-WNT-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Proliferation, stem/progenitor phenotype\\tbl6HjsSUV6cV\\tPROCESS\\t-1\\t1030\\t629\\t\",\"DKK3\\tGFrq4NgHEGRM\\tGENE\\tg331vTgZWK6e\\t255\\t154\\t\",\"TCF7L2\\tfah7MVZYUjS9\\tGENE\\t-1\\t462\\t456\\t\",\"DKK\\tg331vTgZWK6e\\tFAMILY\\t-1\\t333\\t125\\t\",\"TCF7\\t6tzFiifNEEEJ\\tGENE\\t61GfHXD5WEXh\\t682\\t571\\t\",\"DKK4\\tRAXuusnwEGQo\\tGENE\\tg331vTgZWK6e\\t411\\t154\\t\",\"CTNNB1\\tEmU8OBXdUMCO\\tGENE\\t-1\\t682\\t392\\t\",\"DKK1\\tUE5vCnmWEGQ6\\tGENE\\tg331vTgZWK6e\\t255\\t96\\t\",\"CTNNB1-TCF7\\t61GfHXD5WEXh\\tCOMPARTMENT\\t-1\\t682\\t539\\t\",\"AXIN2\\tH8L_66uLUHPT\\tGENE\\t-1\\t682\\t312\\t\",\"FAM123B\\tXwg-_Y4_UGRt\\tGENE\\t-1\\t525\\t312\\t\",\"APC\\txIqHk3KBUIjc\\tGENE\\t-1\\t838\\t312\\t\",\"ARID1A\\th0U_424iUWu5\\tGENE\\t-1\\t1030\\t456\\t\",\"CTNNB1\\tKZpYtS9vEEEm\\tGENE\\t61GfHXD5WEXh\\t682\\t507\\t\",\"FZD10\\tP1FIiIlqEFL_\\tGENE\\tT5QZmrnYWA-N\\t762\\t199\\t\",\"LRP5\\twGjsVLW4EFLn\\tGENE\\tT5QZmrnYWA-N\\t600\\t199\\t\",\"WNT\\tcFdN3nQcTwwO\\tGENE\\t-1\\t682\\t47\\t\",\"MYC\\t4hScAPjlUSym\\tGENE\\t-1\\t1030\\t535\\t\",\"DKK2\\tzOVzq_6jEGRb\\tGENE\\tg331vTgZWK6e\\t411\\t96\\t\",\"LRP5-FZD10\\tT5QZmrnYWA-N\\tCOMPARTMENT\\t-1\\t681\\t199\\t\",\"FBXW7\\tbXlgw4GKUVh3\\tGENE\\t-1\\t862\\t456\\t\",\"SOX9\\tPOzVx5kyURM7\\tGENE\\t-1\\t459\\t550\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"j9mmGRLjHKlo\\tEmU8OBXdUMCO\\t61GfHXD5WEXh\\tACTIVATES\",\"f_sY8_lUHUPL\\t61GfHXD5WEXh\\t4hScAPjlUSym\\tINDUCES\",\"esOZ1gJeWfDK\\tT5QZmrnYWA-N\\txIqHk3KBUIjc\\tINHIBITS\",\"ADfnqwAaHX4H\\t4hScAPjlUSym\\tbl6HjsSUV6cV\\tACTIVATES\",\"42Liap6TWjUw\\txIqHk3KBUIjc\\tEmU8OBXdUMCO\\tINHIBITS\",\"Gi2m7VhSWdIe\\tT5QZmrnYWA-N\\tXwg-_Y4_UGRt\\tINHIBITS\",\"hDuqU9RREFMQ\\twGjsVLW4EFLn\\tP1FIiIlqEFL_\\tBINDS\",\"6Rn05rJaWhts\\tXwg-_Y4_UGRt\\tEmU8OBXdUMCO\\tINHIBITS\",\"Rmg0swQ7HQ4z\\t61GfHXD5WEXh\\tPOzVx5kyURM7\\tREPRESSES\",\"dYBVjbKCWM3N\\tg331vTgZWK6e\\tT5QZmrnYWA-N\\tINHIBITS\",\"Z4VdiqohHMM_\\tfah7MVZYUjS9\\t61GfHXD5WEXh\\tINHIBITS\",\"p11d6T2rHOIN\\tbXlgw4GKUVh3\\t61GfHXD5WEXh\\tINHIBITS\",\"l1NcyeMdWigH\\tH8L_66uLUHPT\\tEmU8OBXdUMCO\\tINHIBITS\",\"cdUCacfNHR1f\\tPOzVx5kyURM7\\t61GfHXD5WEXh\\tINHIBITS\",\"IlOH9qIEHVc_\\tbXlgw4GKUVh3\\t4hScAPjlUSym\\tINHIBITS\",\"kvbDlRZ2EEEx\\tKZpYtS9vEEEm\\t6tzFiifNEEEJ\\tBINDS\",\"MUhUjbP3Wa2w\\tg331vTgZWK6e\\tcFdN3nQcTwwO\\tINHIBITS\",\"2OZGWP_oWeBV\\tT5QZmrnYWA-N\\tH8L_66uLUHPT\\tINHIBITS\",\"_xkBTQ9sHWYw\\th0U_424iUWu5\\t4hScAPjlUSym\\tREPRESSES\",\"Af3sU0_EWJva\\tcFdN3nQcTwwO\\tT5QZmrnYWA-N\\tACTIVATES\"],\"ESAD-2017-Cell-cycle-pathway\":[\"ESAD-2017-Cell-cycle-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2A\\t0b0592b4-4330-47c9-9a88-7d8c7940a680\\tGENE\\t-1\\t219\\t205\\t\",\"CYCLINS\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\tFAMILY\\t-1\\t612\\t205\\t\",\"RB1\\t362e59dd-fb26-4d70-8a5e-357b38ed5e4b\\tGENE\\t-1\\t986\\t205\\t\",\"CCNE1\\t65337ed5-11c6-4a91-a177-14c9c0fb42df\\tGENE\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\t454\\t205\\t\",\"CCND1\\ta3661efd-abce-474e-ab02-f2eb355d2487\\tGENE\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\t613\\t205\\t\",\"CDK6\\t4ad57397-dfc1-4efc-91fa-be799f5b885d\\tGENE\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\t770\\t205\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"2c47aaf9-8ddc-4097-bc51-716d7dce4cb9\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\t362e59dd-fb26-4d70-8a5e-357b38ed5e4b\\tINHIBITS\",\"67638113-dece-48c9-8982-3e420e681508\\t0b0592b4-4330-47c9-9a88-7d8c7940a680\\tbfd14661-8f74-45d0-aec4-eff4de124c14\\tINHIBITS\"],\"ESAD-2017-RTK-RAS-PI(3)K-pathway\":[\"ESAD-2017-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PIK3R1\\t51f0d970-2e2b-47e2-90bd-0d0d881d70ed\\tGENE\\t-1\\t1056\\t335\\t\",\"PTEN\\t8214d1b9-75ba-4fbb-86d2-fe45dd392767\\tGENE\\t-1\\t778\\t335\\t\",\"PIK3CA\\t49a250be-042c-4910-9774-802dfb0e08f3\\tGENE\\t-1\\t918\\t227\\t\",\"KRAS\\tbea46283-55f2-4650-acee-58d23d8c11fc\\tGENE\\t-1\\t358\\t227\\t\",\"MYC\\tb33f6617-57e5-4e3a-bd28-6ff114d96321\\tGENE\\t-1\\t1256\\t227\\t\",\"RTK\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\tFAMILY\\t-1\\t673\\t130\\t\",\"MET\\t82180331-e6f8-4487-9c6c-1c898cb05cf1\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t595\\t130\\t\",\"IGF1R\\te7741571-a281-4b1d-ab5f-1e6d22cd3cf7\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t754\\t130\\t\",\"RTK\\t230ace17-b770-4cc8-8d00-55c2a2075c3e\\tFAMILY\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t1075\\t130\\t\",\"FGFR1\\tfb4252b0-5bfd-495d-99bc-c7143789403c\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t914\\t130\\t\",\"ERBB2\\t0c2d7f5d-9da8-4a3c-bf55-53976781fa86\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t271\\t130\\t\",\"EGFR\\t34b79c41-bc49-4c8e-b5f7-ddad188915bb\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t434\\t130\\t\",\"FGFR2\\t91dd9bca-e153-4016-8c4a-0dbb7e12d024\\tGENE\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t1075\\t130\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"0738d86a-d46d-4a8f-b3f4-b96baba1bfa1\\t49a250be-042c-4910-9774-802dfb0e08f3\\tb33f6617-57e5-4e3a-bd28-6ff114d96321\\tACTIVATES\",\"625b533f-ac20-4dbf-abdc-2c9fe3cafe97\\t51f0d970-2e2b-47e2-90bd-0d0d881d70ed\\t49a250be-042c-4910-9774-802dfb0e08f3\\tINHIBITS\",\"f687da01-5f2a-4168-b41f-04f0014ab954\\t8214d1b9-75ba-4fbb-86d2-fe45dd392767\\t49a250be-042c-4910-9774-802dfb0e08f3\\tINHIBITS\",\"49ee44ff-b6ff-47f0-81bf-effa2cf34191\\t49a250be-042c-4910-9774-802dfb0e08f3\\tbea46283-55f2-4650-acee-58d23d8c11fc\\tACTIVATES\",\"d1a956b7-db6a-4653-9da4-d0b26357fb5a\\tbea46283-55f2-4650-acee-58d23d8c11fc\\t49a250be-042c-4910-9774-802dfb0e08f3\\tACTIVATES\",\"73b63049-5e6c-4793-8536-86b4ec006b2d\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\t49a250be-042c-4910-9774-802dfb0e08f3\\tACTIVATES\",\"49655771-0e8d-42ce-a71e-76d3bc8c742c\\td76b7fd4-b8f5-4e92-b2ce-b783fe58b9f2\\tbea46283-55f2-4650-acee-58d23d8c11fc\\tACTIVATES\"],\"ESAD-2017-WNT-CTNNB1-pathway\":[\"ESAD-2017-WNT-CTNNB1-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PTCH1\\t623d9d6b-6d32-4a0a-a826-df9b880ca03a\\tGENE\\t-1\\t212\\t126\\t\",\"APC\\t792b8fd9-ae87-4972-8da4-1140378b63e5\\tGENE\\t-1\\t382\\t126\\t\",\"FBXW7\\tfaa556d4-6e8d-456d-b9d0-a4c35873f9a8\\tGENE\\t-1\\t553\\t126\\t\",\"ARID1A\\t1cdc0d84-e27f-44ed-981e-12994fed8711\\tGENE\\t-1\\t731\\t126\\t\",\"CTNNB1\\td6eb299d-a7c3-4c78-b9e7-4808773bb690\\tGENE\\t-1\\t446\\t214\\t\",\"MYC\\tdd894023-67b6-4bcc-baad-a441556f4168\\tGENE\\t-1\\t793\\t214\\t\",\"PIK3CA\\t8009d529-453b-4c3e-b694-7e0070b7f0a5\\tGENE\\t-1\\t793\\t303\\t\",\"Cell proliferation\\td80f3360-7aa0-442a-ae2a-59f0e8379f86\\tPROCESS\\t-1\\t999\\t214\\t\",\"Embryonic development\\t2e65076c-a0ae-47d9-8860-4ba6c1c89e1c\\tPROCESS\\t-1\\t210\\t214\\t\",\"SMAD\\t08936961-1fad-4b39-ada5-839a1864de96\\tFAMILY\\t-1\\t985\\t126\\t\",\"SMAD2\\t0235338c-0433-48b9-87e3-e50923aed67c\\tGENE\\t08936961-1fad-4b39-ada5-839a1864de96\\t901\\t126\\t\",\"SMAD4\\t1b3e587e-ec76-417a-92ef-34976b0f46bd\\tGENE\\t08936961-1fad-4b39-ada5-839a1864de96\\t1070\\t126\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"a1155daf-ac03-4bbd-9ae0-0a738ec73d95\\t8009d529-453b-4c3e-b694-7e0070b7f0a5\\tdd894023-67b6-4bcc-baad-a441556f4168\\tACTIVATES\",\"0562cbe7-7462-45c1-bd49-109e7ef97f74\\tdd894023-67b6-4bcc-baad-a441556f4168\\td80f3360-7aa0-442a-ae2a-59f0e8379f86\\tACTIVATES\",\"b7fe88fe-76f0-4f45-b80c-eb9937d3fed0\\t623d9d6b-6d32-4a0a-a826-df9b880ca03a\\t2e65076c-a0ae-47d9-8860-4ba6c1c89e1c\\tINHIBITS\",\"d1682a0d-a521-4f33-8097-a57b695d6fe4\\t792b8fd9-ae87-4972-8da4-1140378b63e5\\td6eb299d-a7c3-4c78-b9e7-4808773bb690\\tINHIBITS\",\"0e07ea0f-7144-42b7-831d-11a660f45ddb\\tfaa556d4-6e8d-456d-b9d0-a4c35873f9a8\\td6eb299d-a7c3-4c78-b9e7-4808773bb690\\tINHIBITS\",\"91b66dea-a6b4-4991-8ac2-184904f361b0\\tfaa556d4-6e8d-456d-b9d0-a4c35873f9a8\\tdd894023-67b6-4bcc-baad-a441556f4168\\tINHIBITS\",\"ba347f10-d89d-47ed-97fc-8eed4454b4ba\\td6eb299d-a7c3-4c78-b9e7-4808773bb690\\tdd894023-67b6-4bcc-baad-a441556f4168\\tACTIVATES\",\"b8423ddf-8f5c-4718-81b4-132ae25ed3e5\\t1cdc0d84-e27f-44ed-981e-12994fed8711\\tdd894023-67b6-4bcc-baad-a441556f4168\\tINHIBITS\",\"a7180fc6-8113-47eb-b090-39d1cc8c5825\\t08936961-1fad-4b39-ada5-839a1864de96\\tdd894023-67b6-4bcc-baad-a441556f4168\\tINHIBITS\"],\"GBM-2008-Cell-cycle-signaling-pathway\":[\"GBM-2008-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"RB1\\t0cQitpJLOoEG\\tFAMILY\\t-1\\t472\\t279\\t\",\"CYCLINS\\tSBGkYw2NOhMr\\tFAMILY\\t-1\\t472\\t168\\t\",\"G1/S Progression\\t0kD7D3DGOtD1\\tPROCESS\\t-1\\t472\\t374\\t\",\"CCND2\\tGrNFDrs1AoNL\\tGENE\\tSBGkYw2NOhMr\\t472\\t168\\t\",\"CDKN2B\\tTbTnj_R5ONS9\\tGENE\\t-1\\t444\\t87\\t\",\"CDK4\\tPs45UaX4AoNo\\tGENE\\tSBGkYw2NOhMr\\t317\\t168\\t\",\"CDK6\\tVnEu6OlPAoNe\\tGENE\\tSBGkYw2NOhMr\\t627\\t168\\t\",\"CDKN2C\\tr8WJLoQLOONy\\tGENE\\t-1\\t625\\t87\\t\",\"CDKN2A\\tcnleYFDsOMzx\\tGENE\\t-1\\t294\\t87\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"Rpso-cKyOzoj\\tTbTnj_R5ONS9\\tSBGkYw2NOhMr\\tINHIBITS\",\"3InwuSCoO0br\\tr8WJLoQLOONy\\tSBGkYw2NOhMr\\tINHIBITS\",\"-zXgQSv4Oy04\\tcnleYFDsOMzx\\tSBGkYw2NOhMr\\tINHIBITS\",\"6NO_fL3nO3r4\\tSBGkYw2NOhMr\\t0cQitpJLOoEG\\tINHIBITS\",\"1pimX-ZiO6F6\\t0cQitpJLOoEG\\t0kD7D3DGOtD1\\tINHIBITS\"],\"GBM-2008-RTK-RAS-PI(3)K-pathway\":[\"GBM-2008-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PDGFRA\\tiD415efHLG3J\\tGENE\\tIdrkrh8-K31j\\t441\\t-61\\t\",\"RAS\\t8XXLbCwXLtrQ\\tFAMILY\\t-1\\t246\\t53\\t\",\"NF1\\tKe7_FRmuLw42\\tGENE\\t-1\\t21\\t54\\t\",\"RTK\\tIdrkrh8-K31j\\tFAMILY\\t-1\\t365\\t-61\\t\",\"PI(3)K\\tuWMSz1XlL2nL\\tFAMILY\\t-1\\t529\\t50\\t\",\"PTEN\\tLOErZTMUL6hc\\tGENE\\t-1\\t721\\t50\\t\",\"AKT\\tsgb8KI1XMIrn\\tFAMILY\\t-1\\t529\\t129\\t\",\"EGFR\\t7T8gHIR6LG2s\\tGENE\\tIdrkrh8-K31j\\t134\\t-61\\t\",\"FOXO\\t1cIfqNkTMN--\\tGENE\\t-1\\t529\\t205\\t\",\"MET\\tXcKqo6xILG3V\\tGENE\\tIdrkrh8-K31j\\t597\\t-61\\t\",\"ERBB2\\tvJOD-MZOLG2-\\tGENE\\tIdrkrh8-K31j\\t287\\t-61\\t\",\"Proliferation, survival, translation\\tk9I_xTrbMS6S\\tPROCESS\\t-1\\t247\\t206\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"ApGQ0rEtL1TV\\tKe7_FRmuLw42\\t8XXLbCwXLtrQ\\tINHIBITS\",\"s5CFkxUKL0kl\\tIdrkrh8-K31j\\t8XXLbCwXLtrQ\\tACTIVATES\",\"jrs5QL8rMbv3\\t8XXLbCwXLtrQ\\tk9I_xTrbMS6S\\tACTIVATES\",\"WEpyeQmyMeC8\\tsgb8KI1XMIrn\\t1cIfqNkTMN--\\tINHIBITS\",\"ytXepIulMGGL\\tIdrkrh8-K31j\\tuWMSz1XlL2nL\\tACTIVATES\",\"_g47pqc4MGwz\\tLOErZTMUL6hc\\tuWMSz1XlL2nL\\tINHIBITS\",\"u1UwLh90MdLo\\tuWMSz1XlL2nL\\tsgb8KI1XMIrn\\tACTIVATES\"],\"GBM-2008-TP53-pathway\":[\"GBM-2008-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Activated oncogenes\\tx-laQtq0NSZI\\tPROCESS\\t-1\\t724\\t57\\t\",\"MDM2\\tVIrh6R4jNYOQ\\tGENE\\t-1\\t724\\t208\\t\",\"Apoptosis\\tLxZckK4_NmKp\\tPROCESS\\t-1\\t886\\t297\\t\",\"MDM4\\t0z81KeWTNfOj\\tGENE\\t-1\\t886\\t234\\t\",\"Senescence\\tX0XgoUzfNjH-\\tPROCESS\\t-1\\t546\\t297\\t\",\"CDKN2A\\tIXX8d7kuNVHa\\tGENE\\t-1\\t724\\t135\\t\",\"TP53\\t6RLrPg8rNa4o\\tGENE\\t-1\\t724\\t297\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"4PNvvSvKNtxu\\tIXX8d7kuNVHa\\tVIrh6R4jNYOQ\\tINHIBITS\",\"gX_WY_rANxtC\\tVIrh6R4jNYOQ\\t6RLrPg8rNa4o\\tINHIBITS\",\"EznJNkeAN1al\\t6RLrPg8rNa4o\\tX0XgoUzfNjH-\\tACTIVATES\",\"kaHvTklZNzas\\t0z81KeWTNfOj\\t6RLrPg8rNa4o\\tINHIBITS\",\"wTOjoJHdNq6N\\tx-laQtq0NSZI\\tIXX8d7kuNVHa\\tACTIVATES\",\"5-9bxAL_N0gO\\t6RLrPg8rNa4o\\tLxZckK4_NmKp\\tACTIVATES\"],\"GBM-2013-Cell-cycle-signaling-pathway\":[\"GBM-2013-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2C\\tnFMLgWuEmv0Q\\tGENE\\t-1\\t667\\t136\\t\",\"CDK4\\tszeVZ7Elmxvu\\tGENE\\t-1\\t386\\t249\\t\",\"CDK6\\tWvJWw5HPm0Ab\\tGENE\\t-1\\t694\\t249\\t\",\"Cyclins\\tAvEeR8GgnDvF\\tFAMILY\\t-1\\t541\\t249\\t\",\"CDKN2A\\tWHDg2nj1B2yR\\tGENE\\t-1\\t320\\t136\\t\",\"Cell cycle control\\tKJEq6EA_m3Cj\\tPROCESS\\t-1\\t793\\t383\\t\",\"CDKN2B\\tv1zGJhukB2ym\\tGENE\\t-1\\t470\\t136\\t\",\"RB1\\tNc0stK1rm13Y\\tFAMILY\\t-1\\t541\\t383\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"4yIGldfunbSO\\tNc0stK1rm13Y\\tKJEq6EA_m3Cj\\tACTIVATES\",\"aqdBLSknB2zK\\tv1zGJhukB2ym\\tszeVZ7Elmxvu\\tINHIBITS\",\"bxdBRxkfnYu4\\tszeVZ7Elmxvu\\tNc0stK1rm13Y\\tINHIBITS\",\"AQXakgefnZf1\\tAvEeR8GgnDvF\\tNc0stK1rm13Y\\tINHIBITS\",\"bdgYHwINnW4B\\tnFMLgWuEmv0Q\\tAvEeR8GgnDvF\\tINHIBITS\",\"Xslj1XfeB2yz\\tWHDg2nj1B2yR\\tszeVZ7Elmxvu\\tINHIBITS\",\"ve_EiwTjnXrI\\tnFMLgWuEmv0Q\\tWvJWw5HPm0Ab\\tINHIBITS\",\"Q7Uq8jBIB2y5\\tWHDg2nj1B2yR\\tAvEeR8GgnDvF\\tINHIBITS\",\"IL38zL5VB2yv\\tWHDg2nj1B2yR\\tWvJWw5HPm0Ab\\tINHIBITS\",\"6jn1TNkoB2zN\\tv1zGJhukB2ym\\tAvEeR8GgnDvF\\tINHIBITS\",\"BSaYCBi7naes\\tWvJWw5HPm0Ab\\tNc0stK1rm13Y\\tINHIBITS\",\"JZERPNMdnWL9\\tnFMLgWuEmv0Q\\tszeVZ7Elmxvu\\tINHIBITS\",\"n7Nithx-B2zB\\tv1zGJhukB2ym\\tWvJWw5HPm0Ab\\tINHIBITS\"],\"GBM-2013-RTK-RAS-PI(3)K-pathway\":[\"GBM-2013-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"NF1\\tpQ2sq0Chk7o8\\tGENE\\t-1\\t843\\t223\\t\",\"RAS\\tXfDonLT2k9rr\\tFAMILY\\t-1\\t674\\t223\\t\",\"BRAF\\tJKmqofwVk_cd\\tGENE\\t-1\\t674\\t334\\t\",\"EGFR\\tHG7A5p2q4D3f\\tGENE\\tZvpmFM7llCzi\\t331\\t113\\t\",\"PI3K(3)K\\tE0625yTsk46l\\tGENE\\t-1\\t428\\t225\\t\",\"AKT Pathway\\tTTwvf1BelBTM\\tPROCESS\\t-1\\t428\\t338\\t\",\"MET\\tsZJ7Kmrg4D35\\tGENE\\tZvpmFM7llCzi\\t643\\t113\\t\",\"MAPK Pathway\\tdAkBkKN-lAKT\\tPROCESS\\t-1\\t862\\t335\\t\",\"PTEN\\t8kyYeHGHk4NK\\tGENE\\t-1\\t255\\t225\\t\",\"RTK\\tZvpmFM7llCzi\\tFAMILY\\t-1\\t565\\t113\\t\",\"FGFR\\t8z2n3qaU4D3L\\tGENE\\tZvpmFM7llCzi\\t800\\t113\\t\",\"PDGFRA\\t-jXEzRew4D3r\\tGENE\\tZvpmFM7llCzi\\t487\\t113\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"f9EmKbzjlk77\\tJKmqofwVk_cd\\tdAkBkKN-lAKT\\tACTIVATES\",\"qj0ZCvR8le5E\\t8kyYeHGHk4NK\\tE0625yTsk46l\\tINHIBITS\",\"4DrueUbLljf-\\tE0625yTsk46l\\tTTwvf1BelBTM\\tACTIVATES\",\"c4Kpa4R5lgcQ\\tZvpmFM7llCzi\\tXfDonLT2k9rr\\tACTIVATES\",\"CEeo6oGYlifg\\tXfDonLT2k9rr\\tJKmqofwVk_cd\\tACTIVATES\",\"zingzci6lhXA\\tpQ2sq0Chk7o8\\tXfDonLT2k9rr\\tINHIBITS\",\"LTVgdZNOld9G\\tZvpmFM7llCzi\\tE0625yTsk46l\\tACTIVATES\"],\"GBM-2013-TP53-pathway\":[\"GBM-2013-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP53\\tux4NOBO4mBSe\\tGENE\\t-1\\t416\\t243\\t\",\"MDM4\\tO3CQIh-OmCOD\\tGENE\\t-1\\t222\\t243\\t\",\"Senescence/Apoptosis\\tTIZhBhfymDVV\\tPROCESS\\t-1\\t416\\t355\\t\",\"MDM2\\tdNRsoLpZmAuu\\tGENE\\t-1\\t416\\t133\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"BrX7DMKemS8w\\tdNRsoLpZmAuu\\tux4NOBO4mBSe\\tINHIBITS\",\"jHRb2o3YmTqF\\tO3CQIh-OmCOD\\tux4NOBO4mBSe\\tINHIBITS\",\"MnYnmX_dmV0E\\tux4NOBO4mBSe\\tTIZhBhfymDVV\\tACTIVATES\"],\"HIPPO\":[\"HIPPO\",\"\",\"Involved in the control of organ size. Central to this pathway is the regulation of the transcription co-activators YAP/TAZ that promote the transcription of genes involved in cell proliferation.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY\\tWIDTH\\tHEIGHT--\",\"\\t8f940396-e035-4b9e-8574-b5eadf26e98c\\tFAMILY\\t-1\\t91\\t64\\t150\\t52\",\"DCHS1\\t8d4d3dca-9217-4539-b15e-63ce7f5df09a\\tGENE\\t8f940396-e035-4b9e-8574-b5eadf26e98c\\t91\\t34\\t150\\t52\",\"DCHS2\\tf51ccf81-94a8-425f-80ce-4d55489b9660\\tGENE\\t8f940396-e035-4b9e-8574-b5eadf26e98c\\t91\\t95\\t150\\t52\",\"\\t623300c3-2a9c-45d4-be51-ad67eea733b7\\tFAMILY\\t-1\\t369\\t61\\t150\\t52\",\"FAT1\\t901800a8-6c9f-42f6-a9b6-2e8b1483ec63\\tGENE\\t623300c3-2a9c-45d4-be51-ad67eea733b7\\t291\\t32\\t150\\t52\",\"FAT2\\t775d810d-bfc1-434c-949d-71f4bd38d374\\tGENE\\t623300c3-2a9c-45d4-be51-ad67eea733b7\\t448\\t31\\t150\\t52\",\"FAT3\\tc4f71e12-c88e-409d-9f26-7bc84b3f6cb8\\tGENE\\t623300c3-2a9c-45d4-be51-ad67eea733b7\\t291\\t92\\t150\\t52\",\"FAT4\\t075bc3e3-74b9-4d0c-a20d-58b77cb3c3f6\\tGENE\\t623300c3-2a9c-45d4-be51-ad67eea733b7\\t448\\t91\\t150\\t52\",\"\\tde4dab24-648f-4406-8adf-0c08d62b3173\\tFAMILY\\t-1\\t714\\t60\\t150\\t52\",\"TAOK1\\t3e53e820-8a91-4329-86f1-e59948a9003a\\tGENE\\tde4dab24-648f-4406-8adf-0c08d62b3173\\t636\\t32\\t150\\t52\",\"TAOK3\\t7a7b38dc-e47d-4f33-9cec-3570a23b2f85\\tGENE\\tde4dab24-648f-4406-8adf-0c08d62b3173\\t636\\t89\\t150\\t52\",\"TAOK2\\t8a51ead1-a5d3-41b8-bf2e-99fc2169857b\\tGENE\\tde4dab24-648f-4406-8adf-0c08d62b3173\\t793\\t31\\t150\\t52\",\"\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\tFAMILY\\t-1\\t374\\t324\\t456.5888856128265\\t242.9161558761191\",\"SAV1\\t267c0160-0919-403d-bd52-ea84c001f357\\tGENE\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\t277\\t257\\t150\\t52\",\"\\t71e2f614-626b-4fbe-9e18-17c83c401062\\tFAMILY\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\t455\\t258\\t212.8900278180157\\t116.0130640290517\",\"STK3\\t9f5e8c36-52a9-4e62-bf7c-b1f3b02d8740\\tGENE\\t71e2f614-626b-4fbe-9e18-17c83c401062\\t455\\t230\\t150\\t52\",\"STK4\\t3e08fb0d-ef9f-49b9-8037-ed940df282af\\tGENE\\t71e2f614-626b-4fbe-9e18-17c83c401062\\t455\\t287\\t150\\t52\",\"\\t7ef3236d-1aa7-4082-a396-751554a11282\\tFAMILY\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\t277\\t390\\t154.12303621103598\\t117.89002781801568\",\"LATS1\\t2897d4be-7047-4af4-958b-b978a0d944f5\\tGENE\\t7ef3236d-1aa7-4082-a396-751554a11282\\t277\\t362\\t150\\t52\",\"LATS2\\t944868e7-e040-49a8-8773-3da725d368c3\\tGENE\\t7ef3236d-1aa7-4082-a396-751554a11282\\t277\\t419\\t150\\t52\",\"\\tb6626b2a-d8ef-4d7a-9645-8e9a7a538795\\tFAMILY\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\t455\\t390\\t150\\t52\",\"MOB1A\\t54416ef1-d8c0-492d-b465-49adb95ad62e\\tGENE\\tb6626b2a-d8ef-4d7a-9645-8e9a7a538795\\t454\\t362\\t150\\t52\",\"MOB1B\\t44429ea1-e73d-43f8-8caf-c7fb319956ff\\tGENE\\tb6626b2a-d8ef-4d7a-9645-8e9a7a538795\\t455\\t419\\t150\\t52\",\"\\t4df2d8ec-903b-4445-a7a5-f5b105fd49f1\\tFAMILY\\t-1\\t710\\t324\\t150\\t52\",\"NF2\\tfd29bca1-db7d-4f62-bce0-49510642adb3\\tGENE\\t4df2d8ec-903b-4445-a7a5-f5b105fd49f1\\t709\\t295\\t150\\t52\",\"WWC1\\te9119bdc-4312-40a5-837e-dc079d103e63\\tGENE\\t4df2d8ec-903b-4445-a7a5-f5b105fd49f1\\t710\\t353\\t150\\t52\",\"\\t8d5398c4-941f-4153-a392-ebaef3fff177\\tFAMILY\\t-1\\t373\\t590\\t179.71700255004964\\t76.76416879170804\",\"YAP1\\t3cf01f62-ef45-4722-8cad-565456928871\\tGENE\\t8d5398c4-941f-4153-a392-ebaef3fff177\\t373\\t559\\t150\\t52\",\"TAZ\\t9ed35563-0451-451b-a750-c33f5e94108f\\tGENE\\t8d5398c4-941f-4153-a392-ebaef3fff177\\t373\\t620\\t150\\t52\",\"\\tbb742872-aa08-4e50-87de-846f64cea394\\tFAMILY\\t-1\\t91\\t590\\t150\\t52\",\"CRB1\\t1ea26f01-462c-4a16-b568-b9de2242fa5b\\tGENE\\tbb742872-aa08-4e50-87de-846f64cea394\\t91\\t560\\t150\\t52\",\"CRB2\\te054585c-47a2-4b4a-9cb7-cbbfc61e900f\\tGENE\\tbb742872-aa08-4e50-87de-846f64cea394\\t91\\t620\\t150\\t52\",\"PTPN14\\td88a9331-971e-4ad2-817a-a3dadbebd4de\\tGENE\\t-1\\t606\\t538\\t150\\t52\",\"\\t8f2ee28b-9fc4-4b61-ad07-e0c0b0b4c566\\tFAMILY\\t-1\\t606\\t672\\t150\\t52\",\"CSNK1E\\t63916e9d-dcd6-45db-8fbe-3d480ef92c5f\\tGENE\\t8f2ee28b-9fc4-4b61-ad07-e0c0b0b4c566\\t606\\t640\\t150\\t52\",\"CSNK1D\\t0e5136c0-186c-4aba-893c-7f0ce5bdf56d\\tGENE\\t8f2ee28b-9fc4-4b61-ad07-e0c0b0b4c566\\t606\\t705\\t150\\t52\",\"TEAD2\\t0d1f1291-ec19-4f6d-8e74-1f11a020144b\\tGENE\\t-1\\t373\\t794\\t150\\t52\",\"Cell proliferation and differentiation\\tfb37aa0c-49bb-4db6-b185-bc5a64a72540\\tPROCESS\\t-1\\t372\\t922\\t150\\t52\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\\tINTERACTION_PUBMED_ID\\tEDGE_NAME\\tEDGE_BENDS\",\"17a941fe-ab44-43f4-8a4e-daa3939947a1\\t8f940396-e035-4b9e-8574-b5eadf26e98c\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\tACTIVATES\\t\\t\\t\",\"a7d8a94f-4d02-46ed-8726-9c4e3e8bda7e\\t623300c3-2a9c-45d4-be51-ad67eea733b7\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\tACTIVATES\\t\\t\\t\",\"ee173361-b9ad-458a-80d3-0138572470d4\\tde4dab24-648f-4406-8adf-0c08d62b3173\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\tACTIVATES\\t\\t\\t\",\"e63e86f3-3b5e-4e37-8837-43d92a67ea7d\\t4df2d8ec-903b-4445-a7a5-f5b105fd49f1\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\tACTIVATES\\t\\t\\t\",\"04ca3e1e-1693-4ec6-ab80-2724e2e3a0b9\\ta495c90c-7f17-4369-81bc-bc8894ba1c0d\\t8d5398c4-941f-4153-a392-ebaef3fff177\\tINHIBITS\\t\\t\\t\",\"81a3fb4e-3e69-47b6-b499-e9fdfe65a37e\\tbb742872-aa08-4e50-87de-846f64cea394\\t8d5398c4-941f-4153-a392-ebaef3fff177\\tINHIBITS\\t\\t\\t\",\"b6c3a4db-545a-4c25-bf4a-f0a3a8de36d2\\t8f2ee28b-9fc4-4b61-ad07-e0c0b0b4c566\\t8d5398c4-941f-4153-a392-ebaef3fff177\\tINHIBITS\\t\\t\\t\",\"fce1ac6e-bc2e-4369-ab6e-287731618cc1\\td88a9331-971e-4ad2-817a-a3dadbebd4de\\t8d5398c4-941f-4153-a392-ebaef3fff177\\tINHIBITS\\t\\t\\t\",\"b3fafa92-cfc7-460d-94d1-09ce977c3111\\t8d5398c4-941f-4153-a392-ebaef3fff177\\t0d1f1291-ec19-4f6d-8e74-1f11a020144b\\tACTIVATES\\t\\t\\t\",\"7b0d95b6-acc4-46a0-85e4-9cbacd5b11de\\t0d1f1291-ec19-4f6d-8e74-1f11a020144b\\tfb37aa0c-49bb-4db6-b185-bc5a64a72540\\tACTIVATES\\t\\t\\t\"],\"HNSC-2015-Apoptosis-pathway\":[\"HNSC-2015-Apoptosis-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Cell cycle and survival\\temPjU9d6DgGP\\tPROCESS\\t-1\\t348\\t484\\t\",\"TRAF3\\tIBsoHlQJDZF8\\tGENE\\t-1\\t530\\t285\\t\",\"FADD\\tDLlGnDdfDTRw\\tGENE\\t-1\\t373\\t199\\t\",\"TNFR-LTBR\\ts0lGLs3rDXus\\tCOMPARTMENT\\t-1\\t452\\t106\\t\",\"LTBR\\tM8fueNVgIWYI\\tGENE\\ts0lGLs3rDXus\\t530\\t106\\t\",\"Inflammation angiogenesis migration\\tyeoJnxV0DfTf\\tPROCESS\\t-1\\t581\\t484\\t\",\"BIRC2\\t54AiNjv7DUd9\\tGENE\\t-1\\t530\\t199\\t\",\"NF-kB\\tVeOlULKnDabs\\tGENE\\t-1\\t455\\t382\\t\",\"CASP8\\tkpwET4bNDYMG\\tGENE\\t-1\\t373\\t285\\t\",\"TNFR\\t1f2UD5ctIWYb\\tGENE\\ts0lGLs3rDXus\\t373\\t106\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"lvrnvkjrD9P-\\ts0lGLs3rDXus\\t54AiNjv7DUd9\\tACTIVATES\",\"N_skSg-mECnc\\tkpwET4bNDYMG\\tVeOlULKnDabs\\tINHIBITS\",\"OMDbwzxED_x2\\t54AiNjv7DUd9\\tkpwET4bNDYMG\\tINHIBITS\",\"HH4ug7YuD7Fv\\ts0lGLs3rDXus\\tDLlGnDdfDTRw\\tACTIVATES\",\"f-O5DenwEBjr\\t54AiNjv7DUd9\\tIBsoHlQJDZF8\\tINHIBITS\",\"U1LEKmYqIWYs\\t1f2UD5ctIWYb\\tM8fueNVgIWYI\\tBINDS\",\"hhJPfTk9EHgb\\tVeOlULKnDabs\\temPjU9d6DgGP\\tACTIVATES\",\"h3Fekoz9EAiL\\tDLlGnDdfDTRw\\tkpwET4bNDYMG\\tACTIVATES\",\"Acyl78aaEDXf\\tIBsoHlQJDZF8\\tVeOlULKnDabs\\tINHIBITS\",\"O9oIu8SeEIN_\\tVeOlULKnDabs\\tyeoJnxV0DfTf\\tACTIVATES\"],\"HNSC-2015-Cell-cycle-signaling-pathway\":[\"HNSC-2015-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2A\\tprbNZ7N4F2yz\\tGENE\\t-1\\t346\\t201\\t\",\"Cell cycle and survival\\tUF0yWD0cGVp6\\tPROCESS\\t-1\\t859\\t466\\t\",\"let-7c\\t1Fbfq0EnF4FD\\tGENE\\t-1\\t761\\t201\\t\",\"HRAS\\ttR7G7jSMFyKn\\tGENE\\t-1\\t456\\t71\\t\",\"HPVE\\tOUtOuzrFGWsp\\tFAMILY\\t-1\\t347\\t333\\t\",\"RB1\\tKkBOpjMSGBEp\\tFAMILY\\t-1\\t570\\t334\\t\",\"TP53\\tm6QJybSmGSEj\\tGENE\\t-1\\t531\\t466\\t\",\"MYC\\tPu1nPMkoGUcO\\tGENE\\t-1\\t931\\t334\\t\",\"PIK3CA\\tz2FkIMy8FypC\\tGENE\\t-1\\t678\\t71\\t\",\"CCND1\\tS0n0th2eCfb9\\tGENE\\t-swYow3RF5GO\\t570\\t171\\t\",\"CYCLINS\\t-swYow3RF5GO\\tFAMILY\\t-1\\t570\\t197\\t\",\"E2F1\\tBNAC4UcvF_fD\\tGENE\\t-1\\t764\\t334\\t\",\"HPVE7\\t6jlQIfmICrjy\\tGENE\\tOUtOuzrFGWsp\\t347\\t360\\t\",\"CDK6\\tPPI7pGMpCfcQ\\tGENE\\t-swYow3RF5GO\\t570\\t224\\t\",\"HPVE6\\t4bkc06NyCrjd\\tGENE\\tOUtOuzrFGWsp\\t347\\t307\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"idn2SG2QHMC0\\tBNAC4UcvF_fD\\tUF0yWD0cGVp6\\tACTIVATES\",\"njhnQe9vCfci\\tz2FkIMy8FypC\\tS0n0th2eCfb9\\tACTIVATES\",\"5CzfV-h-HQkB\\tOUtOuzrFGWsp\\tm6QJybSmGSEj\\tINHIBITS\",\"UpECTCkVHGkl\\t1Fbfq0EnF4FD\\t-swYow3RF5GO\\tINHIBITS\",\"wnpqGTZ4HNFG\\tPu1nPMkoGUcO\\tUF0yWD0cGVp6\\tACTIVATES\",\"WfTDsR48HJ8K\\t-swYow3RF5GO\\tKkBOpjMSGBEp\\tINHIBITS\",\"mHie46k1HIGn\\tprbNZ7N4F2yz\\t-swYow3RF5GO\\tINHIBITS\",\"EJXQGmWDCfcZ\\ttR7G7jSMFyKn\\tS0n0th2eCfb9\\tACTIVATES\",\"naU-KiGLHOkS\\tOUtOuzrFGWsp\\tKkBOpjMSGBEp\\tINHIBITS\",\"lU11XAdWHRyG\\tm6QJybSmGSEj\\tUF0yWD0cGVp6\\tINHIBITS\",\"hgYpZiWwHLEw\\tKkBOpjMSGBEp\\tBNAC4UcvF_fD\\tINHIBITS\"],\"HNSC-2015-Notch-signaling-pathway\":[\"HNSC-2015-Notch-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP63\\t0_tmgKZGEdGo\\tGENE\\t-1\\t290\\t306\\t\",\"Differentiation\\teeVhg40NEiK2\\tPROCESS\\t-1\\t553\\t481\\t\",\"CTNNB1\\tB311fstqEcj1\\tGENE\\t-1\\t485\\t306\\t\",\"FAT1\\tKm28lPDkEe1-\\tGENE\\t-1\\t676\\t253\\t\",\"AJUBA\\txmIHMSMOEfhM\\tGENE\\t-1\\t676\\t350\\t\",\"NFE2L2\\tuBK84iGaEx2k\\tGENE\\t-1\\t835\\t108\\t\",\"Inflammation angiogenesis migration\\tcVmq2gc7EhfK\\tPROCESS\\t-1\\t290\\t480\\t\",\"NOTCH\\tM36IzzXCEbYd\\tFAMILY\\t-1\\t485\\t108\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"ICbcotEzE6EA\\tKm28lPDkEe1-\\tB311fstqEcj1\\tINHIBITS\",\"wuF8plb4E1Me\\tuBK84iGaEx2k\\tM36IzzXCEbYd\\tACTIVATES\",\"aGzvs7zSE3y2\\t0_tmgKZGEdGo\\tM36IzzXCEbYd\\tINHIBITS\",\"3EBZZzaxE5Fm\\tM36IzzXCEbYd\\tB311fstqEcj1\\tINHIBITS\",\"_u545Mo9E_ul\\t0_tmgKZGEdGo\\teeVhg40NEiK2\\tINHIBITS\",\"n1ZzhYJJE6z0\\txmIHMSMOEfhM\\tB311fstqEcj1\\tINHIBITS\",\"qJsbtzEME7xA\\tB311fstqEcj1\\teeVhg40NEiK2\\tINHIBITS\",\"qbufdsXRFBiJ\\t0_tmgKZGEdGo\\tcVmq2gc7EhfK\\tACTIVATES\",\"XfMK86WqE21I\\tM36IzzXCEbYd\\t0_tmgKZGEdGo\\tINHIBITS\"],\"HNSC-2015-Oxidative-stress-response-pathway\":[\"HNSC-2015-Oxidative-stress-response-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"NFE2L2\\tgt4I0Om0FTv6\\tGENE\\t-1\\t436\\t285\\t\",\"KEAP1\\tZsX3OXk3FSsm\\tGENE\\t-1\\t529\\t167\\t\",\"NOTCH\\tBvJxfxK3FnBO\\tGENE\\t-1\\t169\\t285\\t\",\"CUL3\\tIcPGDcXRFSKm\\tGENE\\t-1\\t339\\t167\\t\",\"Oxidative damage\\tfVzq-7uHFVEN\\tPROCESS\\t-1\\t436\\t413\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"EnpWtdTqFdCy\\tIcPGDcXRFSKm\\tgt4I0Om0FTv6\\tINHIBITS\",\"evdmv52VFpzm\\tgt4I0Om0FTv6\\tBvJxfxK3FnBO\\tACTIVATES\",\"cPEAdB0SFfMR\\tgt4I0Om0FTv6\\tfVzq-7uHFVEN\\tACTIVATES\",\"H-KG07b7Fd8r\\tZsX3OXk3FSsm\\tgt4I0Om0FTv6\\tINHIBITS\"],\"HNSC-2015-RTK-RAS-PI(3)K-pathway\":[\"HNSC-2015-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PIK3CA\\txi9Q36e2CS_G\\tGENE\\t-1\\t540\\t244\\t\",\"NF-kB\\tOOiOvVaWCyaI\\tGENE\\t-1\\t878\\t459\\t\",\"HRAS\\tCh4RV-nlCR-8\\tGENE\\t-1\\t320\\t244\\t\",\"IGF1R\\tYDvyAEat8pkt\\tGENE\\tYgFgrMTKCakc\\t850\\t145\\t\",\"ERBB2\\to8fELaID8pjp\\tGENE\\tYgFgrMTKCakc\\t385\\t145\\t\",\"EGFR\\tmYeWqovL8pkK\\tGENE\\tYgFgrMTKCakc\\t227\\t145\\t\",\"RTK\\tYgFgrMTKCakc\\tFAMILY\\t-1\\t538\\t145\\t\",\"FGFR1\\ts8sttQyx8pj-\\tGENE\\tYgFgrMTKCakc\\t541\\t145\\t\",\"PTEN\\tWh8DCYlCCT_j\\tGENE\\t-1\\t722\\t244\\t\",\"CCND1\\ts_2ubRksCYIg\\tGENE\\t-1\\t403\\t337\\t\",\"MYC\\tM33a4yWMGH-j\\tGENE\\t-1\\t540\\t459\\t\",\"FGFR3\\t-jbsv2rK8pkb\\tGENE\\tYgFgrMTKCakc\\t696\\t145\\t\",\"Cell cycle and survival\\tNZQP-jwUGJDJ\\tPROCESS\\t-1\\t540\\t568\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"Vp8BMTADCsgK\\tYgFgrMTKCakc\\txi9Q36e2CS_G\\tACTIVATES\",\"zMOtnYBFCu5s\\txi9Q36e2CS_G\\ts_2ubRksCYIg\\tACTIVATES\",\"P2bwQGViCuNZ\\tCh4RV-nlCR-8\\ts_2ubRksCYIg\\tACTIVATES\",\"9-cqR59DCtQQ\\tWh8DCYlCCT_j\\txi9Q36e2CS_G\\tINHIBITS\",\"kFlNIRpWC2i-\\txi9Q36e2CS_G\\tOOiOvVaWCyaI\\tACTIVATES\",\"S3jvgVzsGPMY\\txi9Q36e2CS_G\\tM33a4yWMGH-j\\tACTIVATES\",\"GnyxNL7aCqke\\tYgFgrMTKCakc\\tCh4RV-nlCR-8\\tACTIVATES\",\"rrzkeHNUGQDo\\tM33a4yWMGH-j\\tNZQP-jwUGJDJ\\tACTIVATES\"],\"KIRC-2013-RTK-RAS-PI(3)K-pathway\":[\"KIRC-2013-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TSC1\\tuggsxb8--Aro\\tGENE\\txqEGjsx0iLFB\\t702\\t215\\t\",\"RHEB\\tB86G1W3Bjaf-\\tGENE\\t-1\\t653\\t670\\t\",\"TSC2\\tYkjc8ADw-rzF\\tGENE\\tkKqxit2Aj0o5\\t727\\t575\\t\",\"4E-BP1\\tunH_CS0VjeEN\\tGENE\\t-1\\t755\\t833\\t\",\"TSC\\tkKqxit2Aj0o5\\tFAMILY\\t-1\\t647\\t575\\t\",\"RHEB\\t2laMuTAjiL1w\\tGENE\\t-1\\t891\\t255\\t\",\"HIF1a\\taDLkX3Z9j92r\\tGENE\\t-1\\t755\\t918\\t\",\"GRB10\\tx5Guo0spjf2e\\tGENE\\t-1\\t839\\t414\\t\",\"MTOR\\tMC8l6rXMiOdd\\tGENE\\t-1\\t1074\\t255\\t\",\"TSC\\txqEGjsx0iLFB\\tFAMILY\\t-1\\t702\\t249\\t\",\"SQSTM1\\txQtLvkz9iNc7\\tGENE\\t-1\\t943\\t153\\t\",\"TSC1\\tJ-ydcJGW-rzg\\tGENE\\tkKqxit2Aj0o5\\t568\\t575\\t\",\"EGFR\\tQFhgkr8diB8z\\tGENE\\t-1\\t164\\t312\\t\",\"PI3K\\tbHiksp77jREY\\tFAMILY\\t-1\\t560\\t414\\t\",\"AKT\\t-Wom9AxOiG4E\\tGENE\\t-1\\t528\\t255\\t\",\"mTORC2\\tdbgxtYHIjWfx\\tGENE\\t-1\\t478\\t493\\t\",\"MiR21\\tGmrxvGcKjTyz\\tGENE\\t-1\\t332\\t533\\t\",\"PIK3CA\\tGBWHCv3viEa6\\tGENE\\t-1\\t354\\t255\\t\",\"IGF1R\\tozct1VALiSY1\\tGENE\\t-1\\t165\\t216\\t\",\"VHL\\t0_wT5Rrrj_Rx\\tGENE\\t-1\\t935\\t919\\t\",\"mTORC1\\tcYFqGJE4jcVJ\\tGENE\\t-1\\t653\\t750\\t\",\"TSC2\\tj9ld37Vz-AsM\\tGENE\\txqEGjsx0iLFB\\t702\\t283\\t\",\"PTEN\\tW2_xSgDziDku\\tGENE\\t-1\\t354\\t174\\t\",\"AKT\\t7HbV79PdjsOU\\tFAMILY\\t-1\\t653\\t494\\t\",\"GNB2L1\\tSfiCTcbNiA5M\\tGENE\\t-1\\t88\\t112\\t\",\"PTEN\\twRO7VWWjjSA-\\tGENE\\t-1\\t332\\t414\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"OpzjVyUGkJHV\\tGmrxvGcKjTyz\\twRO7VWWjjSA-\\tINHIBITS\",\"18MKxE0wiw13\\txqEGjsx0iLFB\\t2laMuTAjiL1w\\tINHIBITS\",\"G-HTkvEckQ4C\\tB86G1W3Bjaf-\\tcYFqGJE4jcVJ\\tACTIVATES\",\"04k9T_t2itkQ\\tW2_xSgDziDku\\tGBWHCv3viEa6\\tINHIBITS\",\"TqPzh3WykXc5\\tunH_CS0VjeEN\\tx5Guo0spjf2e\\tACTIVATES\",\"S7T11oBFisjk\\tQFhgkr8diB8z\\tGBWHCv3viEa6\\tACTIVATES\",\"ahebq1NykUH5\\tunH_CS0VjeEN\\taDLkX3Z9j92r\\tACTIVATES\",\"6najj9ABkSVJ\\tcYFqGJE4jcVJ\\tunH_CS0VjeEN\\tACTIVATES\",\"qPyUZvk3kMq-\\tdbgxtYHIjWfx\\t7HbV79PdjsOU\\tACTIVATES\",\"qHd1pkOTiy5k\\t2laMuTAjiL1w\\tMC8l6rXMiOdd\\tACTIVATES\",\"aPTPKe-XkVXQ\\t0_wT5Rrrj_Rx\\taDLkX3Z9j92r\\tINHIBITS\",\"8vMP0eF_kPj5\\tkKqxit2Aj0o5\\tB86G1W3Bjaf-\\tINHIBITS\",\"NZt5xBGSkYb0\\tx5Guo0spjf2e\\tbHiksp77jREY\\tINHIBITS\",\"3fJZoOEQkKNq\\tbHiksp77jREY\\tdbgxtYHIjWfx\\tACTIVATES\",\"rAhe36tpix6d\\txQtLvkz9iNc7\\tMC8l6rXMiOdd\\tINDUCES\",\"CAu1f-WdkHx4\\twRO7VWWjjSA-\\tbHiksp77jREY\\tINHIBITS\",\"4vMHKnyOkLIf\\tbHiksp77jREY\\t7HbV79PdjsOU\\tACTIVATES\",\"J7kaij8Aivlh\\t-Wom9AxOiG4E\\txqEGjsx0iLFB\\tINHIBITS\",\"fT5lfcHziqX2\\tSfiCTcbNiA5M\\tozct1VALiSY1\\tINDUCES\",\"_2k1_2B-iri2\\tozct1VALiSY1\\tGBWHCv3viEa6\\tACTIVATES\",\"kxVoCQxViupL\\tGBWHCv3viEa6\\t-Wom9AxOiG4E\\tACTIVATES\",\"7jMvZJMZkN4v\\t7HbV79PdjsOU\\tkKqxit2Aj0o5\\tINHIBITS\"],\"LUAD-2014-Cell-cycle-signaling-pathway\":[\"LUAD-2014-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CCND1\\tYWcsnrJvCMfJ\\tGENE\\tEaAZ2J517xuW\\t365\\t177\\t\",\"RB1\\t-65hVCUu7wNj\\tGENE\\t-1\\t521\\t303\\t\",\"CDKN2A\\tyiKTF0xl7qs-\\tGENE\\t-1\\t521\\t88\\t\",\"CYCLINS\\tEaAZ2J517xuW\\tFAMILY\\t-1\\t521\\t177\\t\",\"CDK4\\tpYVVzOz7CMfp\\tGENE\\tEaAZ2J517xuW\\t521\\t177\\t\",\"Cell cycle progression\\tSBA7nphX7zI1\\tPROCESS\\t-1\\t521\\t400\\t\",\"CCNE1\\t0FQDESQiCMfb\\tGENE\\tEaAZ2J517xuW\\t676\\t177\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"EbOzzWJa8KyF\\tEaAZ2J517xuW\\t-65hVCUu7wNj\\tINHIBITS\",\"eB12pAOW8MCi\\t-65hVCUu7wNj\\tSBA7nphX7zI1\\tACTIVATES\",\"u6mSj8wD8Jp9\\tyiKTF0xl7qs-\\tEaAZ2J517xuW\\tINHIBITS\"],\"LUAD-2014-Histone-modification-pathway\":[\"LUAD-2014-Histone-modification-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"SETD2\\tTEmP07vg8mqu\\tGENE\\t-1\\t678\\t182\\t\",\"ARID1B\\tZC3AHrzf8h-f\\tGENE\\t-1\\t379\\t168\\t\",\"Histone methylation\\toQNlmw1I8ng2\\tPROCESS\\t-1\\t678\\t333\\t\",\"ARID2\\tUWhx7SxC8jmN\\tGENE\\t-1\\t226\\t244\\t\",\"ARID1A\\t0ddAggf58hhA\\tGENE\\t-1\\t226\\t168\\t\",\"Nucleosome remodeling\\tkv9VBnuH8l5E\\tPROCESS\\t-1\\t306\\t341\\t\",\"SMARCA4\\t6xqXYMOE8kSp\\tGENE\\t-1\\t379\\t244\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"7D5lYDIi83WM\\tZC3AHrzf8h-f\\tkv9VBnuH8l5E\\tACTIVATES\",\"C0gJJbpq84Fz\\t6xqXYMOE8kSp\\tkv9VBnuH8l5E\\tACTIVATES\",\"_MCNndis82m-\\tUWhx7SxC8jmN\\tkv9VBnuH8l5E\\tACTIVATES\",\"fc6_K-lT85Yv\\tTEmP07vg8mqu\\toQNlmw1I8ng2\\tACTIVATES\",\"PkwUIXyU81xJ\\t0ddAggf58hhA\\tkv9VBnuH8l5E\\tACTIVATES\"],\"LUAD-2014-Oxidative-stress-response-pathway\":[\"LUAD-2014-Oxidative-stress-response-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KEAP1\\tx6qal2M_6fp6\\tGENE\\t-1\\t292\\t147\\t\",\"NFE2L2\\t3OAnmFLj6kBV\\tGENE\\t-1\\t381\\t244\\t\",\"CUL3\\tax7M8UNp6gH0\\tGENE\\t-1\\t460\\t147\\t\",\"Oxidative stress response\\tqQRuLibB6k26\\tPROCESS\\t-1\\t381\\t345\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"puzswCQS65LP\\tx6qal2M_6fp6\\t3OAnmFLj6kBV\\tINHIBITS\",\"ASasYVxW65_T\\tax7M8UNp6gH0\\t3OAnmFLj6kBV\\tINHIBITS\",\"5XC9ZlAR67EJ\\t3OAnmFLj6kBV\\tqQRuLibB6k26\\tINHIBITS\"],\"LUAD-2014-RTK-RAS-PI(3)K-pathway\":[\"LUAD-2014-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KRAS\\thCWC-xR96DqX\\tGENE\\t0aa7a88C5GOW\\t612\\t170\\t\",\"EGFR\\tR5V3H_6E6eEo\\tGENE\\tmFXQLvHD4isJ\\t304\\t68\\t\",\"RAS\\t0aa7a88C5GOW\\tFAMILY\\t-1\\t690\\t202\\t\",\"MAP2K1\\tcwgYdqrk4hBA\\tGENE\\t-1\\t690\\t439\\t\",\"PIK3R1\\tbqBJhHco4YrE\\tGENE\\t-1\\t149\\t251\\t\",\"TSC2\\tY9HFp8YO-n8e\\tGENE\\tEXtYcXdy4Qsz\\t470\\t384\\t\",\"Translation\\t9M7XTM_-4WR7\\tPROCESS\\t-1\\t781\\t637\\t\",\"AKT1\\t25v4OB1H4IlR\\tGENE\\t-1\\t393\\t279\\t\",\"STK11\\ts7zEz-oY4ag8\\tGENE\\t-1\\t149\\t322\\t\",\"ALK\\tpjtEjnD36eE_\\tGENE\\tmFXQLvHD4isJ\\t773\\t68\\t\",\"AMPK\\tFyui5tkl4cr5\\tGENE\\t-1\\t149\\t390\\t\",\"NRAS\\tnKsKU-PQ6DrJ\\tGENE\\t0aa7a88C5GOW\\t768\\t170\\t\",\"Proliferation\\tecQpjv9Q4Urm\\tPROCESS\\t-1\\t465\\t637\\t\",\"HRAS\\tup6fI0q16Dq0\\tGENE\\t0aa7a88C5GOW\\t612\\t233\\t\",\"NF1\\tQkA8DtgZ4Feb\\tGENE\\t-1\\t988\\t207\\t\",\"ERBB2\\tEXN40CQ46eDV\\tGENE\\tmFXQLvHD4isJ\\t458\\t68\\t\",\"ROS1\\twLhuE7H66eEA\\tGENE\\tmFXQLvHD4isJ\\t1076\\t68\\t\",\"TSC1\\tj4o-n6HA-n8F\\tGENE\\tEXtYcXdy4Qsz\\t316\\t384\\t\",\"RIT1\\ttYpKvL066Dru\\tGENE\\t0aa7a88C5GOW\\t768\\t233\\t\",\"RET\\tds40mB756eC4\\tGENE\\tmFXQLvHD4isJ\\t925\\t68\\t\",\"PTEN\\tua2-F70X4XuC\\tGENE\\t-1\\t149\\t178\\t\",\"Cell survival\\tNmj0_LZZ4VXj\\tPROCESS\\t-1\\t622\\t637\\t\",\"MTOR\\tNCFq_dYD4Py9\\tGENE\\t-1\\t393\\t542\\t\",\"TSC\\tEXtYcXdy4Qsz\\tFAMILY\\t-1\\t393\\t384\\t\",\"MET\\tTXeWKOZB6eDs\\tGENE\\tmFXQLvHD4isJ\\t609\\t68\\t\",\"BRAF\\t8-YqWx2X4f5G\\tGENE\\t-1\\t690\\t365\\t\",\"PIK3CA\\t8Qu-Lwni4HZ-\\tGENE\\t-1\\t393\\t178\\t\",\"RTK\\tmFXQLvHD4isJ\\tFAMILY\\t-1\\t690\\t68\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"IBP-n3fS5SVk\\tcwgYdqrk4hBA\\t9M7XTM_-4WR7\\tACTIVATES\",\"gUN_eI4KYtT7\\tNCFq_dYD4Py9\\tecQpjv9Q4Urm\\tACTIVATES\",\"m9Gf2Xzf5WX3\\tEXtYcXdy4Qsz\\tNCFq_dYD4Py9\\tACTIVATES\",\"yqPnLI4M5aT7\\tFyui5tkl4cr5\\tNCFq_dYD4Py9\\tACTIVATES\",\"lIoLBw5O5RdC\\tcwgYdqrk4hBA\\tNmj0_LZZ4VXj\\tACTIVATES\",\"qg8iuvID5Mhz\\t0aa7a88C5GOW\\t8-YqWx2X4f5G\\tACTIVATES\",\"o72iUn2l5c3a\\tua2-F70X4XuC\\t8Qu-Lwni4HZ-\\tINHIBITS\",\"j1x2CWxh5Iy4\\tmFXQLvHD4isJ\\t0aa7a88C5GOW\\tACTIVATES\",\"EuuexlE5Y05b\\tNCFq_dYD4Py9\\t9M7XTM_-4WR7\\tACTIVATES\",\"8Uu5IYEq5KQg\\tQkA8DtgZ4Feb\\t0aa7a88C5GOW\\tINHIBITS\",\"2pXFnqhL5OzR\\tcwgYdqrk4hBA\\tecQpjv9Q4Urm\\tACTIVATES\",\"gE5bPX0c5VDK\\t25v4OB1H4IlR\\tEXtYcXdy4Qsz\\tINHIBITS\",\"HshnmzcdYu-I\\tNCFq_dYD4Py9\\tNmj0_LZZ4VXj\\tACTIVATES\",\"UuK2Sd1m5T5a\\t8Qu-Lwni4HZ-\\t25v4OB1H4IlR\\tACTIVATES\",\"pSaMDCCD5eRf\\tbqBJhHco4YrE\\t8Qu-Lwni4HZ-\\tINHIBITS\",\"6eV4lZbQYv3r\\tNCFq_dYD4Py9\\tNmj0_LZZ4VXj\\tACTIVATES\",\"VFskMcwI5bY7\\ts7zEz-oY4ag8\\tFyui5tkl4cr5\\tACTIVATES\",\"zPkLVdf35NoU\\t8-YqWx2X4f5G\\tcwgYdqrk4hBA\\tACTIVATES\"],\"LUAD-2014-TP53-pathway\":[\"LUAD-2014-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP53\\tCQjbRdgs7ItD\\tGENE\\t-1\\t436\\t249\\t\",\"Cell survival\\tSVkWhzV37N80\\tPROCESS\\t-1\\t510\\t348\\t\",\"Proliferation\\tfz0X8H7D7J7L\\tPROCESS\\t-1\\t342\\t347\\t\",\"ATM\\tgjYBW9Ea7HZc\\tGENE\\t-1\\t510\\t151\\t\",\"MDM2\\tSdbPatXY7HDu\\tGENE\\t-1\\t342\\t151\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"npAcARys7a_k\\tCQjbRdgs7ItD\\tSVkWhzV37N80\\tINHIBITS\",\"VGJAIfU07X_O\\tSdbPatXY7HDu\\tCQjbRdgs7ItD\\tINHIBITS\",\"yaRRpgbw7aKj\\tCQjbRdgs7ItD\\tfz0X8H7D7J7L\\tINHIBITS\",\"6yEDoser7Y_S\\tgjYBW9Ea7HZc\\tCQjbRdgs7ItD\\tACTIVATES\"],\"LUSC-2012-Notch-signaling-pathway\":[\"LUSC-2012-Notch-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"TP63\\tjwpnNGJWSGmo\\tGENE\\t-1\\t665\\t118\\t\",\"NOTCH1\\tuCLr0FZ-DVjI\\tGENE\\tqDU9qUkVWgQy\\t307\\t245\\t\",\"NOTCH\\tqDU9qUkVWgQy\\tFAMILY\\t-1\\t385\\t245\\t\",\"FOXP1\\tOQXnexCbWaQC\\tGENE\\t-1\\t781\\t245\\t\",\"NOTCH2\\t8xqf1lEoDVjf\\tGENE\\tqDU9qUkVWgQy\\t462\\t245\\t\",\"SOX2\\tz9OhKjOpSGPy\\tGENE\\t-1\\t392\\t118\\t\",\"ASCL4\\tB7vcA7ATWYcn\\tGENE\\t-1\\t624\\t245\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"PLEAy9rIWrEw\\tz9OhKjOpSGPy\\tqDU9qUkVWgQy\\tINHIBITS\",\"JC1sUBM-WtKp\\tz9OhKjOpSGPy\\tB7vcA7ATWYcn\\tINHIBITS\",\"lP_hmn57Wt5k\\tz9OhKjOpSGPy\\tOQXnexCbWaQC\\tINHIBITS\",\"NJbf1vyhWr_5\\tjwpnNGJWSGmo\\tqDU9qUkVWgQy\\tINHIBITS\"],\"LUSC-2012-Oxidative-stress-response-pathway\":[\"LUSC-2012-Oxidative-stress-response-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CUL3\\tlReeCCfNRhiB\\tGENE\\t-1\\t567\\t154\\t\",\"NFE2L2\\tb31Gx6nxRij2\\tGENE\\t-1\\t480\\t256\\t\",\"KEAP1\\t74W2ldwARhHq\\tGENE\\t-1\\t381\\t154\\t\",\"Oxidative stress response\\tHZ9RxRrPRkFz\\tPROCESS\\t-1\\t480\\t363\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"RQOk_9p-Rv2F\\tb31Gx6nxRij2\\tHZ9RxRrPRkFz\\tACTIVATES\",\"CT9Gtmm5Rqtm\\t74W2ldwARhHq\\tb31Gx6nxRij2\\tINHIBITS\",\"HHBAbZS1Rto5\\tlReeCCfNRhiB\\tb31Gx6nxRij2\\tINHIBITS\"],\"LUSC-2012-RTK-RAS-PI(3)K-pathway\":[\"LUSC-2012-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"FGFR1\\tMvptxoO61bRr\\tGENE\\tyiHWlSi0ZceY\\t1097\\t185\\t\",\"KRAS\\tsWfNqwir1dxE\\tGENE\\twfQD-GssZd01\\t894\\t292\\t\",\"PTEN\\tZymRaEU8XIRY\\tGENE\\t-1\\t188\\t185\\t\",\"ERBB3\\tRm4wq0_z1bQa\\tGENE\\tyiHWlSi0ZceY\\t936\\t185\\t\",\"Proliferation\\tP8EboRv6ZME9\\tPROCESS\\t-1\\t494\\t543\\t\",\"AMPK\\t02umJdNsXOpl\\tGENE\\t-1\\t42\\t405\\t\",\"RTK\\tyiHWlSi0ZceY\\tFAMILY\\t-1\\t1023\\t185\\t\",\"AKT\\toxyofYva1T05\\tFAMILY\\t-1\\t389\\t292\\t\",\"AKT2\\tlarrnE_S1WJv\\tGENE\\toxyofYva1T05\\t389\\t292\\t\",\"RAS\\twfQD-GssZd01\\tFAMILY\\t-1\\t894\\t292\\t\",\"Translation\\tHR4vBeq2ZNsn\\tPROCESS\\t-1\\t798\\t543\\t\",\"NF1\\tiabVj2PwYZp2\\tGENE\\t-1\\t1250\\t339\\t\",\"FGFR3\\t2C2nCxu91bRd\\tGENE\\tyiHWlSi0ZceY\\t1424\\t185\\t\",\"STK11\\tO4y17G4EXLUD\\tGENE\\t-1\\t-49\\t300\\t\",\"EGFR\\tAx89UA0r1bQ9\\tGENE\\tyiHWlSi0ZceY\\t622\\t185\\t\",\"TSC2\\tzY7tgwSJ1XbR\\tGENE\\tqLC0RZ4XXsZX\\t403\\t380\\t\",\"TSC\\tqLC0RZ4XXsZX\\tFAMILY\\t-1\\t324\\t380\\t\",\"MTOR\\t9xgTtYW2XQeX\\tGENE\\t-1\\t147\\t480\\t\",\"RASA1\\tDvdwOn2xYWd3\\tGENE\\t-1\\t1250\\t270\\t\",\"AKT3\\tzzXDUqB91WKC\\tGENE\\toxyofYva1T05\\t546\\t292\\t\",\"FGFR2\\tXUUZCJbJ1bRO\\tGENE\\tyiHWlSi0ZceY\\t1259\\t185\\t\",\"PI3K\\tFq9ew-K6XKj-\\tFAMILY\\t-1\\t383\\t185\\t\",\"NRAS\\tW0krGYlI1dxY\\tGENE\\twfQD-GssZd01\\t1054\\t292\\t\",\"ERBB2\\ttKS__G_N1bQt\\tGENE\\tyiHWlSi0ZceY\\t780\\t185\\t\",\"AKT1\\tO_LJqz4I1WJd\\tGENE\\toxyofYva1T05\\t232\\t292\\t\",\"HRAS\\tXIj4ze_l1dxl\\tGENE\\twfQD-GssZd01\\t734\\t292\\t\",\"Cell survival\\tnNugUqXiZNB6\\tPROCESS\\t-1\\t644\\t543\\t\",\"BRAF\\tT1CL0I79YgGR\\tGENE\\t-1\\t894\\t405\\t\",\"PIK3CA\\tcykG-Tsv1fu4\\tGENE\\tFq9ew-K6XKj-\\t383\\t185\\t\",\"TSC1\\t1paUtI_G1Xbd\\tGENE\\tqLC0RZ4XXsZX\\t245\\t380\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"QLi86o6iaTAU\\tT1CL0I79YgGR\\tnNugUqXiZNB6\\tACTIVATES\",\"gB5T8yfp3IU3\\t9xgTtYW2XQeX\\tHR4vBeq2ZNsn\\tACTIVATES\",\"sXH_uS-e1T1m\\toxyofYva1T05\\tHR4vBeq2ZNsn\\tACTIVATES\",\"WUv8Ij4AaR-n\\tT1CL0I79YgGR\\tP8EboRv6ZME9\\tACTIVATES\",\"RCM2k2xJ1T1r\\toxyofYva1T05\\tqLC0RZ4XXsZX\\tINHIBITS\",\"4bGJbkzlaO_3\\tDvdwOn2xYWd3\\twfQD-GssZd01\\tINHIBITS\",\"awuopxpi1T1c\\toxyofYva1T05\\tP8EboRv6ZME9\\tACTIVATES\",\"WURhbp8YX5ol\\tO4y17G4EXLUD\\t02umJdNsXOpl\\tACTIVATES\",\"fTcRATeQaEYa\\twfQD-GssZd01\\tT1CL0I79YgGR\\tACTIVATES\",\"-RCFsGxvaQmo\\tiabVj2PwYZp2\\twfQD-GssZd01\\tINHIBITS\",\"9dW1i3sN3Gtu\\t9xgTtYW2XQeX\\tP8EboRv6ZME9\\tACTIVATES\",\"Uc5AjjxV3HcN\\t9xgTtYW2XQeX\\tnNugUqXiZNB6\\tACTIVATES\",\"vYmJjY8pX14b\\tZymRaEU8XIRY\\tFq9ew-K6XKj-\\tINHIBITS\",\"pzSfIS3bX6g_\\t02umJdNsXOpl\\t9xgTtYW2XQeX\\tACTIVATES\",\"3eElg70UaNdN\\tyiHWlSi0ZceY\\twfQD-GssZd01\\tACTIVATES\",\"-GLnxzAk1T1w\\toxyofYva1T05\\tnNugUqXiZNB6\\tACTIVATES\",\"eDF8oz7ZaT8J\\tT1CL0I79YgGR\\tHR4vBeq2ZNsn\\tACTIVATES\",\"vecmsBiI1T1S\\tFq9ew-K6XKj-\\toxyofYva1T05\\tACTIVATES\"],\"MYC\":[\"MYC\",\"\",\"Involves a number of transcription regulation complexes: MYC-MAX, MAX-MXD, MAX-MGA, and the energy sensing, MondoA-Mlx complex in the regulation of apoptotic response and cell differentiation.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"MXD1\\tYd6m7-sCeh37\\tGENE\\tTrTubnzSeh3h\\t151\\t436\",\"MXD4\\tplDFXS0peh30\\tGENE\\tTrTubnzSeh3h\\t488\\t436\",\"MXI1\\tdNmw_8oVeh3k\\tGENE\\tTrTubnzSeh3h\\t651\\t436\",\"MGA\\tGt92f6Iyeh3a\\tGENE\\tLwRHv9NUeh3R\\t580\\t310\",\"MYC/MAX Complex\\tOCJ3wBBPeh4J\\tCOMPLEX\\t-1\\t479\\t172\",\"MYC\\tKDr5caJdeh4X\\tGENE\\tOCJ3wBBPeh4J\\t313\\t172\",\"MYCL\\tm1nG2P8zeh4p\\tGENE\\tOCJ3wBBPeh4J\\t645\\t173\",\"MLXIPL\\t6ZvsmDKBeh3H\\tGENE\\tIuhA7dyleh3B\\t571\\t658\",\"MAX/MXD Complex\\tTrTubnzSeh3h\\tCOMPLEX\\t-1\\t483\\t436\",\"MAX\\tyGKkO3Ajeh3V\\tGENE\\tLwRHv9NUeh3R\\t344\\t310\",\"MXD3\\ta19O0LiCeh3p\\tGENE\\tTrTubnzSeh3h\\t323\\t436\",\"MLXIP\\tO9V1RuKxeh3K\\tGENE\\tIuhA7dyleh3B\\t395\\t656\",\"MLX\\teH1TNcCVeh3F\\tGENE\\tIuhA7dyleh3B\\t490\\t550\",\"MYCN\\tMn3yUjZveh4v\\tGENE\\tOCJ3wBBPeh4J\\t478\\t173\",\"MLX/MONDO Complex\\tIuhA7dyleh3B\\tCOMPLEX\\t-1\\t483\\t604\",\"MNT\\tmfvZ3Tqreh3u\\tGENE\\tTrTubnzSeh3h\\t815\\t436\",\"MAX/MGA Complex\\tLwRHv9NUeh3R\\tCOMPLEX\\t-1\\t462\\t310\",\"Cell growth, proliferation, apoptosis\\trU4TiKfKeh43\\tPROCESS\\t-1\\t-237\\t433\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"w4MBdulYeh48\\tOCJ3wBBPeh4J\\tyGKkO3Ajeh3V\\tBINDS\\t\",\"kmXInTa9eh5O\\t6ZvsmDKBeh3H\\teH1TNcCVeh3F\\tBINDS\\t\",\"Hv8GfgZPeh5T\\tyGKkO3Ajeh3V\\tGt92f6Iyeh3a\\tNONE\\t\",\"9h-taWpfeh5Z\\tLwRHv9NUeh3R\\trU4TiKfKeh43\\tINHIBITS\\t\",\"eTpDGcg6eh5B\\tOCJ3wBBPeh4J\\trU4TiKfKeh43\\tACTIVATES\\t\",\"mfpvepQNeh5c\\tTrTubnzSeh3h\\tIuhA7dyleh3B\\tBINDS\\t\",\"QJOD8bddeh5I\\tIuhA7dyleh3B\\trU4TiKfKeh43\\tACTIVATES\\t\",\"9ShDYkfTeh5Q\\tO9V1RuKxeh3K\\teH1TNcCVeh3F\\tBINDS\\t\",\"Vfrm_1Ezeh5E\\tTrTubnzSeh3h\\trU4TiKfKeh43\\tINHIBITS\\t\",\"nrV2aZn8eh5L\\tyGKkO3Ajeh3V\\tTrTubnzSeh3h\\tBINDS\\t\"],\"NOTCH\":[\"NOTCH\",\"\",\"Pathway involved in cell-cell communication, cell fate. Cleavage of Notch receptors leads to the displacement of a transcription repressor complex on RBPJ (a transcription factor also known as CSL) accompanied by recruitment of an activation complex (including MAMLs) leads to transcription of Notch target genes.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"NRARP\\tIyt-kiQdVYR4\\tGENE\\t-1\\t1392\\t357\",\"CUL1\\tORzx_8_5UAjR\\tGENE\\t-1\\t861\\t171\",\"CREBBP\\thrOQVgOCWtHH\\tGENE\\tamGWWOzfWrg1\\t1006\\t344\",\"NCOR2\\ttRKlqV2HWQET\\tGENE\\t1WQdsd0RVSHH\\t919\\t500\",\"SPEN\\tt3mLgYfBWQD4\\tGENE\\t1WQdsd0RVSHH\\t1078\\t439\",\"NOTCH3\\t2YXLvEuJWVnS\\tGENE\\tfLn2ytnZVU-1\\t386\\t344\",\" \\tamGWWOzfWrg1\\tCOMPLEX\\t-1\\t1089\\t309\",\"CNTN6\\t8xDiqqMtUlgK\\tGENE\\t-1\\t153\\t344\",\"HES-X\\tCCp9TqYNVWpA\\tGENE\\t-1\\t1392\\t221\",\"KAT2B\\tW6JlNq1wWtHA\\tGENE\\tamGWWOzfWrg1\\t1171\\t274\",\"KDM5A\\tTHgZUx73WQED\\tGENE\\t1WQdsd0RVSHH\\t1240\\t439\",\"DNER\\t8lwlJT8zUt7J\\tGENE\\t-1\\t386\\t439\",\"NCOR1\\tVh9n-uUkWQDu\\tGENE\\t1WQdsd0RVSHH\\t917\\t440\",\"CLEAVED NOTCH\\tH-nBa6GpUrhI\\tCOMPLEX\\t-1\\t781\\t316\",\"FBXW7\\t5nfQJAxjT_z9\\tGENE\\t-1\\t630\\t171\",\" \\t1WQdsd0RVSHH\\tFAMILY\\t-1\\t1079\\t469\",\"NOTCH1\\tVG_45lkLWVm6\\tGENE\\tfLn2ytnZVU-1\\t386\\t274\",\"MALM3\\tdAIql3LLWtG5\\tGENE\\tamGWWOzfWrg1\\t1007\\t274\",\"NOV\\tfhalsWFrUkbl\\tGENE\\t-1\\t153\\t274\",\"JAG2\\tEjlh1U2VT-P2\\tGENE\\t-1\\t285\\t171\",\" \\tfLn2ytnZVU-1\\tCOMPLEX\\t-1\\t472\\t309\",\"HEY-X\\t0mJB_ECxVXFr\\tGENE\\t-1\\t1392\\t288\",\"PSEN2\\tXzuk75kgUufI\\tGENE\\t-1\\t558\\t439\",\"EP300\\tq34LVe78WtHT\\tGENE\\tamGWWOzfWrg1\\t1170\\t344\",\"NOTCH2\\tYBZcjlo4WVnH\\tGENE\\tfLn2ytnZVU-1\\t558\\t274\",\"ARRDC1\\tQj8O9GJNT_AD\\tGENE\\t-1\\t454\\t171\",\"NOTCH4\\tQf89YkiEWVne\\tGENE\\tfLn2ytnZVU-1\\t558\\t344\",\"Cell growth, apoptosis\\tNvu3J1djU_IC\\tPROCESS\\t-1\\t1562\\t439\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"3ZGBwutXWvCf\\t1WQdsd0RVSHH\\tamGWWOzfWrg1\\tINHIBITS\\t\",\"ojk1D4nOWbct\\tEjlh1U2VT-P2\\tfLn2ytnZVU-1\\tACTIVATES\\t\",\"U40tVKQcWjcm\\tXzuk75kgUufI\\tfLn2ytnZVU-1\\tACTIVATES\\t\",\"qgZ5w26hWm8v\\t8xDiqqMtUlgK\\tfLn2ytnZVU-1\\tINHIBITS\\t\",\"xzRJacuuWiP-\\t5nfQJAxjT_z9\\tH-nBa6GpUrhI\\tINHIBITS\\t\",\"_RaZlGxreARX\\tIyt-kiQdVYR4\\tNvu3J1djU_IC\\tINHIBITS\\t\",\"6YudlCKlWygq\\tamGWWOzfWrg1\\tCCp9TqYNVWpA\\tACTIVATES\\t\",\"6YYOMrO7W1Lu\\tamGWWOzfWrg1\\tIyt-kiQdVYR4\\tACTIVATES\\t\",\"y9nj-EHqWlEU\\tfhalsWFrUkbl\\tfLn2ytnZVU-1\\tINHIBITS\\t\",\"QgTnL-0zWfX-\\t8lwlJT8zUt7J\\tfLn2ytnZVU-1\\tACTIVATES\\t\",\"YvuJzpCJWoS3\\tORzx_8_5UAjR\\t5nfQJAxjT_z9\\tACTIVATES\\t\",\"QWoJOCVzW3SR\\t0mJB_ECxVXFr\\tNvu3J1djU_IC\\tACTIVATES\\t\",\"9I6RH1JoWwwW\\tH-nBa6GpUrhI\\tamGWWOzfWrg1\\tACTIVATES\\t\",\"4oG8A9OTWz_Z\\tamGWWOzfWrg1\\t0mJB_ECxVXFr\\tACTIVATES\\t\",\"WZmI2ceJWg0e\\tQj8O9GJNT_AD\\tfLn2ytnZVU-1\\tINHIBITS\\t\",\"U1KCxbf0W2Wy\\tCCp9TqYNVWpA\\tNvu3J1djU_IC\\tACTIVATES\\t\"],\"NRF2\":[\"NRF2\",\"\",\"Involves the regulation of the transcription factor NFE2L2 by KEAP1. NFE2L2 regulates genes with the antioxidant response elements (ARE) that aid in cellular response against oxidative stress thought to aid in cancer chemoresistance.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KEAP1\\tOkLgTv_3eszi\\tGENE\\t-1\\t294\\t147\",\"CUL3\\tpxCvh_ojeszm\\tGENE\\t-1\\t469\\t147\",\"Oxidative Stress Response\\tE9bpVpoWeszr\\tPROCESS\\t-1\\t598\\t240\",\"NFE2L2\\tsKw8nuDgeszp\\tGENE\\t-1\\t385\\t240\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"wIxLZx13eszt\\tOkLgTv_3eszi\\tsKw8nuDgeszp\\tINHIBITS\\t\",\"aWKwI8rJesz1\\tsKw8nuDgeszp\\tE9bpVpoWeszr\\tACTIVATES\\t\",\"Ng79Bysjeszx\\tpxCvh_ojeszm\\tsKw8nuDgeszp\\tINHIBITS\\t\"],\"OV-2011-Cell-cycle-signaling-pathway\":[\"OV-2011-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2A\\toN50crvCRjmK\\tGENE\\t-1\\t635\\t68\\t\",\"RB1\\ttJj5RrqJRq1h\\tGENE\\t-1\\t635\\t299\\t\",\"CCNE1\\tSx3IX8ExBTXu\\tGENE\\tFY8bF0WdRsru\\t639\\t148\\t\",\"CCND1\\tBIDGlk8LBTX9\\tGENE\\tFY8bF0WdRsru\\t550\\t207\\t\",\"CYCLINS\\tFY8bF0WdRsru\\tFAMILY\\t-1\\t634\\t177\\t\",\"Cell cycle progression\\tnnswnmMyRv3y\\tPROCESS\\t-1\\t635\\t373\\t\",\"CCND2\\tIxg8lLJLBTXd\\tGENE\\tFY8bF0WdRsru\\t719\\t207\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"duEMY1UXR86v\\tFY8bF0WdRsru\\ttJj5RrqJRq1h\\tINHIBITS\",\"__OC9xbiR-Fr\\ttJj5RrqJRq1h\\tnnswnmMyRv3y\\tACTIVATES\",\"VqDZTZnER7cZ\\toN50crvCRjmK\\tFY8bF0WdRsru\\tINHIBITS\"],\"OV-2011-Notch-signaling-pathway\":[\"OV-2011-Notch-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"MAML3\\twTL7UE_SDIWe\\tGENE\\tZ64sAxBCSrsH\\t800\\t380\\t\",\"JAG1\\tEy82kzAQDKzS\\tGENE\\tHPXERf3USgjx\\t462\\t280\\t\",\"MAML1\\tICfP9aB2DIWS\\tGENE\\tZ64sAxBCSrsH\\t800\\t247\\t\",\"JAG2\\tFvIadI1RDKzA\\tGENE\\tHPXERf3USgjx\\t462\\t351\\t\",\"JAG\\tHPXERf3USgjx\\tFAMILY\\t-1\\t462\\t315\\t\",\"NOTCH3\\txiGB_3VdSfd3\\tGENE\\t-1\\t632\\t316\\t\",\"MAML2\\t9xWqi9JKDIWF\\tGENE\\tZ64sAxBCSrsH\\t800\\t314\\t\",\"MAML\\tZ64sAxBCSrsH\\tFAMILY\\t-1\\t800\\t314\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"osh5OcaxTA2q\\tHPXERf3USgjx\\txiGB_3VdSfd3\\tINHIBITS\",\"AivX6u8YTCYD\\tZ64sAxBCSrsH\\txiGB_3VdSfd3\\tINHIBITS\"],\"OV-2011-RTK-RAS-PI(3)K-pathway\":[\"OV-2011-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"KRAS\\t4SZmwk65Q2AX\\tGENE\\t-1\\t529\\t119\\t\",\"AKT\\tJXx22AmtmHua\\tFAMILY\\t-1\\t263\\t234\\t\",\"AKT2\\t1QP6Io9jmSsb\\tGENE\\tJXx22AmtmHua\\t263\\t203\\t\",\"NF1\\tbKlDARX_QzeJ\\tGENE\\t-1\\t529\\t41\\t\",\"Proliferation/survival\\teyOUahBEQth7\\tPROCESS\\t-1\\t413\\t402\\t\",\"AKT1\\tpw2OFJfHmSsq\\tGENE\\tJXx22AmtmHua\\t263\\t265\\t\",\"PTEN\\tqx1xPdYgQgUA\\tGENE\\t-1\\t263\\t41\\t\",\"BRAF\\tXLdjd_rNQ5TF\\tGENE\\t-1\\t529\\t239\\t\",\"PIK3CA\\t9WGkKXm-QhuR\\tGENE\\t-1\\t263\\t119\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"lwcl1MvdmPEO\\tJXx22AmtmHua\\teyOUahBEQth7\\tACTIVATES\",\"6CO_N8liRIA4\\tbKlDARX_QzeJ\\t4SZmwk65Q2AX\\tINHIBITS\",\"TDBL0RUZRJb3\\t4SZmwk65Q2AX\\tXLdjd_rNQ5TF\\tACTIVATES\",\"uXgITAznRMO2\\tXLdjd_rNQ5TF\\teyOUahBEQth7\\tACTIVATES\",\"vkkqRMcgQ90m\\t4SZmwk65Q2AX\\t9WGkKXm-QhuR\\tACTIVATES\",\"oxMyRc9ImLT_\\t9WGkKXm-QhuR\\tJXx22AmtmHua\\tACTIVATES\",\"_9kjQAkpdEP0\\tqx1xPdYgQgUA\\t9WGkKXm-QhuR\\tINHIBITS\"],\"PI3K\":[\"PI3K\",\"\",\"A signaling cascade involving PI3K phosphorylation of AKT leading to the activation of the mTORC1 complex. The mTORC1 functions as a metabolic sensor and controls protein abundance by affecting processes involved in protein production and RNA translation leading to changes in cell growth and survival.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"AKT3\\teWz9lexke0kY\\tGENE\\tyEOAK96Ye0j-\\t752\\t327\",\"RPTOR\\tKHzd_YdNe0jd\\tGENE\\tJKE-mm1le0jZ\\t759\\t730\",\"PIK3CA\\tBpH76ff7e0iw\\tGENE\\t-1\\t595\\t176\",\"PIK3R2\\t5lBs8QfFe0i_\\tGENE\\tiK4blWyDe0i1\\t804\\t167\",\"RHEB\\t8eeCwYTqe0jC\\tGENE\\t-1\\t599\\t619\",\"PIK3R\\tiK4blWyDe0i1\\tFAMILY\\t-1\\t804\\t166\",\"AKT\\tyEOAK96Ye0j-\\tFAMILY\\t-1\\t594\\t327\",\"mTORC2\\tMMeMHe4ze0kj\\tFAMILY\\t-1\\t421\\t730\",\"TSC\\t3b8rKMrke0jF\\tFAMILY\\t-1\\t596\\t486\",\"AKT2\\t9o76blkNe0kR\\tGENE\\tyEOAK96Ye0j-\\t594\\t327\",\"mTORC1\\tJKE-mm1le0jZ\\tFAMILY\\t-1\\t678\\t730\",\"PPP2R1A\\tHY1OO1uEe0jv\\tGENE\\t-1\\t971\\t326\",\"PIK3R3\\tGy1IflZce0i5\\tGENE\\tiK4blWyDe0i1\\t804\\t227\",\"PTEN\\tHL_nLOSce0jV\\tGENE\\t-1\\t594\\t91\",\"MTOR\\t_WbyV7oYe0jj\\tGENE\\tJKE-mm1le0jZ\\t597\\t730\",\"PIK3R1\\tj_DI0z3Xe0i8\\tGENE\\tiK4blWyDe0i1\\t804\\t106\",\"Cell growth\\t_wytH85He0jQ\\tPROCESS\\t-1\\t601\\t860\",\"INPP4B\\t2ZOWMzsce0j4\\tGENE\\t-1\\t372\\t178\",\"TSC1\\tx2juQzTie0jM\\tGENE\\t3b8rKMrke0jF\\t596\\t459\",\"TSC2\\tzs4f_I93e0jJ\\tGENE\\t3b8rKMrke0jF\\t596\\t513\",\"RICTOR\\tDg3B9H1Me0ks\\tGENE\\tMMeMHe4ze0kj\\t421\\t730\",\"AKT1\\tTDuOMRUee0kH\\tGENE\\tyEOAK96Ye0j-\\t437\\t327\",\"STK11\\tURGrIXe2e0kd\\tGENE\\t-1\\t336\\t483\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"an7n5soQe0k8\\tyEOAK96Ye0j-\\t3b8rKMrke0jF\\tINHIBITS\\t\",\"YeQpbZw0e0lG\\t3b8rKMrke0jF\\t8eeCwYTqe0jC\\tINHIBITS\\t\",\"wjtVfwEee0lB\\tJKE-mm1le0jZ\\t_wytH85He0jQ\\tACTIVATES\\t\",\"6Mr0F0gAe0lD\\tURGrIXe2e0kd\\t3b8rKMrke0jF\\tACTIVATES\\t\",\"EigHAJh7e0lI\\tHL_nLOSce0jV\\tBpH76ff7e0iw\\tINHIBITS\\t\",\"s7B8LZsde0k-\\tBpH76ff7e0iw\\tyEOAK96Ye0j-\\tACTIVATES\\t\",\"1T4VmG08e0lL\\tiK4blWyDe0i1\\tBpH76ff7e0iw\\tINHIBITS\\t\",\"3yNlj0Tge0k2\\t8eeCwYTqe0jC\\tJKE-mm1le0jZ\\tACTIVATES\\t\",\"NuGuIugXe0k6\\t2ZOWMzsce0j4\\tBpH76ff7e0iw\\tINHIBITS\\t\",\"pYhyONrDe0lP\\tDg3B9H1Me0ks\\tURGrIXe2e0kd\\tACTIVATES\\t\",\"h-JnEMgBe0lN\\tHY1OO1uEe0jv\\tyEOAK96Ye0j-\\tINHIBITS\\t\"],\"RTK-RAS\":[\"RTK-RAS\",\"\",\"A signaling cascade pathway initiated by activation of RTKs followed signal transduction through Ras then Raf and then MEK family members. This cascade leads to the activation of several transcription factors that regulate processes involving cell proliferation and survival.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"NRAS\\tQHZo7kkDfrMO\\tGENE\\tb8V1sXZDfrL1\\t1142\\t348\",\"ROS1\\ttNj2tohofrKR\\tGENE\\t8tMooF5vfrKJ\\t664\\t166\",\"KIT\\tgWlRUSfzfrKt\\tGENE\\t8tMooF5vfrKJ\\t1142\\t104\",\"Translation\\t7CK2REgNfrKF\\tPROCESS\\t-1\\t881\\t625\",\"PTPN11\\tjTtQAhJrfrJx\\tGENE\\t-1\\t504\\t348\",\"RAS\\tb8V1sXZDfrL1\\tFAMILY\\t-1\\t1063\\t348\",\"RET\\tyjRzsMVifrKy\\tGENE\\t8tMooF5vfrKJ\\t504\\t166\",\"CBL\\t0a_o8sXafrJh\\tGENE\\t-1\\t504\\t262\",\"Proliferation\\t3VFXQGLzfrJ-\\tPROCESS\\t-1\\t559\\t626\",\"FLT3\\tIpmlW5vMfrLc\\tGENE\\t8tMooF5vfrKJ\\t982\\t166\",\"NF1\\t59lXGxKMfrJn\\tGENE\\t-1\\t1142\\t262\",\"NTRK2\\t5SlBGbo1frLr\\tGENE\\t8tMooF5vfrKJ\\t1302\\t166\",\"ERRFI1\\t-V-9_6fAfrJj\\tGENE\\t-1\\t664\\t262\",\"ARAF\\tcBahXkGvfrMn\\tGENE\\tsApg3-IVfrMe\\t982\\t429\",\"FGFR3\\t1EucZO9pfrLJ\\tGENE\\t8tMooF5vfrKJ\\t824\\t104\",\"HRAS\\tBB8hBTZ4frME\\tGENE\\tb8V1sXZDfrL1\\t982\\t348\",\"MET\\t_yKldPkzfrKZ\\tGENE\\t8tMooF5vfrKJ\\t1142\\t41\",\"RAF1\\tLk9sb9wzfrM5\\tGENE\\tsApg3-IVfrMe\\t1302\\t429\",\"RAC1\\tzDRSUmjffrJ7\\tGENE\\t-1\\t614\\t511\",\"FGFR1\\tRFZ2wD4YfrKf\\tGENE\\t8tMooF5vfrKJ\\t504\\t104\",\"MEK\\t3psJQJmGfrJV\\tFAMILY\\t-1\\t1062\\t511\",\"FGFR2\\tnTecsKLYfrKj\\tGENE\\t8tMooF5vfrKJ\\t664\\t104\",\"KRAS\\te8tWMLoVfrL9\\tGENE\\tb8V1sXZDfrL1\\t824\\t348\",\"BRAF\\tNM12nD_nfrMx\\tGENE\\tsApg3-IVfrMe\\t1142\\t429\",\"ERBB2\\tC45Adl13frKV\\tGENE\\t8tMooF5vfrKJ\\t664\\t41\",\"ERBB4\\tZ-e0kCBwfrKN\\tGENE\\t8tMooF5vfrKJ\\t982\\t41\",\"MAPK1\\tR9ZNAxVRfrJ3\\tGENE\\t-1\\t783\\t511\",\"RAF\\tsApg3-IVfrMe\\tFAMILY\\t-1\\t1142\\t429\",\"EGFR\\t9Psi8emvfrK3\\tGENE\\t8tMooF5vfrKJ\\t504\\t41\",\"RASA1\\tZSZjKexZfrJ0\\tGENE\\t-1\\t1301\\t262\",\"FGFR4\\tMfs6mvKHfrKo\\tGENE\\t8tMooF5vfrKJ\\t982\\t104\",\"IGF1R\\tCvsyhyzdfrLQ\\tGENE\\t8tMooF5vfrKJ\\t1302\\t104\",\"ERBB3\\trORV55VHfrK9\\tGENE\\t8tMooF5vfrKJ\\t824\\t41\",\"Cell survival\\tvmWLLGP3frKC\\tPROCESS\\t-1\\t718\\t626\",\"SOS1\\tbdPjTyaDfrJu\\tGENE\\t-1\\t982\\t262\",\"RIT1\\tpTVg5xU2frMW\\tGENE\\tb8V1sXZDfrL1\\t1302\\t348\",\"MAP2K2\\tgqrpYTM0frJa\\tGENE\\t3psJQJmGfrJV\\t1142\\t511\",\"ALK\\t1o_9LYSFfrLV\\tGENE\\t8tMooF5vfrKJ\\t824\\t166\",\"NTRK1\\tT6ceghhpfrLj\\tGENE\\t8tMooF5vfrKJ\\t1142\\t166\",\"RTKs\\t8tMooF5vfrKJ\\tFAMILY\\t-1\\t903\\t103\",\"PDGFRA\\ty8PZ8iiyfrLD\\tGENE\\t8tMooF5vfrKJ\\t1302\\t41\",\"MAP2K1\\tQ2i0HY0HfrJe\\tGENE\\t3psJQJmGfrJV\\t982\\t511\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"Rokn-zgqfrNN\\t-V-9_6fAfrJj\\t8tMooF5vfrKJ\\tINHIBITS\\t\",\"BvZejKrrfrNX\\t59lXGxKMfrJn\\tb8V1sXZDfrL1\\tINHIBITS\\t\",\"CEWkH2kYfrNa\\tZSZjKexZfrJ0\\tb8V1sXZDfrL1\\tINHIBITS\\t\",\"In_EmpIgfrNv\\tR9ZNAxVRfrJ3\\t7CK2REgNfrKF\\tACTIVATES\\t\",\"NYpLslu-frNh\\tsApg3-IVfrMe\\t3psJQJmGfrJV\\tACTIVATES\\t\",\"8OWp0SRTfrNm\\tzDRSUmjffrJ7\\tR9ZNAxVRfrJ3\\tACTIVATES\\t\",\"OnjXx-jmfrNk\\t3psJQJmGfrJV\\tR9ZNAxVRfrJ3\\tACTIVATES\\t\",\"HPbM8huafrNU\\tbdPjTyaDfrJu\\tb8V1sXZDfrL1\\tACTIVATES\\t\",\"qtmobl6_frNF\\t0a_o8sXafrJh\\t8tMooF5vfrKJ\\tINHIBITS\\t\",\"8EmU4xtSfrNo\\tR9ZNAxVRfrJ3\\t3VFXQGLzfrJ-\\tACTIVATES\\t\",\"n_C1QGZ2frNr\\tR9ZNAxVRfrJ3\\tvmWLLGP3frKC\\tACTIVATES\\t\",\"vQrHXLexfrNR\\t8tMooF5vfrKJ\\tbdPjTyaDfrJu\\tACTIVATES\\t\",\"gs6EgVUcfrNd\\tb8V1sXZDfrL1\\tsApg3-IVfrMe\\tACTIVATES\\t\"],\"SKCM-2015-Cell-cycle-signaling-pathway\":[\"SKCM-2015-Cell-cycle-signaling-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"CDKN2A\\tnpKTJggFJS4I\\tGENE\\t-1\\t442\\t89\\t\",\"CYCLINS\\tIba11JzIJVxh\\tFAMILY\\t-1\\t520\\t175\\t\",\"CDK4\\tWcN_CcOrC9iS\\tGENE\\tIba11JzIJVxh\\t442\\t175\\t\",\"E2F\\tXI_rBXYxJXPk\\tGENE\\t-1\\t520\\t372\\t\",\"CCND1\\tv_gEFTZBC9il\\tGENE\\tIba11JzIJVxh\\t599\\t175\\t\",\"Cell cycle progression\\te_ZEQUYtJz1B\\tPROCESS\\t-1\\t520\\t484\\t\",\"RB1\\t4vxRSXTEJWO8\\tGENE\\t-1\\t520\\t276\\t\",\"CDKN2B\\tuK5CVzIeJayA\\tGENE\\t-1\\t599\\t89\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"vJf6xitbJwIp\\tnpKTJggFJS4I\\tIba11JzIJVxh\\tINHIBITS\",\"MrgZ3psqKpK7\\tXI_rBXYxJXPk\\te_ZEQUYtJz1B\\tACTIVATES\",\"fQLLdtj0JzEP\\t4vxRSXTEJWO8\\tXI_rBXYxJXPk\\tINHIBITS\",\"Msdh3q6kJxC4\\tuK5CVzIeJayA\\tIba11JzIJVxh\\tINHIBITS\",\"vjchZOt9JyOV\\tIba11JzIJVxh\\t4vxRSXTEJWO8\\tINHIBITS\"],\"SKCM-2015-Histone-modification-pathway\":[\"SKCM-2015-Histone-modification-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"AURKA\\tUUHLK2LeLlq4\\tGENE\\t-1\\t425\\t166\\t\",\"PPP6C\\tyZeIXzgALlHL\\tGENE\\t-1\\t231\\t166\\t\",\"ARID2\\t4dCj0PbWLn10\\tGENE\\t-1\\t425\\t308\\t\",\"Genetic stability\\txWY6P0idNRza\\tPROCESS\\t-1\\t624\\t195\\t\",\"Chromatin remodeling\\t-c29Xam0NfMu\\tPROCESS\\t-1\\t231\\t263\\t\",\"Chromatid segregation\\tCl7g3xLYLmwQ\\tPROCESS\\t-1\\t624\\t133\\t\",\"Transcriptional control\\tX7mpJiW8Lodu\\tPROCESS\\t-1\\t231\\t342\\t\",\"Epigenetic regulation\\t8D0fnb8SLrSQ\\tPROCESS\\t-1\\t231\\t437\\t\",\"IDH1\\tuHqIeo66Lqq9\\tGENE\\t-1\\t425\\t435\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"9WzDoyMZNXKq\\tUUHLK2LeLlq4\\tCl7g3xLYLmwQ\\tACTIVATES\",\"nh2AMryLNpj_\\tuHqIeo66Lqq9\\t8D0fnb8SLrSQ\\tACTIVATES\",\"3ixp2EynNWMa\\tyZeIXzgALlHL\\tUUHLK2LeLlq4\\tACTIVATES\",\"-scKWlPDNX6-\\tUUHLK2LeLlq4\\txWY6P0idNRza\\tACTIVATES\",\"8YJTZK-INn2c\\t4dCj0PbWLn10\\t-c29Xam0NfMu\\tACTIVATES\",\"MdvHv-NFNoui\\t4dCj0PbWLn10\\tX7mpJiW8Lodu\\tACTIVATES\"],\"SKCM-2015-RTK-RAS-PI(3)K-pathway\":[\"SKCM-2015-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Proliferation\\tOpbQ5N5BIR7T\\tPROCESS\\t-1\\t528\\t524\\t\",\"NF1\\tz9P8VET8IH-v\\tGENE\\t-1\\t256\\t147\\t\",\"NRAS\\tstZUUqWp9HOb\\tGENE\\tdQrC9TeNIX-m\\t374\\t236\\t\",\"Survival\\tDXOfiysJIUYY\\tPROCESS\\t-1\\t1107\\t329\\t\",\"RAS\\tdQrC9TeNIX-m\\tFAMILY\\t-1\\t529\\t236\\t\",\"RAC1\\t8CZU3OY7IlD5\\tGENE\\t-1\\t880\\t364\\t\",\"KIT\\tyhNL3UBnIL-5\\tGENE\\t-1\\t880\\t120\\t\",\"AKT Pathway\\t5m3zxs1KINf7\\tPROCESS\\t-1\\t880\\t241\\t\",\"MAP2K1\\teNN9GlQaIQwL\\tGENE\\t-1\\t528\\t435\\t\",\"PTEN\\tRtyOk-X-ITE3\\tGENE\\t-1\\t1106\\t241\\t\",\"BRAF\\t4dRiJZfvIPWm\\tGENE\\t-1\\t528\\t338\\t\",\"KRAS\\thksSbzGD9HOJ\\tGENE\\tdQrC9TeNIX-m\\t685\\t236\\t\",\"HRAS\\tNNEMBzDV9HNw\\tGENE\\tdQrC9TeNIX-m\\t530\\t236\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"soPzg51UIxxj\\t8CZU3OY7IlD5\\t5m3zxs1KINf7\\tACTIVATES\",\"Cf02-ifyItuD\\tdQrC9TeNIX-m\\t4dRiJZfvIPWm\\tACTIVATES\",\"BqXWl69hI1zW\\tyhNL3UBnIL-5\\t5m3zxs1KINf7\\tACTIVATES\",\"1Aepvid-IqoA\\tz9P8VET8IH-v\\tdQrC9TeNIX-m\\tINHIBITS\",\"J01_493NIzbP\\t4dRiJZfvIPWm\\t5m3zxs1KINf7\\tACTIVATES\",\"PCKlXBgfIu2g\\t4dRiJZfvIPWm\\teNN9GlQaIQwL\\tACTIVATES\",\"q7PHpnTgIwuD\\t8CZU3OY7IlD5\\teNN9GlQaIQwL\\tACTIVATES\",\"FxAnigvrI2_i\\t5m3zxs1KINf7\\tDXOfiysJIUYY\\tACTIVATES\",\"uglecyI1IsGD\\tyhNL3UBnIL-5\\tdQrC9TeNIX-m\\tACTIVATES\",\"iCnUjDjmIvi5\\teNN9GlQaIQwL\\tOpbQ5N5BIR7T\\tACTIVATES\",\"HEzFrHkCI0l-\\tRtyOk-X-ITE3\\t5m3zxs1KINf7\\tINHIBITS\"],\"SKCM-2015-TP53-pathway\":[\"SKCM-2015-TP53-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Apoptosis\\tTc8UdIhSLCIT\\tPROCESS\\t-1\\t289\\t372\\t\",\"TP53\\tGBRktWHeLBFQ\\tGENE\\t-1\\t381\\t273\\t\",\"MDM2\\t-VggHhz9K-1w\\tGENE\\t-1\\t381\\t193\\t\",\"CDKN2B\\tB3XBHs3yK9o7\\tGENE\\t-1\\t456\\t108\\t\",\"Senescence\\tcLoUlZOZLD0x\\tPROCESS\\t-1\\t456\\t372\\t\",\"CDKN2A\\thml0YQ9_K8tc\\tGENE\\t-1\\t289\\t108\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"gBzu2KRcLSuV\\tB3XBHs3yK9o7\\t-VggHhz9K-1w\\tINHIBITS\",\"XenUWWntLTzX\\t-VggHhz9K-1w\\tGBRktWHeLBFQ\\tINHIBITS\",\"WNkolmuaLVxV\\tGBRktWHeLBFQ\\tcLoUlZOZLD0x\\tACTIVATES\",\"N3sY9gBuLVHA\\tGBRktWHeLBFQ\\tTc8UdIhSLCIT\\tACTIVATES\",\"2r21RRvbLR21\\thml0YQ9_K8tc\\t-VggHhz9K-1w\\tINHIBITS\"],\"STAD-2014-RTK-RAS-PI(3)K-pathway\":[\"STAD-2014-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"PTEN\\t6OFxgP6h9_xG\\tGENE\\t-1\\t341\\t496\\t\",\"RASA1\\tY6PU3f3t93HB\\tGENE\\t-1\\t419\\t172\\t\",\"KRAS\\txCs5lqYG7Z1Z\\tGENE\\t7oEmRnmC-RqY\\t341\\t265\\t\",\"JAK2\\tL1LDTgi27i0r\\tGENE\\tuCiynVqo-CBg\\t167\\t366\\t\",\"PIK3R1\\tij4dXcH1-Ah1\\tGENE\\t-1\\t516\\t496\\t\",\"RAS\\t7oEmRnmC-RqY\\tFAMILY\\t-1\\t420\\t265\\t\",\"NRAS\\tdwqmccUP7Z1E\\tGENE\\t7oEmRnmC-RqY\\t499\\t265\\t\",\"ERBB2\\tL6F3ltyJ7i1T\\tGENE\\tuCiynVqo-CBg\\t167\\t233\\t\",\"EGFR\\tOrbXhKLA7i1D\\tGENE\\tuCiynVqo-CBg\\t167\\t164\\t\",\"FGFR2\\tGc4Ktrgt7i1M\\tGENE\\tuCiynVqo-CBg\\t167\\t430\\t\",\"PIK3CA\\tWBOfcnh9993x\\tGENE\\t-1\\t419\\t394\\t\",\"MET\\tgbmLOkrS7i1x\\tGENE\\tuCiynVqo-CBg\\t167\\t496\\t\",\"RTK\\tuCiynVqo-CBg\\tFAMILY\\t-1\\t167\\t330\\t\",\"ERBB3\\t6Uq7nWdq7i1f\\tGENE\\tuCiynVqo-CBg\\t167\\t299\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"20X5Aj7K-bWX\\t6OFxgP6h9_xG\\tWBOfcnh9993x\\tINHIBITS\",\"VZzlIbfS-edr\\tuCiynVqo-CBg\\t7oEmRnmC-RqY\\tACTIVATES\",\"KrNMU6gX-f84\\tuCiynVqo-CBg\\tWBOfcnh9993x\\tACTIVATES\",\"1JHahVpJ-cGV\\tij4dXcH1-Ah1\\tWBOfcnh9993x\\tINHIBITS\",\"IyUACdpr-YSa\\t7oEmRnmC-RqY\\tWBOfcnh9993x\\tACTIVATES\",\"OPPikJRZ-XUc\\tY6PU3f3t93HB\\t7oEmRnmC-RqY\\tINHIBITS\",\"vbNOH609-aVf\\tWBOfcnh9993x\\t7oEmRnmC-RqY\\tACTIVATES\"],\"TGF-Beta\":[\"TGF-Beta\",\"\",\"A signaling network involved in growth, proliferation, apoptosis, and differentiation involving the activation of TGFβ receptors by the cytokine TGFβ that leads to the activation of gene transcription by SMADs.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"SMAD2\\t0qBZliXOfmft\\tGENE\\tXkk8SKlafmfn\\t335\\t410\",\"SMAD\\tXkk8SKlafmfn\\tFAMILY\\t-1\\t424\\t446\",\"Activin ligands\\tt_Q1Nr-BfmfR\\tGENE\\t-1\\t509\\t146\",\"ACVR2B\\t9Ev1i-2HfmfX\\tGENE\\tboabbY81fmfT\\t508\\t307\",\"TGFBR\\tfXKkJObYfmfb\\tFAMILY\\t-1\\t329\\t277\",\"ACVR2A\\t_sm7432ofmfV\\tGENE\\tboabbY81fmfT\\t509\\t244\",\"SMAD3\\tgepyfePvfmfz\\tGENE\\tXkk8SKlafmfn\\t514\\t410\",\"TGFBR2\\tDOJnFoHNfmfi\\tGENE\\tfXKkJObYfmfb\\t329\\t311\",\"TGFB ligands\\tgOOpkueqfmfM\\tGENE\\t-1\\t329\\t146\",\"ACVR2\\tboabbY81fmfT\\tFAMILY\\t-1\\t508\\t275\",\"TGFBR1\\tSb4zGrL3fmfe\\tGENE\\tfXKkJObYfmfb\\t329\\t244\",\"Proliferation, stem/progenitor phenotype\\tA7jMDR2Mfmf-\\tPROCESS\\t-1\\t427\\t588\",\"SMAD4\\tOKApI7Qwfmf4\\tGENE\\tXkk8SKlafmfn\\t428\\t483\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"7FzJ455ZfmgP\\tboabbY81fmfT\\tXkk8SKlafmfn\\tACTIVATES\\t\",\"WEH0_CRqfmgL\\tfXKkJObYfmfb\\tXkk8SKlafmfn\\tACTIVATES\\t\",\"hnOBi-Z1fmgI\\tt_Q1Nr-BfmfR\\tboabbY81fmfT\\tACTIVATES\\t\",\"Ax3S1Kd8fmgE\\tgOOpkueqfmfM\\tfXKkJObYfmfb\\tACTIVATES\\t\"],\"THCA-2014-RTK-RAS-PI(3)K-pathway\":[\"THCA-2014-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"MTOR\\tG9y6ZBee_nmX\\tGENE\\t-1\\t649\\t417\\t\",\"NRAS\\tOjQjq-cc7_5M\\tGENE\\tEOfQTOkE_iLF\\t646\\t25\\t\",\"AKT\\tfi2ldWMn_lnk\\tGENE\\t-1\\t647\\t265\\t\",\"BCL2\\tjwugB2iP_y0Y\\tGENE\\t-1\\t841\\t559\\t\",\"NTR1\\turLIUCXQ70w-\\tGENE\\tKen9wGw8AKU3\\t293\\t-7\\t\",\"RAS\\t1TJ8hV1I_ZR5\\tFAMILY\\t-1\\t374\\t186\\t\",\"RAF\\txSi1Do6v_sYj\\tGENE\\t-1\\t841\\t186\\t\",\"DUSPs\\t7C2rFt7t_fdn\\tGENE\\t-1\\t298\\t524\\t\",\"BRAF\\tpq87LogY_1LI\\tGENE\\t-1\\t1024\\t186\\t\",\"pERK\\tF4o-nfWI_urx\\tGENE\\t-1\\t841\\t344\\t\",\"Apoptosis\\tAoCFeVPVAu6s\\tPROCESS\\t-1\\t841\\t636\\t\",\"BRAF\\tPAsWh9Rz_dco\\tGENE\\t-1\\t167\\t276\\t\",\"HRAS\\tLPvNA7nc7_57\\tGENE\\tEOfQTOkE_iLF\\t804\\t25\\t\",\"NTR\\tKen9wGw8AKU3\\tFAMILY\\t-1\\t371\\t22\\t\",\"BAD\\tUiVUw9Es_x5s\\tGENE\\t-1\\t841\\t489\\t\",\"Cell proliferation/Growth\\ttGen8Qvz_qez\\tPROCESS\\t-1\\t298\\t628\\t\",\"KRAS\\tr0hPxhCH7_5n\\tGENE\\tEOfQTOkE_iLF\\t961\\t25\\t\",\"PI3K\\tK3RfoHn2_kQ2\\tGENE\\t-1\\t647\\t186\\t\",\"pMEK\\tlMJhnvzk_tYZ\\tGENE\\t-1\\t841\\t264\\t\",\"pMEK\\teM1eNr4K_cOi\\tGENE\\t-1\\t298\\t346\\t\",\"p90\\t-6lLHt7R_v9K\\tGENE\\t-1\\t841\\t419\\t\",\"NTR3\\tJtRMUb9N70xa\\tGENE\\tKen9wGw8AKU3\\t378\\t51\\t\",\"Protein synthesis\\tWQ8orp6Y_ouv\\tPROCESS\\t-1\\t649\\t627\\t\",\"RAS\\tEOfQTOkE_iLF\\tFAMILY\\t-1\\t804\\t25\\t\",\"NTR2\\tWK-XNi2970xq\\tGENE\\tKen9wGw8AKU3\\t450\\t-7\\t\",\"RET\\tCDUJn7rL_YRR\\tGENE\\t-1\\t167\\t186\\t\",\"pERK\\tGyr_vYK7_eUm\\tGENE\\t-1\\t298\\t434\\t\",\"RAF\\tEJdSJtPH_amI\\tGENE\\t-1\\t374\\t276\\t\",\"TSC2\\tEhaBKk9-_mvL\\tGENE\\t-1\\t647\\t345\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"HComBP3QBFSr\\txSi1Do6v_sYj\\tlMJhnvzk_tYZ\\tACTIVATES\",\"5ow_H43KBLyc\\tjwugB2iP_y0Y\\tAoCFeVPVAu6s\\tINHIBITS\",\"lafIlqasBaaQ\\tEJdSJtPH_amI\\teM1eNr4K_cOi\\tACTIVATES\",\"pCtfuSydBdaS\\t7C2rFt7t_fdn\\tGyr_vYK7_eUm\\tINHIBITS\",\"YyPlgJXcA__s\\tEhaBKk9-_mvL\\tG9y6ZBee_nmX\\tINHIBITS\",\"iA_J_DZbBefG\\t7C2rFt7t_fdn\\ttGen8Qvz_qez\\tACTIVATES\",\"sJ4XKEpFA6LY\\tKen9wGw8AKU3\\tEOfQTOkE_iLF\\tACTIVATES\",\"8BieawZKA3u7\\tCDUJn7rL_YRR\\t1TJ8hV1I_ZR5\\tACTIVATES\",\"r79uM2_gBZKl\\t1TJ8hV1I_ZR5\\tEJdSJtPH_amI\\tACTIVATES\",\"ACvH-CYzA8yR\\tEOfQTOkE_iLF\\tK3RfoHn2_kQ2\\tACTIVATES\",\"TmRxcbx_Bbb7\\teM1eNr4K_cOi\\tGyr_vYK7_eUm\\tACTIVATES\",\"teHhboSJBVGJ\\tpq87LogY_1LI\\txSi1Do6v_sYj\\tINHIBITS\",\"XmrMteXSBBt-\\tG9y6ZBee_nmX\\tWQ8orp6Y_ouv\\tACTIVATES\",\"hU00JaNWBYJR\\tPAsWh9Rz_dco\\teM1eNr4K_cOi\\tACTIVATES\",\"FXb60wuvBcMi\\tGyr_vYK7_eUm\\t7C2rFt7t_fdn\\tACTIVATES\",\"-iHJfCCVA_Hh\\tfi2ldWMn_lnk\\tEhaBKk9-_mvL\\tACTIVATES\",\"aW6elpjvBKyK\\tUiVUw9Es_x5s\\tjwugB2iP_y0Y\\tINHIBITS\",\"LlJV17wNBHMh\\tlMJhnvzk_tYZ\\tF4o-nfWI_urx\\tACTIVATES\",\"z-CbE5XoBJ5o\\t-6lLHt7R_v9K\\tUiVUw9Es_x5s\\tINHIBITS\",\"F9EcWkHvBUJ2\\tpq87LogY_1LI\\txSi1Do6v_sYj\\tACTIVATES\",\"GqN5v_YIBEbi\\tEOfQTOkE_iLF\\txSi1Do6v_sYj\\tACTIVATES\",\"FWnfRc3YBC44\\t-6lLHt7R_v9K\\tG9y6ZBee_nmX\\tINHIBITS\",\"AV9s-fteA9y7\\tK3RfoHn2_kQ2\\tfi2ldWMn_lnk\\tACTIVATES\",\"3BgREqkhA22-\\tKen9wGw8AKU3\\t1TJ8hV1I_ZR5\\tACTIVATES\",\"r31OK-oJBIby\\tF4o-nfWI_urx\\t-6lLHt7R_v9K\\tACTIVATES\"],\"TP53\":[\"TP53\",\"\",\"Pathway centered around the regulation of the tumor suppressor TP53, a gene that regulates apoptosis, cell cycle arrest, senescence, and DNA repair.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"Cell survival, proliferation\\txDGjGXGMfyG3\\tPROCESS\\t-1\\t133\\t449\",\"CDKN2A\\tgx_YWb90fyGp\\tGENE\\t-1\\t-23\\t235\",\"MDM4\\tsT2W03HDfyGe\\tGENE\\tlK7pvMYZfyGU\\t319\\t127\",\"DNA replication stress\\tYvaYsZcufyHH\\tPROCESS\\t-1\\t597\\t51\",\"RPS6KA3\\tIu0kJKKGfyGM\\tGENE\\t-1\\t597\\t328\",\"MDM2\\tqv-3H9tXfyGZ\\tGENE\\tlK7pvMYZfyGU\\t149\\t127\",\"Senescence, apoptosis\\tIkv91AlOfyG-\\tPROCESS\\t-1\\t325\\t448\",\"\\tlK7pvMYZfyGU\\tFAMILY\\t-1\\t234\\t127\",\"TP53\\tES5FXiJLfyGu\\tGENE\\t-1\\t233\\t328\",\"Oncogenic stress\\tHZxSxJBmfyHE\\tPROCESS\\t-1\\t333\\t222\",\"ATM\\tc4Ad6ZYBfyGx\\tGENE\\t-1\\t597\\t130\",\"CHEK2\\tJvx4WzdtfyGk\\tGENE\\t-1\\t597\\t225\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"8KZq5XsifyHL\\tES5FXiJLfyGu\\txDGjGXGMfyG3\\tINHIBITS\\t\",\"5e5CkdqDfyHg\\tgx_YWb90fyGp\\tES5FXiJLfyGu\\tINHIBITS\\t\",\"WAvkWWubfyHO\\tJvx4WzdtfyGk\\tIu0kJKKGfyGM\\tACTIVATES\\t\",\"wMOYIFFAfyHS\\tgx_YWb90fyGp\\tlK7pvMYZfyGU\\tINHIBITS\\t\",\"Zd519CgjfyHd\\tHZxSxJBmfyHE\\tES5FXiJLfyGu\\tACTIVATES\\t\",\"lFKJrXsmfyHb\\tES5FXiJLfyGu\\tIkv91AlOfyG-\\tACTIVATES\\t\",\"geyskuwAfyHV\\tlK7pvMYZfyGU\\tES5FXiJLfyGu\\tINHIBITS\\t\",\"t-G0U6EJfyHR\\tIu0kJKKGfyGM\\tES5FXiJLfyGu\\tACTIVATES\\t\",\"vNvONKmFfyHj\\tYvaYsZcufyHH\\tc4Ad6ZYBfyGx\\tACTIVATES\\t\",\"25K5WaLwfyHX\\tc4Ad6ZYBfyGx\\tJvx4WzdtfyGk\\tACTIVATES\\t\"],\"UCEC-2013-RTK-RAS-PI(3)K-pathway\":[\"UCEC-2013-RTK-RAS-PI(3)K-pathway\",\"\",\"\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"RTK\\tZAPqdjSDgCgU\\tFAMILY\\t-1\\t391\\t148\\t\",\"SOX17\\tBXxulVFjgHIs\\tGENE\\t-1\\t227\\t344\\t\",\"KRAS\\t76Wg78V_gDdz\\tGENE\\t-1\\t391\\t260\\t\",\"Proliferation\\tsoh0TxsPgq1P\\tPROCESS\\t-1\\t803\\t409\\t\",\"PTEN\\tQha2pMPigm3R\\tGENE\\t-1\\t1085\\t215\\t\",\"Translation\\t0L6ulMimgteS\\tPROCESS\\t-1\\t1056\\t409\\t\",\"Proliferation\\tMsHCffb6gNY_\\tPROCESS\\t-1\\t391\\t515\\t\",\"CTNNB1\\ti1tsajIagMAh\\tGENE\\t-1\\t391\\t430\\t\",\"PIK3R1\\tOJ-s2c_vgnZa\\tGENE\\t-1\\t1085\\t295\\t\",\"GSK3B\\twXwgUTNkgFnQ\\tGENE\\t-1\\t391\\t344\\t\",\"FBXW7\\t57SvZmLzgKXg\\tGENE\\t-1\\t557\\t344\\t\",\"Cell survival\\tNI-5QJa7gr4W\\tPROCESS\\t-1\\t935\\t409\\t\",\"ERBB2\\tY1idRwsY3N1k\\tGENE\\tZAPqdjSDgCgU\\t469\\t148\\t\",\"PIK3CA\\tsJDwUf9sgpI_\\tGENE\\t-1\\t915\\t256\\t\",\"FGFR2\\tM56YC0J03N1R\\tGENE\\tZAPqdjSDgCgU\\t313\\t148\\t\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPE\",\"pauS7C64g9TO\\tOJ-s2c_vgnZa\\tsJDwUf9sgpI_\\tINHIBITS\",\"9ZMCIs5Ygf4j\\twXwgUTNkgFnQ\\ti1tsajIagMAh\\tINHIBITS\",\"BXhEIXgdhBkV\\tsJDwUf9sgpI_\\t0L6ulMimgteS\\tACTIVATES\",\"DLrHfIVSgegJ\\t76Wg78V_gDdz\\twXwgUTNkgFnQ\\tINHIBITS\",\"y_ifcFbCgcdH\\tZAPqdjSDgCgU\\t76Wg78V_gDdz\\tACTIVATES\",\"F5LjanELggnD\\tBXxulVFjgHIs\\ti1tsajIagMAh\\tINHIBITS\",\"2-tF8Ncmgiab\\ti1tsajIagMAh\\tMsHCffb6gNY_\\tACTIVATES\",\"tJv0DWt8g-nF\\tsJDwUf9sgpI_\\tsoh0TxsPgq1P\\tACTIVATES\",\"rps45EGCg_aW\\tsJDwUf9sgpI_\\tNI-5QJa7gr4W\\tACTIVATES\",\"w8Id1r73g8Xz\\tQha2pMPigm3R\\tsJDwUf9sgpI_\\tINHIBITS\",\"daN2ajyqghSz\\t57SvZmLzgKXg\\ti1tsajIagMAh\\tINHIBITS\"],\"WNT\":[\"WNT\",\"\",\"Involved in both development and tissue homeostasis. The canonical Wnt pathway involves signal transduction initiated by Wnt ligand binding to Frizzled family receptors leading to the dysregulation of beta-catenin degradation and ultimately, the induction of transcription via TCF/LEF transcription factors by beta-catenin.\",\"\",\"--NODE_NAME\\tNODE_ID\\tNODE_TYPE\\tPARENT_ID\\tPOSX\\tPOSY--\",\"SFRP3\\tEiQGCkYbf2Ue\\tGENE\\taqCo94T-f2UY\\t214\\t113\",\"DKK\\tRpK5JOBLf2U5\\tFAMILY\\t-1\\t819\\t306\",\"TLE1\\toLjLH1mCf2T6\\tGENE\\tz1BS71lif2T2\\t702\\t625\",\"TLE4\\tUjSaC5Phf2T3\\tGENE\\tz1BS71lif2T2\\t858\\t685\",\"SFRP1\\tLgjBpjM-f2Ux\\tGENE\\taqCo94T-f2UY\\t63\\t147\",\"Groucho\\tz1BS71lif2T2\\tFAMILY\\t-1\\t780\\t655\",\"APC\\tKzWeNNlbf2UJ\\tGENE\\t-1\\t228\\t521\",\"TCF7L1\\tletl9duUf2WR\\tGENE\\tabIO9oDkf2WA\\t341\\t691\",\"WIF1\\t5iL99X9Jf2Tw\\tGENE\\t-1\\t452\\t61\",\"TLE2\\tR0vKN1sif2T9\\tGENE\\tz1BS71lif2T2\\t858\\t625\",\"DKK1\\tDRSXFgEQf2U9\\tGENE\\tRpK5JOBLf2U5\\t739\\t275\",\"TCF7L2\\tRPLZ4osLf2Wb\\tGENE\\tabIO9oDkf2WA\\t499\\t690\",\"AXIN1\\tKq4oChNGf2Vz\\tGENE\\tkoQkppv4f2Vq\\t599\\t443\",\"WNT Dual Receptor Complex\\tqRabkjW8f2VS\\tCOMPLEX\\t-1\\t458\\t304\",\"SFRP2\\thqXcbX1yf2U1\\tGENE\\taqCo94T-f2UY\\t63\\t203\",\"LRP5\\tDK7CkEYCf2Vi\\tGENE\\tqRabkjW8f2VS\\t536\\t276\",\"TCF7\\tpK9uMdhUf2WH\\tGENE\\tabIO9oDkf2WA\\t422\\t632\",\"TLE3\\tmA6zfzOUf2UA\\tGENE\\tz1BS71lif2T2\\t702\\t685\",\"Cell proliferation\\thFWwt8jrf2UV\\tPROCESS\\t-1\\t135\\t667\",\"TCF/LEF\\tabIO9oDkf2WA\\tCOMPLEX\\t-1\\t420\\t661\",\"AXIN\\tkoQkppv4f2Vq\\tFAMILY\\t-1\\t678\\t443\",\"RNF43\\telbyeD9tf2UD\\tGENE\\t-1\\t144\\t303\",\"CTNNB1\\t3GRyWPj8f2UM\\tGENE\\t-1\\t417\\t485\",\"DKK2\\tyYuxYP9Qf2VC\\tGENE\\tRpK5JOBLf2U5\\t899\\t275\",\"FZDs\\tjR_K-66Df2VX\\tGENE\\tqRabkjW8f2VS\\t381\\t301\",\"DKK4\\tlRy7Jj0Nf2VN\\tGENE\\tRpK5JOBLf2U5\\t899\\t337\",\"SFRP\\taqCo94T-f2UY\\tFAMILY\\t-1\\t138\\t169\",\"WNT ligands\\twCThVVjSf2Tz\\tGENE\\t-1\\t452\\t168\",\"LRP6\\tnr8aMEmUf2Vd\\tGENE\\tqRabkjW8f2VS\\t536\\t332\",\"GSK3B\\tmuxig_C-f2UG\\tGENE\\t-1\\t228\\t446\",\"SFRP5\\tB0f2GOAff2Us\\tGENE\\taqCo94T-f2UY\\t214\\t226\",\"AMER1\\tpAChF0thf2US\\tGENE\\t-1\\t599\\t519\",\"SFRP4\\tQMwh9gC-f2Ul\\tGENE\\taqCo94T-f2UY\\t214\\t170\",\"AXIN2\\tpD0TMIi_f2V5\\tGENE\\tkoQkppv4f2Vq\\t758\\t443\",\"DKK3\\twStErGAEf2VH\\tGENE\\tRpK5JOBLf2U5\\t739\\t337\",\"\",\"--EDGE_ID\\tSOURCE\\tTARGET\\tEDGE_TYPEINTERACTION_PUBMED_ID\",\"XWIzsv56f2Wm\\taqCo94T-f2UY\\twCThVVjSf2Tz\\tINHIBITS\\t\",\"Bps0rTlOf2W1\\tpAChF0thf2US\\t3GRyWPj8f2UM\\tINHIBITS\\t\",\"Bt39Pfi9f2W-\\tqRabkjW8f2VS\\tmuxig_C-f2UG\\tACTIVATES\\t\",\"x3LsoTaTf2Ww\\telbyeD9tf2UD\\tqRabkjW8f2VS\\tINHIBITS\\t\",\"PgNv7XZif2XA\\tmuxig_C-f2UG\\t3GRyWPj8f2UM\\tINHIBITS\\t\",\"-u2h2V6ef2XK\\tabIO9oDkf2WA\\thFWwt8jrf2UV\\tACTIVATES\\t\",\"an6n-VWDf2Wt\\twCThVVjSf2Tz\\tqRabkjW8f2VS\\tACTIVATES\\t\",\"h4-_HrCRf2W4\\tqRabkjW8f2VS\\tkoQkppv4f2Vq\\tACTIVATES\\t\",\"3NL_goRgf2W6\\tkoQkppv4f2Vq\\t3GRyWPj8f2UM\\tINHIBITS\\t\",\"-q76c9PDf2Wy\\tRpK5JOBLf2U5\\tqRabkjW8f2VS\\tINHIBITS\\t\",\"h9BN2IKjf2Wr\\t5iL99X9Jf2Tw\\twCThVVjSf2Tz\\tINHIBITS\\t\",\"rRLoK5NMf2XD\\tKzWeNNlbf2UJ\\t3GRyWPj8f2UM\\tINHIBITS\\t\",\"l7-kESH_f2XH\\tz1BS71lif2T2\\tabIO9oDkf2WA\\tINHIBITS\\t\"]}");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDdweCIgaGVpZ2h0PSI0N3B4IiB2aWV3Qm94PSIwIDAgNDcgNDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3IDQ3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzFfMTEwXyI+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0xNy41NjcsMTUuOTM4bC0yLjg1OS0yLjcwMmMwLjMzMy0wLjYwNSwwLjUzOS0xLjI5LDAuNTM5LTIuMDI5YzAtMi4zNDItMS44OTctNC4yMzktNC4yNC00LjIzOQoJCQkJYy0yLjM0MywwLTQuMjQzLDEuODk2LTQuMjQzLDQuMjM5YzAsMi4zNDMsMS45LDQuMjQxLDQuMjQzLDQuMjQxYzAuODI2LDAsMS41OS0wLjI0NiwyLjI0Mi0wLjY1NGwyLjg1NSwyLjY5OQoJCQkJQzE2LjUzNiwxNi45MjIsMTcuMDIzLDE2LjM5OSwxNy41NjcsMTUuOTM4eiIvPgoJCQk8cGF0aCBkPSJNMjkuNjYsMTUuNmwzLjc5OS02LjM5M2MwLjM3NCwwLjEwNywwLjc2MiwwLjE4NCwxLjE2OSwwLjE4NGMyLjM0NywwLDQuMjQ0LTEuODk4LDQuMjQ0LTQuMjQxCgkJCQljMC0yLjM0Mi0xLjg5Ny00LjIzOS00LjI0NC00LjIzOWMtMi4zNDMsMC00LjIzOSwxLjg5Ni00LjIzOSw0LjIzOWMwLDEuMTYzLDAuNDY5LDIuMjE0LDEuMjI3LDIuOTgxbC0zLjc4Nyw2LjM3NQoJCQkJQzI4LjQ4LDE0LjgwMSwyOS4wOTQsMTUuMTY5LDI5LjY2LDE1LjZ6Ii8+CgkJCTxwYXRoIGQ9Ik00Mi43NjIsMjAuOTUyYy0xLjgyNCwwLTMuMzY5LDEuMTU5LTMuOTY4LDIuNzc1bC01LjI3OC0wLjUyMWMwLDAuMDQsMC4wMDYsMC4wNzgsMC4wMDYsMC4xMTcKCQkJCWMwLDAuNjg4LTAuMDc2LDEuMzYtMC4yMTMsMi4wMDlsNS4yNzYsMC41MjFjMC4zMTksMi4wMjQsMi4wNjIsMy41NzYsNC4xNzcsMy41NzZjMi4zNDIsMCw0LjIzOC0xLjg5Niw0LjIzOC00LjIzOAoJCQkJQzQ3LDIyLjg1LDQ1LjEwNCwyMC45NTIsNDIuNzYyLDIwLjk1MnoiLz4KCQkJPHBhdGggZD0iTTI4LjE5NywzNy42MjRsLTEuMTgtNS4xNTZjLTAuNjY2LDAuMjMyLTEuMzU5LDAuMzk4LTIuMDgyLDAuNDgxbDEuMTgyLDUuMTU3Yy0xLjM1NSwwLjcwOS0yLjI5LDIuMTEtMi4yOSwzLjc0NgoJCQkJYzAsMi4zNDIsMS44OTYsNC4yMzcsNC4yNDMsNC4yMzdjMi4zNDIsMCw0LjIzOC0xLjg5Niw0LjIzOC00LjIzN0MzMi4zMTEsMzkuNTUzLDMwLjQ3OSwzNy42OTIsMjguMTk3LDM3LjYyNHoiLz4KCQkJPHBhdGggZD0iTTE0LjM1NywyNS4zN2wtNi41NywyLjIwMWMtMC43NTgtMS4xNTgtMi4wNjMtMS45MjYtMy41NDgtMS45MjZDMS44OTYsMjUuNjQ1LDAsMjcuNTQyLDAsMjkuODg0CgkJCQljMCwyLjM0NSwxLjg5Niw0LjI0Miw0LjIzOSw0LjI0MmMyLjM0MSwwLDQuMjQyLTEuODk3LDQuMjQyLTQuMjQyYzAtMC4wOTgtMC4wMjEtMC4xODgtMC4wMjktMC4yODRsNi41OTEtMi4yMDcKCQkJCUMxNC43NDYsMjYuNzUyLDE0LjUxLDI2LjA3NywxNC4zNTcsMjUuMzd6Ii8+CgkJCTxjaXJjbGUgY3g9IjIzLjgzIiBjeT0iMjMuMzIzIiByPSI3LjI3MSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("oncoprintjs");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTUwLjgwMXB4IiBoZWlnaHQ9IjU1MC44MDFweCIgdmlld0JveD0iMCAwIDU1MC44MDEgNTUwLjgwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUwLjgwMSA1NTAuODAxOyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTQ2Ljc0NywyNzYuNzA4YzAtMTMuOTk4LTkuNzExLTIyLjM1Mi0yNi44ODctMjIuMzUyYy02Ljk5LDAtMTEuNzI2LDAuNjc1LTE0LjIwNCwxLjM1NXY0NC45MjcKCQljMi45MzIsMC42NzYsNi41MzksMC44OTYsMTEuNTIsMC44OTZDMTM1LjQ0OSwzMDEuNTQ2LDE0Ni43NDcsMjkyLjI4LDE0Ni43NDcsMjc2LjcwOHoiLz4KCTxwYXRoIGQ9Ik00ODguNDI2LDE5Ny4wMTlINDc1LjJ2LTYzLjgxNmMwLTAuMzk4LTAuMDYzLTAuNzk5LTAuMTE2LTEuMjAyYy0wLjAyMS0yLjUzNC0wLjgyNy01LjAyMy0yLjU2Mi02Ljk5NUwzNjYuMzI1LDMuNjk0CgkJYy0wLjAzMi0wLjAzMS0wLjA2My0wLjA0Mi0wLjA4NS0wLjA3NmMtMC42MzMtMC43MDctMS4zNzEtMS4yOTUtMi4xNTEtMS44MDRjLTAuMjMxLTAuMTU1LTAuNDY0LTAuMjg1LTAuNzA2LTAuNDE5CgkJYy0wLjY3Ni0wLjM2OS0xLjM5My0wLjY3NS0yLjEzMS0wLjg5NmMtMC4yLTAuMDU2LTAuMzgtMC4xMzgtMC41OC0wLjE5QzM1OS44NywwLjExOSwzNTkuMDM3LDAsMzU4LjE5MywwSDk3LjIKCQljLTExLjkxOCwwLTIxLjYsOS42OTMtMjEuNiwyMS42MDF2MTc1LjQxM0g2Mi4zNzdjLTE3LjA0OSwwLTMwLjg3MywxMy44MTgtMzAuODczLDMwLjg3M3YxNjAuNTQ1CgkJYzAsMTcuMDQzLDEzLjgyNCwzMC44NywzMC44NzMsMzAuODdoMTMuMjI0VjUyOS4yYzAsMTEuOTA3LDkuNjgyLDIxLjYwMSwyMS42LDIxLjYwMWgzNTYuNGMxMS45MDcsMCwyMS42LTkuNjkzLDIxLjYtMjEuNjAxCgkJVjQxOS4zMDJoMTMuMjI2YzE3LjA0NCwwLDMwLjg3MS0xMy44MjcsMzAuODcxLTMwLjg3di0xNjAuNTRDNTE5LjI5NywyMTAuODM4LDUwNS40NywxOTcuMDE5LDQ4OC40MjYsMTk3LjAxOXogTTk3LjIsMjEuNjA1CgkJaDI1MC4xOTN2MTEwLjUxM2MwLDUuOTY3LDQuODQxLDEwLjgsMTAuOCwxMC44aDk1LjQwN3Y1NC4xMDhIOTcuMlYyMS42MDV6IE0yMzQuMzQ0LDMzNS44NnY0NS44MzFoLTMxLjYwMVYyMjkuNTI0aDQwLjE4NAoJCWwzMS42MTEsNTUuNzU5YzkuMDI1LDE2LjAzMSwxOC4wNjQsMzQuOTgzLDI0LjgyNSw1Mi4xNTRoMC42NzVjLTIuMjU3LTIwLjEwMy0yLjkzMy00MC42NDMtMi45MzMtNjMuNDR2LTQ0LjQ3M2gzMS42MTR2MTUyLjE2NwoJCWgtMzYuMTE3bC0zMi41MTYtNTguNzAzYy05LjA0OS0xNi4yNTMtMTguOTcxLTM1Ljg5Mi0yNi40MzgtNTMuNzI3bC0wLjY2NSwwLjIyMkMyMzMuOTA2LDI4OS41OCwyMzQuMzQ0LDMxMS4wMjcsMjM0LjM0NCwzMzUuODZ6CgkJIE03MS41NTYsMzgxLjY5MVYyMzEuNTZjMTAuNjEzLTEuODA0LDI1LjUxNi0zLjE1OSw0Ni41MDYtMy4xNTljMjEuMjE1LDAsMzYuMzUzLDQuMDYxLDQ2LjUwOSwxMi4xOTIKCQljOS42OTgsNy42NzMsMTYuMjU1LDIwLjMxMywxNi4yNTUsMzUuMjE5YzAsMTQuODk3LTQuOTU5LDI3LjU0OS0xMy45OTksMzYuMTIzYy0xMS43MzgsMTEuMDYzLTI5LjEyMywxNi4wMzEtNDkuNDQxLDE2LjAzMQoJCWMtNC41MjIsMC04LjU5My0wLjIzMS0xMS43MzYtMC42NzV2NTQuNDExSDcxLjU1NlYzODEuNjkxeiBNNDUzLjYwMSw1MjMuMzUzSDk3LjJWNDE5LjMwMmgzNTYuNFY1MjMuMzUzeiBNNDg1LjY1MiwzNzQuNjg4CgkJYy0xMC42MSwzLjYwNy0zMC43MTMsOC41ODUtNTAuODA1LDguNTg1Yy0yNy43NTksMC00Ny44NzItNy4wMDMtNjEuODU3LTIwLjU0NWMtMTMuOTk1LTEzLjEtMjEuNjg0LTMyLjk3LTIxLjQ1Mi01NS4zMTgKCQljMC4yMjItNTAuNTY5LDM3LjAzLTc5LjQ2Myw4Ni45MTctNzkuNDYzYzE5LjY0NCwwLDM0Ljc4MywzLjgyOSw0Mi4yMTksNy40NDZsLTcuMjE0LDI3LjU0M2MtOC4zNjktMy42MTctMTguNzUyLTYuNTUtMzUuNDU4LTYuNTUKCQljLTI4LjY1NiwwLTUwLjM0MSwxNi4yNTYtNTAuMzQxLDQ5LjIyYzAsMzEuMzgyLDE5LjY0OSw0OS44OTIsNDcuODcyLDQ5Ljg5MmM3Ljg5NSwwLDE0LjIxOC0wLjkwMSwxNi45MzQtMi4yNTd2LTMxLjgzNWgtMjMuNDkzCgkJdi0yNi44NjloNTYuNjc5VjM3NC42ODh6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTUwLjgwMXB4IiBoZWlnaHQ9IjU1MC44MDFweCIgdmlld0JveD0iMCAwIDU1MC44MDEgNTUwLjgwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUwLjgwMSA1NTAuODAxOyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDg4LjQyNiwxOTcuMDE5SDQ3NS4ydi02My44MTZjMC0wLjM5OC0wLjA2My0wLjc5OS0wLjExNi0xLjIwMmMtMC4wMjEtMi41MzQtMC44MjctNS4wMjMtMi41NjItNi45OTVMMzY2LjMyNSwzLjY5NAoJCWMtMC4wMzItMC4wMzEtMC4wNjMtMC4wNDItMC4wODUtMC4wNzZjLTAuNjMzLTAuNzA3LTEuMzcxLTEuMjk1LTIuMTUxLTEuODA0Yy0wLjIzMS0wLjE1NS0wLjQ2NC0wLjI4NS0wLjcwNi0wLjQxOQoJCWMtMC42NzYtMC4zNjktMS4zOTMtMC42NzUtMi4xMzEtMC44OTZjLTAuMi0wLjA1Ni0wLjM4LTAuMTM4LTAuNTgtMC4xOUMzNTkuODcsMC4xMTksMzU5LjAzNywwLDM1OC4xOTMsMEg5Ny4yCgkJYy0xMS45MTgsMC0yMS42LDkuNjkzLTIxLjYsMjEuNjAxdjE3NS40MTNINjIuMzc3Yy0xNy4wNDksMC0zMC44NzMsMTMuODE4LTMwLjg3MywzMC44NzN2MTYwLjU0NQoJCWMwLDE3LjA0MywxMy44MjQsMzAuODcsMzAuODczLDMwLjg3aDEzLjIyNFY1MjkuMmMwLDExLjkwNyw5LjY4MiwyMS42MDEsMjEuNiwyMS42MDFoMzU2LjRjMTEuOTA3LDAsMjEuNi05LjY5MywyMS42LTIxLjYwMQoJCVY0MTkuMzAyaDEzLjIyNmMxNy4wNDQsMCwzMC44NzEtMTMuODI3LDMwLjg3MS0zMC44N3YtMTYwLjU0QzUxOS4yOTcsMjEwLjgzOCw1MDUuNDcsMTk3LjAxOSw0ODguNDI2LDE5Ny4wMTl6IE05Ny4yLDIxLjYwNQoJCWgyNTAuMTkzdjExMC41MTNjMCw1Ljk2Nyw0Ljg0MSwxMC44LDEwLjgsMTAuOGg5NS40MDd2NTQuMTA4SDk3LjJWMjEuNjA1eiBNMzM4Ljg3MSwyMjUuNjcyTDI4NC41NDUsMzg2Ljk2aC00Mi41OTEKCQlsLTUxLjY5LTE2MS4yODhoMzkuOTY3bDE5LjYxNyw2OC4xOTZjNS41MDgsMTkuMTQzLDEwLjUzMSwzNy41NjcsMTQuMzYsNTcuNjdoMC43MTdjNC4wNjEtMTkuMzg1LDkuMDg5LTM4LjUyNywxNC41OTItNTYuOTUzCgkJbDIwLjU4NS02OC45MThoMzguNzdWMjI1LjY3MnogTTY4LjQ1OCwzNzkuNTRsNy40MTUtMzAuMTUzYzkuODExLDUuMDIxLDI0Ljg4OCwxMC4wNTEsNDAuNDM5LDEwLjA1MQoJCWMxNi43NTEsMCwyNS42MDctNi45MzUsMjUuNjA3LTE3LjQ2NWMwLTEwLjA1Mi03LjY2Mi0xNS43OTUtMjcuMDUtMjIuNzM0Yy0yNi44LTkuMzI4LTQ0LjI2My0yNC4xNjgtNDQuMjYzLTQ3LjYxMQoJCWMwLTI3LjUyNCwyMi45NzEtNDguNTc5LDYxLjAxNC00OC41NzljMTguMTg4LDAsMzEuNTkxLDMuODIzLDQxLjE1OSw4LjEzMWwtOC4xMjYsMjkuNDM3Yy02LjQ2NS0zLjExNi0xNy45NDUtNy42NTctMzMuNzQ1LTcuNjU3CgkJYy0xNS43OTEsMC0yMy40NTQsNy4xODMtMjMuNDU0LDE1LjU1MmMwLDEwLjI5Niw5LjA4OSwxNC44NDIsMjkuOTE3LDIyLjczMWMyOC40NjgsMTAuNTM2LDQxLjg3MSwyNS4zNjUsNDEuODcxLDQ4LjA5NAoJCWMwLDI3LjA0Mi0yMC44MTIsNTAuMDEzLTY1LjA5LDUwLjAxM0M5NS43MzEsMzg5LjM0OSw3Ny41MzgsMzg0LjU3MSw2OC40NTgsMzc5LjU0eiBNNDUzLjYwMSw1MjMuMzUzSDk3LjJWNDE5LjMwMmgzNTYuNFY1MjMuMzUzegoJCSBNNDg4LjkxMSwzNzkuNTRjLTExLjI0MywzLjgyMy0zMi41MzcsOS4xMDMtNTMuODMxLDkuMTAzYy0yOS40MzcsMC01MC43My03LjQyNi02NS41Ny0yMS43NzkKCQljLTE0LjgzOS0xMy44NzUtMjIuOTcxLTM0Ljk0Mi0yMi43MzgtNTguNjI1YzAuMjUzLTUzLjYwNCwzOS4yNTUtODQuMjM1LDkyLjEzNy04NC4yMzVjMjAuODEsMCwzNi44NTIsNC4wNzMsNDQuNzQsNy44OTYKCQlsLTcuNjU3LDI5LjIwMmMtOC44NTktMy44MjktMTkuODQ5LTYuOTUtMzcuNTY3LTYuOTVjLTMwLjM5NiwwLTUzLjM1NywxNy4yMzMtNTMuMzU3LDUyLjE3M2MwLDMzLjI2NSwyMC44MSw1Mi44ODIsNTAuNzMsNTIuODgyCgkJYzguMzc1LDAsMTUuMDcyLTAuOTYsMTcuOTQtMi4zOTV2LTMzLjc0NWgtMjQuODc1di0yOC40NzFoNjAuMDQ5VjM3OS41NEw0ODguOTExLDM3OS41NHoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZWRpdCI+PHBhdGggZD0iTTExIDRINGEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMnYtNyI+PC9wYXRoPjxwYXRoIGQ9Ik0xOC41IDIuNWEyLjEyMSAyLjEyMSAwIDAgMSAzIDNMMTIgMTVsLTQgMSAxLTQgOS41LTkuNXoiPjwvcGF0aD48L3N2Zz4="

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("tippy.js");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjMuNjI1IDIzLjYyNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjMuNjI1IDIzLjYyNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAzMDEwNDsiIGQ9Ik0xMS44MTIsMEM1LjI4OSwwLDAsNS4yODksMCwxMS44MTJzNS4yODksMTEuODEzLDExLjgxMiwxMS44MTNzMTEuODEzLTUuMjksMTEuODEzLTExLjgxMw0KCQlTMTguMzM1LDAsMTEuODEyLDB6IE0xNC4yNzEsMTguMzA3Yy0wLjYwOCwwLjI0LTEuMDkyLDAuNDIyLTEuNDU1LDAuNTQ4Yy0wLjM2MiwwLjEyNi0wLjc4MywwLjE4OS0xLjI2MiwwLjE4OQ0KCQljLTAuNzM2LDAtMS4zMDktMC4xOC0xLjcxNy0wLjUzOXMtMC42MTEtMC44MTQtMC42MTEtMS4zNjdjMC0wLjIxNSwwLjAxNS0wLjQzNSwwLjA0NS0wLjY1OWMwLjAzMS0wLjIyNCwwLjA4LTAuNDc2LDAuMTQ3LTAuNzU5DQoJCWwwLjc2MS0yLjY4OGMwLjA2Ny0wLjI1OCwwLjEyNS0wLjUwMywwLjE3MS0wLjczMWMwLjA0Ni0wLjIzLDAuMDY4LTAuNDQxLDAuMDY4LTAuNjMzYzAtMC4zNDItMC4wNzEtMC41ODItMC4yMTItMC43MTcNCgkJYy0wLjE0My0wLjEzNS0wLjQxMi0wLjIwMS0wLjgxMy0wLjIwMWMtMC4xOTYsMC0wLjM5OCwwLjAyOS0wLjYwNSwwLjA5Yy0wLjIwNSwwLjA2My0wLjM4MywwLjEyLTAuNTI5LDAuMTc2bDAuMjAxLTAuODI4DQoJCWMwLjQ5OC0wLjIwMywwLjk3NS0wLjM3NywxLjQzLTAuNTIxYzAuNDU1LTAuMTQ2LDAuODg1LTAuMjE4LDEuMjktMC4yMThjMC43MzEsMCwxLjI5NSwwLjE3OCwxLjY5MiwwLjUzDQoJCWMwLjM5NSwwLjM1MywwLjU5NCwwLjgxMiwwLjU5NCwxLjM3NmMwLDAuMTE3LTAuMDE0LDAuMzIzLTAuMDQxLDAuNjE3Yy0wLjAyNywwLjI5NS0wLjA3OCwwLjU2NC0wLjE1MiwwLjgxMWwtMC43NTcsMi42OA0KCQljLTAuMDYyLDAuMjE1LTAuMTE3LDAuNDYxLTAuMTY3LDAuNzM2Yy0wLjA0OSwwLjI3NS0wLjA3MywwLjQ4NS0wLjA3MywwLjYyNmMwLDAuMzU2LDAuMDc5LDAuNTk5LDAuMjM5LDAuNzI4DQoJCWMwLjE1OCwwLjEyOSwwLjQzNSwwLjE5NCwwLjgyNywwLjE5NGMwLjE4NSwwLDAuMzkyLTAuMDMzLDAuNjI2LTAuMDk3YzAuMjMyLTAuMDY0LDAuNC0wLjEyMSwwLjUwNi0wLjE3TDE0LjI3MSwxOC4zMDd6DQoJCSBNMTQuMTM3LDcuNDI5Yy0wLjM1MywwLjMyOC0wLjc3OCwwLjQ5Mi0xLjI3NSwwLjQ5MmMtMC40OTYsMC0wLjkyNC0wLjE2NC0xLjI4LTAuNDkyYy0wLjM1NC0wLjMyOC0wLjUzMy0wLjcyNy0wLjUzMy0xLjE5Mw0KCQljMC0wLjQ2NSwwLjE4LTAuODY1LDAuNTMzLTEuMTk2YzAuMzU2LTAuMzMyLDAuNzg0LTAuNDk3LDEuMjgtMC40OTdjMC40OTcsMCwwLjkyMywwLjE2NSwxLjI3NSwwLjQ5Nw0KCQljMC4zNTMsMC4zMzEsMC41MywwLjczMSwwLjUzLDEuMTk2QzE0LjY2Nyw2LjcwMywxNC40OSw3LjEwMSwxNC4xMzcsNy40Mjl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgdmlld0JveD0iMCAwIDU3IDU3IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NyA1NzsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImFkZC1zZWxlY3RlZC1uZXcuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgKDVkYTY4OWMzMTMsIDIwMTktMDEtMTQpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhNDciPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnM0NSI+CgkKCQoJCgkKPC9kZWZzPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTA5NyIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzE5IgogICBpZD0ibmFtZWR2aWV3NDMiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iNC4xNDAzNTA5IgogICBpbmtzY2FwZTpjeD0iLTEwLjc0Nzg4MSIKICAgaW5rc2NhcGU6Y3k9IjI4LjUiCiAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iQ2FwYV8xIiAvPgo8cGF0aAogICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICBpZD0icGF0aDIiCiAgIGQ9Ik0gMjguNjYsNiBIIDkuMzQgQyA3LjQ5OCw2IDYsNy40OTggNiw5LjM0IFYgMjguNjYgQyA2LDMwLjUwMiA3LjQ5OCwzMiA5LjM0LDMyIEggMjguNjYgQyAzMC41MDIsMzIgMzIsMzAuNTAyIDMyLDI4LjY2IFYgOS4zNCBDIDMyLDcuNDk4IDMwLjUwMiw2IDI4LjY2LDYgWiIgLz48cGF0aAogICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICBpZD0icGF0aDgiCiAgIGQ9Ik0gNTEsMzcgSCA0MSBWIDI3IGMgMCwtMS4xMDQgLTAuODk2LC0yIC0yLC0yIC0xLjEwNCwwIC0yLDAuODk2IC0yLDIgViAzNyBIIDI3IGMgLTEuMTA0LDAgLTIsMC44OTYgLTIsMiAwLDEuMTA0IDAuODk2LDIgMiwyIGggMTAgdiAxMCBjIDAsMS4xMDQgMC44OTYsMiAyLDIgMS4xMDQsMCAyLC0wLjg5NiAyLC0yIFYgNDEgaCAxMCBjIDEuMTA0LDAgMiwtMC44OTYgMiwtMiAwLC0xLjEwNCAtMC44OTYsLTIgLTIsLTIgeiIgLz4KPGcKICAgaWQ9ImcxMiI+CjwvZz4KPGcKICAgaWQ9ImcxNCI+CjwvZz4KPGcKICAgaWQ9ImcxNiI+CjwvZz4KPGcKICAgaWQ9ImcxOCI+CjwvZz4KPGcKICAgaWQ9ImcyMCI+CjwvZz4KPGcKICAgaWQ9ImcyMiI+CjwvZz4KPGcKICAgaWQ9ImcyNCI+CjwvZz4KPGcKICAgaWQ9ImcyNiI+CjwvZz4KPGcKICAgaWQ9ImcyOCI+CjwvZz4KPGcKICAgaWQ9ImczMCI+CjwvZz4KPGcKICAgaWQ9ImczMiI+CjwvZz4KPGcKICAgaWQ9ImczNCI+CjwvZz4KPGcKICAgaWQ9ImczNiI+CjwvZz4KPGcKICAgaWQ9ImczOCI+CjwvZz4KPGcKICAgaWQ9Imc0MCI+CjwvZz4KPC9zdmc+"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTcgNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU3IDU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMjIuNjYsMEgzLjM0QzEuNDk4LDAsMCwxLjQ5OCwwLDMuMzR2MTkuMzJDMCwyNC41MDIsMS40OTgsMjYsMy4zNCwyNmgxOS4zMmMxLjg0MiwwLDMuMzQtMS40OTgsMy4zNC0zLjM0VjMuMzQNCgkJQzI2LDEuNDk4LDI0LjUwMiwwLDIyLjY2LDB6Ii8+DQoJPHBhdGggZD0iTTMzLjM0LDI2aDE5LjMyYzEuODQyLDAsMy4zNC0xLjQ5OCwzLjM0LTMuMzRWMy4zNEM1NiwxLjQ5OCw1NC41MDIsMCw1Mi42NiwwSDMzLjM0QzMxLjQ5OCwwLDMwLDEuNDk4LDMwLDMuMzR2MTkuMzINCgkJQzMwLDI0LjUwMiwzMS40OTgsMjYsMzMuMzQsMjZ6Ii8+DQoJPHBhdGggZD0iTTIyLjY2LDMwSDMuMzRDMS40OTgsMzAsMCwzMS40OTgsMCwzMy4zNHYxOS4zMkMwLDU0LjUwMiwxLjQ5OCw1NiwzLjM0LDU2aDE5LjMyYzEuODQyLDAsMy4zNC0xLjQ5OCwzLjM0LTMuMzRWMzMuMzQNCgkJQzI2LDMxLjQ5OCwyNC41MDIsMzAsMjIuNjYsMzB6Ii8+DQoJPHBhdGggZD0iTTU1LDQxSDQ1VjMxYzAtMS4xMDQtMC44OTYtMi0yLTJzLTIsMC44OTYtMiwydjEwSDMxYy0xLjEwNCwwLTIsMC44OTYtMiwyczAuODk2LDIsMiwyaDEwdjEwYzAsMS4xMDQsMC44OTYsMiwyLDINCgkJczItMC44OTYsMi0yVjQ1aDEwYzEuMTA0LDAsMi0wLjg5NiwyLTJTNTYuMTA0LDQxLDU1LDQxeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("tippy.js/dist/tippy.css");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzUuNDA2cHgiIGhlaWdodD0iNzUuNDA2cHgiIHZpZXdCb3g9IjAgMCA3NS40MDYgNzUuNDA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NS40MDYgNzUuNDA2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzUuNDM2LDBINy43NTV2NjMuOTUyaDI3LjY4MkwzNS40MzYsMEwzNS40MzYsMHogTTMyLjU3Myw2MS4wODlIMTAuNjE4VjIuODYzaDIxLjk1NVY2MS4wODl6IE03MC4yNzQsMjYuNDg4aC0yNy42OAoJCXYzNy40NjRoMjcuNjgyVjI2LjQ4OEg3MC4yNzR6IE02Ny40MTIsNjEuMDg5SDQ1LjQ1N1YyOS4zNTFoMjEuOTU1VjYxLjA4OXogTTc0LjU3MSw3MC4zOTV2NS4wMTJIMC44MzV2LTUuMDEySDc0LjU3MXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iOTAuOTU2cHgiIGhlaWdodD0iOTAuOTU3cHgiIHZpZXdCb3g9IjAgMCA5MC45NTYgOTAuOTU3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MC45NTYgOTAuOTU3OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDEuNjYxLDEzLjUwMUgxMy45Nzl2NjMuOTUzaDI3LjY4MlYxMy41MDF6IE0zOC43OTcsNzQuNTkxSDE2Ljg0MlYxNi4zNjZoMjEuOTU1Vjc0LjU5MXogTTc2LjQ5OSwyNi43NDdINDguODE4djM3LjQ2NQoJCUg3Ni41TDc2LjQ5OSwyNi43NDdMNzYuNDk5LDI2Ljc0N3ogTTczLjYzNyw2MS4zNDdINTEuNjgyVjI5LjYwOWgyMS45NTVWNjEuMzQ3eiBNMTAuOTc4LDQyLjk3M3Y1LjAxMUgwdi01LjAxMUgxMC45Nzh6CgkJIE05MC45NTYsNDIuOTczdjUuMDExSDc5Ljk3OXYtNS4wMTFIOTAuOTU2eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzUuNDA2cHgiIGhlaWdodD0iNzUuNDA2cHgiIHZpZXdCb3g9IjAgMCA3NS40MDYgNzUuNDA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NS40MDYgNzUuNDA2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzUuNDM2LDExLjQ1NEg3Ljc1NXY2My45NTJoMjcuNjgyTDM1LjQzNiwxMS40NTRMMzUuNDM2LDExLjQ1NHogTTMyLjU3Myw3Mi41NDNIMTAuNjE4VjE0LjMxN2gyMS45NTVWNzIuNTQzegoJCSBNNzAuMjc0LDExLjQ1NGgtMjcuNjh2MzcuNDY0aDI3LjY4MlYxMS40NTRINzAuMjc0eiBNNjcuNDEyLDQ2LjA1NUg0NS40NTdWMTQuMzE3aDIxLjk1NVY0Ni4wNTV6IE0wLjgzNSw1LjAxMVYwaDczLjczNnY1LjAxMQoJCUgwLjgzNXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iOTAuOTU2cHgiIGhlaWdodD0iOTAuOTU2cHgiIHZpZXdCb3g9IjAgMCA5MC45NTYgOTAuOTU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MC45NTYgOTAuOTU2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNzcuNDU0LDQxLjY2MVYxMy45NzlIMTMuNTAydjI3LjY4Mkg3Ny40NTR6IE0xNi4zNjUsMzguNzk3VjE2Ljg0Mmg1OC4yMjZ2MjEuOTU1SDE2LjM2NXogTTY0LjIxLDc2LjQ5OVY0OC44MThIMjYuNzQ2CgkJVjc2LjVMNjQuMjEsNzYuNDk5TDY0LjIxLDc2LjQ5OXogTTI5LjYwOSw3My42MzdWNTEuNjgyaDMxLjczN3YyMS45NTVIMjkuNjA5eiBNNDcuOTgyLDEwLjk3OGgtNS4wMVYwaDUuMDFWMTAuOTc4egoJCSBNNDcuOTgyLDkwLjk1NmgtNS4wMVY3OS45NzloNS4wMVY5MC45NTZ6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzUuNDA2cHgiIGhlaWdodD0iNzUuNDA2cHgiIHZpZXdCb3g9IjAgMCA3NS40MDYgNzUuNDA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NS40MDYgNzUuNDA2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNzUuNDA2LDM1LjQzNlY3Ljc1NUgxMS40NTR2MjcuNjgyTDc1LjQwNiwzNS40MzZMNzUuNDA2LDM1LjQzNnogTTE0LjMxNywzMi41NzNWMTAuNjE4aDU4LjIyNnYyMS45NTVIMTQuMzE3egoJCSBNNDguOTE4LDcwLjI3NVY0Mi41OTVIMTEuNDU0djI3LjY4Mkw0OC45MTgsNzAuMjc1TDQ4LjkxOCw3MC4yNzV6IE0xNC4zMTcsNjcuNDEyVjQ1LjQ1N2gzMS43Mzh2MjEuOTU1SDE0LjMxN3ogTTUuMDExLDc0LjU3MUgwCgkJVjAuODM1aDUuMDExVjc0LjU3MXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzUuNDA2cHgiIGhlaWdodD0iNzUuNDA2cHgiIHZpZXdCb3g9IjAgMCA3NS40MDYgNzUuNDA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NS40MDYgNzUuNDA2OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNjMuOTUyLDM1LjQzNlY3Ljc1NUgwdjI3LjY4Mkw2My45NTIsMzUuNDM2TDYzLjk1MiwzNS40MzZ6IE0yLjg2MywzMi41NzNWMTAuNjE4SDYxLjA5djIxLjk1NUgyLjg2M3ogTTYzLjk1Miw3MC4yNzUKCQlWNDIuNTk1SDI2LjQ4OHYyNy42ODJMNjMuOTUyLDcwLjI3NUw2My45NTIsNzAuMjc1eiBNMjkuMzUxLDY3LjQxMlY0NS40NTdoMzEuNzM3djIxLjk1NUgyOS4zNTF6IE03MC4zOTUsMC44MzVoNS4wMTJ2NzMuNzM2CgkJaC01LjAxMlYwLjgzNXoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgdmlld0JveD0iMCAwIDYxMiA2MTIiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZGVsZXRlLXNpbXBsZS5zdmciPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTQzIj48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNDEiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaWQ9Im5hbWVkdmlldzM5IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIxLjA5MDcwMDciCiAgICAgaW5rc2NhcGU6Y3g9IjI5NS4wMzQwOCIKICAgICBpbmtzY2FwZTpjeT0iMzMwLjg1NDQ4IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJDYXBhXzEiIC8+PGcKICAgICBpZD0iZzUiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTc4ODEzNSwwLDAsMC45OTc4ODEzNSwxLjczMDQwMTIsMC45MjM3Mjg0NykiPjxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg3IgogICAgICAgZD0iTSA1ODcuODI2LDE4Ni45NjYgQyA1NzEuNzEsMTQ5LjYzNCA1NDkuODgyLDExNy4xOTggNTIyLjM0Miw4OS42NTggNDk0LjgwMiw2Mi4xMTggNDYyLjM2Niw0MC4yOSA0MjUuMDM0LDI0LjE3NCAzODcuNzAyLDguMDU4IDM0OC4wMjQsMCAzMDYsMCAyNzcuODQ4LDAgMjUwLjcxNiwzLjY3MiAyMjQuNjA0LDExLjAxNiAxOTguNDkyLDE4LjM2IDE3NC4xMTQsMjguNjYyIDE1MS40Nyw0MS45MjIgMTI4LjgyNiw1NS4xODIgMTA4LjIyMiw3MS4wOTQgODkuNjU4LDg5LjY1OCA3MS4wOTQsMTA4LjIyMiA1NS4xODIsMTI4LjgyNiA0MS45MjIsMTUxLjQ3IDI4LjY2MiwxNzQuMTE2IDE4LjM2LDE5OC40OTIgMTEuMDE2LDIyNC42MDQgMy42NzIsMjUwLjcxNiAwLDI3Ny44NDggMCwzMDYgYyAwLDI4LjE1MiAzLjY3Miw1NS4yODQgMTEuMDE2LDgxLjM5NiA3LjM0NCwyNi4xMSAxNy42NDYsNTAuNDg3IDMwLjkwNiw3My4xMzQgMTMuMjYsMjIuNjQ0IDI5LjE3Miw0My4yNDkgNDcuNzM2LDYxLjgxMiAxOC41NjQsMTguNTY0IDM5LjE2OCwzNC40NzggNjEuODEyLDQ3LjczNiAyMi42NDQsMTMuMjYgNDcuMDIyLDIzLjU2MSA3My4xMzQsMzAuOTA2IEMgMjUwLjcxNiw2MDguMzI4IDI3Ny44NDgsNjEyIDMwNiw2MTIgYyAyOC4xNTIsMCA1NS4yODQsLTMuNjcyIDgxLjM5NiwtMTEuMDE2IDI2LjExMSwtNy4zNDYgNTAuNDg4LC0xNy42NDYgNzMuMTM1LC0zMC45MDYgMjIuNjQ0LC0xMy4yNTkgNDMuMjQ5LC0yOS4xNzIgNjEuODEyLC00Ny43MzYgMTguNTY0LC0xOC41NjMgMzQuNDc4LC0zOS4xNjggNDcuNzM2LC02MS44MTIgMTMuMjYsLTIyLjY0NiAyMy41NjEsLTQ3LjAyMyAzMC45MDYsLTczLjEzNSBDIDYwOC4zMjgsMzYxLjI4NCA2MTIsMzM0LjE1MiA2MTIsMzA2IDYxMiwyNjMuOTc2IDYwMy45NDIsMjI0LjI5OCA1ODcuODI2LDE4Ni45NjYgWiBNIDQ2OC4xOCwzOTEuNjggYyAyLjA0LDIuMDQgMy4wNjMsNC4yODQgMy4wNjMsNi43MzIgMCwyLjQ0OCAtMS4wMjEsNC40ODggLTMuMDYzLDYuMTIgbCAtNTkuOTc2LDYwLjU4OCBjIC0xLjYzMSwxLjYzMiAtMy44NzYsMi40NDggLTYuNzMyLDIuNDQ4IC0yLjg1NCwwIC00Ljg5NSwtMC44MTYgLTYuMTIsLTIuNDQ4IEwgMzA5LjA2LDM3OC44MjggMjIzLjM4LDQ2NS4xMiBjIC0yLjQ0OCwxLjYzMiAtNC42OTIsMi40NDggLTYuNzMyLDIuNDQ4IC0xLjYzMiwwIC0zLjY3MiwtMC44MTYgLTYuMTIsLTIuNDQ4IGwgLTU5Ljk3NiwtNjAuNTg4IGMgLTIuMDQsLTEuMjI2IC0zLjA2LC0zLjI2NyAtMy4wNiwtNi4xMiAwLC0yLjQ0OCAxLjAyLC00LjY5MiAzLjA2LC02LjczMiBsIDg1LjY4LC04NS42OCAtODUuNjgsLTg1LjY4IGMgLTIuMDQsLTIuMDQgLTMuMDYsLTQuMjg0IC0zLjA2LC02LjczMiAwLC0yLjg1NiAxLjAyLC00Ljg5NiAzLjA2LC02LjEyIGwgNTkuOTc2LC02MC41ODggYyAxLjYzMiwtMS42MzIgMy42NzIsLTIuNDQ4IDYuMTIsLTIuNDQ4IDIuNDQ4LDAgNC42OTIsMC44MTYgNi43MzIsMi40NDggbCA4NS42OCw4Ni4yOTIgODYuMjkyLC04Ni4yOTIgYyAxLjYzNSwtMS42MzIgMy42NzUsLTIuNDQ4IDYuMTIsLTIuNDQ4IDIuNDQ4LDAgNC42OTIsMC44MTYgNi43MzIsMi40NDggbCA1OS45NzYsNjAuNTg4IGMgMi4wNCwxLjYzMiAzLjA2MywzLjY3MiAzLjA2Myw2LjEyIDAsMi40NDggLTEuMDIxLDQuNjkyIC0zLjA2Myw2LjczMiBMIDM4Mi41LDMwNiBsIDg1LjY4LDg1LjY4IHoiCiAgICAgICBzdHlsZT0iZmlsbDojMDEwMDAyIiAvPjwvZz48ZwogICAgIGlkPSJnOSIgLz48ZwogICAgIGlkPSJnMTEiIC8+PGcKICAgICBpZD0iZzEzIiAvPjxnCiAgICAgaWQ9ImcxNSIgLz48ZwogICAgIGlkPSJnMTciIC8+PGcKICAgICBpZD0iZzE5IiAvPjxnCiAgICAgaWQ9ImcyMSIgLz48ZwogICAgIGlkPSJnMjMiIC8+PGcKICAgICBpZD0iZzI1IiAvPjxnCiAgICAgaWQ9ImcyNyIgLz48ZwogICAgIGlkPSJnMjkiIC8+PGcKICAgICBpZD0iZzMxIiAvPjxnCiAgICAgaWQ9ImczMyIgLz48ZwogICAgIGlkPSJnMzUiIC8+PGcKICAgICBpZD0iZzM3IiAvPjwvc3ZnPg=="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNTQxLjkxMXB4IiBoZWlnaHQ9IjU0MS45MTFweCIgdmlld0JveD0iMCAwIDU0MS45MTEgNTQxLjkxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTQxLjkxMSA1NDEuOTExOyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDY3LjgyNiw4Ljc4MXY0Ny40NTFINzQuMDkxVjguNzgxYzAtNC42MDgtMy43MjktOC4zMzQtOC4zMzQtOC4zMzRjLTQuNjA3LDAtOC4zMzQsMy43MjctOC4zMzQsOC4zMzR2NDkuMDY4SDguMzM0CgkJQzMuNzMsNTcuODQ5LDAsNjEuNTg0LDAsNjYuMTgzYzAsNC42MDcsMy43Myw4LjMzNCw4LjMzNCw4LjMzNGg0OS4wODN2MzkyLjg2OEg4LjMzNGMtNC42MDQsMC04LjMzNCwzLjcyOS04LjMzNCw4LjMzNAoJCWMwLDQuNjEsMy43Myw4LjMzNCw4LjMzNCw4LjMzNGg0OS4wODN2NDkuMDc3YzAsNC42MDQsMy43MjcsOC4zMzQsOC4zMzQsOC4zMzRjNC42MDQsMCw4LjMzNC0zLjcyOSw4LjMzNC04LjMzNHYtNDkuMDc3aDM5My43NAoJCXY0OS4wNzdjMCw0LjYwNCwzLjcyOSw4LjMzNCw4LjMzNCw4LjMzNGM0LjYxLDAsOC4zMzQtMy43MjksOC4zMzQtOC4zMzR2LTQ5LjA3N2g0OS4wODNjNC42MDQsMCw4LjMzNC0zLjcyNCw4LjMzNC04LjMzNAoJCWMwLTQuNjA0LTMuNzI5LTguMzM0LTguMzM0LTguMzM0aC00OC4zMzJWNzQuNTE3aDQ4LjMzMmM0LjYwNCwwLDguMzM0LTMuNzI3LDguMzM0LTguMzM0YzAtNC41OTktMy43MjktOC4zMzQtOC4zMzQtOC4zMzRoLTQ5LjA4MwoJCVY4Ljc4MWMwLTQuNjA4LTMuNzI0LTguMzM0LTguMzM0LTguMzM0QzQ3MS41NTUsMC40NDYsNDY3LjgyNiw0LjE3Myw0NjcuODI2LDguNzgxeiBNNDY4LjIwNCwzNDAuNTI4djEyNi44NTdIMzQwLjQxM1YzNDAuNTI4CgkJSDQ2OC4yMDR6IE0zMzQuODU3LDM0MC41Mjh2MTI2Ljg1N0gyMDcuNDM2VjM0MC41MjhIMzM0Ljg1N3ogTTIwMS41MDQsMzQwLjUyOHYxMjYuODU3SDc0LjA5MVYzNDAuNTI4SDIwMS41MDR6IE00NjguMjA0LDIwNy4xNzIKCQl2MTI3LjhIMzQwLjQxM3YtMTI3LjhINDY4LjIwNHogTTMzNC44NTcsMjA3LjE3MnYxMjcuOEgyMDcuNDM2di0xMjcuOEgzMzQuODU3eiBNMjAxLjUwNCwyMDcuMTcydjEyNy44SDc0LjA5MXYtMTI3LjhIMjAxLjUwNHoKCQkgTTQ2OC4yMDQsNzMuODI5djEyNy43ODhIMzQwLjQxM1Y3My44MjlINDY4LjIwNHogTTMzNC44NTcsNzMuODI5djEyNy43ODhIMjA3LjQzNlY3My44MjlIMzM0Ljg1N3ogTTIwMS41MDQsNzMuODI5djEyNy43ODgKCQlINzQuMDkxVjczLjgyOUgyMDEuNTA0eiBNMzIzLjQxNCw4My44ODVWMTg4Ljc5SDIxOC41MDZWODMuODg1SDMyMy40MTR6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDE4cHgiIGhlaWdodD0iNDE4cHgiIHZpZXdCb3g9IjAgMCA0MTggNDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MTggNDE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik05MS42MDYsMTQzLjcwM2MtMy4xNDYtMy4xNDYtNy44NzctNC4wODctMTEuOTg4LTIuMzg1Yy00LjExLDEuNzAzLTYuNzksNS43MTQtNi43OSwxMC4xNjN2MTE1LjAzNwoJCQkJYzAsNC40NDksMi42OCw4LjQ2MSw2Ljc5LDEwLjE2NGMxLjM2MSwwLjU2MywyLjc5LDAuODM2LDQuMjA4LDAuODM2YzIuODYyLDAsNS42NzYtMS4xMTYsNy43OC0zLjIyMmw1Ny41Mi01Ny41MTkKCQkJCWMyLjA2My0yLjA2MywzLjIyMi00Ljg2MSwzLjIyMi03Ljc3OHMtMS4xNTktNS43MTYtMy4yMjItNy43NzhMOTEuNjA2LDE0My43MDN6Ii8+CgkJCTxwYXRoIGQ9Ik0zMzguMzgyLDE0MS4zMThjLTQuMTA3LTEuNy04Ljg0MS0wLjc2My0xMS45ODcsMi4zODVsLTU3LjUyMSw1Ny41MTljLTIuMDYyLDIuMDYzLTMuMjIyLDQuODYxLTMuMjIyLDcuNzc4CgkJCQlzMS4xNTgsNS43MTYsMy4yMjIsNy43NzdsNTcuNTIxLDU3LjUyYzIuMTA0LDIuMTA0LDQuOTE4LDMuMjIzLDcuNzc5LDMuMjIzYzEuNDE3LDAsMi44NDgtMC4yNzIsNC4yMDgtMC44MzgKCQkJCWM0LjExLTEuNzAzLDYuNzktNS43MTQsNi43OS0xMC4xNjJWMTUxLjQ4MUMzNDUuMTcyLDE0Ny4wMzIsMzQyLjQ5MiwxNDMuMDIxLDMzOC4zODIsMTQxLjMxOHoiLz4KCQkJPHBhdGggZD0iTTIxMiwwaC02Yy02LjA3NSwwLTExLDQuOTI1LTExLDExdjM1YzAsNi4wNzUsNC45MjUsMTEsMTEsMTFoNmM2LjA3NSwwLDExLTQuOTI1LDExLTExVjExQzIyMyw0LjkyNSwyMTguMDc1LDAsMjEyLDB6IgoJCQkJLz4KCQkJPHBhdGggZD0iTTIxMiw5NS4zNTJoLTZjLTYuMDc1LDAtMTEsNC45MjUtMTEsMTF2NzIuNDczYzAsNi4wNzUsNC45MjUsMTEsMTEsMTFoNmM2LjA3NSwwLDExLTQuOTI1LDExLTExdi03Mi40NzMKCQkJCUMyMjMsMTAwLjI3NiwyMTguMDc1LDk1LjM1MiwyMTIsOTUuMzUyeiIvPgoJCQk8cGF0aCBkPSJNMjEyLDIyOC4xNzZoLTZjLTYuMDc1LDAtMTEsNC45MjYtMTEsMTF2NzIuNDc0YzAsNi4wNzUsNC45MjUsMTEsMTEsMTFoNmM2LjA3NSwwLDExLTQuOTI1LDExLTExdi03Mi40NzQKCQkJCUMyMjMsMjMzLjEwMiwyMTguMDc1LDIyOC4xNzYsMjEyLDIyOC4xNzZ6Ii8+CgkJCTxwYXRoIGQ9Ik0yMTIsMzYxaC02Yy02LjA3NSwwLTExLDQuOTI1LTExLDExdjM1YzAsNi4wNzUsNC45MjUsMTEsMTEsMTFoNmM2LjA3NSwwLDExLTQuOTI1LDExLTExdi0zNQoJCQkJQzIyMywzNjUuOTI1LDIxOC4wNzUsMzYxLDIxMiwzNjF6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDk3LjE5OXB4IiBoZWlnaHQ9IjQ5Ny4xOTlweCIgdmlld0JveD0iMCAwIDQ5Ny4xOTkgNDk3LjE5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk3LjE5OSA0OTcuMTk5OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTkxLjIsMjQ4LjZjMC0xNS4zLDUuNy0yOC43LDE3LjItNDAuMnMyNC45LTE3LjIsNDAuMi0xNy4yTDE5MS4yLDI0OC42eiBNMTc0LDI2NS44Yy0xLjktNS43LTEuOS0xMS41LTEuOS0xNy4yCgkJYzAtNDIuMSwzNC40LTc2LjUsNzYuNS03Ni41YzUuNzAxLDAsMTEuNSwwLDE3LjIwMSwxLjlsNTEuNi01MS42Yy0yMS01LjctNDQtNy43LTY4LjktNy43Qzc2LjUsMTE0LjcsMCwyNDguNiwwLDI0OC42CgkJczMwLjYsNTMuNSw5Ny41LDkzLjdMMTc0LDI2NS44eiBNMzA2LDI0OC42TDI0OC42LDMwNmMxNS4zLDAsMjguNzAxLTUuNyw0MC4yMDEtMTcuMkMzMDAuMTk5LDI3Ny4zLDMwNiwyNjMuODk5LDMwNiwyNDguNnoKCQkgTTM5OS42OTksMTU0Ljg5OWwtNzYuNSw3Ni41YzEuOSw1LjcsMS45LDExLjUsMS45LDE3LjJjMCw0Mi4xLTM0LjQsNzYuNS03Ni41LDc2LjVjLTUuNywwLTExLjUsMC0xNy4yLTEuOUwxNzkuOCwzNzQuOAoJCWMyMSw1LjcsNDQsNy42LDY4LjgsNy42YzE3Mi4wOTksMCwyNDguNTk5LTEzMy45LDI0OC41OTktMTMzLjlTNDY2LjYsMTk1LjEsMzk5LjY5OSwxNTQuODk5eiBNNDAxLjQsNzYuODk5bC0zMjQuNSwzMjQuNQoJCWwxOC45LDE4LjlMNDIwLjQsOTUuN0w0MDEuNCw3Ni44OTl6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgd2lkdGg9IjQ4NS4yMTVweCIKICAgaGVpZ2h0PSI0ODUuMjE1cHgiCiAgIHZpZXdCb3g9IjAgMCA0ODUuMjE1IDQ4NS4yMTUiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4NS4yMTUgNDg1LjIxNTsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJfbGF5b3V0LXByb3BlcnRpZXMuc3ZnIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0MSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGUgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgICBpZD0iZGVmczM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTA4OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2NjYiCiAgICAgaWQ9Im5hbWVkdmlldzM3IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjQ4NjM4MjMzIgogICAgIGlua3NjYXBlOmN4PSItNzYuMzQ1OTcyIgogICAgIGlua3NjYXBlOmN5PSI0MDcuMDg3MTYiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjY0OSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iNTAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJDYXBhXzEiIC8+PGcKICAgICBpZD0iZzEwMzQ5IgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwzMy42MTk5MTksMjAuMDQ5NjkzKSI+PGcKICAgICAgIGlkPSJMYXllcl8xXzExMF8iPjxnCiAgICAgICAgIGlkPSJnMTAzNTIiPjxwYXRoCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICBkPSJtIDE3LjU2NywxNS45MzggLTIuODU5LC0yLjcwMiBjIDAuMzMzLC0wLjYwNSAwLjUzOSwtMS4yOSAwLjUzOSwtMi4wMjkgMCwtMi4zNDIgLTEuODk3LC00LjIzOSAtNC4yNCwtNC4yMzkgLTIuMzQzLDAgLTQuMjQzLDEuODk2IC00LjI0Myw0LjIzOSAwLDIuMzQzIDEuOSw0LjI0MSA0LjI0Myw0LjI0MSAwLjgyNiwwIDEuNTksLTAuMjQ2IDIuMjQyLC0wLjY1NCBsIDIuODU1LDIuNjk5IGMgMC40MzIsLTAuNTcxIDAuOTE5LC0xLjA5NCAxLjQ2MywtMS41NTUgeiIKICAgICAgICAgICBpZD0icGF0aDEwMzU0IiAvPjxwYXRoCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICBkPSJtIDI5LjY2LDE1LjYgMy43OTksLTYuMzkzIGMgMC4zNzQsMC4xMDcgMC43NjIsMC4xODQgMS4xNjksMC4xODQgMi4zNDcsMCA0LjI0NCwtMS44OTggNC4yNDQsLTQuMjQxIDAsLTIuMzQyIC0xLjg5NywtNC4yMzkgLTQuMjQ0LC00LjIzOSAtMi4zNDMsMCAtNC4yMzksMS44OTYgLTQuMjM5LDQuMjM5IDAsMS4xNjMgMC40NjksMi4yMTQgMS4yMjcsMi45ODEgbCAtMy43ODcsNi4zNzUgYyAwLjY1MSwwLjI5NSAxLjI2NSwwLjY2MyAxLjgzMSwxLjA5NCB6IgogICAgICAgICAgIGlkPSJwYXRoMTAzNTYiIC8+PHBhdGgKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICAgIGQ9Im0gNDIuNzYyLDIwLjk1MiBjIC0xLjgyNCwwIC0zLjM2OSwxLjE1OSAtMy45NjgsMi43NzUgbCAtNS4yNzgsLTAuNTIxIGMgMCwwLjA0IDAuMDA2LDAuMDc4IDAuMDA2LDAuMTE3IDAsMC42ODggLTAuMDc2LDEuMzYgLTAuMjEzLDIuMDA5IGwgNS4yNzYsMC41MjEgYyAwLjMxOSwyLjAyNCAyLjA2MiwzLjU3NiA0LjE3NywzLjU3NiAyLjM0MiwwIDQuMjM4LC0xLjg5NiA0LjIzOCwtNC4yMzggMCwtMi4zNDEgLTEuODk2LC00LjIzOSAtNC4yMzgsLTQuMjM5IHoiCiAgICAgICAgICAgaWQ9InBhdGgxMDM1OCIgLz48cGF0aAogICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgICAgZD0ibSAyOC4xOTcsMzcuNjI0IC0xLjE4LC01LjE1NiBjIC0wLjY2NiwwLjIzMiAtMS4zNTksMC4zOTggLTIuMDgyLDAuNDgxIGwgMS4xODIsNS4xNTcgYyAtMS4zNTUsMC43MDkgLTIuMjksMi4xMSAtMi4yOSwzLjc0NiAwLDIuMzQyIDEuODk2LDQuMjM3IDQuMjQzLDQuMjM3IDIuMzQyLDAgNC4yMzgsLTEuODk2IDQuMjM4LC00LjIzNyAwLjAwMywtMi4yOTkgLTEuODI5LC00LjE2IC00LjExMSwtNC4yMjggeiIKICAgICAgICAgICBpZD0icGF0aDEwMzYwIiAvPjxjaXJjbGUKICAgICAgICAgICBjeD0iMjMuODMiCiAgICAgICAgICAgY3k9IjIzLjMyMyIKICAgICAgICAgICByPSI3LjI3MDk5OTkiCiAgICAgICAgICAgaWQ9ImNpcmNsZTEwMzY0IiAvPjwvZz48L2c+PC9nPjxnCiAgICAgaWQ9ImcxMDM2NiIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzY4IgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzNzAiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9ImcxMDM3MiIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzc0IgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzNzYiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9ImcxMDM3OCIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzgwIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzODIiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9ImcxMDM4NCIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzg2IgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzODgiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9ImcxMDM5MCIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg5LjU1NTY1MSwwLDAsOS41NTU2NTEsMTcuNjE5OTE5LDE4LjA0OTY5MykiIC8+PGcKICAgICBpZD0iZzEwMzkyIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTU1NjUxLDAsMCw5LjU1NTY1MSwxNy42MTk5MTksMTguMDQ5NjkzKSIgLz48ZwogICAgIGlkPSJnMTAzOTQiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoOS41NTU2NTEsMCwwLDkuNTU1NjUxLDE3LjYxOTkxOSwxOC4wNDk2OTMpIiAvPjxnCiAgICAgaWQ9Imc0MzIwIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDQuNzU0NDI3MSwwLDAsNC43NTQ0MjcxLDcuODM5OTM2MSwyNjAuNzI3NDEpIj48ZwogICAgICAgaWQ9Imc0MjgwIj48cGF0aAogICAgICAgICBpZD0icGF0aDQyODIiCiAgICAgICAgIGQ9Im0gNDEuNTM0LDI4LjY2IDEuOTU3LDAgQyA0NC44NzcsMjguNjYgNDYsMjcuNTM2IDQ2LDI2LjE1IGwgMCwtNi4zIGMgMCwtMS4zODUgLTEuMTI0LC0yLjUwOSAtMi41MDksLTIuNTA5IGwgLTEuOTUxLDAgMCwwLjAwNiBDIDQxLjE0OCwxNi4xNCA0MC42ODcsMTQuOTgzIDQwLjEwMywxMy44ODkgbCAxLjM4MSwtMS4zODEgYyAwLjk3OSwtMC45OCAwLjk3OSwtMi41NjkgMCwtMy41NDkgTCAzNy4wNCw0LjUxNyBjIC0wLjk3OSwtMC45NzkgLTIuNTY3LC0wLjk3OSAtMy41NDcsMCBsIC0xLjM4MiwxLjM4IEMgMzEuMDE3LDUuMzEzIDI5Ljg2MSw0Ljg1MiAyOC42NTQsNC40NjEgbCAwLjAwNiwwIDAsLTEuOTUxIEMgMjguNjYsMS4xMjQgMjcuNTM3LDAgMjYuMTUsMCBsIC02LjMsMCBjIC0xLjM4NiwwIC0yLjUwOSwxLjEyNCAtMi41MDksMi41MSBsIDAsMS45NTUgMC4wMTQsLTEwZS00IGMgLTEuMjA3LDAuMzY3IC0yLjM2MywwLjg1IC0zLjQ1OCwxLjQzNSBMIDEyLjUxNiw0LjUxOCBjIC0wLjk4LC0wLjk3OSAtMi41NjgsLTAuOTc5IC0zLjU0OCwwIEwgNC41MjUsOC45NjEgQyAzLjU0Niw5Ljk0IDMuNTQ1LDExLjUyNyA0LjUyMywxMi41MDcgTCA1LjksMTMuODg5IEMgNS4zMTYsMTQuOTgzIDQuODUxLDE2LjE0IDQuNDYsMTcuMzQ2IGwgMCwtMC4wMDUgLTEuOTUxLDAgQyAxLjEyNCwxNy4zNDEgMCwxOC40NjUgMCwxOS44NSBsIDAsNi4zMDEgYyAwLDEuMzg3IDEuMTI0LDIuNTExIDIuNTA5LDIuNTExIGwgMS45NjQsMCAtMC4wMDYsLTAuMDE1IGMgMC4zNjcsMS4yMDcgMC44NTMsMi4zNjIgMS40MzYsMy40NTcgbCAtMS4zOCwxLjM4MSBjIC0wLjk4LDAuOTc5IC0wLjk3OSwyLjU2NyAwLDMuNTQ3IGwgNC40NDMsNC40NDIgYyAwLjk3OSwwLjk3OSAyLjU2OCwwLjk3OSAzLjU0OCwwIGwgMS4zODEsLTEuMzgxIGMgMS4wOTQsMC41ODQgMi4yNTEsMS4wNzIgMy40NTgsMS40MzggbCAtMC4wMTQsLTAuMDA2IDAsMS45NjUgYyAwLDEuMzg3IDEuMTIzLDIuNTEgMi41MDksMi41MSBsIDYuMywwIGMgMS4zODcsMCAyLjUxLC0xLjEyMyAyLjUxLC0yLjUxIGwgMCwtMS45NSAtMC4wMDYsMCBjIDEuMjA3LC0wLjM5MiAyLjM2MywtMC44NTYgMy40NTcsLTEuNDQgbCAxLjM4MSwxLjM3OSBjIDAuOTgsMC45NzkgMi41NjgsMC45NzkgMy41NDcsMCBsIDQuNDQzLC00LjQ0NSBjIDAuOTc5LC0wLjk3OSAwLjk3OSwtMi41NjYgMCwtMy41NDcgbCAtMS4zODMsLTEuMzgzIGMgMC41ODQsLTEuMDk0IDEuMDY4LC0yLjI1IDEuNDM2LC0zLjQ1NyBsIDEwZS00LDAuMDEzIHogTSAyMy4wMjEsMzYuNzE0IEMgMTUuNDQ0LDM2LjcyMyA5LjI3OCwzMC41NTcgOS4yODcsMjIuOTggOS4yOTYsMTUuNDQxIDE1LjQ1LDkuMjg3IDIyLjk4OSw5LjI3OCBjIDcuNTc4LC0wLjAwOSAxMy43NDQsNi4xNTcgMTMuNzM0LDEzLjczNCAtMC4wMSw3LjUzOSAtNi4xNjIsMTMuNjkzIC0xMy43MDIsMTMuNzAyIHoiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9nPjxnCiAgICAgICBpZD0iZzQyODQiIC8+PGcKICAgICAgIGlkPSJnNDI4NiIgLz48ZwogICAgICAgaWQ9Imc0Mjg4IiAvPjxnCiAgICAgICBpZD0iZzQyOTAiIC8+PGcKICAgICAgIGlkPSJnNDI5MiIgLz48ZwogICAgICAgaWQ9Imc0Mjk0IiAvPjxnCiAgICAgICBpZD0iZzQyOTYiIC8+PGcKICAgICAgIGlkPSJnNDI5OCIgLz48ZwogICAgICAgaWQ9Imc0MzAwIiAvPjxnCiAgICAgICBpZD0iZzQzMDIiIC8+PGcKICAgICAgIGlkPSJnNDMwNCIgLz48ZwogICAgICAgaWQ9Imc0MzA2IiAvPjxnCiAgICAgICBpZD0iZzQzMDgiIC8+PGcKICAgICAgIGlkPSJnNDMxMCIgLz48ZwogICAgICAgaWQ9Imc0MzEyIiAvPjwvZz48L3N2Zz4="

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ4OC43OHB4IiBoZWlnaHQ9IjQ4OC43OHB4IiB2aWV3Qm94PSIwIDAgNDg4Ljc4IDQ4OC43OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg4Ljc4IDQ4OC43ODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNDEuNDA4LDExOS44NzJjMTIuMjkzLTEzLjExMiwyOS42NTMtMjAuNzcsNDcuNjI0LTIwLjc3aDI0Ny40MDVWNDcuODI4YzAtMTIuNTY5LTEwLjQ2OC0yMi42NTItMjMuMDM2LTIyLjY1Mkg3NS4zOTcNCgkJCWMtMTIuNTc1LDAtMjIuNDkxLDEwLjA4My0yMi40OTEsMjIuNjUydjEwMS4wNDZoNjEuNDQ1TDE0MS40MDgsMTE5Ljg3MnoiLz4NCgkJPHBhdGggZD0iTTQ4My4wMTksMTQ5LjI1M2MtMS43MDktMS45MjQtMy43MTctMy41NS01LjkyMy00Ljc4Yy0zLjM1Mi0xLjg2MS03LjE1MS0yLjkyLTExLjA3MS0yLjkySDE4OS4wMzJsMCwwDQoJCQljLTYsMC0xMS43MzUsMi40MDktMTUuOTgzLDYuNjAxYy0wLjIxNCwwLjIwOC0wLjQyMywwLjQzOC0wLjYyNiwwLjY1MWwtOS4yNzUsOS45MTFsLTIzLjYyMiwyNS4yMDcNCgkJCWMtMC41NDIsMC41NzMtMS4xMDUsMS4yMTktMS42OTQsMS43MzZjLTQuMTEzLDMuNTcyLTkuNDEsNS42NjctMTQuOTE1LDUuNjY3aC0wLjAwNUgyMi43NjhsMCwwDQoJCQljLTUuNjg0LDAtMTEuMTExLDIuMDIyLTE1LjI3MSw1Ljc5MWMtMC42NjcsMC41ODktMS4yOTMsMS4xNzktMS44ODgsMS44NTdjLTAuNDE3LDAuNDc5LTAuODAzLDAuOTQ4LTEuMTgzLDEuNDU5DQoJCQljLTMuNDgyLDQuNzQ0LTUuMDIsMTAuNjYxLTQuMjE3LDE2LjU0MmwyNi40NzksMTk0LjE4MmMzLjU2NSwyNi4xNCwyMy41NTMsNDYuNjEyLDQ4LjY5Miw1MS4yODQNCgkJCWMzLjU5MiwwLjY2Nyw3LjI4OCwxLjE2MywxMS4wNTgsMS4xNjNoMzE0LjI2MWMyNy43NjEsMCw1MS41MjItMTkuMDAzLDU4LjM1NC00NS4xOTRjMC43MDQtMi43MDYsMS4yMjYtNS41NjcsMS41NTUtOC40Mg0KCQkJbDE1LjI2NS0xMzIuMjg5bDEyLjc3Mi0xMTAuNjc0YzAuMDY3LTAuNjQ3LDAuMTA4LTEuMjkzLDAuMTI1LTEuOTI5QzQ4OC45NDcsMTU5LjI5OSw0ODYuOTA5LDE1My42MjMsNDgzLjAxOSwxNDkuMjUzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgd2lkdGg9IjQ4OXB4IgogICBoZWlnaHQ9IjQ4OS4wMDFweCIKICAgdmlld0JveD0iMCAwIDQ4OSA0ODkuMDAxIgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODkgNDg5LjAwMTsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJuZXcuc3ZnIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0MSI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgICBpZD0iZGVmczM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iNjkwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjQ4MCIKICAgICBpZD0ibmFtZWR2aWV3MzciCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjAuNDgyNjE2NTkiCiAgICAgaW5rc2NhcGU6Y3g9IjI0NC41IgogICAgIGlua3NjYXBlOmN5PSIyNDQuNTAwNSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IkNhcGFfMSIgLz48ZwogICAgIGlkPSJnMyIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjk2MTk2NzY5LDAsMCwwLjk2MTk2NzY5LDkuMDEwNzg0OCwxMCkiPjxwYXRoCiAgICAgICBkPSJNIDM1NS43NjgsMCA4Ni4yMTgsMCBDIDUzLjMzLDAgMjYuNTc3LDI2Ljc1MyAyNi41NzcsNTkuNjM2IGwgMCwzNjkuNzI5IGMgMCwzMi44ODMgMjYuNzUyLDU5LjYzNiA1OS42NDEsNTkuNjM2IGwgMzE2LjU2NiwwIGMgMzIuODg5LC0xMGUtNCA1OS42NDEsLTI2Ljc1NCA1OS42NDEsLTU5LjYzNyBsIDAsLTMyMC4yMDQgTCAzNTUuNzY4LDAgWiBtIDQ3LjAxNiw0NDYuNDc5IC0zMTYuNTY2LDAgYyAtOS40MzcsMCAtMTcuMTE5LC03LjY3OCAtMTcuMTE5LC0xNy4xMTMgbCAwLC0zNjkuNzMgYyAwLC05LjQzNyA3LjY4MywtMTcuMTE0IDE3LjExOSwtMTcuMTE0IGwgMjQ4LjY0MiwwIDAsNDcuNjA0IGMgMCwyMS4wNDMgMTcuMTA5LDM4LjE2MiAzOC4xNTIsMzguMzc1IGwgNDYuODkxLDAuNDc3IDAsMzAwLjM4OCBjIDAsOS40MzUgLTcuNjg0LDE3LjExMyAtMTcuMTE5LDE3LjExMyB6IgogICAgICAgaWQ9InBhdGg1IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48L2c+PGcKICAgICBpZD0iZzciIC8+PGcKICAgICBpZD0iZzkiIC8+PGcKICAgICBpZD0iZzExIiAvPjxnCiAgICAgaWQ9ImcxMyIgLz48ZwogICAgIGlkPSJnMTUiIC8+PGcKICAgICBpZD0iZzE3IiAvPjxnCiAgICAgaWQ9ImcxOSIgLz48ZwogICAgIGlkPSJnMjEiIC8+PGcKICAgICBpZD0iZzIzIiAvPjxnCiAgICAgaWQ9ImcyNSIgLz48ZwogICAgIGlkPSJnMjciIC8+PGcKICAgICBpZD0iZzI5IiAvPjxnCiAgICAgaWQ9ImczMSIgLz48ZwogICAgIGlkPSJnMzMiIC8+PGcKICAgICBpZD0iZzM1IiAvPjwvc3ZnPg=="

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjYuNjMzOTQybW0iCiAgIGhlaWdodD0iMjYuNjIyNzY1bW0iCiAgIHZpZXdCb3g9IjAgMCAyNi42MzM5NDIgMjYuNjIyNzY1IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJwb3J0YWwuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiI+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDUwMDgiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNTAwNiIKICAgICAgICAgZD0iTSAwLDAgSCAzMTIuMDQzIFYgNzQuNDQ4MiBIIDAgWiIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDUwMTYiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNTAxNCIKICAgICAgICAgZD0iTSAwLDc0LjQ0OCBIIDMxMi4wNDMgViAwIEggMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNTExMiIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGg1MTEwIgogICAgICAgICBkPSJNIDAsMCBIIDMxMi4wNDMgViA3NC40NDgyIEggMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNTEyMCIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGg1MTE4IgogICAgICAgICBkPSJNIDAsNzQuNDQ4IEggMzEyLjA0MyBWIDAgSCAwIFoiIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGg1MzMyIgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aAogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBpZD0icGF0aDUzMzAiCiAgICAgICAgIGQ9Ik0gMCw3NC40NDggSCAzMTIuMDQzIFYgMCBIIDAgWiIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIxLjk3OTg5OSIKICAgICBpbmtzY2FwZTpjeD0iNTUuNTM1Njg4IgogICAgIGlua3NjYXBlOmN5PSItNTEuMDYwODE5IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDcuNDExNjExLC04OS4yODgwNCkiPgogICAgPHJlY3QKICAgICAgIHJ5PSIwIgogICAgICAgeT0iOTYuMTU3Mzc5IgogICAgICAgeD0iNjEuMTYxNDcyIgogICAgICAgaGVpZ2h0PSI1Ljk5OTk5OTUiCiAgICAgICB3aWR0aD0iNS45OTk5OTk1IgogICAgICAgaWQ9InJlY3Q1NTA0IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNzQ1MDk4MDU7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU0MDg2MzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxyZWN0CiAgICAgICByeT0iMCIKICAgICAgIHk9IjEwMy4wMjY3MyIKICAgICAgIHg9IjU0LjI5MjEyMiIKICAgICAgIGhlaWdodD0iNS45OTk5OTk1IgogICAgICAgd2lkdGg9IjUuOTk5OTk5NSIKICAgICAgIGlkPSJyZWN0NTUwNC0zIgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNzQ1MDk4MDU7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU0MDg2MzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxyZWN0CiAgICAgICByeT0iMCIKICAgICAgIHk9Ijg5LjI4ODA0IgogICAgICAgeD0iNjguMDMwODIzIgogICAgICAgaGVpZ2h0PSI1Ljk5OTk5OTUiCiAgICAgICB3aWR0aD0iNS45OTk5OTk1IgogICAgICAgaWQ9InJlY3Q1NTA0LTMtNSIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjU4ODIzNTMyO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU1NDA4NjMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAiIC8+CiAgICA8cmVjdAogICAgICAgcnk9IjAiCiAgICAgICB5PSIxMDkuODk2MDciCiAgICAgICB4PSI0Ny40MjI3NzkiCiAgICAgICBoZWlnaHQ9IjUuOTk5OTk5NSIKICAgICAgIHdpZHRoPSI1Ljk5OTk5OTUiCiAgICAgICBpZD0icmVjdDU1MDQtMy01LTkiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC41ODgyMzUzMjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTQwODYzMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU1NTEtNyIKICAgICAgIGQ9Im0gNjguMzg0OTY3LDEwMi4xMjA4OSBhIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgNS42MDkzNTQsLTUuNzIxOTI4IDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgLTAuMDA5OSwtMC4yMDUwODcgaCAtNS45MTcwNTMgdiA1LjkxMDcwNSBhIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgMC4zMTc2MzQsMC4wMTYzIHoiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC41ODgyMzUzMjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MDg2MTU1NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU2NjMiCiAgICAgICBkPSJtIDQ4LjI3MzAxMSwxMDEuMTk2NDggdiAtNy41ODIwNTMgYyAwLC0xLjkxNDE0NCAxLjQxOTUxMSwtMy40NTUxMzQgMy4xODI3NjEsLTMuNDU1MTM0IHYgMCBoIDE0Ljc2NzI3MSIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojOTg5NDk0O3N0cm9rZS13aWR0aDoxLjcyMjc5OTY2O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJyZWN0NTYxNyIKICAgICAgIGQ9Im0gNzMuMjM3ODEzLDEwMi44MzA0MyA0ZS02LDkuMTU0OTggYyAwLDEuNzI3MTggLTEuMzgzMjYzLDMuMTE3NjYgLTMuMTAxNDg1LDMuMTE3NjYgSCA1NS44NDYwNzciCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6Izk4OTQ5NDtzdHJva2Utd2lkdGg6MS42MTU0NzExMjtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU1NTEtNy00IgogICAgICAgZD0ibSA2MS41MTU2MTgsMTA4Ljk5MDIzIGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCA1LjYwOTM1NCwtNS43MjE5MiA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC0wLjAwOTksLTAuMjA1MDkgSCA2MS4xOTc5NyB2IDUuOTEwNzEgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIDAuMzE3NjM0LDAuMDE2MyB6IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNzQ1MDk4MDU7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuODA4NjE1NTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg1NTUxLTctNC0zIgogICAgICAgZD0ibSA1OS45Mzc5NzUsOTYuMTkzODc0IGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAtNS42MDkzNTQsNS43MjE5MjYgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAwLjAwOTksMC4yMDUwOSBoIDUuOTE3MDUzIHYgLTUuOTEwNzExIGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAtMC4zMTc2MzQsLTAuMDE2MyB6IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuODA4NjE1NTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg1NTUxLTctNC0zLTAiCiAgICAgICBkPSJtIDUzLjA2ODYzMywxMDMuMDYzMjIgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC01LjYwOTM1Myw1LjcyMTkzIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgMC4wMDk5LDAuMjA1MDggaCA1LjkxNzA1MyB2IC01LjkxMDcxIGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAtMC4zMTc2MzQsLTAuMDE2MyB6IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNTg4MjM1MzI7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuODA4NjE1NTc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1LjY3OHB4IiBoZWlnaHQ9IjQ1LjY3OHB4IiB2aWV3Qm94PSIwIDAgNDUuNjc4IDQ1LjY3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUuNjc4IDQ1LjY3ODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zOC45ODgsNi42ODljLTguOTE5LTguOTE4LTIzLjM4LTguOTE5LTMyLjMsMGMtOC45MTgsOC45MTktOC45MTcsMjMuMzgsMCwzMi4yOTljOC45Miw4LjkxOSwyMy4zODEsOC45MTksMzIuMywwDQoJCQlDNDcuOTA4LDMwLjA2OSw0Ny45MDYsMTUuNjA4LDM4Ljk4OCw2LjY4OXogTTIxLjg5MywzNi4wMTZjLTEuNzMsMC0yLjkwNi0xLjI3Mi0yLjkwNi0yLjk3MWMwLTEuNzMsMS4yMDktMi45NzIsMi45MDYtMi45NzINCgkJCWMxLjc2NCwwLDIuOTA2LDEuMjQxLDIuOTM4LDIuOTcyQzI0LjgzMSwzNC43NDIsMjMuNjU2LDM2LjAxNiwyMS44OTMsMzYuMDE2eiBNMjYuMjE1LDIxLjk4MWMtMS4zMiwxLjQ2Ni0xLjg1NiwyLjg2MS0xLjgyLDQuNDY4DQoJCQljMCwxLjE5My0wLjk2OSwyLjE2Mi0yLjE2MywyLjE2MkgyMS43N2MtMS4xODIsMC0yLjE0NS0wLjk0OS0yLjE2MS0yLjEzMWwtMC4wMDUtMC4zMTdjLTAuMTA3LTEuODIzLDAuNTAxLTMuNjgxLDIuMTA5LTUuNjExDQoJCQljMS4xNDUtMS4zNTksMi4wNzItMi41MDIsMi4wNzItMy43MThjMC0xLjI1LTAuODIyLTIuMDczLTIuNjA3LTIuMTQ2Yy0wLjU0OSwwLTEuMTUsMC4wOTMtMS43MzEsMC4yNTYNCgkJCWMtMS4wNTYsMC4yOTctMi4xNTYtMC4yOTgtMi40ODItMS4zNDVsLTAuMDA2LTAuMDJjLTAuMzI5LTEuMDU0LDAuMjQ3LTIuMTc1LDEuMjk0LTIuNTIzYzEuMTU3LTAuMzg1LDIuNTc0LTAuNjU3LDQuMTQtMC42NTcNCgkJCWM0LjcyLDAsNi44NjQsMi42MDksNi44NjQsNS41NzZDMjkuMjU2LDE4LjY5MiwyNy41NzUsMjAuNDc5LDI2LjIxNSwyMS45ODF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgd2lkdGg9IjQ3MS42MDhweCIKICAgaGVpZ2h0PSI0NzEuNjA4cHgiCiAgIHZpZXdCb3g9IjAgMCA0NzEuNjA4IDQ3MS42MDgiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MS42MDggNDcxLjYwODsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJyZWRvLnN2ZyI+PG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnMzOSIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyMjkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODE2IgogICAgIGlkPSJuYW1lZHZpZXczNyIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMC41MDA0MTU2IgogICAgIGlua3NjYXBlOmN4PSIyMzUuODA0IgogICAgIGlua3NjYXBlOmN5PSIyMzUuODA0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iQ2FwYV8xIiAvPjxnCiAgICAgaWQ9ImczIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KC0xLDAsMCwxLDQ3My42MDYyMSwwKSI+PHBhdGgKICAgICAgIGQ9Im0gMzg0LjUzNTE5LDkxLjA2Nzc0NCBjIC04MS40NTk1NCwtODEuNDU2ODc5MSAtMjE0LjAwODA3LC04MS40NTY4NzkxIC0yOTUuNDY1ODI4LDAgLTgxLjQ1Nzc2NDEsODEuNDU2ODc2IC04MS40NTY4NzgxLDIxNC4wMTE2MDYgMCwyOTUuNDY1ODI2IDgxLjQ1Njg2OCw4MS40NTk1MyAyMTQuMDA1NDA4LDgxLjQ1OTUzIDI5NS40NjU4MjgsMCA4MS40NTk1MywtODEuNDUzMzQgODEuNDU5NTMsLTIxNC4wMDI3NSAwLC0yOTUuNDY1ODI2IHogTSAzNjguMzI4ODMsMzcwLjMzODcyIGMgLTcyLjUxODU5LDcyLjUxODU5IC0xOTAuNTM2Myw3Mi41MTg1OSAtMjYzLjA2NjM5LDAgLTcyLjUxNjgxNywtNzIuNTMwMDkgLTcyLjUxNjgxNywtMTkwLjU0MjUgMCwtMjYzLjA2NzI3IDcyLjUyOTIsLTcyLjUyNjU1OSAxOTAuNTM2MjksLTcyLjUyNjU1OSAyNjMuMDY2MzksMCA3Mi41MjU2Nyw3Mi41MjQ3NyA3Mi41MjU2NywxOTAuNTM3MTggMCwyNjMuMDY3MjcgeiBtIDEyLjQ0MzQ3LC0xOTguMTI3NiAtMTEuNjIwNzYsNTIuMzI5NzEgYyAtMC4zMTM1LDEuNDQ3MDYgLTEuNzQzNzMsMi4zNDY4MiAtMy4xODI4MiwyLjAzNTk4IC0wLjQ0MDE0LC0wLjA5MzkgLTEwLjk1MDM2LC0yLjM1ODM0IC0yNi4yOTg1OCwtMi4zNTgzNCAtMjUuODg5NDQsMCAtNzEuNjI0MTMsNi44NTE4NCAtMTAxLjgzMTcyLDQ5LjU1MzM4IGwgNi4yOTY1Niw2LjI5NjU3IDcwLjUwMzg2LDMwLjU1OTE3IGMgMi4zNjU0MiwxLjAzNzAzIDMuNzU3NTgsMy41MDY5NSAzLjM5MTgzLDYuMDY3MiAtMC4zNTA3LDIuNTQ5NjIgLTIuMzYxLDQuNTU0NjEgLTQuOTMwOTksNC44NzM0MiBsIC0xNzUuNjA1MTksMjIuOTU5MDEgYyAtMS43NTg3OSwwLjIzMDI1IC0zLjUzODgzLC0wLjM3NzI2IC00Ljc5NzI2LC0xLjYyNzcyIC0xLjI2NjQsLTEuMjYxOTcgLTEuODU1MzIsLTMuMDM2NyAtMS42MzU2OSwtNC44MDYxMiBsIDIyLjk1OSwtMTc1LjYwNzg1IGMgMC4xNjQ3MywtMS4yODUgMC43NTM2NCwtMi40MzYyNyAxLjYyMzMsLTMuMzA1MDMgMC44NTgxNCwtMC44NTkwMyAxLjk4OTA0LC0xLjQ0Nzk1IDMuMjYzNDEsLTEuNjMxMjcgMi41NDY5NywtMC4zNTc3OCA1LjAxNzc3LDEuMDM3MDMgNi4wNTM5MiwzLjM5NDQ4IGwgMzAuNTY3MTQsNzAuNTA2NTIgMC4xNTc2MywwLjE1NzYzIGMgNDcuMTQxOTEsLTU5LjQwMTE3IDExNS40MTU4NCwtNjYuNDg5NDYgMTQ1LjAyODMxLC02Ni40ODk0NiAxMy41NDY5MywwIDI2LjY5NjIyLDEuMzQ1MjIgMzguMDIzODQsMy44ODY4NyAxLjQ1MzI2LDAuMzMyMSAyLjM2MzY1LDEuNzYzMjIgMi4wMzQyMSwzLjIwNTg1IHoiCiAgICAgICBpZD0icGF0aDUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48ZwogICAgIGlkPSJnNyIgLz48ZwogICAgIGlkPSJnOSIgLz48ZwogICAgIGlkPSJnMTEiIC8+PGcKICAgICBpZD0iZzEzIiAvPjxnCiAgICAgaWQ9ImcxNSIgLz48ZwogICAgIGlkPSJnMTciIC8+PGcKICAgICBpZD0iZzE5IiAvPjxnCiAgICAgaWQ9ImcyMSIgLz48ZwogICAgIGlkPSJnMjMiIC8+PGcKICAgICBpZD0iZzI1IiAvPjxnCiAgICAgaWQ9ImcyNyIgLz48ZwogICAgIGlkPSJnMjkiIC8+PGcKICAgICBpZD0iZzMxIiAvPjxnCiAgICAgaWQ9ImczMyIgLz48ZwogICAgIGlkPSJnMzUiIC8+PC9zdmc+"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM5Mi42MiAzOTIuNjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM5Mi42MiAzOTIuNjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxyZWN0IHg9IjE0NC44NjYiIHk9IjMyMC44OTciIHdpZHRoPSIyMy41MDUiIGhlaWdodD0iMjUiLz4NCgk8cGF0aCBkPSJNMzA5Ljc5NSwwSDI2Ni40OUgxMjYuMTMxSDgyLjgyNUMzNy42NjcsMCwwLjkyOSwzNi43MzgsMC45MjksODEuODk2djIyOC44MjhjMCw0NS4xNTgsMzYuNzM4LDgxLjg5Niw4MS44OTYsODEuODk2aDU4LjMyDQoJCWgxMTMuNDQzaDU1LjIwNmM0NS4xNTcsMCw4MS44OTYtMzYuNzM4LDgxLjg5Ni04MS44OTZWODEuODk2QzM5MS42OTEsMzYuNzM4LDM1NC45NTIsMCwzMDkuNzk1LDB6IE0yNjYuNDksMzANCgkJYzE0LjM1NCwwLDI2LjAzLDkuNTQyLDI2LjAzLDIxLjI3VjE3NC4zM2MwLDExLjcyOS0xMS42NzcsMjEuMjcxLTI2LjAzLDIxLjI3MUgxMjYuMTMxYy0xNC4zNTQsMC0yNi4wMzEtOS41NDItMjYuMDMxLTIxLjI3MQ0KCQlWNTEuMjdjMC0xMS43MjgsMTEuNjc4LTIxLjI3LDI2LjAzMS0yMS4yN0gyNjYuNDl6IE0xNDEuMTQ2LDM2Mi42MmMtNi4yNTksMC0xMS4zNTItNS4wOTItMTEuMzUyLTExLjM1MXYtMzAuMDY2DQoJCWMwLTYuMjU5LDUuMDkzLTExLjM1MSwxMS4zNTItMTEuMzUxaDExMy40NDNjNi4yNTksMCwxMS4zNTEsNS4wOTIsMTEuMzUxLDExLjM1MXYzMC4wNjZjMCw2LjI1OS01LjA5MiwxMS4zNTEtMTEuMzUxLDExLjM1MQ0KCQlIMTQxLjE0NnogTTM2MS42OTEsMzEwLjcyNGMwLDI4LjYxNi0yMy4yOCw1MS44OTYtNTEuODk2LDUxLjg5NmgtMTUuNDUyYzEuMDMyLTMuNjEsMS41OTctNy40MTQsMS41OTctMTEuMzUxdi0zMC4wNjYNCgkJYzAtMjIuODAxLTE4LjU1LTQxLjM1MS00MS4zNTEtNDEuMzUxSDE0MS4xNDZjLTIyLjgwMiwwLTQxLjM1MiwxOC41NS00MS4zNTIsNDEuMzUxdjMwLjA2NmMwLDMuOTM3LDAuNTY1LDcuNzQyLDEuNTk3LDExLjM1MQ0KCQlIODIuODI1Yy0yOC42MTYsMC01MS44OTYtMjMuMjgtNTEuODk2LTUxLjg5NlY4MS44OTZjMC0yNS45MSwxOS4wODctNDcuNDQ0LDQzLjkzOC01MS4yODVDNzEuODExLDM2LjkzNSw3MC4xLDQzLjkyMSw3MC4xLDUxLjI3DQoJCVYxNzQuMzNjMCwyOC4yNzEsMjUuMTM2LDUxLjI3MSw1Ni4wMzEsNTEuMjcxSDI2Ni40OWMzMC44OTYsMCw1Ni4wMy0yMyw1Ni4wMy01MS4yNzFWNTEuMjdjMC03LjM0OC0xLjcxMS0xNC4zMzQtNC43NjctMjAuNjU5DQoJCWMyNC44NTEsMy44NDEsNDMuOTM4LDI1LjM3NSw0My45MzgsNTEuMjg1VjMxMC43MjR6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjYuNjMzOTQybW0iCiAgIGhlaWdodD0iMjYuNjIyNzY1bW0iCiAgIHZpZXdCb3g9IjAgMCAyNi42MzM5NDIgMjYuNjIyNzY1IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJzZXR0aW5ncy5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIj4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNTAwOCIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGg1MDA2IgogICAgICAgICBkPSJNIDAsMCBIIDMxMi4wNDMgViA3NC40NDgyIEggMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aAogICAgICAgaWQ9ImNsaXBQYXRoNTAxNiIKICAgICAgIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGgKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgaWQ9InBhdGg1MDE0IgogICAgICAgICBkPSJNIDAsNzQuNDQ4IEggMzEyLjA0MyBWIDAgSCAwIFoiIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGg1MTEyIgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aAogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBpZD0icGF0aDUxMTAiCiAgICAgICAgIGQ9Ik0gMCwwIEggMzEyLjA0MyBWIDc0LjQ0ODIgSCAwIFoiIC8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBpZD0iY2xpcFBhdGg1MTIwIgogICAgICAgY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aAogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBpZD0icGF0aDUxMTgiCiAgICAgICAgIGQ9Ik0gMCw3NC40NDggSCAzMTIuMDQzIFYgMCBIIDAgWiIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSJjbGlwUGF0aDUzMzIiCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIGlkPSJwYXRoNTMzMCIKICAgICAgICAgZD0iTSAwLDc0LjQ0OCBIIDMxMi4wNDMgViAwIEggMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuOTc5ODk5IgogICAgIGlua3NjYXBlOmN4PSI1NS41MzU2ODgiCiAgICAgaW5rc2NhcGU6Y3k9Ii01MS4wNjA4MTkiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Ny40MTE2MTEsLTg5LjI4ODA0KSI+CiAgICA8cmVjdAogICAgICAgcnk9IjAiCiAgICAgICB5PSI5Ni4xNTczNzkiCiAgICAgICB4PSI2MS4xNjE0NzIiCiAgICAgICBoZWlnaHQ9IjUuOTk5OTk5NSIKICAgICAgIHdpZHRoPSI1Ljk5OTk5OTUiCiAgICAgICBpZD0icmVjdDU1MDQiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC43NDUwOTgwNTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTQwODYzMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHJlY3QKICAgICAgIHJ5PSIwIgogICAgICAgeT0iMTAzLjAyNjczIgogICAgICAgeD0iNTQuMjkyMTIyIgogICAgICAgaGVpZ2h0PSI1Ljk5OTk5OTUiCiAgICAgICB3aWR0aD0iNS45OTk5OTk1IgogICAgICAgaWQ9InJlY3Q1NTA0LTMiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC43NDUwOTgwNTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NTQwODYzMztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHJlY3QKICAgICAgIHJ5PSIwIgogICAgICAgeT0iODkuMjg4MDQiCiAgICAgICB4PSI2OC4wMzA4MjMiCiAgICAgICBoZWlnaHQ9IjUuOTk5OTk5NSIKICAgICAgIHdpZHRoPSI1Ljk5OTk5OTUiCiAgICAgICBpZD0icmVjdDU1MDQtMy01IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC45ODk5OTk5OTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNTg4MjM1MzI7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTU0MDg2MzM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MCIgLz4KICAgIDxyZWN0CiAgICAgICByeT0iMCIKICAgICAgIHk9IjEwOS44OTYwNyIKICAgICAgIHg9IjQ3LjQyMjc3OSIKICAgICAgIGhlaWdodD0iNS45OTk5OTk1IgogICAgICAgd2lkdGg9IjUuOTk5OTk5NSIKICAgICAgIGlkPSJyZWN0NTUwNC0zLTUtOSIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjU4ODIzNTMyO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU1NDA4NjMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTU1MS03IgogICAgICAgZD0ibSA2OC4zODQ5NjcsMTAyLjEyMDg5IGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCA1LjYwOTM1NCwtNS43MjE5MjggNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAtMC4wMDk5LC0wLjIwNTA4NyBoIC01LjkxNzA1MyB2IDUuOTEwNzA1IGEgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAwLjMxNzYzNCwwLjAxNjMgeiIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTg5OTk5OTk7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjU4ODIzNTMyO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjgwODYxNTU3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTY2MyIKICAgICAgIGQ9Im0gNDguMjczMDExLDEwMS4xOTY0OCB2IC03LjU4MjA1MyBjIDAsLTEuOTE0MTQ0IDEuNDE5NTExLC0zLjQ1NTEzNCAzLjE4Mjc2MSwtMy40NTUxMzQgdiAwIGggMTQuNzY3MjcxIgogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiM5ODk0OTQ7c3Ryb2tlLXdpZHRoOjEuNzIyNzk5NjY7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7cGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIgLz4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InJlY3Q1NjE3IgogICAgICAgZD0ibSA3My4yMzc4MTMsMTAyLjgzMDQzIDRlLTYsOS4xNTQ5OCBjIDAsMS43MjcxOCAtMS4zODMyNjMsMy4xMTc2NiAtMy4xMDE0ODUsMy4xMTc2NiBIIDU1Ljg0NjA3NyIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojOTg5NDk0O3N0cm9rZS13aWR0aDoxLjYxNTQ3MTEyO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTU1MS03LTQiCiAgICAgICBkPSJtIDYxLjUxNTYxOCwxMDguOTkwMjMgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIDUuNjA5MzU0LC01LjcyMTkyIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgLTAuMDA5OSwtMC4yMDUwOSBIIDYxLjE5Nzk3IHYgNS45MTA3MSBhIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgMC4zMTc2MzQsMC4wMTYzIHoiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC43NDUwOTgwNTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MDg2MTU1NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU1NTEtNy00LTMiCiAgICAgICBkPSJtIDU5LjkzNzk3NSw5Ni4xOTM4NzQgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC01LjYwOTM1NCw1LjcyMTkyNiA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIDAuMDA5OSwwLjIwNTA5IGggNS45MTcwNTMgdiAtNS45MTA3MTEgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC0wLjMxNzYzNCwtMC4wMTYzIHoiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MDg2MTU1NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU1NTEtNy00LTMtMCIKICAgICAgIGQ9Im0gNTMuMDY4NjMzLDEwMy4wNjMyMiBhIDUuNjA5MDczNCw1LjcyMTk1ODQgMCAwIDAgLTUuNjA5MzUzLDUuNzIxOTMgNS42MDkwNzM0LDUuNzIxOTU4NCAwIDAgMCAwLjAwOTksMC4yMDUwOCBoIDUuOTE3MDUzIHYgLTUuOTEwNzEgYSA1LjYwOTA3MzQsNS43MjE5NTg0IDAgMCAwIC0wLjMxNzYzNCwtMC4wMTYzIHoiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowLjk4OTk5OTk5O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC41ODgyMzUzMjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC44MDg2MTU1NztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eTowIiAvPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjkzMzQyMzksMCwwLDAuMjkzMzQyMzksNjAuNTUxODAzLDEwMi40MTcwNSkiCiAgICAgICBpZD0iZzU0ODYiPgogICAgICA8ZwogICAgICAgICBpZD0iZzMiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgICAgICBkPSJtIDQxLjUzNCwyOC42NiBoIDEuOTU3IEMgNDQuODc3LDI4LjY2IDQ2LDI3LjUzNiA0NiwyNi4xNSB2IC02LjMgYyAwLC0xLjM4NSAtMS4xMjQsLTIuNTA5IC0yLjUwOSwtMi41MDkgSCA0MS41NCB2IDAuMDA2IEMgNDEuMTQ4LDE2LjE0IDQwLjY4NywxNC45ODMgNDAuMTAzLDEzLjg4OSBsIDEuMzgxLC0xLjM4MSBjIDAuOTc5LC0wLjk4IDAuOTc5LC0yLjU2OSAwLC0zLjU0OSBMIDM3LjA0LDQuNTE3IGMgLTAuOTc5LC0wLjk3OSAtMi41NjcsLTAuOTc5IC0zLjU0NywwIGwgLTEuMzgyLDEuMzggQyAzMS4wMTcsNS4zMTMgMjkuODYxLDQuODUyIDI4LjY1NCw0LjQ2MSBIIDI4LjY2IFYgMi41MSBDIDI4LjY2LDEuMTI0IDI3LjUzNywwIDI2LjE1LDAgaCAtNi4zIGMgLTEuMzg2LDAgLTIuNTA5LDEuMTI0IC0yLjUwOSwyLjUxIHYgMS45NTUgbCAwLjAxNCwtMTBlLTQgYyAtMS4yMDcsMC4zNjcgLTIuMzYzLDAuODUgLTMuNDU4LDEuNDM1IEwgMTIuNTE2LDQuNTE4IGMgLTAuOTgsLTAuOTc5IC0yLjU2OCwtMC45NzkgLTMuNTQ4LDAgTCA0LjUyNSw4Ljk2MSBDIDMuNTQ2LDkuOTQgMy41NDUsMTEuNTI3IDQuNTIzLDEyLjUwNyBMIDUuOSwxMy44ODkgQyA1LjMxNiwxNC45ODMgNC44NTEsMTYuMTQgNC40NiwxNy4zNDYgViAxNy4zNDEgSCAyLjUwOSBDIDEuMTI0LDE3LjM0MSAwLDE4LjQ2NSAwLDE5Ljg1IHYgNi4zMDEgYyAwLDEuMzg3IDEuMTI0LDIuNTExIDIuNTA5LDIuNTExIEggNC40NzMgTCA0LjQ2NywyOC42NDcgYyAwLjM2NywxLjIwNyAwLjg1MywyLjM2MiAxLjQzNiwzLjQ1NyBsIC0xLjM4LDEuMzgxIGMgLTAuOTgsMC45NzkgLTAuOTc5LDIuNTY3IDAsMy41NDcgbCA0LjQ0Myw0LjQ0MiBjIDAuOTc5LDAuOTc5IDIuNTY4LDAuOTc5IDMuNTQ4LDAgbCAxLjM4MSwtMS4zODEgYyAxLjA5NCwwLjU4NCAyLjI1MSwxLjA3MiAzLjQ1OCwxLjQzOCBsIC0wLjAxNCwtMC4wMDYgdiAxLjk2NSBjIDAsMS4zODcgMS4xMjMsMi41MSAyLjUwOSwyLjUxIGggNi4zIGMgMS4zODcsMCAyLjUxLC0xLjEyMyAyLjUxLC0yLjUxIHYgLTEuOTUgaCAtMC4wMDYgYyAxLjIwNywtMC4zOTIgMi4zNjMsLTAuODU2IDMuNDU3LC0xLjQ0IGwgMS4zODEsMS4zNzkgYyAwLjk4LDAuOTc5IDIuNTY4LDAuOTc5IDMuNTQ3LDAgbCA0LjQ0MywtNC40NDUgYyAwLjk3OSwtMC45NzkgMC45NzksLTIuNTY2IDAsLTMuNTQ3IGwgLTEuMzgzLC0xLjM4MyBjIDAuNTg0LC0xLjA5NCAxLjA2OCwtMi4yNSAxLjQzNiwtMy40NTcgeiBNIDIzLjAyMSwzNi43MTQgQyAxNS40NDQsMzYuNzIzIDkuMjc4LDMwLjU1NyA5LjI4NywyMi45OCA5LjI5NiwxNS40NDEgMTUuNDUsOS4yODcgMjIuOTg5LDkuMjc4IGMgNy41NzgsLTAuMDA5IDEzLjc0NCw2LjE1NyAxMy43MzQsMTMuNzM0IC0wLjAxLDcuNTM5IC02LjE2MiwxMy42OTMgLTEzLjcwMiwxMy43MDIgeiIKICAgICAgICAgICBpZD0icGF0aDUiIC8+CiAgICAgIDwvZz4KICAgICAgPGcKICAgICAgICAgaWQ9Imc3IiAvPgogICAgICA8ZwogICAgICAgICBpZD0iZzkiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTEiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTMiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTUiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTciIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMTkiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjEiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjMiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjUiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjciIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMjkiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMzEiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMzMiIC8+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMzUiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNzMuMDU4cHgiIGhlaWdodD0iNzMuMDU4cHgiIHZpZXdCb3g9IjAgMCA3My4wNTggNzMuMDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3My4wNTggNzMuMDU4OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iRXllIj4KCQk8Zz4KCQkJPHBhdGggZD0iTTcyLjg5MywzNS45NjVjLTAuNTgtMC45MjUtMTQuNDMyLTIyLjU0MS0zNS4xNi0yMi41NDFoLTIuNDA2Yy0yMC43MjksMC0zNC41OCwyMS42MTYtMzUuMTU5LDIyLjU0MQoJCQkJYy0wLjIyMywwLjM0Ny0wLjIyMywwLjc5LDAsMS4xMzdjMC41NzksMC45MTcsMTQuNDMyLDIyLjUzMiwzNS4xNTksMjIuNTMyaDIuNDA2YzIwLjcyOSwwLDM0LjU4LTIxLjYxNSwzNS4xNTktMjIuNTMyCgkJCQlDNzMuMTEzLDM2Ljc1NSw3My4xMTMsMzYuMzEyLDcyLjg5MywzNS45NjV6IE00NS4yNjcsMzYuNTI5YzAsNC42OS0zLjkyLDguNTA2LTguNzM2LDguNTA2Yy00LjgxNywwLTguNzM1LTMuODEyLTguNzM1LTguNTA2CgkJCQljMC00LjY4NywzLjkxOC04LjUwOCw4LjczNS04LjUwOEM0MS4zNDcsMjguMDIyLDQ1LjI2NywzMS44NDQsNDUuMjY3LDM2LjUyOXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgd2lkdGg9IjQ3MS42MDhweCIKICAgaGVpZ2h0PSI0NzEuNjA4cHgiCiAgIHZpZXdCb3g9IjAgMCA0NzEuNjA4IDQ3MS42MDgiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MS42MDggNDcxLjYwODsiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJ1bmRvLnN2ZyI+PG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnMzOSIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyMjkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODE2IgogICAgIGlkPSJuYW1lZHZpZXczNyIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMC41MDA0MTU2IgogICAgIGlua3NjYXBlOmN4PSIyMzUuODA0IgogICAgIGlua3NjYXBlOmN5PSIyMzUuODA0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iQ2FwYV8xIiAvPjxnCiAgICAgaWQ9ImczIj48cGF0aAogICAgICAgZD0ibSAzODQuNTM1MTksOTEuMDY3NzQ0IGMgLTgxLjQ1OTU0LC04MS40NTY4NzkxIC0yMTQuMDA4MDcsLTgxLjQ1Njg3OTEgLTI5NS40NjU4MjgsMCAtODEuNDU3NzY0MSw4MS40NTY4NzYgLTgxLjQ1Njg3ODEsMjE0LjAxMTYwNiAwLDI5NS40NjU4MjYgODEuNDU2ODY4LDgxLjQ1OTUzIDIxNC4wMDU0MDgsODEuNDU5NTMgMjk1LjQ2NTgyOCwwIDgxLjQ1OTUzLC04MS40NTMzNCA4MS40NTk1MywtMjE0LjAwMjc1IDAsLTI5NS40NjU4MjYgeiBNIDM2OC4zMjg4MywzNzAuMzM4NzIgYyAtNzIuNTE4NTksNzIuNTE4NTkgLTE5MC41MzYzLDcyLjUxODU5IC0yNjMuMDY2MzksMCAtNzIuNTE2ODE3LC03Mi41MzAwOSAtNzIuNTE2ODE3LC0xOTAuNTQyNSAwLC0yNjMuMDY3MjcgNzIuNTI5MiwtNzIuNTI2NTU5IDE5MC41MzYyOSwtNzIuNTI2NTU5IDI2My4wNjYzOSwwIDcyLjUyNTY3LDcyLjUyNDc3IDcyLjUyNTY3LDE5MC41MzcxOCAwLDI2My4wNjcyNyB6IG0gMTIuNDQzNDcsLTE5OC4xMjc2IC0xMS42MjA3Niw1Mi4zMjk3MSBjIC0wLjMxMzUsMS40NDcwNiAtMS43NDM3MywyLjM0NjgyIC0zLjE4MjgyLDIuMDM1OTggLTAuNDQwMTQsLTAuMDkzOSAtMTAuOTUwMzYsLTIuMzU4MzQgLTI2LjI5ODU4LC0yLjM1ODM0IC0yNS44ODk0NCwwIC03MS42MjQxMyw2Ljg1MTg0IC0xMDEuODMxNzIsNDkuNTUzMzggbCA2LjI5NjU2LDYuMjk2NTcgNzAuNTAzODYsMzAuNTU5MTcgYyAyLjM2NTQyLDEuMDM3MDMgMy43NTc1OCwzLjUwNjk1IDMuMzkxODMsNi4wNjcyIC0wLjM1MDcsMi41NDk2MiAtMi4zNjEsNC41NTQ2MSAtNC45MzA5OSw0Ljg3MzQyIGwgLTE3NS42MDUxOSwyMi45NTkwMSBjIC0xLjc1ODc5LDAuMjMwMjUgLTMuNTM4ODMsLTAuMzc3MjYgLTQuNzk3MjYsLTEuNjI3NzIgLTEuMjY2NCwtMS4yNjE5NyAtMS44NTUzMiwtMy4wMzY3IC0xLjYzNTY5LC00LjgwNjEyIGwgMjIuOTU5LC0xNzUuNjA3ODUgYyAwLjE2NDczLC0xLjI4NSAwLjc1MzY0LC0yLjQzNjI3IDEuNjIzMywtMy4zMDUwMyAwLjg1ODE0LC0wLjg1OTAzIDEuOTg5MDQsLTEuNDQ3OTUgMy4yNjM0MSwtMS42MzEyNyAyLjU0Njk3LC0wLjM1Nzc4IDUuMDE3NzcsMS4wMzcwMyA2LjA1MzkyLDMuMzk0NDggbCAzMC41NjcxNCw3MC41MDY1MiAwLjE1NzYzLDAuMTU3NjMgYyA0Ny4xNDE5MSwtNTkuNDAxMTcgMTE1LjQxNTg0LC02Ni40ODk0NiAxNDUuMDI4MzEsLTY2LjQ4OTQ2IDEzLjU0NjkzLDAgMjYuNjk2MjIsMS4zNDUyMiAzOC4wMjM4NCwzLjg4Njg3IDEuNDUzMjYsMC4zMzIxIDIuMzYzNjUsMS43NjMyMiAyLjAzNDIxLDMuMjA1ODUgeiIKICAgICAgIGlkPSJwYXRoNSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9nPjxnCiAgICAgaWQ9Imc3IiAvPjxnCiAgICAgaWQ9Imc5IiAvPjxnCiAgICAgaWQ9ImcxMSIgLz48ZwogICAgIGlkPSJnMTMiIC8+PGcKICAgICBpZD0iZzE1IiAvPjxnCiAgICAgaWQ9ImcxNyIgLz48ZwogICAgIGlkPSJnMTkiIC8+PGcKICAgICBpZD0iZzIxIiAvPjxnCiAgICAgaWQ9ImcyMyIgLz48ZwogICAgIGlkPSJnMjUiIC8+PGcKICAgICBpZD0iZzI3IiAvPjxnCiAgICAgaWQ9ImcyOSIgLz48ZwogICAgIGlkPSJnMzEiIC8+PGcKICAgICBpZD0iZzMzIiAvPjxnCiAgICAgaWQ9ImczNSIgLz48L3N2Zz4="

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTc0IgogICBoZWlnaHQ9IjQ3Ljg4NzMxIgogICB2aWV3Qm94PSIwIDAgMTYzLjEyNSA0NC44OTQzNTQiCiAgIGlkPSJzdmc0Mzk5IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImNvbXBhcnRtZW50LnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQ0MDEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iNTcuNTQ1NjA4IgogICAgIGlua3NjYXBlOmN5PSI5NS4yMzMzOTkiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIHVuaXRzPSJweCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0NDA0Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc0LjQ1MDM1LC0zMTYuMDU0MzYpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo2LjgyOTY5OTA0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0Mjk4NSIKICAgICAgIHdpZHRoPSIxNTYuMjk1MyIKICAgICAgIGhlaWdodD0iMzguMDY0NjU1IgogICAgICAgeD0iMjc3Ljg2NTIiCiAgICAgICB5PSIzMTkuNDY5MjEiCiAgICAgICByeT0iOS44MjMxMjExIgogICAgICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjUzLjk1OTk5OSIKICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSI1My45NTk5OTkiCiAgICAgICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXHVndXJcR29vZ2xlIERyaXZlXHRvb2xiYXJcbWFjcm9tb2xlY3VsZS5wbmciIC8+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI4LjEyNXB4O2xpbmUtaGVpZ2h0OjEyNSU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTM3NXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4PSIzMDMuODM1MTEiCiAgICAgICB5PSIzNDIuNTQ0NDkiCiAgICAgICBpZD0idGV4dDgxOCI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjgxNiIKICAgICAgICAgeD0iMzAzLjgzNTExIgogICAgICAgICB5PSIzNDIuNTQ0NDkiCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6MTVweDtzdHJva2Utd2lkdGg6MC45Mzc1cHgiPkNvbXBhcnRtZW50PC90c3Bhbj48L3RleHQ+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTc0IgogICBoZWlnaHQ9IjQ0LjQ0MjgyMiIKICAgdmlld0JveD0iMCAwIDE2My4xMjUgNDEuNjY1MTQ2IgogICBpZD0ic3ZnNDM5OSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJjb21wbGV4LnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQ0MDEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iNTUuODIzMzUzIgogICAgIGlua3NjYXBlOmN5PSI5My41MTExNjYiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIHVuaXRzPSJweCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0NDA0Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc2LjA2NDk3LC0zMTcuNjY4OTcpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozLjIzMTI2OTg0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0Mjk4NSIKICAgICAgIHdpZHRoPSIxNTkuODkzNzQiCiAgICAgICBoZWlnaHQ9IjM4LjQzMzg3NiIKICAgICAgIHg9IjI3Ny42ODA2IgogICAgICAgeT0iMzE5LjI4NDYxIgogICAgICAgcnk9IjAiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteGRwaT0iNTMuOTU5OTk5IgogICAgICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjUzLjk1OTk5OSIKICAgICAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcdWd1clxHb29nbGUgRHJpdmVcdG9vbGJhclxtYWNyb21vbGVjdWxlLnBuZyIgLz4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MjguMTI1cHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC45Mzc1cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIHg9IjMyNC43MTYwOSIKICAgICAgIHk9IjM0Mi42OTEwMSIKICAgICAgIGlkPSJ0ZXh0ODE4Ij48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuODE2IgogICAgICAgICB4PSIzMjQuNzE2MDkiCiAgICAgICAgIHk9IjM0Mi42OTEwMSIKICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxNXB4O3N0cm9rZS13aWR0aDowLjkzNzVweCI+Q29tcGxleDwvdHNwYW4+PC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTczLjk5OTM3IgogICBoZWlnaHQ9IjQ1LjA4MjAwMSIKICAgdmlld0JveD0iMCAwIDE2My4xMjQ0MiA0Mi4yNjQzNzYiCiAgIGlkPSJzdmc0Mzk5IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImZhbWlseS5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0NDAxIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIxLjQiCiAgICAgaW5rc2NhcGU6Y3g9IjE3MS44OTQ3NyIKICAgICBpbmtzY2FwZTpjeT0iOTMuNTExMTkyIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICB1bml0cz0icHgiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDQwNCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ni4wNjQ5OCwtMzE3LjA2OTc3KSI+CiAgICA8cmVjdAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzkzOTM5MztzdHJva2Utd2lkdGg6My4yNTUxMTgzNztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icmVjdDI5ODUiCiAgICAgICB3aWR0aD0iMTU5Ljg2OTI5IgogICAgICAgaGVpZ2h0PSIzOS4wMDkyNTgiCiAgICAgICB4PSIyNzcuNjkyNTQiCiAgICAgICB5PSIzMTguNjk3MzMiCiAgICAgICByeT0iMCIKICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI1My45NTk5OTkiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iNTMuOTU5OTk5IgogICAgICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJDOlxVc2Vyc1x1Z3VyXEdvb2dsZSBEcml2ZVx0b29sYmFyXG1hY3JvbW9sZWN1bGUucG5nIiAvPgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToyOC4xMjVweDtsaW5lLWhlaWdodDoxMjUlO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjkzNzVweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgeD0iMzMyLjg2MDMyIgogICAgICAgeT0iMzQyLjM5MTQyIgogICAgICAgaWQ9InRleHQ4MTgiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW44MTYiCiAgICAgICAgIHg9IjMzMi44NjAzMiIKICAgICAgICAgeT0iMzQyLjM5MTQyIgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjE1cHg7c3Ryb2tlLXdpZHRoOjAuOTM3NXB4Ij5GYW1pbHk8L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTc0IgogICBoZWlnaHQ9IjQ0LjQ0MjgyMiIKICAgdmlld0JveD0iMCAwIDE2My4xMjUgNDEuNjY1MTQ2IgogICBpZD0ic3ZnNDM5OSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJnZW5lLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQ0MDEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iNTUuODIzMzUzIgogICAgIGlua3NjYXBlOmN5PSI5My41MTExNjYiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIHVuaXRzPSJweCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE0NDA0Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc2LjA2NDk3LC0zMTcuNjY4OTcpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozLjIzMTI2OTg0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0Mjk4NSIKICAgICAgIHdpZHRoPSIxNTkuODkzNzQiCiAgICAgICBoZWlnaHQ9IjM4LjQzMzg3NiIKICAgICAgIHg9IjI3Ny42ODA2IgogICAgICAgeT0iMzE5LjI4NDYxIgogICAgICAgcnk9IjkuOTE4NDAzNiIKICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI1My45NTk5OTkiCiAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iNTMuOTU5OTk5IgogICAgICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJDOlxVc2Vyc1x1Z3VyXEdvb2dsZSBEcml2ZVx0b29sYmFyXG1hY3JvbW9sZWN1bGUucG5nIiAvPgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToyOC4xMjVweDtsaW5lLWhlaWdodDoxMjUlO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjkzNzVweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgeD0iMzM4LjA3NTQ3IgogICAgICAgeT0iMzQzLjk0NzExIgogICAgICAgaWQ9InRleHQ4MTgiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW44MTYiCiAgICAgICAgIHg9IjMzOC4wNzU0NyIKICAgICAgICAgeT0iMzQzLjk0NzExIgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjE1cHg7c3Ryb2tlLXdpZHRoOjAuOTM3NXB4Ij5HZW5lPC90c3Bhbj48L3RleHQ+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTc0IgogICBoZWlnaHQ9IjQ0LjQ0MjgyMiIKICAgdmlld0JveD0iMCAwIDE2My4xMjUgNDEuNjY1MTQ2IgogICBpZD0ic3ZnNDM5OSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJwcm9jZXNzLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQ0MDEiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuNCIKICAgICBpbmtzY2FwZTpjeD0iLTYwLjI0ODA3NiIKICAgICBpbmtzY2FwZTpjeT0iOTMuNTExMTY2IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICB1bml0cz0icHgiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDQwNCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ni4wNjQ5NywtMzE3LjY2ODk3KSI+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjI4LjEyNXB4O2xpbmUtaGVpZ2h0OjEyNSU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuOTM3NXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4PSIzMjguNzE1MTIiCiAgICAgICB5PSIzNDMuODQwOTEiCiAgICAgICBpZD0idGV4dDgxOCI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjgxNiIKICAgICAgICAgeD0iMzI4LjcxNTEyIgogICAgICAgICB5PSIzNDMuODQwOTEiCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6MTVweDtzdHJva2Utd2lkdGg6MC45Mzc1cHgiPlByb2Nlc3M8L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0gIjQ0IiBoZWlnaHQ9ICI0NCIgdmlld0JveD0iMCAwIDQ0IDQ0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDQgNDQiPgogIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjIyIiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0ibTIyLDBjLTEyLjIsMC0yMiw5LjgtMjIsMjJzOS44LDIyIDIyLDIyIDIyLTkuOCAyMi0yMi05LjgtMjItMjItMjJ6bS0xLjMsMTkuM2wtMS40LDEuNGMtMC40LDAuNC0xLDAuNC0xLjQsMGwtNC00Yy0wLjMtMC4zLTAuOS0wLjEtMC45LDAuNHYxYzAsMC42LTAuNCwxLTEsMWgtMmMtMC42LDAtMS0wLjQtMS0xdi04YzAtMC42IDAuNC0xIDEtMWg4YzAuNiwwIDEsMC40IDEsMXYyYzAsMC42LTAuNCwxLTEsMWgtMWMtMC40LDAtMC43LDAuNS0wLjQsMC45bDQsNGMwLjUsMC4zIDAuNSwwLjkgMC4xLDEuM3ptMTQuMywxNC43YzAsMC42LTAuNCwxLTEsMWgtOGMtMC42LDAtMS0wLjQtMS0xdi0yYzAtMC42IDAuNC0xIDEtMWgxYzAuNCwwIDAuNy0wLjUgMC40LTAuOWwtNC00Yy0wLjQtMC40LTAuNC0xIDAtMS40bDEuNC0xLjRjMC40LTAuNCAxLTAuNCAxLjQsMGw0LDRjMC4zLDAuMyAwLjksMC4xIDAuOS0wLjR2LTFjMC0wLjYgMC40LTEgMS0xaDJjMC42LDAgMSwwLjQgMSwxdjguMWgtMC4xeiIvPgo8L3N2Zz4K"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJhY3RpdmF0ZXMuc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXHVndXJcRGVza3RvcFxpbnRlcmFjdGlvbi1sZWdlbmQuMjAxNi4wNC4wMS5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIzMDAiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIzMDAiCiAgIHZpZXdCb3g9IjAgMCA2MC45Mzc1MDEgMTguNTUwNTE2Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJUcmlhbmdsZU91dEwiCiAgICAgICBvcmllbnQ9ImF1dG8iCiAgICAgICByZWZZPSIwIgogICAgICAgcmVmWD0iMCIKICAgICAgIGlkPSJtYXJrZXIxMjAyIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgxMjAwIgogICAgICAgICBkPSJNIDUuNzcsMCAtMi44OCw1IFYgLTUgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wMDAwMDAwM3B0O3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC44KSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvbWFya2VyPgogICAgPG1hcmtlcgogICAgICAgaW5rc2NhcGU6c3RvY2tpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgb3JpZW50PSJhdXRvIgogICAgICAgcmVmWT0iMCIKICAgICAgIHJlZlg9IjAiCiAgICAgICBpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGg5NTkiCiAgICAgICAgIGQ9Ik0gNS43NywwIC0yLjg4LDUgViAtNSBaIgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDAzcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9tYXJrZXI+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiCiAgICAgaW5rc2NhcGU6Y3g9Ii00LjgxMTAzNTciCiAgICAgaW5rc2NhcGU6Y3k9IjE4LjQ2ODYyMSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGUgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3NS42NDI0NywtMjgxLjI5NjQ5KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6My43NDk5OTk5MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI3NS42NDI0NywyOTAuNTcxNzUgaCA0Ny4zNTA4OSIKICAgICAgIGlkPSJwYXRoNDk0OSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOnR5cGU9InN0YXIiCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6My43NTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIgogICAgICAgaWQ9InBhdGg0OTUzIgogICAgICAgc29kaXBvZGk6c2lkZXM9IjMiCiAgICAgICBzb2RpcG9kaTpjeD0iMjEyLjQyOTAyIgogICAgICAgc29kaXBvZGk6Y3k9IjI1My43OTgyNiIKICAgICAgIHNvZGlwb2RpOnIxPSIxMS4wNTczNDciCiAgICAgICBzb2RpcG9kaTpyMj0iNS41Mjg2NzM2IgogICAgICAgc29kaXBvZGk6YXJnMT0iMC45MTQ0NDc5NiIKICAgICAgIHNvZGlwb2RpOmFyZzI9IjEuOTYxNjQ1NSIKICAgICAgIGlua3NjYXBlOmZsYXRzaWRlZD0idHJ1ZSIKICAgICAgIGlua3NjYXBlOnJvdW5kZWQ9IjAiCiAgICAgICBpbmtzY2FwZTpyYW5kb21pemVkPSIwIgogICAgICAgZD0ibSAyMTkuMTc2NTIsMjYyLjU1ODE4IC0xNy43MDc1NywtNy4yOTYzNyAxNS4xNzI2MiwtMTEuNjg3MDEgeiIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTIuNjk0NjIxOSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iMC4wNzg0ODk2NTMiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjM5NDM0MDk4LDAuODk5Nzc1MDQsLTAuOTE4OTY0MTksMC4zODYxMDY2Myw0NzQuOTg1ODMsMS4zNjE3MzI5KSIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJiaW5kcy5zdmciCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcdWd1clxEZXNrdG9wXGludGVyYWN0aW9uLWxlZ2VuZC4yMDE2LjA0LjAxLnBuZyIKICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjMwMCIKICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjMwMCIKICAgdmlld0JveD0iMCAwIDYwLjkzNzUwMSAxOC41NTA1MTYiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxtYXJrZXIKICAgICAgIGlua3NjYXBlOnN0b2NraWQ9IlRyaWFuZ2xlT3V0TCIKICAgICAgIG9yaWVudD0iYXV0byIKICAgICAgIHJlZlk9IjAiCiAgICAgICByZWZYPSIwIgogICAgICAgaWQ9Im1hcmtlcjEyMDIiCiAgICAgICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIKICAgICAgIGlua3NjYXBlOmlzc3RvY2s9InRydWUiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDEyMDAiCiAgICAgICAgIGQ9Ik0gNS43NywwIC0yLjg4LDUgViAtNSBaIgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDAzcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJUcmlhbmdsZU91dEwiCiAgICAgICBvcmllbnQ9ImF1dG8iCiAgICAgICByZWZZPSIwIgogICAgICAgcmVmWD0iMCIKICAgICAgIGlkPSJUcmlhbmdsZU91dEwiCiAgICAgICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIKICAgICAgIGlua3NjYXBlOmlzc3RvY2s9InRydWUiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDk1OSIKICAgICAgICAgZD0iTSA1Ljc3LDAgLTIuODgsNSBWIC01IFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuOCkiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8L21hcmtlcj4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIKICAgICBpbmtzY2FwZTpjeD0iLTQuODExMDM1NyIKICAgICBpbmtzY2FwZTpjeT0iMTguNDY4NjIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE3Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc1LjY0MjQ3LC0yODEuMjk2NDkpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozLjc1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMjc1LjY0MjQ3LDI5MC41NzE3NSBoIDYwLjkzNzUiCiAgICAgICBpZD0icGF0aDQ5NDkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpbmR1Y2VzLnN2ZyIKICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJDOlxVc2Vyc1x1Z3VyXERlc2t0b3BcaW50ZXJhY3Rpb24tbGVnZW5kLjIwMTYuMDQuMDEucG5nIgogICBpbmtzY2FwZTpleHBvcnQteGRwaT0iMzAwIgogICBpbmtzY2FwZTpleHBvcnQteWRwaT0iMzAwIgogICB2aWV3Qm94PSIwIDAgNjAuOTM3NTAxIDE4LjU1MDUxNiI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiPgogICAgPG1hcmtlcgogICAgICAgaW5rc2NhcGU6c3RvY2tpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgb3JpZW50PSJhdXRvIgogICAgICAgcmVmWT0iMCIKICAgICAgIHJlZlg9IjAiCiAgICAgICBpZD0ibWFya2VyMTIwMiIKICAgICAgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIgogICAgICAgaW5rc2NhcGU6aXNzdG9jaz0idHJ1ZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMTIwMCIKICAgICAgICAgZD0iTSA1Ljc3LDAgLTIuODgsNSBWIC01IFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuOCkiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIKICAgICAgIGlua3NjYXBlOnN0b2NraWQ9IlRyaWFuZ2xlT3V0TCIKICAgICAgIG9yaWVudD0iYXV0byIKICAgICAgIHJlZlk9IjAiCiAgICAgICByZWZYPSIwIgogICAgICAgaWQ9IlRyaWFuZ2xlT3V0TCIKICAgICAgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIgogICAgICAgaW5rc2NhcGU6aXNzdG9jaz0idHJ1ZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoOTU5IgogICAgICAgICBkPSJNIDUuNzcsMCAtMi44OCw1IFYgLTUgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wMDAwMDAwM3B0O3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC44KSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvbWFya2VyPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNy45MTk1OTU5IgogICAgIGlua3NjYXBlOmN4PSItNC44MTEwMzU3IgogICAgIGlua3NjYXBlOmN5PSIxOC40Njg2MjEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzUuNjQyNDcsLTI4MS4yOTY0OSkiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjMuNzQ5OTk5OTM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5OjcuNDk5OTk5ODcsNy40OTk5OTk4NztzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNob2Zmc2V0OjAiCiAgICAgICBkPSJtIDI3NS42NDI0NywyOTAuNTcxNzUgaCA0Ny4zNTA4OSIKICAgICAgIGlkPSJwYXRoNDk0OSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOnR5cGU9InN0YXIiCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6My43NTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIgogICAgICAgaWQ9InBhdGg0OTUzIgogICAgICAgc29kaXBvZGk6c2lkZXM9IjMiCiAgICAgICBzb2RpcG9kaTpjeD0iMjEyLjQyOTAyIgogICAgICAgc29kaXBvZGk6Y3k9IjI1My43OTgyNiIKICAgICAgIHNvZGlwb2RpOnIxPSIxMS4wNTczNDciCiAgICAgICBzb2RpcG9kaTpyMj0iNS41Mjg2NzM2IgogICAgICAgc29kaXBvZGk6YXJnMT0iMC45MTQ0NDc5NiIKICAgICAgIHNvZGlwb2RpOmFyZzI9IjEuOTYxNjQ1NSIKICAgICAgIGlua3NjYXBlOmZsYXRzaWRlZD0idHJ1ZSIKICAgICAgIGlua3NjYXBlOnJvdW5kZWQ9IjAiCiAgICAgICBpbmtzY2FwZTpyYW5kb21pemVkPSIwIgogICAgICAgZD0ibSAyMTkuMTc2NTIsMjYyLjU1ODE4IC0xNy43MDc1NywtNy4yOTYzNyAxNS4xNzI2MiwtMTEuNjg3MDEgeiIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTIuNjk0NjIxOSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iMC4wNzg0ODk2NTMiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjM5NDM0MDk4LDAuODk5Nzc1MDQsLTAuOTE4OTY0MTksMC4zODYxMDY2Myw0NzQuOTg1ODMsMS4zNjE3MzI5KSIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpbmhpYml0cy5zdmciCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcdWd1clxEZXNrdG9wXGludGVyYWN0aW9uLWxlZ2VuZC4yMDE2LjA0LjAxLnBuZyIKICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjMwMCIKICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjMwMCIKICAgdmlld0JveD0iMCAwIDYwLjkzNzUwMSAxOC41NTA1MTYiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxtYXJrZXIKICAgICAgIGlua3NjYXBlOnN0b2NraWQ9IlN0b3BMIgogICAgICAgb3JpZW50PSJhdXRvIgogICAgICAgcmVmWT0iMC4wIgogICAgICAgcmVmWD0iMC4wIgogICAgICAgaWQ9IlN0b3BMIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGg5ODYiCiAgICAgICAgIGQ9Ik0gMC4wLDUuNjUgTCAwLjAsLTUuNjUiCiAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjAuNzU7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjFwdDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuOCkiIC8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIKICAgICAgIGlua3NjYXBlOnN0b2NraWQ9IlRyaWFuZ2xlT3V0TCIKICAgICAgIG9yaWVudD0iYXV0byIKICAgICAgIHJlZlk9IjAiCiAgICAgICByZWZYPSIwIgogICAgICAgaWQ9Im1hcmtlcjEyMDIiCiAgICAgICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIKICAgICAgIGlua3NjYXBlOmlzc3RvY2s9InRydWUiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDEyMDAiCiAgICAgICAgIGQ9Ik0gNS43NywwIC0yLjg4LDUgViAtNSBaIgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDAzcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJUcmlhbmdsZU91dEwiCiAgICAgICBvcmllbnQ9ImF1dG8iCiAgICAgICByZWZZPSIwIgogICAgICAgcmVmWD0iMCIKICAgICAgIGlkPSJUcmlhbmdsZU91dEwiCiAgICAgICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZSIKICAgICAgIGlua3NjYXBlOmlzc3RvY2s9InRydWUiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDk1OSIKICAgICAgICAgZD0iTSA1Ljc3LDAgLTIuODgsNSBWIC01IFoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDAwMDAwMDNwdDtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuOCkiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8L21hcmtlcj4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjcuOTE5NTk1OSIKICAgICBpbmtzY2FwZTpjeD0iLTQuODExMDM1NyIKICAgICBpbmtzY2FwZTpjeT0iMTMuOTIyOTM0IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE3Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZSAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc1LjY0MjQ3LC0yODEuMjk2NDkpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozLjc0OTk5OTkzO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMjc1LjY0MjQ3LDI5MC41NzE3NSBoIDU5Ljc4MDUiCiAgICAgICBpZD0icGF0aDQ5NDkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC43NDUwOTgwNDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi43NzU5Mzc1NjtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTo4LjMyNzgxMjQ2LCAyLjc3NTkzNzQ5O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIgogICAgICAgaWQ9InJlY3Q0OTgxIgogICAgICAgd2lkdGg9IjAuOTc0MTY5NTUiCiAgICAgICBoZWlnaHQ9IjE1Ljg4OTcwMyIKICAgICAgIHg9IjMzNC4yMTc4MyIKICAgICAgIHk9IjI4Mi42MjY4OSIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNjUiCiAgIGhlaWdodD0iMTkuNzg3MjE4IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJyZXByZXNzZXMuc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXHVndXJcRGVza3RvcFxpbnRlcmFjdGlvbi1sZWdlbmQuMjAxNi4wNC4wMS5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIzMDAiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIzMDAiCiAgIHZpZXdCb3g9IjAgMCA2MC45Mzc1MDEgMTguNTUwNTE2Ij4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJTdG9wTCIKICAgICAgIG9yaWVudD0iYXV0byIKICAgICAgIHJlZlk9IjAuMCIKICAgICAgIHJlZlg9IjAuMCIKICAgICAgIGlkPSJTdG9wTCIKICAgICAgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlIgogICAgICAgaW5rc2NhcGU6aXNzdG9jaz0idHJ1ZSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoOTg2IgogICAgICAgICBkPSJNIDAuMCw1LjY1IEwgMC4wLC01LjY1IgogICAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eTowLjc1O2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIiAvPgogICAgPC9tYXJrZXI+CiAgICA8bWFya2VyCiAgICAgICBpbmtzY2FwZTpzdG9ja2lkPSJUcmlhbmdsZU91dEwiCiAgICAgICBvcmllbnQ9ImF1dG8iCiAgICAgICByZWZZPSIwIgogICAgICAgcmVmWD0iMCIKICAgICAgIGlkPSJtYXJrZXIxMjAyIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgxMjAwIgogICAgICAgICBkPSJNIDUuNzcsMCAtMi44OCw1IFYgLTUgWiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wMDAwMDAwM3B0O3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC44KSIKICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDwvbWFya2VyPgogICAgPG1hcmtlcgogICAgICAgaW5rc2NhcGU6c3RvY2tpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgb3JpZW50PSJhdXRvIgogICAgICAgcmVmWT0iMCIKICAgICAgIHJlZlg9IjAiCiAgICAgICBpZD0iVHJpYW5nbGVPdXRMIgogICAgICAgc3R5bGU9Im92ZXJmbG93OnZpc2libGUiCiAgICAgICBpbmtzY2FwZTppc3N0b2NrPSJ0cnVlIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGg5NTkiCiAgICAgICAgIGQ9Ik0gNS43NywwIC0yLjg4LDUgViAtNSBaIgogICAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjAwMDAwMDAzcHQ7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjgpIgogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPC9tYXJrZXI+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI3LjkxOTU5NTkiCiAgICAgaW5rc2NhcGU6Y3g9Ii0yNS4zMjk3NTkiCiAgICAgaW5rc2NhcGU6Y3k9IjEzLjkyMjkzNCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGUgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3NS42NDI0NywtMjgxLjI5NjQ5KSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6My43NTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6Ny40OTk5OTk4NywgNy40OTk5OTk4NztzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDI3NS42NDI0NywyOTAuNTcxNzUgaCA1OS43ODA1IgogICAgICAgaWQ9InBhdGg0OTQ5IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cmVjdAogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNzQ1MDk4MDQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuNzc1OTM3NTY7c3Ryb2tlLWxpbmVjYXA6c3F1YXJlO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6OC4zMjc4MTIzNSwgMi43NzU5Mzc0NTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7cGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIKICAgICAgIGlkPSJyZWN0NDk4MSIKICAgICAgIHdpZHRoPSIwLjk3NDE2OTU1IgogICAgICAgaGVpZ2h0PSIxNS44ODk3MDMiCiAgICAgICB4PSIzMzIuMzQyODMiCiAgICAgICB5PSIyODIuNjI2ODkiIC8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-toastify/dist/ReactToastify.min.css");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAh0AAABxCAYAAABxyRHvAAAABGdBTUEAALGPC/xhBQAAQABJREFUeAHt3QeYLEdxAOBBPBtjbIxlA8YEP4GMyME2CAS2HgIEmCSRjEWQSCKDyAgEepgghIgig0GPnDMyGR6YnHMGCRBRIGOwwXlcf0Mtc3Oze7t3t3v33nV93+7szvR0V1dXV1VXV3efrQ1oNin88Ic/bPLzpS99qfnyl7/cfOtb32rOOOOM5sc//nHz05/+tPnlL3/ZZBXOdrazNec85zmb85znPM15z3ve5k//9E+b7du3NwcccEBzyUtesjn/+c/fnO985yvXffbZZ5PWuqJVKVApUClQKVApsFdSYOfZNovR8ZOf/KT5+te/3nz6059uPvKRjxQD4wc/+EExOn7xi1+sC/UZJIyOP/mTP2kufvGLN1e+8pWbK17xis3+++9fDJF1KaRmUilQKVApUClQKVApMESBjTU6vvrVrzbvf//7m7e97W3F2GB0/N///d8QonO9d9GLXrS57GUv2xx66KHNjh07mktd6lJzLa9mXilQKVApUClQKbAFKbB4o+P73/9+8/a3v7155Stf2Xz4wx9uzjrrrE1Fd1MzV7rSlZrDDz+8ud71rlemZzYVghWZSoFKgUqBSoFKgT2TAoszOr7whS80u3btal796lc3p59++qYnl/iQC17wgs0NbnCD5sgjj2yucpWrbHqcK4KVApUClQKVApUCm5gC8zc6Pve5zzUnn3xyMTYEfq4FxGSc+9znbn73d3+3+Z3f+Z3mt37rt5pt27Y1DATwv//7v83//M//NP/xH/9RAkx//vOfNz/72c/WUmR5V3m8Hve4xz3K9MuaM6wZVApUClQKVApUCmw9CszP6Pje977XPOEJT2ie//znl1Ums9D2j//4j5s/+7M/a8RaXPrSl24udrGLNRe5yEWaP/iDPxgZHec4xzma3/7t315idDA40uhgeKTR8aMf/ag57bTTGitgvvKVrzTf+c53yioYaWcBRs/Nbnaz5gEPeECJAZnl3Zq2UqBSoFKgUqBSYItTYP2NDt6GF77whc0//MM/TD2N8nu/93vN5S53ueav//qvm4MPPrisJrHUlSdjHsAIsfT2U5/6VPOud72r+cQnPtF84xvfmKooXhXLce95z3uWD0OoQqVApUClQKVApUClwIoUWF+j49vf/nbzoAc9qHn5y1++Ysm8FAceeGDxHBxyyCFlxchG7Z1x5plnNp/85Ceb17/+9c1b3vKWYpCsVIGzn/3szdWudrXmhBNOaA466KCVktfnlQKVApUClQKVAludAutndFj2KubBstdJwEtgiuI2t7lNMTo2ytAYh+N3v/vd5tRTT21e9KIXNR/4wAdGG4+NS68+xx9/fHOXu9ylYYhUqBSoFKgUqBSoFKgUGKTA+hgdT33qU5tjjz22+fd///fBUtwUp3G7292uufOd71xiNMYm3CQPxIS89a1vbdTt3e9+90SsTAPd8Y53bB772MeWmJOJievDSoFKgUqBSoFKga1JgbUZHQIxH/rQhzYnnXTSWI+A1SVHHHFE8+AHP7hsRb6n0Znx8ZrXvKY58cQTGytxxoF6Xv/612+e8YxnlO3Xx6Wr9ysFKgUqBSoFKgW2KAVWb3T853/+Z3PMMcc0z3rWs8bS7hKXuESJeTjssMPGptkTHjjbRfDpk570pObpT39682//9m+DaJteEQz7ghe8oKy2GUxUb1YKVApUClQKVApsTQqszuj47//+7+Ze97rXRIPjtre9bfEOOOdkbwErc+ym+sAHPrD5/Oc/P1itNDys4LnwhS88mKberBSoFKgUqBSoFNiCFNg581GrPBz3v//9Bw0Oy0n33XffEgdxyimnlIPV9iaiMiiue93rNm9+85vLlJG9QvrAMPnnf/7nEr9iP5AKlQKVApUClQKVApUCv6LATEaHGI4nP/nJzdOe9rRl9GNwOEqesWEVy2ZblbIM4VXeUE8bl4ndsFeHnVH7wPB473vf29zvfvdr/vVf/7X/uP6vFKgUqBSoFKgU2JIUOPvOgGlq7vTXN73pTUXRml7pAkVsKsGUAk/AVgDGxt/8zd8U4+pjH/tY06cJelk+/F//9V9l6/S6nHYrcEWtY6VApUClQKXABArsntro+PKXv9yI0/jxj3+8LD8eDvtaXOMa11j2bG++YcVKHgTnxNz+tuo8Hla8bI/dVS9zmcuMzojZm2lS61YpUClQKVApUCkwhgK7p5pesf+G80ZOHzgd9g//8A+b5zznORt6EBr8NmoaQ1yHGJe73/3ug9u2W+nyiEc8onHKboVKgUqBSoFKgUqBrUyBFY0O0wTPfe5zyy6dfUJRuI9+9KPL/hT9Z4v6z+Cw9fod7nCHQS/MIvBwCu1xxx3X3OQmN1kWy2K5LWPNWTSTNk9bBJ61jEqBSoFKgUqBSoGNpMCKRodplcc97nHLcBQoStHbYXSjgBK3OZm9M2zgZSvyoemfReDn4LfHPOYxzV/8xV8sK860yz/90z81r3jFK8ZuorbspXqjUqBSoFKgUqBSYC+jwNliJN6OqxNledRRRzUveclLliW58pWvXLwftjffCEiD4ylPecqS4m9605uW5bwbgZcYDlum/93f/V3zL//yL0vwEmx7qUtdqtDM6pcKlQLzogA+FMCM58Qd+cwDyAflgL4YEWi9qOBp3lh19fHbsn749HFyXIGDJitUCuypFMDT+p2PgT+e3sNWik7eHMxGWDe84Q1HgiUbylH0b3zjGzcscHScwZH4baThQeA96lGPKjuxEv5dMB113/vetzzfCEYhkH0mAcG9WmWhvn1B3y9LvTei7n089tb/+M9BhXnSs8MVr3nNa666TcfRibFhWbjl89rcfx+ruHj9HvnIRzZXvOIVx70+1X154SkCVr38Puc5z1mMKDzKmHJMwWmnnVb2Bzrf+c7XfOUrXylnIP30pz8dved9RtCtb33rctDkVIVvoUTTyIUkB/mg/7omoO8kyLSrlSuT8t5qz+z9ZBXpRz/60caO34cffnhz8YtffEl7bHKa7Bw7BNKZH//4xy8zODDQ0UcfvWkNDgQ31UIQPvvZzy4HzS2yERgWpnkYbBijC4Tyi1/84uZWt7pVc+lLX7r7aO6/CexPfOITzZlnnjm2LG0rMNiKnBQUYxP3HhA8VvBMCuiVpx1qh6agetnVv6uggDb+0pe+VPjva1/7WmlDnrdXvepVazYA+ugo6wc/+EExPPA1oyANWsqf0l8tyM806fve977iOfziF7/Y/OxnPyvZnetc52r222+/5qCDDmouf/nLFwPr+c9/ftkhWb+TjtEFN/mkQjz3uc/dHHzwwatFaa9975e//GWDV6bdyBD9KTv9GA98//vfLyv0su3HEeo85zlPaS8D1gqrowDe3rVrV9kr66yzzmroGvR3rtkFLnCB1WW6EW+Fch6E8GS0MZIw9bLks//++7dnnHHG4DvzvhkrQdp73/veS/Dp49f9Hx6PNpTsvNFaln+M0NpXv/rVbYyuluEa7t32Pve5Txsddtl787yBdte5znXaYNTSrmEALMPNvYte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"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1Ljk1OHB4IiBoZWlnaHQ9IjQ1Ljk1OHB4IiB2aWV3Qm94PSIwIDAgNDUuOTU4IDQ1Ljk1OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUuOTU4IDQ1Ljk1ODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTIyLjk3OSwwQzEwLjI4OCwwLDAsMTAuMjg5LDAsMjIuOTc5czEwLjI4OCwyMi45NzksMjIuOTc5LDIyLjk3OWMxMi42OSwwLDIyLjk3OS0xMC4yODksMjIuOTc5LTIyLjk3OVMzNS42NywwLDIyLjk3OSwweg0KCQkgTTMyLjI1MywyNi45NzdoLTUuMzAxdjUuMjg5YzAsMi4yMDctMS43NjUsMy45OTYtMy45NzIsMy45OTZjLTIuMjA2LDAtMy45NzEtMS43ODktMy45NzEtMy45OTZ2LTUuMjkxSDEzLjcxDQoJCWMtMi4yMDcsMC00LjAwNi0xLjc4OS00LjAwNi0zLjk5N2MwLTIuMjA3LDEuNzk2LTMuOTk2LDQuMDAzLTMuOTk2aDUuMzAydi01LjI4OWMwLTIuMjA4LDEuNzY1LTMuOTk3LDMuOTcxLTMuOTk3DQoJCWMyLjIwOCwwLDMuOTcyLDEuNzg5LDMuOTcyLDMuOTk3djUuMjloNS4zMDFjMi4yMDcsMCwzLjk5NywxLjc5LDMuOTk3LDMuOTk3QzM2LjI1LDI1LjE4OCwzNC40NiwyNi45NzcsMzIuMjUzLDI2Ljk3N3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iQ2FwYV8xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgdmlld0JveD0iMCAwIDYxMiA2MTIiCiAgIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZGVsZXRlLXNpbXBsZS5zdmciPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTQzIj48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNDEiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMTciCiAgICAgaWQ9Im5hbWVkdmlldzM5IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIxLjA5MDcwMDciCiAgICAgaW5rc2NhcGU6Y3g9IjI5NS4wMzQwOCIKICAgICBpbmtzY2FwZTpjeT0iMzMwLjg1NDQ4IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJDYXBhXzEiIC8+PGcKICAgICBpZD0iZzUiCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTc4ODEzNSwwLDAsMC45OTc4ODEzNSwxLjczMDQwMTIsMC45MjM3Mjg0NykiPjxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg3IgogICAgICAgZD0iTSA1ODcuODI2LDE4Ni45NjYgQyA1NzEuNzEsMTQ5LjYzNCA1NDkuODgyLDExNy4xOTggNTIyLjM0Miw4OS42NTggNDk0LjgwMiw2Mi4xMTggNDYyLjM2Niw0MC4yOSA0MjUuMDM0LDI0LjE3NCAzODcuNzAyLDguMDU4IDM0OC4wMjQsMCAzMDYsMCAyNzcuODQ4LDAgMjUwLjcxNiwzLjY3MiAyMjQuNjA0LDExLjAxNiAxOTguNDkyLDE4LjM2IDE3NC4xMTQsMjguNjYyIDE1MS40Nyw0MS45MjIgMTI4LjgyNiw1NS4xODIgMTA4LjIyMiw3MS4wOTQgODkuNjU4LDg5LjY1OCA3MS4wOTQsMTA4LjIyMiA1NS4xODIsMTI4LjgyNiA0MS45MjIsMTUxLjQ3IDI4LjY2MiwxNzQuMTE2IDE4LjM2LDE5OC40OTIgMTEuMDE2LDIyNC42MDQgMy42NzIsMjUwLjcxNiAwLDI3Ny44NDggMCwzMDYgYyAwLDI4LjE1MiAzLjY3Miw1NS4yODQgMTEuMDE2LDgxLjM5NiA3LjM0NCwyNi4xMSAxNy42NDYsNTAuNDg3IDMwLjkwNiw3My4xMzQgMTMuMjYsMjIuNjQ0IDI5LjE3Miw0My4yNDkgNDcuNzM2LDYxLjgxMiAxOC41NjQsMTguNTY0IDM5LjE2OCwzNC40NzggNjEuODEyLDQ3LjczNiAyMi42NDQsMTMuMjYgNDcuMDIyLDIzLjU2MSA3My4xMzQsMzAuOTA2IEMgMjUwLjcxNiw2MDguMzI4IDI3Ny44NDgsNjEyIDMwNiw2MTIgYyAyOC4xNTIsMCA1NS4yODQsLTMuNjcyIDgxLjM5NiwtMTEuMDE2IDI2LjExMSwtNy4zNDYgNTAuNDg4LC0xNy42NDYgNzMuMTM1LC0zMC45MDYgMjIuNjQ0LC0xMy4yNTkgNDMuMjQ5LC0yOS4xNzIgNjEuODEyLC00Ny43MzYgMTguNTY0LC0xOC41NjMgMzQuNDc4LC0zOS4xNjggNDcuNzM2LC02MS44MTIgMTMuMjYsLTIyLjY0NiAyMy41NjEsLTQ3LjAyMyAzMC45MDYsLTczLjEzNSBDIDYwOC4zMjgsMzYxLjI4NCA2MTIsMzM0LjE1MiA2MTIsMzA2IDYxMiwyNjMuOTc2IDYwMy45NDIsMjI0LjI5OCA1ODcuODI2LDE4Ni45NjYgWiBNIDQ2OC4xOCwzOTEuNjggYyAyLjA0LDIuMDQgMy4wNjMsNC4yODQgMy4wNjMsNi43MzIgMCwyLjQ0OCAtMS4wMjEsNC40ODggLTMuMDYzLDYuMTIgbCAtNTkuOTc2LDYwLjU4OCBjIC0xLjYzMSwxLjYzMiAtMy44NzYsMi40NDggLTYuNzMyLDIuNDQ4IC0yLjg1NCwwIC00Ljg5NSwtMC44MTYgLTYuMTIsLTIuNDQ4IEwgMzA5LjA2LDM3OC44MjggMjIzLjM4LDQ2NS4xMiBjIC0yLjQ0OCwxLjYzMiAtNC42OTIsMi40NDggLTYuNzMyLDIuNDQ4IC0xLjYzMiwwIC0zLjY3MiwtMC44MTYgLTYuMTIsLTIuNDQ4IGwgLTU5Ljk3NiwtNjAuNTg4IGMgLTIuMDQsLTEuMjI2IC0zLjA2LC0zLjI2NyAtMy4wNiwtNi4xMiAwLC0yLjQ0OCAxLjAyLC00LjY5MiAzLjA2LC02LjczMiBsIDg1LjY4LC04NS42OCAtODUuNjgsLTg1LjY4IGMgLTIuMDQsLTIuMDQgLTMuMDYsLTQuMjg0IC0zLjA2LC02LjczMiAwLC0yLjg1NiAxLjAyLC00Ljg5NiAzLjA2LC02LjEyIGwgNTkuOTc2LC02MC41ODggYyAxLjYzMiwtMS42MzIgMy42NzIsLTIuNDQ4IDYuMTIsLTIuNDQ4IDIuNDQ4LDAgNC42OTIsMC44MTYgNi43MzIsMi40NDggbCA4NS42OCw4Ni4yOTIgODYuMjkyLC04Ni4yOTIgYyAxLjYzNSwtMS42MzIgMy42NzUsLTIuNDQ4IDYuMTIsLTIuNDQ4IDIuNDQ4LDAgNC42OTIsMC44MTYgNi43MzIsMi40NDggbCA1OS45NzYsNjAuNTg4IGMgMi4wNCwxLjYzMiAzLjA2MywzLjY3MiAzLjA2Myw2LjEyIDAsMi40NDggLTEuMDIxLDQuNjkyIC0zLjA2Myw2LjczMiBMIDM4Mi41LDMwNiBsIDg1LjY4LDg1LjY4IHoiCiAgICAgICBzdHlsZT0iZmlsbDojMDEwMDAyIiAvPjwvZz48ZwogICAgIGlkPSJnOSIgLz48ZwogICAgIGlkPSJnMTEiIC8+PGcKICAgICBpZD0iZzEzIiAvPjxnCiAgICAgaWQ9ImcxNSIgLz48ZwogICAgIGlkPSJnMTciIC8+PGcKICAgICBpZD0iZzE5IiAvPjxnCiAgICAgaWQ9ImcyMSIgLz48ZwogICAgIGlkPSJnMjMiIC8+PGcKICAgICBpZD0iZzI1IiAvPjxnCiAgICAgaWQ9ImcyNyIgLz48ZwogICAgIGlkPSJnMjkiIC8+PGcKICAgICBpZD0iZzMxIiAvPjxnCiAgICAgaWQ9ImczMyIgLz48ZwogICAgIGlkPSJnMzUiIC8+PGcKICAgICBpZD0iZzM3IiAvPjwvc3ZnPg=="

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("sharedb/lib/client");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("jquery-ui-dist/jquery-ui");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-edgehandles");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-edge-editing");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-fcose");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-node-editing");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-undo-redo");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-panzoom");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function () {
  var styleSheet = [{
    selector: 'node',
    style: {
      'text-valign': 'center',
      'text-halign': 'center',
      'color': '#1e2829',
      'width': function (ele) {
        return ele.data('w') || 0;
      },
      'height': function (ele) {
        return ele.data('h') || 0;
      },
      'background-color': 'white',
      'shape': function (ele) {
        return parentNodeShapeFunc(ele);
      },
      'border-width': function (ele) {
        return borderWidthFunction(ele);
      },
      'border-color': function (ele) {
        return nodeBorderColorFunction(ele);
      },
      'font-size': 14
    }
  }, {
    selector: 'node[name]',
    style: {
      'label': 'data(name)'
    }
  }, {
    selector: 'node:parent',
    style: {
      'shape': function (ele) {
        return parentNodeShapeFunc(ele);
      },
      'text-valign': function (ele) {
        return 'bottom';
      },
      'text-margin-y': 2,
      'padding-left': function (ele) {
        return compoundPaddingFunction(ele);
      },
      'padding-right': function (ele) {
        return compoundPaddingFunction(ele);
      },
      'padding-bottom': function (ele) {
        return compoundPaddingFunction(ele);
      },
      'padding-top': function (ele) {
        return compoundPaddingFunction(ele);
      },
      'background-opacity': 0.5,
      'border-width': function (ele) {
        return parentBorderWidthFunction(ele);
      },
      'border-color': function (ele) {
        return nodeBorderColorFunction(ele);
      },
      'background-color': function (ele) {
        return nodeBackgroundColorFunction(ele);
      }
    }
  }, {
    selector: 'edge',
    style: {
      'arrow-scale': 1.7,
      'curve-style': 'bezier',
      'text-background-color': '#EEEEEE',
      'text-background-opacity': 0,
      'target-arrow-shape': function (ele) {
        return edgeTargetArrowTypeHandler(ele);
      },
      'width': 1,
      'line-color': function (ele) {
        return edgeColorHandler(ele);
      },
      'target-arrow-color': function (ele) {
        return edgeColorHandler(ele);
      },
      'line-style': function (ele) {
        return edgeLineTypeHandler(ele);
      },
      'opacity': 1
    }
  }, {
    selector: 'edge[name]',
    style: {
      'label': function (edge) {
        var label = edge.data('name');

        if (label === "") {
          return label;
        } //https://github.com/cytoscape/cytoscape.js/issues/2329


        return label + "\n \u2060";
      },
      'text-wrap': 'wrap',
      'edge-text-rotation': 'autorotate',
      'text-background-opacity': '0'
    }
  }, // some style for the Edge Handles !!!
  {
    selector: '.eh-handle',
    style: {
      'background-color': '#1abc9c',
      'width': 12,
      'height': 12,
      'shape': 'ellipse',
      'overlay-opacity': 0,
      'border-width': 12,
      'border-opacity': 0
    }
  }, {
    selector: '.eh-hover',
    css: {
      'background-color': '#1abc9c'
    }
  }, {
    selector: '.eh-source',
    css: {
      'border-width': 2,
      'border-color': '#1abc9c'
    }
  }, {
    selector: '.eh-target',
    css: {
      'border-width': 2,
      'background-color': '#1abc9c',
      'border-color': '#1abc9c'
    }
  }, {
    selector: '.eh-preview, .eh-ghost-edge',
    css: {
      'line-color': '#1abc9c',
      'target-arrow-color': '#1abc9c',
      'source-arrow-color': '#1abc9c'
    }
  }, {
    selector: '.highlightedEdge',
    style: {
      'width': 3.5,
      'border-width': 4,
      'line-color': '#1abc9c',
      'target-arrow-color': '#1abc9c',
      'arrow-scale': 2
    }
  }, {
    selector: '.highlightedNode',
    style: {
      'border-width': function (ele) {
        return highlightedBorderWidthFunction(ele);
      },
      'border-color': '#1abc9c',
      'background-color': '#fff'
    }
  }, {
    selector: '.invalidGene',
    style: {
      'border-width': 2,
      'border-color': '#e94332',
      'color': '#e94332'
    }
  }, {
    // The css properties when a node is highlighted and an invalid gene
    selector: '.invalidGeneHighlight',
    style: {
      'border-width': 3,
      'font-weight': 'bold',
      'border-color': '#e94332',
      'color': '#e94332'
    }
  }, {
    selector: 'node:selected',
    style: {
      'border-width': function (ele) {
        return selectedBorderWidthFunction(ele);
      },
      'border-color': '#ffc90e'
    }
  }, {
    selector: '.highlightedNode:selected, .invalidGeneHighlight:selected',
    style: {
      'border-width': function (ele) {
        return selectedHighlightedBorderWidthFunction(ele);
      }
    }
  }, {
    selector: 'edge:selected',
    style: {
      'width': 3,
      'line-color': '#ffc90e',
      'target-arrow-color': '#ffc90e'
    }
  }];

  var compoundPaddingFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "FAMILY":
        return 5;

      case "COMPLEX":
        return '5';

      case "COMPARTMENT":
        return 10;

      case "PROCESS":
        return 10;

      default:
        return 5;
    }
  };

  var contentFunction = function (ele) {
    if (ele._private.data.name) {
      return ele._private.data.name;
    }

    return 'newNode';
  };

  var vTextPositionFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 'center';

      case "FAMILY":
        return 'top';

      case "COMPLEX":
        return 'top';

      case "COMPARTMENT":
        return 'top';

      default:
        return 'center';
    }
  };

  var borderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 1;

      case "PROCESS":
        return 0;

      case "FAMILY":
        return 2;

      case "COMPARTMENT":
        return 4;

      default:
        return 1;
    }
  };

  var parentBorderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 1;

      case "PROCESS":
        return 0;

      case "FAMILY":
        return 2;

      case "COMPLEX":
        return 1;

      case "COMPARTMENT":
        return 4;

      default:
        return 1;
    }
  };

  var highlightedBorderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 3;

      case "PROCESS":
        return 1;

      case "FAMILY":
        return 4;

      case "COMPARTMENT":
        return 6;

      default:
        return 3;
    }
  };

  var selectedBorderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 2;

      case "PROCESS":
        return 1;

      case "FAMILY":
        return 3;

      case "COMPARTMENT":
        return 5;

      default:
        return 2;
    }
  };

  var selectedHighlightedBorderWidthFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return 3;

      case "PROCESS":
        return 1;

      case "FAMILY":
        return 4;

      case "COMPARTMENT":
        return 6;

      default:
        return 3;
    }
  };

  var parentNodeShapeFunc = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return "roundrectangle";

      case "PROCESS":
        return "roundrectangle";

      case "FAMILY":
        return "rectangle";

      case "COMPARTMENT":
        return "roundrectangle";

      case "COMPLEX":
        return "rectangle";

      default:
        return "roundrectangle";
    }
  };

  var nodeBackgroundColorFunction = function (ele) {
    return "#fff";
  };

  var nodeBorderColorFunction = function (ele) {
    switch (ele._private.data['type']) {
      case "GENE":
        return "#00000a";

      case "FAMILY":
        return "#a3a3a3";

      case "COMPLEX":
        return "#000000";

      case "COMPARTMENT":
        return "#000000";

      default:
        return "#000000";
    }
  };

  var edgeColorHandler = function (ele) {
    return "#1b1b1b";
  };

  var edgeTargetArrowTypeHandler = function (ele) {
    switch (ele._private.data['type']) {
      case "ACTIVATES":
        return "triangle";

      case "INHIBITS":
        return "tee";

      case "INDUCES":
        return "triangle";

      case "REPRESSES":
        return "tee";

      case "BINDS":
        return "none";

      default:
        return "none";
    }
  };

  var edgeLineTypeHandler = function (ele) {
    switch (ele._private.data['type']) {
      case "ACTIVATES":
        return "solid";

      case "INHIBITS":
        return "solid";

      case "INDUCES":
        return "dashed";

      case "REPRESSES":
        return "dashed";

      case "BINDS":
        return "solid";

      default:
        return "solid";
    }
  };

  return styleSheet;
}();

/***/ }),
/* 71 */
/***/ (function(module, exports) {

var panzoomOptions = {
  zoomFactor: 0.05,
  zoomDelay: 45,
  minZoom: 0.1,
  maxZoom: 10,
  fitPadding: 50,
  panSpeed: 10,
  panDistance: 10,
  panDragAreaSize: 75,
  panMinPercentSpeed: 0.25,
  panInactiveArea: 8,
  panIndicatorMinOpacity: 0.5,
  zoomOnly: false,
  fitSelector: undefined,
  animateOnFit: function () {
    return false;
  },
  fitAnimationDuration: 1000,
  // icon class names
  sliderHandleIcon: 'fa fa-minus',
  zoomInIcon: 'fa fa-plus',
  zoomOutIcon: 'fa fa-minus',
  resetIcon: 'fa fa-expand'
};
module.exports = panzoomOptions;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-navigator");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-context-menus");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("konva");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-view-utilities");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-grid-guide");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-popper");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("cytoscape-layout-utilities");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("@datastructures-js/max-heap");

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "EModalType", function() { return /* binding */ EModalType; });
__webpack_require__.d(__webpack_exports__, "PathwayMapper", function() { return /* binding */ react_pathway_mapper_PathwayMapper; });

// EXTERNAL MODULE: external "autobind-decorator"
var external_autobind_decorator_ = __webpack_require__(3);
var external_autobind_decorator_default = /*#__PURE__*/__webpack_require__.n(external_autobind_decorator_);

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(2);

// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(5);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(10);

// EXTERNAL MODULE: external "react-toastify/dist/ReactToastify.min.css"
var ReactToastify_min_css_ = __webpack_require__(54);

// EXTERNAL MODULE: external "react-tooltip"
var external_react_tooltip_ = __webpack_require__(22);
var external_react_tooltip_default = /*#__PURE__*/__webpack_require__.n(external_react_tooltip_);

// EXTERNAL MODULE: ./src/css/pmv1.css
var pmv1 = __webpack_require__(55);

// EXTERNAL MODULE: ./src/css/pmv2.css
var pmv2 = __webpack_require__(56);

// EXTERNAL MODULE: ./src/css/qtip.css
var qtip = __webpack_require__(57);

// EXTERNAL MODULE: ./src/css/supp.css
var supp = __webpack_require__(18);

// EXTERNAL MODULE: ./src/data/pathways.json
var pathways = __webpack_require__(8);

// EXTERNAL MODULE: external "file-saver"
var external_file_saver_ = __webpack_require__(14);

// CONCATENATED MODULE: ./src/utils/SaveLoadUtility.tsx
var SaveLoadUtility =
/** @class */
function () {
  function SaveLoadUtility() {} //Exports given json graph(based on cy.export()) into a string


  Object.defineProperty(SaveLoadUtility, "exportGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathwayDetails, cy, edgeEditing) {
      var returnString = pathwayDetails.pathwayTitle + '\n\n';
      returnString += pathwayDetails.pathwayDetails + '\n\n'; //Get nodes and edges

      var nodes = cy.nodes();
      var edges = cy.edges(); //Prepare Meta Line

      returnString += '--NODE_NAME\tNODE_ID\tNODE_TYPE\tPARENT_ID\tPOSX\tPOSY\tWIDTH\tHEIGHT--' + '\n';

      if (nodes) {
        for (var i = 0; i < nodes.length; i++) {
          returnString += this.exportNode(nodes[i]);
        }
      } //Put a blank line between nodes and edges


      returnString += '\n';
      returnString += '--EDGE_ID\tSOURCE\tTARGET\tEDGE_TYPE\tINTERACTION_PUBMED_ID\tEDGE_NAME\tEDGE_BENDS\tEDGE_CURVE_STYLE\n';

      if (edges) {
        //Write edges
        for (var i = 0; i < edges.length; i++) {
          var edgeID = edges[i].data('id');
          var edgeType = edges[i].data('type');
          var source = edges[i].data('source');
          var target = edges[i].data('target');
          var pubmedIDs = edges[i].data('pubmedIDs');
          var pubmedString = "";
          var edgeName = edges[i].data('name') ? edges[i].data('name') : "";
          var edgeCurveStyle = edges[i].css('curve-style');
          var numberOfAnchorPoints = 0;
          var anchors = edgeEditing.getAnchorsAsArray(edges[i]);
          if (anchors !== undefined) numberOfAnchorPoints = anchors.length / 2;
          var anchorPointPositions = "";

          for (var j = 0; j < numberOfAnchorPoints; j++) {
            anchorPointPositions += "(" + anchors[2 * j] + ";" + anchors[2 * j + 1] + ")";
          }

          if (pubmedIDs != undefined) {
            for (var j = 0; j < pubmedIDs.length; j++) {
              pubmedString += pubmedIDs[j];
              if (j != pubmedIDs.length - 1) pubmedString += ";";
            }
          }

          returnString += edgeID + '\t' + source + '\t' + target + '\t' + edgeType + '\t' + pubmedString + '\t' + edgeName + '\t' + anchorPointPositions + '\t' + edgeCurveStyle + '\n';
        }
      } //Finally return a string that includes whole graph lovely and peacefully :)


      return returnString;
    }
  });
  Object.defineProperty(SaveLoadUtility, "exportAsSIFNX", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cy) {
      var returnString = ""; //Get nodes and edges

      var nodes = cy.nodes();
      var edges = cy.edges();
      var nodeMap = {}; //Put a blank line between nodes and edges

      returnString += '\n';
      returnString += 'PARTICIPANT\tPARTICIPANT_TYPE\tPARENT_ID\tPOSX\tPOSY\tWIDTH\tHEIGHT' + '\n';

      if (nodes) {
        for (var i = 0; i < nodes.length; i++) {
          returnString += this.exportNode(nodes[i]);
          nodeMap[nodes[i].id()] = nodes[i];
        }
      } //Put a blank line between nodes and edges


      returnString += '\n';
      returnString += 'PARTICIPANT_A\tPARTICIPANT_B\tTYPE\tPUBMED_IDS\n';

      if (edges) {
        //Write edges
        for (var i = 0; i < edges.length; i++) {
          var edgeType = edges[i].data("type");
          var source = edges[i].data("source");
          var target = edges[i].data("target");
          var edgeName = edges[i].data("name");
          var pubmedIDs = edges[i].data("pubmedIDs");
          var pubmedString = "";

          if (pubmedIDs != undefined) {
            for (var j = 0; j < pubmedIDs.length; j++) {
              pubmedString += pubmedIDs[j];
              if (j != pubmedIDs.length - 1) pubmedString += ";";
            }
          }

          returnString += nodeMap[source].data("name") + '\t' + nodeMap[target].data("name") + '\t' + edgeType + '\t' + pubmedString + '\t' + edgeName + '\n';
        }
      } //Finally return a string that includes whole graph lovely and peacefully :)


      return returnString;
    }
  });
  Object.defineProperty(SaveLoadUtility, "exportNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node) {
      //Node specific data fields
      var nodeName = node.data("name");
      var parentID = node.data("parent");
      var nodeID = node.data("id");
      var pos = node.position();
      var nodeType = node.data("type");
      var nodeW = node.data("w");
      var nodeH = node.data("h"); //Check if node has a parent, if not set parent id -1

      if (node.data("parent")) {
        parentID = node.data("parent");
      } else {
        parentID = -1;
      } // Write a line for a node


      return nodeName + '\t' + nodeID + '\t' + nodeType + '\t' + parentID + '\t' + parseInt(pos.x) + '\t' + parseInt(pos.y) + '\t' + nodeW + '\t' + nodeH + '\n';
    }
  });
  Object.defineProperty(SaveLoadUtility, "parseGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (graph, isArray) {
      var allEles = [];
      var nodes = [];
      var edges = []; // By lines
      // Match all new line character representations

      var seperator = /\r?\n|\r/;
      var lines = isArray ? graph : graph.split(seperator);
      var edgesStartIndex = -1;
      var title = lines[0];
      var description = lines[2]; // In old version description used to expand in multiple lines
      // graphDataIndex holds the line index where the first --NODE_NAME occurs and is used later to load nodes

      var graphDataIndex = 3;
      var isFound = false;

      while (graphDataIndex < lines.length) {
        if (lines[graphDataIndex].includes("--NODE_NAME")) {
          isFound = true;
          break;
        }

        description += "\n" + lines[graphDataIndex];
        graphDataIndex++;
      }

      graphDataIndex++; // TODO AMENDMENT

      if (!isFound) {
        graphDataIndex = 2;
      } //TODO Legacy pathways workaround


      if (lines[0].includes("--NODE_NAME")) {
        graphDataIndex = 1;
        title = "New Pathway";
        description = "";
      } // start from first line skip node meta data


      for (var i = graphDataIndex; i < lines.length; i++) {
        // If we encounter a blank line, that means we need to parse edges from now on !
        // so skip blank line and edge meta line
        if (lines[i].length == 0 || lines[i] === "") {
          edgesStartIndex = i + 2;
          break;
        } //Fetch a line for nodes


        var lineData = lines[i].split('\t');
        var nodeName = lineData[0];
        var nodeID = lineData[1];
        var nodeType = lineData[2];
        var parentID = lineData[3];
        var posX = lineData.length > 4 ? lineData[4] : "0";
        var posY = lineData.length > 5 ? lineData[5] : "0";
        var nodeW = lineData.length > 7 ? lineData[6] : nodeType === 'PROCESS' ? nodeName.length * 6 + 24 : "150";
        var nodeH = lineData.length > 7 ? lineData[7] : nodeType === 'PROCESS' ? "24" : "52";

        if (nodeName === " " || nodeName === "") {//nodeName = "No Name " + (i + 1);
        }

        var newNode = {
          group: 'nodes',
          data: {
            id: nodeID,
            name: nodeName,
            type: nodeType,
            w: nodeW,
            h: nodeH,
            parent: -1
          },
          position: {
            x: parseInt(posX),
            y: parseInt(posY)
          }
        };

        if (parentID != '-1') {
          newNode.data.parent = parentID;
        }

        nodes.push(newNode);
      } //Read edges


      for (var i_1 = edgesStartIndex; i_1 < lines.length; i_1++) {
        //If we reach EOF we break loop
        if (lines[i_1].length == 0) {
          break;
        }

        var lineData = lines[i_1].split('\t');
        var edgeID = lineData[0];
        var edgeSource = lineData[1];
        var edgeTarget = lineData[2];
        var edgeType = lineData[3];
        var pubmedIDs = lineData.length > 4 ? lineData[4].split(';') : [];
        var label = lineData.length > 5 ? lineData[5] : '';
        var anchorPoints = lineData.length > 6 ? lineData[6] : '';
        var edgeCurveStyle = lineData.length > 7 ? lineData[7] : '';
        var anchorPointPositions = [];

        if (anchorPoints) {
          var anchorPair = anchorPoints.split(')'); //The last element of anchorPair array is ""

          for (var j = 0; j < anchorPair.length - 1; j++) {
            var separatorIndex = anchorPair[j].indexOf(";");
            var x = anchorPair[j].substring(1, separatorIndex);
            var y = anchorPair[j].substring(separatorIndex + 1, anchorPair[j].length);
            anchorPointPositions.push({
              x: parseFloat(x),
              y: parseFloat(y)
            });
          }
        }

        var edgeData = {
          id: edgeID,
          type: edgeType,
          source: edgeSource,
          target: edgeTarget,
          pubmedIDs: pubmedIDs,
          name: label
        };

        if (edgeCurveStyle === "unbundled-bezier") {
          edgeData['controlPointPositions'] = anchorPointPositions;
        } else {
          edgeData['bendPointPositions'] = anchorPointPositions;
        }

        var newEdge = {
          group: 'edges',
          data: edgeData
        };
        edges.push(newEdge);
      }

      return {
        title: title,
        description: description,
        nodes: nodes,
        edges: edges
      };
    }
  });
  return SaveLoadUtility;
}();

/* harmony default export */ var utils_SaveLoadUtility = (SaveLoadUtility);
// CONCATENATED MODULE: ./src/managers/FileOperationsManager.tsx
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FileOperationsManager_FileOperationsManager =
/** @class */
function () {
  function FileOperationsManager() {
    Object.defineProperty(this, "pathwayInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(this);
    this.pathwayInfo = {
      pathwayTitle: "New Pathway",
      pathwayDetails: ""
    };
  }

  Object.defineProperty(FileOperationsManager.prototype, "getPathwayInfo", {
    get: function () {
      return this.pathwayInfo;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FileOperationsManager.prototype, "setPathwayInfo", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (other) {
      this.pathwayInfo = other;
    }
  }); // see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript

  Object.defineProperty(FileOperationsManager.prototype, "b64toBlob", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (b64Data, contentType, sliceSize) {
      if (sliceSize === void 0) {
        sliceSize = 512;
      }

      contentType = contentType || '';
      var byteCharacters = atob(b64Data);
      var byteArrays = [];

      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);

        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      var blob = new Blob(byteArrays, {
        type: contentType
      });
      return blob;
    }
  });
  ;
  Object.defineProperty(FileOperationsManager.prototype, "saveAsJPEG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cy) {
      var graphData = cy.jpeg(); // this is to remove the beginning of the pngContent: data:img/png;base64,

      var b64data = graphData.substr(graphData.indexOf(",") + 1);
      var imageData = this.b64toBlob(b64data, "image/jpeg");
      var blob = new Blob([imageData]);
      var fileName = this.pathwayInfo.pathwayTitle + ".jpg";
      Object(external_file_saver_["saveAs"])(blob, fileName);
    }
  });
  ;
  Object.defineProperty(FileOperationsManager.prototype, "saveAsSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor) {
      var returnString = editor.exportSVG();
      var fileName = this.pathwayInfo.pathwayTitle + ".svg";
      var blob = new Blob([returnString], {
        type: "text/plain;charset=utf-8"
      });
      Object(external_file_saver_["saveAs"])(blob, fileName);
    }
  });
  Object.defineProperty(FileOperationsManager.prototype, "saveAsPNG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cy) {
      var graphData = cy.png(); // this is to remove the beginning of the pngContent: data:img/png;base64,

      var b64data = graphData.substr(graphData.indexOf(",") + 1);
      var imageData = this.b64toBlob(b64data, "image/png");
      var blob = new Blob([imageData]);
      var fileName = this.pathwayInfo.pathwayTitle + ".png";
      Object(external_file_saver_["saveAs"])(blob, fileName);
    }
  });
  ;
  Object.defineProperty(FileOperationsManager.prototype, "saveGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (isSIFNX, editor) {
      var pathwayData = this.pathwayInfo;
      var returnString = isSIFNX ? utils_SaveLoadUtility.exportAsSIFNX(editor.cy) : utils_SaveLoadUtility.exportGraph(pathwayData, editor.cy, editor.edgeEditing);
      var blob = new Blob([returnString], {
        type: "text/plain;charset=utf-8"
      });
      var fileName = pathwayData.pathwayTitle + ".txt";
      Object(external_file_saver_["saveAs"])(blob, fileName);
    }
  });
  ;

  __decorate([external_mobx_["observable"]], FileOperationsManager.prototype, "pathwayInfo", void 0);

  __decorate([external_mobx_["computed"]], FileOperationsManager.prototype, "getPathwayInfo", null);

  __decorate([external_mobx_["action"]], FileOperationsManager.prototype, "setPathwayInfo", null);

  return FileOperationsManager;
}();

/* harmony default export */ var managers_FileOperationsManager = (FileOperationsManager_FileOperationsManager);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./src/managers/GridOptionsManager.tsx


var GridOptionsManager_GridOptionsManager =
/** @class */
function () {
  function GridOptionsManager(cy) {
    Object.defineProperty(this, "currentProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cy = cy;
    this.currentProperties = {};
    this.changeParameters(GridOptionsManager.defaultGridGuideOptions);
  }

  Object.defineProperty(GridOptionsManager.prototype, "changeParameters", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      this.currentProperties = external_lodash_default.a.clone(params);
      this.refreshGridOptionsExtension();
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "getCurrentOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.currentProperties;
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "getDefaultOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return GridOptionsManager.defaultGridGuideOptions;
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "setSnapToGuidelines", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (state) {
      this.currentProperties.geometricGuideline = state;
      this.currentProperties.snapToAlignmentLocationDuringDrag = state;
      this.currentProperties.distributionGuidelines = state;
      this.refreshGridOptionsExtension(); //this.appManager.gridOptionsView.changeParameters();
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "setShowGrid", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (state) {
      this.currentProperties.drawGrid = state;
      this.currentProperties.snapToGridDuringDrag = state;
      this.refreshGridOptionsExtension();
    }
  });
  Object.defineProperty(GridOptionsManager.prototype, "refreshGridOptionsExtension", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.cy.gridGuide(this.currentProperties);
    }
  });
  Object.defineProperty(GridOptionsManager, "defaultGridGuideOptions", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
      // On/Off Modules

      /* From the following four snap options, at most one should be true at a given time */
      snapToGridOnRelease: false,
      snapToGridDuringDrag: false,
      snapToAlignmentLocationOnRelease: false,
      snapToAlignmentLocationDuringDrag: false,
      distributionGuidelines: false,
      geometricGuideline: false,
      initPosAlignment: false,
      centerToEdgeAlignment: false,
      resize: false,
      parentPadding: false,
      drawGrid: false,
      // General
      gridSpacing: 20,
      // Draw Grid
      zoomDash: true,
      panGrid: true,
      gridStackOrder: -1,
      gridColor: '#dedede',
      lineWidth: 1.0,
      // Guidelines
      guidelinesStackOrder: 4,
      guidelinesTolerance: 5.00,
      guidelinesStyle: {
        strokeStyle: "#4286f4",
        geometricGuidelineRange: 750,
        range: 500,
        minDistRange: 10,
        distGuidelineOffset: 10,
        horizontalDistColor: "#4286f4",
        verticalDistColor: "#4286f4",
        initPosAlignmentColor: "#34495E",
        lineDash: [6, 8],
        horizontalDistLine: [0, 0],
        verticalDistLine: [0, 0],
        initPosAlignmentLine: [0, 0]
      },
      // Parent Padding
      parentSpacing: -1 // -1 to set paddings of parents to gridSpacing

    }
  });
  return GridOptionsManager;
}();

/* harmony default export */ var managers_GridOptionsManager = (GridOptionsManager_GridOptionsManager);
// CONCATENATED MODULE: ./src/managers/ViewOperationsManager.tsx
var ViewOperationsManager =
/** @class */
function () {
  function ViewOperationsManager(editor, cy) {
    Object.defineProperty(this, "movedNodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cy = cy;
    this.editor = editor;
    this.movedNodes = [];
  } //TODO use align function from cytoscape.js-grid-guide extension


  Object.defineProperty(ViewOperationsManager.prototype, "handleNodeAlignment", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (param) {
      var tmpNodes = this.editor.selectedNodeStack;
      var nodes = this.cy.collection();
      var nodeMap = {};
      this.movedNodes = [];

      for (var key in tmpNodes) {
        nodes = nodes.add(tmpNodes[key]);
      }

      nodes.forEach(function (node) {
        if (node.isParent()) {
          nodeMap[node.id()] = node;
        }
      });

      if (nodes.length > 0) {
        var firstSelected = nodes[0];
        var firstBbox = firstSelected.boundingBox(); //OuterHeight variable added due to miscalculation of boundingBox function in pathwaymapper

        var firstOuterHeight = firstSelected.outerHeight();
        var self = this;
        nodes.forEach(function (node, index) {
          if (index == 0) {
            return;
          } //If parent of selected node is in selection do nothing !


          if (nodeMap[node.parent().id()] == null) {
            var newPosition = self.calculateNewPosition(param, node, firstBbox, firstOuterHeight); //Recursively traverse leaf nodes

            self.changePosition(node, 0, 0, newPosition);
          }
        });
        this.editor.handleChangePositionByAlignment(self.movedNodes);
      }
    }
  });
  /*
   Determine new position according to the alignment
   node that node.position works on center positions thats why all calculations
   are performed accordingly
   */

  Object.defineProperty(ViewOperationsManager.prototype, "calculateNewPosition", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (param, node, referenceBbox, referenceOuterHeight) {
      var currentPos = node.position();
      var currentBbox = node.boundingBox();
      var newPosition; //This parameter is used to move the compounds less upwards when they contain label

      var moveParam = node.isParent() ? node.outerHeight() - (currentBbox.h - node.outerHeight()) / 2 - (node.outerHeight() - node.height()) / 2 : node.height(); //This param is used only when the node is parent, for simple nodes is 0

      var labelHeight = node.isParent() ? currentBbox.h - node.outerHeight() : 0;

      if (param === 'vLeft') {
        newPosition = {
          x: referenceBbox.x1 + currentBbox.w / 2,
          y: currentPos.y
        };
      } else if (param === 'vCen') {
        newPosition = {
          x: referenceBbox.x1 + referenceBbox.w / 2,
          y: currentPos.y
        };
      } else if (param === 'vRight') {
        newPosition = {
          x: referenceBbox.x2 - currentBbox.w / 2,
          y: currentPos.y
        };
      } else if (param === 'hTop') {
        newPosition = {
          x: currentPos.x,
          y: referenceBbox.y1 + currentBbox.h / 2
        };
      } //Checks for the case where compounds don't have names (name isn't taken in consideration in that case)
      else if (param === 'hMid' && node.isParent() && node.data('name') == "") {
          newPosition = {
            x: currentPos.x,
            y: referenceBbox.y1 + referenceBbox.h / 2
          };
        } else if (param === 'hMid') {
          newPosition = {
            x: currentPos.x,
            y: referenceBbox.y1 + referenceOuterHeight / 2 + labelHeight / 2
          };
        } //Checks for the case where compounds don't have names (name isn't taken in consideration in that case)
        else if (param === 'hBot' && node.isParent() && node.data('name') == "") {
            newPosition = {
              x: currentPos.x,
              y: referenceBbox.y2 - currentBbox.h / 2
            };
          } else if (param === 'hBot') {
            newPosition = {
              x: currentPos.x,
              y: referenceBbox.y1 + referenceOuterHeight - moveParam / 2
            };
          } else {
            console.log('Error: wrong alignment name ' + param);
            return;
          }

      return newPosition;
    }
  }); //Recursively move leaf nodes

  Object.defineProperty(ViewOperationsManager.prototype, "changePosition", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node, dx, dy, newPos) {
      if (node.isParent()) {
        var childNodes = node.children();
        var parentBbox = node.boundingBox();
        var self = this;
        childNodes.forEach(function (childNode, index) {
          var childBbox = childNode.boundingBox();

          var _dx = -(parentBbox.x1 - childBbox.x1) - parentBbox.w / 2 + childBbox.w / 2;

          var _dy = -(parentBbox.y1 - childBbox.y1) - parentBbox.h / 2 + childBbox.h / 2; //If further compound node is found, set position accordingly


          if (childNode.isParent()) {
            self.changePosition(childNode, 0, 0, {
              x: newPos.x + _dx,
              y: newPos.y + _dy
            });
          } else {
            self.changePosition(childNode, _dx, _dy, newPos);
          }
        });
      } else {
        //Move locally and let editor actions manager know a move happened
        //If in collaborative mode editor actions manager will update collaborative model
        var position = {
          x: newPos.x + dx,
          y: newPos.y + dy
        };
        this.movedNodes.push({
          node: node,
          nextPosition: position,
          oldPosition: null
        });
      }
    }
  });
  return ViewOperationsManager;
}();

/* harmony default export */ var managers_ViewOperationsManager = (ViewOperationsManager);
// CONCATENATED MODULE: ./src/modals/AboutModal.tsx
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var AboutModal_AboutModal =
/** @class */
function (_super) {
  __extends(AboutModal, _super);

  function AboutModal(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(AboutModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        show: this.props.show,
        onHide: function () {
          _this.props.handleClose(EModalType.ABOUT);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "About")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("h3", {
        id: "about-model-header"
      }, "PathwayMapper 2.2"), external_react_default.a.createElement("div", {
        className: "aboutImageContent"
      }, external_react_default.a.createElement("img", {
        src: __webpack_require__(58),
        alt: "",
        height: "34px"
      })), external_react_default.a.createElement("div", {
        className: "aboutImageContent"
      }, external_react_default.a.createElement("img", {
        src: __webpack_require__(59),
        alt: "",
        height: "34px"
      })), external_react_default.a.createElement("div", {
        className: "adressText"
      }, external_react_default.a.createElement("p", null, "i-Vis information Visualization Lab"), external_react_default.a.createElement("p", null, "Bilkent University, Ankara, Turkey")), external_react_default.a.createElement("div", {
        className: "adressText"
      }, external_react_default.a.createElement("p", null, "Memorial Sloan-Kettering Cancer Center"), external_react_default.a.createElement("p", null, "New York, USA"))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement("a", {
        href: "https://github.com/iVis-at-Bilkent/pathway-mapper"
      }, "https://github.com/iVis-at-Bilkent/pathway-mapper")));
    }
  });
  return AboutModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_AboutModal = (AboutModal_AboutModal);
// EXTERNAL MODULE: external "oncoprintjs"
var external_oncoprintjs_ = __webpack_require__(11);

// EXTERNAL MODULE: ./src/images/toolbar/edit.svg
var edit = __webpack_require__(15);
var edit_default = /*#__PURE__*/__webpack_require__.n(edit);

// EXTERNAL MODULE: ./src/images/toolbar/layout-cose.svg
var layout_cose = __webpack_require__(9);
var layout_cose_default = /*#__PURE__*/__webpack_require__.n(layout_cose);

// EXTERNAL MODULE: ./src/images/toolbar/save_png.svg
var save_png = __webpack_require__(12);
var save_png_default = /*#__PURE__*/__webpack_require__.n(save_png);

// EXTERNAL MODULE: ./src/images/toolbar/save_svg.svg
var save_svg = __webpack_require__(13);
var save_svg_default = /*#__PURE__*/__webpack_require__.n(save_svg);

// CONCATENATED MODULE: ./src/modals/CBioHelpModal.tsx
var CBioHelpModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore


 // @ts-ignore

var addSelImage = __webpack_require__(19); // @ts-ignore


var addAllImage = __webpack_require__(20); // https://github.com/cBioPortal/cbioportal-frontend/blob/29a93c5e992ca1affd3d027355015164ae3602bd/src/shared/lib/Colors.ts


var CNA_COLOR_AMP = '#ff0000';
var CNA_COLOR_HOMDEL = '#0000ff';
var DEFAULT_GREY = '#bebebe';
var MUT_COLOR_MISSENSE = '#008000';
var MUT_COLOR_MISSENSE_PASSENGER = '#53D400';
var MUT_COLOR_INFRAME = '#993404';
var MUT_COLOR_INFRAME_PASSENGER = '#a68028';
var MUT_COLOR_TRUNC = '#000000';
var MUT_COLOR_TRUNC_PASSENGER = '#708090';
var MUT_COLOR_FUSION = '#8B00C9';
var MUT_COLOR_PROMOTER = '#00B7CE';
var MUT_COLOR_OTHER = '#cf58bc';
var MUT_COLOR_GERMLINE = '#FFFFFF';
function hexToRGBA(str) {
  var r = parseInt(str[1] + str[2], 16);
  var g = parseInt(str[3] + str[4], 16);
  var b = parseInt(str[5] + str[6], 16);
  return [r, g, b, 1];
} // always used shape

var defaultShape = {
  type: 'rectangle',
  fill: hexToRGBA(DEFAULT_GREY),
  x: 0,
  y: 0,
  width: 6,
  height: 20,
  stroke: [0, 0, 0, 0],
  'stroke-width': 0
};
var labels = ['Amplification', 'Deep Deletion', 'Fusion', 'Germline Mutation', 'Missense Mutation (putative driver)', 'Missense Mutation (unknown significance)', 'Other Mutation', 'Promoter Mutation', 'Truncating Mutation (putative driver)', 'Truncating Mutation (unknown significance)', 'Inframe Mutation (putative driver)', 'Inframe Mutation (unknown significance)']; // conditional shapes

var shapeBank = [{
  type: 'rectangle',
  fill: hexToRGBA(CNA_COLOR_AMP),
  x: 0,
  y: 0,
  width: 6,
  height: 20
}, {
  type: 'rectangle',
  fill: hexToRGBA(CNA_COLOR_HOMDEL),
  x: 0,
  y: 0,
  width: 6,
  height: 20
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_FUSION),
  x: 0,
  y: 4,
  width: 6,
  height: 12
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_GERMLINE),
  x: 0,
  y: 8.75,
  width: 6,
  height: 1.6
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_MISSENSE),
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_MISSENSE_PASSENGER),
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_OTHER),
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_PROMOTER),
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_TRUNC),
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_TRUNC_PASSENGER),
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_INFRAME),
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}, {
  type: 'rectangle',
  fill: hexToRGBA(MUT_COLOR_INFRAME_PASSENGER),
  x: 0,
  y: 6.66,
  width: 6,
  height: 6.66
}];

var CBioHelpModal_CBioHelpModal =
/** @class */
function (_super) {
  CBioHelpModal_extends(CBioHelpModal, _super);

  function CBioHelpModal(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(CBioHelpModal.prototype, "generateOncoprintLegend", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var svgNameSpace = 'http://www.w3.org/2000/svg';
      var svgElement = document.createElementNS(svgNameSpace, 'svg');
      var legendEleWidth = 280;
      var cellWidth = 6;
      var cellHeight = 23;
      var cellVerticalPadding = 15;
      var cellMarginRight = cellWidth + 3;
      shapeBank.forEach(function (shape, index) {
        var offsetX = index % 3 * legendEleWidth;
        var textOffsetX = offsetX + cellMarginRight;
        var offsetY = Math.floor(index / 3) * (cellHeight + cellVerticalPadding);
        var textOffsetY = offsetY + 15;
        var g = document.createElementNS(svgNameSpace, 'g');

        if (!shape["stroke"]) {
          shape["stroke"] = [0, 0, 0, 0];
          shape["stroke-width"] = 0;
        }

        g.appendChild(Object(external_oncoprintjs_["shapeToSvg"])(defaultShape, offsetX, offsetY));
        g.appendChild(Object(external_oncoprintjs_["shapeToSvg"])(shape, offsetX, offsetY));
        var text = document.createElementNS(svgNameSpace, 'text');
        text.setAttributeNS(null, 'x', textOffsetX.toString());
        text.setAttributeNS(null, 'y', textOffsetY.toString());
        text.setAttributeNS(null, 'font-size', '12');
        text.setAttributeNS(null, 'font-family', 'Arial');
        var textNode = document.createTextNode(labels[index]);
        text.appendChild(textNode);
        g.appendChild(text);
        svgElement.appendChild(g);
      });
      svgElement.setAttribute('width', '840');
      svgElement.setAttribute('height', '175');
      svgElement.style.paddingTop = '20px'; // This is important you need to include this to succesfully render in cytoscape.js!

      svgElement.setAttribute('xmlns', svgNameSpace);
      return svgElement;
    }
  });
  Object.defineProperty(CBioHelpModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var legendPadding = '45px';
      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        bsSize: "lg",
        id: "cBioHelpModal",
        className: "pathwayMapper",
        show: this.props.show,
        onHide: function () {
          _this.props.handleClose(EModalType.CHELP);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "PathwayMapper cBioPortal Edition 2.2")), !this.props.patientView && external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("p", {
        className: "leftText"
      }, "PathwayMapper shows you your genes of interest with the alteration frequencies of selected genetic profiles of the chosen study overlaid on a TCGA pathway using a white to red color scale (the more frequently altered a gene is, the more red it's shown). All available TCGA pathways are ranked with the aim to choose the pathway that matches your interest the most. By default we display the pathway with highest ranking with the default ranking options but you may look at your genes of interest in the context of other pathways as well by choosing from the pathway table.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "Refer to the documentation ", external_react_default.a.createElement("a", {
        href: "https://github.com/iVis-at-Bilkent/pathway-mapper",
        target: "_blank"
      }, "here"), " for the notation used.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "To search for a particular pathway of your interest, use the search field on top of the pathway table. To switch to another pathway, click on the button in the associated row of the pathway table. Ranking criteria might be changed by changing the options at the bottom of the table.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "The buttons on top of the pathway are:", external_react_default.a.createElement("ul", null, external_react_default.a.createElement("table", {
        cellPadding: 5
      }, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: save_png_default.a
      })), " ", external_react_default.a.createElement("td", null, "Save as PNG")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: save_svg_default.a
      })), " ", external_react_default.a.createElement("td", null, "Save as SVG")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: layout_cose_default.a
      })), " ", external_react_default.a.createElement("td", null, "Perform layout: Layout is recalculated taking current node positions into account")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: addSelImage
      })), " ", external_react_default.a.createElement("td", null, "Add selected genes to query: You may select additional genes from the pathway by left clicking (Shift + left click to add more genes)")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: addAllImage
      })), " ", external_react_default.a.createElement("td", null, "Add all valid genes to query: All valid gene symbols will be added to the query; others will be ignored")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: edit_default.a
      })), " ", external_react_default.a.createElement("td", null, "Edit pathway: Edit both the topology and the geometry of the current pathway with the full blown PathwayMapper editor")))))), ",", this.props.patientView && external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("p", {
        className: "leftText"
      }, "PathwayMapper shows you your genes of interest with the mutation types, copy number alterations and fusions of selected genetic profiles of the chosen study overlaid on a TCGA pathway using the OncoPrint color scheme. All available TCGA pathways are ranked with the aim to choose the pathway that matches your interest the most. By default we display the pathway with the highest number of genes of interest matching the ones in a pathway but you may look at your genes of interest in the context of other pathways as well by choosing from the pathway table.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "Refer to the documentation ", external_react_default.a.createElement("a", {
        href: "https://github.com/iVis-at-Bilkent/pathway-mapper",
        target: "_blank"
      }, "here"), " for the notation used.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "Genetic alteration legend:", external_react_default.a.createElement("br", null), external_react_default.a.createElement("div", {
        className: "container",
        style: {
          paddingLeft: legendPadding,
          width: 'fit-content'
        },
        dangerouslySetInnerHTML: {
          __html: this.generateOncoprintLegend().outerHTML
        }
      }), external_react_default.a.createElement("p", {
        style: {
          paddingLeft: legendPadding
        }
      }, "Putative driver and unknown significance annotations are based on data from OncoKB and CancerHotspots.org."), external_react_default.a.createElement("br", null), "To search for a particular pathway of your interest, use the search field on top of the pathway table. To switch to another pathway, click on the button in the associated row of the pathway table.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "The buttons on top of the pathway are:", external_react_default.a.createElement("ul", null, external_react_default.a.createElement("table", {
        cellPadding: 5
      }, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: save_png_default.a
      })), " ", external_react_default.a.createElement("td", null, "Save as PNG")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: save_svg_default.a
      })), " ", external_react_default.a.createElement("td", null, "Save as SVG")), external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        src: layout_cose_default.a
      })), " ", external_react_default.a.createElement("td", null, "Perform layout: Layout is recalculated taking current node positions into account")))))));
    }
  });
  return CBioHelpModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_CBioHelpModal = (CBioHelpModal_CBioHelpModal);
// CONCATENATED MODULE: ./src/modals/ConfirmationModal.tsx
var ConfirmationModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var ConfirmationModal_ConfirmationModal =
/** @class */
function (_super) {
  ConfirmationModal_extends(ConfirmationModal, _super);

  function ConfirmationModal(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(ConfirmationModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        show: this.props.show,
        onHide: function () {
          _this.props.handleClose(EModalType.CONFIRMATION);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Confirmation")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("div", null, "All unsaved changes will be lost. Do you want to continue?")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          ConfirmationModal.pendingFunction();

          _this.props.handleClose(EModalType.CONFIRMATION);
        }
      }, "Yes"), external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.handleClose(EModalType.CONFIRMATION);
        }
      }, "No")));
    }
  });
  return ConfirmationModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_ConfirmationModal = (ConfirmationModal_ConfirmationModal);
// CONCATENATED MODULE: ./src/modals/GridSettings.tsx
var GridSettings_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var GridSettings_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EGridType;

(function (EGridType) {
  EGridType[EGridType["GRID"] = 0] = "GRID";
  EGridType[EGridType["GUIDE"] = 1] = "GUIDE";
  EGridType[EGridType["NONE"] = 2] = "NONE";
})(EGridType || (EGridType = {}));

var GridSettings_GridSettings =
/** @class */
function (_super) {
  GridSettings_extends(GridSettings, _super);

  function GridSettings(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "gridSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "guideColor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "defaultSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: managers_GridOptionsManager.defaultGridGuideOptions
    });
    Object.defineProperty(_this, "enabledType", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.gridSize = _this.defaultSettings.gridSpacing;
    _this.guideColor = _this.defaultSettings.guidelinesStyle.strokeStyle;
    return _this;
  }

  Object.defineProperty(GridSettings.prototype, "setEnabledType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newType) {
      if (newType === this.enabledType) {
        this.enabledType = EGridType.NONE;
        return;
      }

      this.enabledType = newType;
    }
  });
  Object.defineProperty(GridSettings.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        dialogClassName: "gridModal",
        show: this.props.show,
        onShow: function () {
          _this.enabledType = _this.props.pathwayActions.enabledType;
        },
        onHide: function () {
          _this.props.handleClose(EModalType.GRID);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Grid Settings")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement(external_react_bootstrap_["Form"], {
        id: "gripOptionsForm",
        className: "leftText"
      }, external_react_default.a.createElement(external_react_bootstrap_["Row"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Enable Grids:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        checked: this.enabledType === EGridType.GRID,
        onChange: function () {
          _this.setEnabledType(EGridType.GRID);
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["Row"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Enable Guidelines:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        checked: this.enabledType === EGridType.GUIDE,
        onChange: function () {
          _this.setEnabledType(EGridType.GUIDE);
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["Row"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Grid Size:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        value: this.gridSize,
        onChange: function (e) {
          _this.gridSize = e.target.value;
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["Row"], {
        style: {
          marginTop: "10px"
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Guideline Color:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement("input", {
        id: "guidelineColor",
        type: "color",
        className: "form-control",
        value: this.guideColor,
        onChange: function (e) {
          _this.guideColor = e.target.value;
        }
      }))))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.pathwayActions.enabledType = _this.enabledType;

          _this.props.pathwayActions.adjustGridSettings(_this.gridSize, _this.guideColor);

          if (_this.props.pathwayActions.enabledType === EGridType.GRID) {
            _this.props.pathwayActions.toggleGrid(true);
          } else if (_this.props.pathwayActions.enabledType === EGridType.GUIDE) {
            _this.props.pathwayActions.toggleGuide(true);
          } else {
            _this.props.pathwayActions.toggleGrid(false); // This will disable both.

          }

          _this.props.handleClose(EModalType.GRID);
        }
      }, "Save")));
    }
  });

  GridSettings_decorate([external_mobx_["observable"]], GridSettings.prototype, "gridSize", void 0);

  GridSettings_decorate([external_mobx_["observable"]], GridSettings.prototype, "guideColor", void 0);

  GridSettings_decorate([external_mobx_["observable"]], GridSettings.prototype, "enabledType", void 0);

  GridSettings = GridSettings_decorate([external_mobx_react_["observer"]], GridSettings);
  return GridSettings;
}(external_react_default.a.Component);

/* harmony default export */ var modals_GridSettings = (GridSettings_GridSettings);
// CONCATENATED MODULE: ./src/utils/GraphUtilities.tsx
/**
 * Created by istemi on 27.09.2016.
 */
var GraphUtilities =
/** @class */
function () {
  function GraphUtilities() {}

  Object.defineProperty(GraphUtilities, "createGraphHierarchy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      //Some arrays and maps for creating graph hierarchy
      var tree = [];
      var mappedArr = {}; // First map the nodes of the array to an object -> create a hash table.

      for (var i = 0, len = nodes.length; i < len; i++) {
        var arrElem = nodes[i];
        mappedArr[arrElem.id()] = arrElem;
        mappedArr[arrElem.id()].childNodes = [];
      }

      for (var id in mappedArr) {
        var mappedElem = mappedArr[id]; // If the element is not at the root level, add it to its parent array of children.

        if (mappedElem.parent().length > 0) {
          mappedArr[mappedElem.parent().id()].childNodes.push(mappedElem);
        } // If the element is at the root level, add it to first level elements array.
        else {
            tree.push(mappedElem);
          }
      }

      return tree;
    }
  });
  ;
  /*
   * Creates graph hierarchy from given flat list of nodes list, nodes list is assumed to have parent-child
   * relationship by a field 'parent' which represents to the id of the parent node This function is specific
   * for the needs of TCGA Pathway Curation Tool 04/07/2016
   *
   * @param nodes {array}: flat list of nodes of a graph
   * @return {array}: Tree representation in array, entries are root level nodes. node.children gives children nodes
   * of each node in the returned array.
   * a node in corresponding level.
   *
   * */

  Object.defineProperty(GraphUtilities, "createGraphHierarchyRealTime", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      //Some arrays and maps for creating graph hierarchy
      var tree = [];
      var mappedArr = {}; // First map the nodes of the array to an object -> create a hash table.

      for (var i = 0, len = nodes.length; i < len; i++) {
        var arrElem = nodes[i];
        mappedArr[arrElem.data.id] = arrElem;
        mappedArr[arrElem.data.id].children = [];
      }

      for (var id in mappedArr) {
        var mappedElem = mappedArr[id]; // If the element is not at the root level, add it to its parent array of children.

        if (mappedElem.data.parent != -1) {
          mappedArr[mappedElem.data.parent].children.push(mappedElem);
        } // If the element is at the root level, add it to first level elements array.
        else {
            tree.push(mappedElem);
          }
      }

      return tree;
    }
  });
  ;
  return GraphUtilities;
}();

/* harmony default export */ var utils_GraphUtilities = (GraphUtilities);
// CONCATENATED MODULE: ./src/utils/SVGExporter.ts


var SVGExporter_SVGExporter =
/** @class */
function () {
  function SVGExporter(edgeEditing, editor) {
    Object.defineProperty(this, "SVGNameSpace", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "http://www.w3.org/2000/svg"
    });
    Object.defineProperty(this, "svg", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElementNS(this.SVGNameSpace, "svg")
    });
    Object.defineProperty(this, "NODE_FILL_COLOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "rgb(255,255,255)"
    });
    Object.defineProperty(this, "FAMILY_FILL_COLOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "rgb(255,255,255)"
    });
    Object.defineProperty(this, "FAMILY_STROKE_COLOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "rgb(204,204,204)"
    });
    Object.defineProperty(this, "NODE_STROKE_COLOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "rgb(0,0,0)"
    });
    Object.defineProperty(this, "COMPARTMENT_STROKE_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2
    });
    Object.defineProperty(this, "NODE_STROKE_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "NODE_OPACITY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0.5
    });
    Object.defineProperty(this, "ROUNDING_FACTOR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 6
    });
    Object.defineProperty(this, "GENOMICDATA_LABEL_Y_OFFSET", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -15
    });
    Object.defineProperty(this, "EDGE_ARROW_SCALE", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1.7
    });
    Object.defineProperty(this, "EDGE_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "T_ARROW_HEAD_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 2 * this.EDGE_ARROW_SCALE
    });
    Object.defineProperty(this, "T_ARROW_HEAD_HEIGHT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 8 * this.EDGE_ARROW_SCALE
    });
    Object.defineProperty(this, "TRIANGLE_ARROW_HEAD_HEIGHT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 8 * this.EDGE_ARROW_SCALE
    });
    Object.defineProperty(this, "TRIANGLE_ARROW_HEAD_WIDTH", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 8 * this.EDGE_ARROW_SCALE
    });
    Object.defineProperty(this, "DASH_PARAMETERS", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "5, 3"
    });
    Object.defineProperty(this, "COMPOUND_MARGIN", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 8
    });
    Object.defineProperty(this, "NODE_FONT_SIZE", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 14
    });
    Object.defineProperty(this, "edgeEditing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.edgeEditing = edgeEditing;
    this.editor = editor;
  }

  Object.defineProperty(SVGExporter.prototype, "resetSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.svg = document.createElementNS(this.SVGNameSpace, "svg");
    }
  });
  Object.defineProperty(SVGExporter.prototype, "exportGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      //Reset SVG
      this.resetSVG();
      this.svg.setAttribute("version", "1.1");
      this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg"); //Set viewport of output SVG

      var cyBounds = this.editor.cy.extent();
      this.svg.setAttribute("viewBox", cyBounds.x1 + " " + cyBounds.y1 + " " + cyBounds.w + " " + cyBounds.h);
      var self = this;
      var nodeMap = {};
      var nodeTree = utils_GraphUtilities.createGraphHierarchy(nodes);

      var traverseFunction = function (node) {
        //Create SVG for current node
        nodeMap[node.id()] = node;
        var genomicDataSVG = self.editor.getGenomicDataSVG(node).children;
        var oncoprintDataSVG = self.editor.getOncoprintDataSVG(node);
        self.svg.appendChild(self.createRect(node));
        var labelOffset = genomicDataSVG && genomicDataSVG.length > 0 || oncoprintDataSVG.outerHTML !== "" ? self.GENOMICDATA_LABEL_Y_OFFSET : 0;
        self.svg.appendChild(self.createNodeLabel(node, labelOffset)); //Append Genomic Data SVG

        if (genomicDataSVG) {
          while (genomicDataSVG.length > 0) {
            var elemSVG = genomicDataSVG[0];
            var nodePosition = node.position();
            var svgX = elemSVG.getAttribute("x");
            var svgY = elemSVG.getAttribute("y");
            elemSVG.setAttribute("x", nodePosition.x - node.width() / 2 + parseFloat(svgX));
            elemSVG.setAttribute("y", nodePosition.y - node.height() / 2 + parseFloat(svgY));
            self.svg.appendChild(elemSVG);
          }
        } //Append Oncoprint Data SVG
        else if (oncoprintDataSVG.outerHTML !== "") {
            var nodePosition = node.position();
            var width = parseInt(oncoprintDataSVG.getAttribute("width"));
            var height = parseInt(oncoprintDataSVG.getAttribute("height"));
            var verticalPadding = 8;
            var y = nodePosition.y + node.height() / 2 - (height + verticalPadding);
            oncoprintDataSVG.setAttribute("x", nodePosition.x - width / 2);
            oncoprintDataSVG.setAttribute("y", y);
            self.svg.appendChild(oncoprintDataSVG);
          } //Traverse children


        if (node.childNodes) {
          for (var i in node.childNodes) {
            traverseFunction(node.childNodes[i]);
          }
        }
      }; //Traverse node hierarchy


      for (var i in nodeTree) {
        var rootLevelNode = nodeTree[i];
        traverseFunction(rootLevelNode);
      }

      edges.forEach(function (edge) {
        self.drawEdge(edge);
      });
      return this.svg.outerHTML;
    }
  });
  Object.defineProperty(SVGExporter.prototype, "drawEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge) {
      var sourceEndpoint = edge.sourceEndpoint();
      var targetEndpoint = edge.targetEndpoint();
      var targetArrowShape = edge.style("target-arrow-shape");
      var lineStyle = edge.style("line-style");
      var curveStyle = edge.style("curve-style");
      var anchorPoints = curveStyle === "segments" ? edge.segmentPoints() : edge.controlPoints();
      var labelElement = this.createEdgeLabel(edge);

      if (labelElement) {
        this.svg.appendChild(labelElement);
      }

      var lastAnchor = {
        x: sourceEndpoint.x,
        y: sourceEndpoint.y
      };
      var edgeEndpoint = {
        x: targetEndpoint.x,
        y: targetEndpoint.y
      };

      if (anchorPoints && anchorPoints.length > 0) {
        lastAnchor = {
          x: anchorPoints[anchorPoints.length - 1].x,
          y: anchorPoints[anchorPoints.length - 1].y
        };
      }

      var unitV = this.unitVector({
        x: targetEndpoint.x - lastAnchor.x,
        y: targetEndpoint.y - lastAnchor.y
      });
      var inverseUnitV = this.scale(unitV, -1);
      var targetX = targetEndpoint.x;
      var targetY = targetEndpoint.y; //Draw Triangle arrow head

      if (targetArrowShape === "triangle") {
        targetX = targetEndpoint.x + this.TRIANGLE_ARROW_HEAD_HEIGHT * inverseUnitV.x;
        targetY = targetEndpoint.y + this.TRIANGLE_ARROW_HEAD_HEIGHT * inverseUnitV.y;
        var point1Vector = this.rotateVector(unitV, Math.PI / 2);
        var point2Vector = this.rotateVector(unitV, -Math.PI / 2);
        point1Vector = this.scale(point1Vector, this.TRIANGLE_ARROW_HEAD_WIDTH / 2);
        point2Vector = this.scale(point2Vector, this.TRIANGLE_ARROW_HEAD_WIDTH / 2);
        var point1X = targetX + point1Vector.x;
        var point1Y = targetY + point1Vector.y;
        var point2X = targetX + point2Vector.x;
        var point2Y = targetY + point2Vector.y;
        edgeEndpoint = {
          x: (point1X + point2X) / 2,
          y: (point1Y + point2Y) / 2
        };
        var polySVG = document.createElementNS(this.SVGNameSpace, "polygon");
        polySVG.setAttribute("points", point1X + "," + point1Y + "," + point2X + "," + point2Y + "," + targetEndpoint.x + "," + targetEndpoint.y);
        this.svg.appendChild(polySVG);
      } //Draw T type arrow head
      else if (targetArrowShape === "tee") {
          targetX = targetEndpoint.x;
          targetY = targetEndpoint.y; //Calculate T shape points

          var point1Vector = this.rotateVector(unitV, Math.PI / 2);
          var point2Vector = this.rotateVector(unitV, -Math.PI / 2);
          point1Vector = this.scale(point1Vector, this.T_ARROW_HEAD_HEIGHT / 2);
          point2Vector = this.scale(point2Vector, this.T_ARROW_HEAD_HEIGHT / 2);
          var point1X = targetX + point1Vector.x;
          var point1Y = targetY + point1Vector.y;
          var point2X = targetX + point2Vector.x;
          var point2Y = targetY + point2Vector.y;
          edgeEndpoint = {
            x: (point1X + point2X) / 2,
            y: (point1Y + point2Y) / 2
          }; //Draw edge arrow line here !

          var lineSVG = document.createElementNS(this.SVGNameSpace, "line");
          lineSVG.setAttribute("x1", point1X);
          lineSVG.setAttribute("y1", point1Y);
          lineSVG.setAttribute("x2", point2X);
          lineSVG.setAttribute("y2", point2Y);
          lineSVG.setAttribute("stroke-width", this.T_ARROW_HEAD_WIDTH.toString());
          lineSVG.setAttribute("stroke", "black");
          this.svg.appendChild(lineSVG);
        } // no anchors means a single line connecting source and target end points


      if (!anchorPoints || anchorPoints.length < 1) {
        var lineSVG_1 = document.createElementNS(this.SVGNameSpace, "line");
        lineSVG_1.setAttribute("x1", sourceEndpoint.x);
        lineSVG_1.setAttribute("y1", sourceEndpoint.y);
        lineSVG_1.setAttribute("x2", edgeEndpoint.x);
        lineSVG_1.setAttribute("y2", edgeEndpoint.y);
        lineSVG_1.setAttribute("stroke-width", this.EDGE_WIDTH.toString());
        lineSVG_1.setAttribute("stroke", "black");

        if (lineStyle === "dashed") {
          lineSVG_1.setAttribute("stroke-dasharray", this.DASH_PARAMETERS);
        }

        this.svg.appendChild(lineSVG_1);
      } else if (curveStyle === "unbundled-bezier" || curveStyle === "bezier") {
        var pathSVG = document.createElementNS(this.SVGNameSpace, "path");
        var pathPoints = [];

        for (var i = 0; i < anchorPoints.length; i++) {
          if (i === 0) {
            pathPoints.push("M" + sourceEndpoint.x + "," + sourceEndpoint.y);
            pathPoints.push("Q" + anchorPoints[i].x + "," + anchorPoints[i].y);

            if (anchorPoints.length === 1) {
              pathPoints.push(edgeEndpoint.x + "," + edgeEndpoint.y);
            } else {
              var furtherEndPoint = {
                x: (anchorPoints[i].x + anchorPoints[i + 1].x) / 2,
                y: (anchorPoints[i].y + anchorPoints[i + 1].y) / 2
              };
              pathPoints.push(furtherEndPoint.x + "," + furtherEndPoint.y);
            }
          } else {
            if (i < anchorPoints.length - 1) {
              var furtherEndPoint = {
                x: (anchorPoints[i].x + anchorPoints[i + 1].x) / 2,
                y: (anchorPoints[i].y + anchorPoints[i + 1].y) / 2
              };
              pathPoints.push("T" + furtherEndPoint.x + "," + furtherEndPoint.y);
            } else {
              pathPoints.push("T" + edgeEndpoint.x + "," + edgeEndpoint.y);
            }
          }
        }

        pathSVG.setAttribute('d', pathPoints.join(" "));
        pathSVG.setAttribute('stroke-width', this.EDGE_WIDTH.toString());
        pathSVG.setAttribute('stroke', 'black');

        if (lineStyle === "dashed") {
          pathSVG.setAttribute("stroke-dasharray", this.DASH_PARAMETERS);
        }

        pathSVG.setAttribute('fill', 'none');
        this.svg.appendChild(pathSVG);
      } // anchors means polyline
      else {
          var polylineSVG = document.createElementNS(this.SVGNameSpace, "polyline");
          var polylinePoints = [];

          for (var i = 0; i < anchorPoints.length; i++) {
            if (i === 0) {
              polylinePoints.push(sourceEndpoint.x + "," + sourceEndpoint.y);
              polylinePoints.push(anchorPoints[i].x + "," + anchorPoints[i].y);

              if (anchorPoints.length === 1) {
                polylinePoints.push(edgeEndpoint.x + "," + edgeEndpoint.y);
              }
            } else if (i === anchorPoints.length - 1) {
              polylinePoints.push(anchorPoints[i].x + "," + anchorPoints[i].y);
              polylinePoints.push(edgeEndpoint.x + "," + edgeEndpoint.y);
            } else {
              polylinePoints.push(anchorPoints[i].x + "," + anchorPoints[i].y);
            }
          }

          polylineSVG.setAttribute('points', polylinePoints.join(" "));
          polylineSVG.setAttribute('stroke-width', this.EDGE_WIDTH.toString());
          polylineSVG.setAttribute('stroke', 'black');

          if (lineStyle === "dashed") {
            lineSVG.setAttribute("stroke-dasharray", this.DASH_PARAMETERS);
          }

          polylineSVG.setAttribute('fill', 'none');
          this.svg.appendChild(polylineSVG);
        }
    }
  });
  Object.defineProperty(SVGExporter.prototype, "createRect", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node) {
      var nodeRectangle = document.createElementNS(this.SVGNameSpace, "rect");
      var nodePosition = node.position();

      if (node.isParent()) {
        nodeRectangle.setAttribute("x", nodePosition.x - node.width() / 2 - this.COMPOUND_MARGIN / 2 + "");
        nodeRectangle.setAttribute("y", nodePosition.y - node.height() / 2 - this.COMPOUND_MARGIN / 2 + "");
        nodeRectangle.setAttribute("width", node.width() + this.COMPOUND_MARGIN);
        nodeRectangle.setAttribute("height", node.height() + this.COMPOUND_MARGIN);
      } else {
        nodeRectangle.setAttribute("x", nodePosition.x - node.width() / 2 + "");
        nodeRectangle.setAttribute("y", nodePosition.y - node.height() / 2 + "");
        nodeRectangle.setAttribute("width", node.width());
        nodeRectangle.setAttribute("height", node.height());
      }

      nodeRectangle = this.createStyleForNodes(node, nodeRectangle);
      return nodeRectangle;
    }
  });
  Object.defineProperty(SVGExporter.prototype, "createNodeLabel", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node, genomicDataOffset) {
      var verticalTextOffset = 5;
      var nodePosition = node.position();
      var svgText = document.createElementNS(this.SVGNameSpace, "text");

      if (node.isParent()) {
        verticalTextOffset = 20;
        svgText.setAttribute("x", nodePosition.x);
        svgText.setAttribute("y", nodePosition.y + node.height() / 2 + verticalTextOffset);
      } else {
        svgText.setAttribute("x", nodePosition.x);
        svgText.setAttribute("y", nodePosition.y + verticalTextOffset + genomicDataOffset);
      }

      svgText.setAttribute("font-family", "Arial");
      svgText.setAttribute("text-anchor", "middle");
      svgText.setAttribute("font-size", this.NODE_FONT_SIZE.toString());
      svgText.innerHTML = node.data("name");
      return svgText;
    }
  });
  Object.defineProperty(SVGExporter.prototype, "createStyleForNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node, nodeRectangle) {
      var nodeType = node.data().type;
      var strokeWidth = node.css("border-width") || this.NODE_STROKE_WIDTH;
      var strokeColor = this.NODE_STROKE_COLOR;
      var fillColor = this.NODE_FILL_COLOR;
      var opacity = this.NODE_OPACITY;
      var strokeOpacity = 1;

      if (nodeType == "GENE" || nodeType == "COMPARTMENT") {
        nodeRectangle.setAttribute("rx", this.ROUNDING_FACTOR);
        nodeRectangle.setAttribute("ry", this.ROUNDING_FACTOR);
        if (nodeType == "COMPARTMENT") strokeWidth = this.COMPARTMENT_STROKE_WIDTH;
      }

      if (nodeType == "PROCESS") {
        opacity = 0;
        strokeOpacity = 0;
      }

      if (nodeType == "FAMILY") {
        fillColor = this.FAMILY_FILL_COLOR;
        strokeColor = this.FAMILY_STROKE_COLOR;
      }

      var styleString = "stroke-width:" + strokeWidth + ";" + "stroke:" + strokeColor + ";" + "fill-opacity:" + opacity + ";" + "fill:" + fillColor + ";" + "stroke-opacity:" + strokeOpacity + ";";
      nodeRectangle.setAttribute("style", styleString);
      return nodeRectangle;
    }
  });
  Object.defineProperty(SVGExporter.prototype, "createEdgeLabel", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge) {
      var labelText = edge.data("name");

      if (labelText === "") {
        return undefined;
      }

      var svgTextElement = document.createElementNS(this.SVGNameSpace, "text");
      var fontSize = edge.style("font-size");
      var fontFamily = edge.style("font-family"); // get rotation angle in degrees for transform: rotate()

      var labelRotationAngle = this.getEdgeLabelRotationAngle(edge);
      var lineHeight = edge._private.rscratch.labelLineHeight; // adjust margins to compensate for the label hack (see stylesheet)

      var dx = lineHeight / 4 * Math.sin(edge._private.rscratch.labelAngle);
      var dy = lineHeight / 4 * Math.cos(edge._private.rscratch.labelAngle);
      var labelPos = {
        x: edge._private.rscratch.labelX + dx,
        y: edge._private.rscratch.labelY - dy
      };
      svgTextElement.setAttribute('x', labelPos.x.toString());
      svgTextElement.setAttribute('y', labelPos.y.toString());
      svgTextElement.setAttribute("font-family", fontFamily);
      svgTextElement.setAttribute("text-anchor", "middle");
      svgTextElement.setAttribute("font-size", fontSize);
      svgTextElement.innerHTML = labelText; // adjusting for autorotate option
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#rotate    

      svgTextElement.setAttribute("transform", "rotate(" + labelRotationAngle + " " + labelPos.x.toString() + " " + labelPos.y.toString() + ")");
      return svgTextElement;
    }
  });
  Object.defineProperty(SVGExporter.prototype, "getEdgeLabelRotationAngle", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge) {
      var labelAngle = edge._private.rscratch.labelAngle;

      if (!labelAngle) {
        return 0;
      }

      return this.toDegrees(labelAngle);
    }
  });
  Object.defineProperty(SVGExporter.prototype, "toDegrees", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (radians) {
      var pi = Math.PI;
      return radians * (180 / pi);
    }
  });
  Object.defineProperty(SVGExporter.prototype, "unitVector", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (v) {
      var inverseLength = 1 / Math.sqrt(v.x * v.x + v.y * v.y);
      return {
        x: v.x * inverseLength,
        y: v.y * inverseLength
      };
    }
  });
  Object.defineProperty(SVGExporter.prototype, "rotateVector", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (v, radians) {
      var newX = v.x * Math.cos(radians) - v.y * Math.sin(radians);
      var newY = v.x * Math.sin(radians) + v.y * Math.cos(radians);
      return {
        x: newX,
        y: newY
      };
    }
  });
  Object.defineProperty(SVGExporter.prototype, "scale", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (v, scalar) {
      var newX = v.x * scalar;
      var newY = v.y * scalar;
      return {
        x: newX,
        y: newY
      };
    }
  });
  return SVGExporter;
}();

/* harmony default export */ var utils_SVGExporter = (SVGExporter_SVGExporter);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(4);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// EXTERNAL MODULE: external "tippy.js"
var external_tippy_js_ = __webpack_require__(16);
var external_tippy_js_default = /*#__PURE__*/__webpack_require__.n(external_tippy_js_);

// EXTERNAL MODULE: external "tippy.js/dist/tippy.css"
var tippy_css_ = __webpack_require__(21);

// CONCATENATED MODULE: ./src/managers/GenomicDataOverlayManager.ts



 // optional for styling

var GenomicDataOverlayManager_GenomicDataOverlayManager =
/** @class */
function () {
  function GenomicDataOverlayManager(cy) {
    Object.defineProperty(this, "genomicDataMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "visibleGenomicDataMapByType", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "groupedGenomicDataCount", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "groupedGenomicDataMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "patientData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "DEFAULT_VISIBLE_GENOMIC_DATA_COUNT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "observers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "colorScheme", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "clearAllGenomicData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function () {
        this.genomicDataMap = {};
        this.visibleGenomicDataMapByType = {};
        this.groupedGenomicDataMap = {};
        this.groupedGenomicDataCount = 0;
      }
    });
    Object.defineProperty(this, "prepareGenomicDataShareDB", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function (genomicData) {
        var genomicDataMap = {};
        var cancerTypes = [];
        var visibleGenomicDataMapByType = {}; // By lines

        var lines = genomicData.split("\n"); // First line is meta data !

        var metaLineColumns = lines[0].split("\t"); // Parse cancer types

        for (var i = 1; i < metaLineColumns.length; i++) {
          cancerTypes.push(metaLineColumns[i]); // Update initially visible genomic data boxes !

          if (i - 1 < this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT) {
            visibleGenomicDataMapByType[cancerTypes[i - 1]] = true;
          } else {
            visibleGenomicDataMapByType[cancerTypes[i - 1]] = false;
          }
        } // parse genomic data


        for (var i = 1; i < lines.length; i++) {
          // EOF check
          if (lines[i].length === 0) {
            break;
          } // Split each line by tab and parse genomic data content


          var lineContent = lines[i].split("\t");
          var geneSymbol = lineContent[0]; // If current gene entry is not  in genomic data map create new hashmap entry

          if (!(geneSymbol in genomicDataMap)) {
            genomicDataMap[geneSymbol] = {};
          } // Add each entry of genomic data


          for (var j = 1; j < lineContent.length; j++) {
            genomicDataMap[geneSymbol][cancerTypes[j - 1]] = lineContent[j];
          }
        }

        var returnObj = {
          genomicDataMap: genomicDataMap,
          visibilityMap: visibleGenomicDataMapByType
        };
        return returnObj;
      }
    });
    Object.defineProperty(this, "updateGenomicDataVisibility", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function (_key, isVisible) {
        if (_key in this.visibleGenomicDataMapByType) {
          this.visibleGenomicDataMapByType[_key] = isVisible;
        }
      }
    });
    Object.defineProperty(this, "hideGenomicData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function () {
        var _this = this;

        this.cy.nodes('[type="GENE"]').forEach(function (node) {
          node.data('w', _this.getRequiredWidthForGenomicData(0));
        });
        this.cy.style().selector('node[type="GENE"]').style("text-margin-y", 0).style("background-image", function (ele) {
          var dataURI = "data:image/svg+xml;utf8,";
          return dataURI;
        }).update();
      }
    });
    this.cy = cy;
    this.genomicDataMap = {};
    this.patientData = {};
    this.visibleGenomicDataMapByType = {};
    this.groupedGenomicDataMap = {};
    this.groupedGenomicDataCount = 0;
    this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT = 6;
    this.colorScheme = {
      "-100": "#0000ff",
      "0": "#ffffff",
      "100": "#ff0000"
    }; // Observer-observable pattern related stuff

    this.observers = [];
  }

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getEmptyGroupID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var oldCount = this.groupedGenomicDataCount;
      this.groupedGenomicDataCount++;
      return oldCount;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicDataLocally", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData, groupID) {
      this.parseGenomicData(genomicData, groupID);
      this.showGenomicData();
      this.notifyObservers();
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "preparePortalGenomicDataShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData) {
      var geneMap = {};
      var visMap = {};

      for (var cancerKey in genomicData) {
        for (var geneSymbol in genomicData[cancerKey]) {
          geneMap[geneSymbol] = {};
          geneMap[geneSymbol][cancerKey] = genomicData[cancerKey][geneSymbol];
        }

        visMap[cancerKey] = true;
      }

      return {
        genomicDataMap: geneMap,
        visibilityMap: visMap
      };
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (data) {
      this.genomicDataMap = data;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "removeGenomicVisData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.visibleGenomicDataMapByType = {};
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicDataWithGeneSymbol", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneSymbol, data) {
      this.genomicDataMap[geneSymbol] = data;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicGroupData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (groupID, data) {
      this.groupedGenomicDataMap[groupID] = data;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addPortalGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (data, groupID) {
      for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
        var cancerStudy = _a[_i];
        this.visibleGenomicDataMapByType[cancerStudy] = true; // Group current cancer study according to the groupID

        if (this.groupedGenomicDataMap[groupID] === undefined) {
          this.groupedGenomicDataMap[groupID] = [];
        }

        this.groupedGenomicDataMap[groupID].push(cancerStudy);
        var cancerData = data[cancerStudy];

        for (var _b = 0, _c = Object.keys(cancerData); _b < _c.length; _b++) {
          var geneSymbol = _c[_b];
          if (this.genomicDataMap[geneSymbol] === undefined) this.genomicDataMap[geneSymbol] = {};
          this.genomicDataMap[geneSymbol][cancerStudy] = data[cancerStudy][geneSymbol].toFixed ? data[cancerStudy][geneSymbol].toFixed(2) : data[cancerStudy][geneSymbol];
        }
      } //This parameter is used as flag for PatientView PathwayMapper Functions


      if (data["PatientView"] == 1) {
        this.patientData = data;
        this.showPatientData();
      } else {
        this.showGenomicData();
      }

      this.notifyObservers();
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "removeGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.genomicDataMap = {};
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "removeGenomicDataWithGeneSymbol", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneSymbol) {
      this.genomicDataMap[geneSymbol] = {};
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "addGenomicVisData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (key, data) {
      this.visibleGenomicDataMapByType[key] = data;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "countVisibleGenomicDataByType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      // Count the genomic data that will be displayed on nodes' body
      var genomicDataBoxCount = 0;

      for (var cancerType in this.visibleGenomicDataMapByType) {
        if (this.visibleGenomicDataMapByType[cancerType]) {
          genomicDataBoxCount++;
        }
      }

      return genomicDataBoxCount;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateSVGForNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      var genomicDataBoxCount = this.countVisibleGenomicDataByType(); // Experimental data overlay part !

      var dataURI = "data:image/svg+xml;utf8,";
      var svgNameSpace = "http://www.w3.org/2000/svg";
      var nodeLabel = ele.data("name"); // If there is no genomic data for this node return !

      if (!(nodeLabel in this.genomicDataMap)) {
        return dataURI;
      }

      var eleBBox = ele.boundingBox();
      var reqWidth = this.getRequiredWidthForGenomicData(genomicDataBoxCount);
      var overlayRecBoxW = reqWidth - 10;
      var overlayRecBoxH = 25;
      var svg = document.createElementNS(svgNameSpace, "svg"); // It seems this should be set according to the node size !

      svg.setAttribute("width", reqWidth);
      svg.setAttribute("height", eleBBox.h); // This is important you need to include this to succesfully render in cytoscape.js!

      svg.setAttribute("xmlns", svgNameSpace); // Overlay Data Rect

      var overLayRectBBox = {
        w: overlayRecBoxW,
        h: overlayRecBoxH,
        x: reqWidth / 2 - overlayRecBoxW / 2,
        y: eleBBox.h / 2 + overlayRecBoxH / 2 - 18
      };
      var genomicFrequencyData = this.genomicDataMap[nodeLabel];
      var maxGenomicDataBoxCount =
      /*(genomicDataBoxCount > 3) ? 3:*/
      genomicDataBoxCount;
      var genomicBoxCounter = 0;

      for (var i in this.groupedGenomicDataMap) {
        for (var j in this.groupedGenomicDataMap[i]) {
          var cancerType = this.groupedGenomicDataMap[i][j];

          if (!this.visibleGenomicDataMapByType[cancerType]) {
            continue;
          }

          if (genomicFrequencyData[cancerType] !== undefined) {
            genomicDataRectangleGenerator(overLayRectBBox.x + genomicBoxCounter * overLayRectBBox.w / maxGenomicDataBoxCount, overLayRectBBox.y, overLayRectBBox.w / maxGenomicDataBoxCount, overLayRectBBox.h, genomicFrequencyData[cancerType], svg, this.colorScheme);
          } else {
            genomicDataRectangleGenerator(overLayRectBBox.x + genomicBoxCounter * overLayRectBBox.w / maxGenomicDataBoxCount, overLayRectBBox.y, overLayRectBBox.w / maxGenomicDataBoxCount, overLayRectBBox.h, null, svg, this.colorScheme);
          }

          genomicBoxCounter++;
        }
      }

      function hexToRGB(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

      function swap(a, b) {
        var temp = a;
        a = b;
        b = temp;
      }

      function findValueColorInterval(colorScheme, value) {
        var pairs = Object.entries(colorScheme).map(function (_a) {
          var value = _a[0],
              color = _a[1];
          return {
            value: Number(value),
            color: hexToRGB(color)
          };
        }).sort(function (o1, o2) {
          return o1.value - o2.value;
        });

        if (value < pairs[0].value) {
          return {
            lower: {
              value: -Infinity,
              color: pairs[0].color
            },
            upper: {
              value: pairs[0].value,
              color: pairs[0].color
            }
          };
        } else if (value > pairs[pairs.length - 1].value) {
          return {
            lower: {
              value: pairs[pairs.length - 1].value,
              color: pairs[pairs.length - 1].color
            },
            upper: {
              value: Infinity,
              color: pairs[pairs.length - 1].color
            }
          };
        } else {
          for (var i = 0; i < pairs.length - 1; i++) {
            if (value >= pairs[i].value && value < pairs[i + 1].value) {
              return {
                lower: {
                  value: pairs[i].value,
                  color: pairs[i].color
                },
                upper: {
                  value: pairs[i + 1].value,
                  color: pairs[i + 1].color
                }
              };
            }
          }

          return {
            lower: {
              value: -Infinity,
              color: pairs[0].color
            },
            upper: {
              value: Infinity,
              color: pairs[pairs.length - 1].color
            }
          };
        }
      }
      /**
       * Map the percentage value to r,g,b values using a log scale, i.e instead of taking the ratio linearly by taking differences
       * between the lower and upper color r,g,b values, take the differences between their Math.log values. This makes the color
       * scale up to the upper value much quicker, i.e in a 0-100 mapping a value of 20 doesn't map to 1/5 way between two colors
       * but closer to half way. This is done because high numbers in alteration values are extremely rare and even small numbers
       * are usually significant.
       */


      function getMappedColor(lowerColor, upperColor, lowerValue, upperValue, percent) {
        var up = Math.log(1 + upperValue);
        var low = Math.log(1 + lowerValue);
        var p = Math.log(1 + (percent >= 0 ? percent : percent * -1)); // arbitrary value used to slow down the scaling of log instead of getting too much into math

        var scalingFactor = percent >= 0 ? 0.8 : 1.2;
        var ratio = (p - low) / (up - low) * scalingFactor;
        return {
          r: lowerColor.r + ratio * (upperColor.r - lowerColor.r),
          g: lowerColor.g + ratio * (upperColor.g - lowerColor.g),
          b: lowerColor.b + ratio * (upperColor.b - lowerColor.b)
        };
      }

      function genomicDataRectangleGenerator(x, y, w, h, percent, parentSVG, colorScheme) {
        var limits = findValueColorInterval(colorScheme, Number(percent));
        var color = {
          r: 255,
          g: 255,
          b: 255
        };

        if (limits.lower.value === -Infinity) {
          color = limits.upper.color;
        } else if (limits.upper.value === Infinity) {
          color = limits.lower.color;
        } else {
          var upperValue = limits.upper.value;
          var lowerValue = limits.lower.value;
          var upperColor = limits.upper.color;
          var lowerColor = limits.lower.color;

          if (lowerValue < 0 && upperValue <= 0) {
            lowerValue *= -1;
            upperValue *= -1;
            swap(lowerValue, upperValue);
          } else if (lowerValue < 0 && upperValue > 0) {
            upperValue += lowerValue * -1;
            lowerValue = 0;
          }

          color = getMappedColor(lowerColor, upperColor, lowerValue, upperValue, Number(percent));
        }

        var colorString = "";

        if (percent) {
          colorString = percent[0] === '-' || Number(percent) > 100 ? "rgb(210,210,210)" : "rgb(" + Math.round(color.r) + ", " + Math.round(color.g) + ", " + Math.round(color.b) + ")"; // Rectangle Part

          var overlayRect = document.createElementNS(svgNameSpace, "rect");
          overlayRect.setAttribute("x", x);
          overlayRect.setAttribute("y", y);
          overlayRect.setAttribute("width", w);
          overlayRect.setAttribute("height", h);
          overlayRect.setAttribute("style", "stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:" + colorString + ";"); // Text Part

          if (percent[0] === "-") {
            percent = percent.substr(1);
          }

          var textPercent = percent < 0.5 && percent > 0 ? "<0.5" : Number(percent).toFixed(1);
          var text = Number(percent) > 100 ? "N/P" : textPercent + "%";
          var fontSize = 14;
          var textLength = text.length;
          var xOffset = w / 2 - textLength * 4;
          var yOffset = fontSize / 3;
          var svgText = document.createElementNS(svgNameSpace, "text");
          svgText.setAttribute("x", x + xOffset);
          svgText.setAttribute("y", y + h / 2 + yOffset);
          svgText.setAttribute("font-family", "Arial");
          svgText.setAttribute("font-size", fontSize + "");
          svgText.innerHTML = text;
          parentSVG.appendChild(overlayRect);
          parentSVG.appendChild(svgText);
        } else {
          colorString = "rgb(210,210,210)"; // Rectangle Part

          var overlayRect = document.createElementNS(svgNameSpace, "rect");
          overlayRect.setAttribute("x", x);
          overlayRect.setAttribute("y", y);
          overlayRect.setAttribute("width", w);
          overlayRect.setAttribute("height", h);
          overlayRect.setAttribute("style", "stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:" + colorString + ";");
          parentSVG.appendChild(overlayRect);
        }
      }

      return svg;
    }
  }); // Just an utility function to calculate required width for genes for genomic data !

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getRequiredWidthForGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicDataBoxCount) {
      var term = genomicDataBoxCount > 3 ? genomicDataBoxCount - 3 : 0;
      return 150 + term * 35;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "updateColorScheme", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (colorValueMap) {
      this.colorScheme = colorValueMap;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "showGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (resizeNodeCallback) {
      var _this = this;

      var self = this;
      var genomicDataBoxCount = this.countVisibleGenomicDataByType();

      if (genomicDataBoxCount < 1) {
        // Hide all genomic data and return
        this.hideGenomicData();
        return;
      }

      this.cy.nodes('[type="GENE"]').forEach(function (node) {
        node.data('w', _this.getRequiredWidthForGenomicData(genomicDataBoxCount));

        if (resizeNodeCallback) {
          resizeNodeCallback(node);
        }
      });
      this.cy.style().selector('node[type="GENE"]').style("text-margin-y", function (ele) {
        var nodeLabel = ele.data("name"); // If there is no genomic data for this node return !

        if (!(nodeLabel in self.genomicDataMap)) {
          return 0;
        } // Else shift label in Y axis


        return -15;
      }).style("background-image", function (ele) {
        var x = encodeURIComponent(self.generateSVGForNode(ele).outerHTML);

        if (x === "undefined") {
          return "none";
        }

        var dataURI = "data:image/svg+xml;utf8," + x;
        return dataURI;
      }).update();
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "parseGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData, groupID) {
      this.genomicDataMap = this.genomicDataMap || {};
      this.visibleGenomicDataMapByType = this.visibleGenomicDataMapByType || {};
      this.groupedGenomicDataMap = this.groupedGenomicDataMap || {};
      var cancerTypes = []; // By lines

      var lines = genomicData.split("\n"); // First line is meta data !

      var metaLineColumns = lines[0].split("\t"); // Parse cancer types

      for (var i = 1; i < metaLineColumns.length; i++) {
        cancerTypes.push(metaLineColumns[i]);
        var visibleGenomicDataCount = Object.keys(this.visibleGenomicDataMapByType).length; // Update initially visible genomic data boxes !

        if (visibleGenomicDataCount < this.DEFAULT_VISIBLE_GENOMIC_DATA_COUNT) {
          this.visibleGenomicDataMapByType[cancerTypes[i - 1]] = true;
        } else {
          this.visibleGenomicDataMapByType[cancerTypes[i - 1]] = false;
        }

        if (this.groupedGenomicDataMap[groupID] === undefined) {
          this.groupedGenomicDataMap[groupID] = [];
        }

        this.groupedGenomicDataMap[groupID].push(cancerTypes[i - 1]);
      } // parse genomic data


      for (var i = 1; i < lines.length; i++) {
        // EOF check
        if (lines[i].length === 0) {
          break;
        } // Split each line by tab and parse genomic data content


        var lineContent = lines[i].split("\t");
        var geneSymbol = lineContent[0]; // If current gene entry is not  in genomic data map create new map

        if (!(geneSymbol in this.genomicDataMap)) {
          this.genomicDataMap[geneSymbol] = {};
        } // Add each entry of genomic data


        for (var j = 1; j < lineContent.length; j++) {
          this.genomicDataMap[geneSymbol][cancerTypes[j - 1]] = lineContent[j];
        }
      }
    }
  }); // Simple observer-observable pattern for views!!!!!

  Object.defineProperty(GenomicDataOverlayManager.prototype, "registerObserver", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (observer) {
      this.observers.push(observer);
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "notifyObservers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
        var observer = _a[_i];
        observer.notify();
      }
    }
  }); //This method is needed to calculate the alteration Types for each gene

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getAlterationCountForPatient", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneData) {
      var count = 0;

      for (var altType in geneData) {
        count++;
      }

      return count;
    }
  }); //These methods are created to be used in CbioPortal PatientView they are not used
  //in ResultView Page or PathwayMapper Editor

  Object.defineProperty(GenomicDataOverlayManager.prototype, "showPatientData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var self = this;
      var data = this.patientData; // const genomicDataBoxCount = 3 //this.countVisibleGenomicDataByType(); //CHANGE

      var genomicDataBoxCount = data.geneticTrackData ? data.geneticTrackData.length : 3;

      if (genomicDataBoxCount < 1) {
        // Hide all genomic data and return
        this.hideGenomicData();
        return;
      }

      this.cy.style().selector('node[type="GENE"]') // It used to change the width of nodes only locally
      .style("width", function (ele) {
        return _this.getRequiredWidthForGenomicData(genomicDataBoxCount);
      }).style("text-margin-y", function (ele) {
        var nodeLabel = ele.data("name"); // If there is no genomic data for this node return !

        if (!(nodeLabel in data)) {
          return 0;
        } // Else shift label in Y axis


        return -15;
      }).style("background-image", function (ele) {
        var x = encodeURIComponent( // self.generateSVGForPatientNode(ele, data).outerHTML
        self.generateOncoprintForPatientNode(ele).outerHTML);

        if (x === "undefined") {
          return "none";
        }

        var dataURI = "data:image/svg+xml;utf8," + x;
        return dataURI;
      }).update();
      this.cy.on("mouseover", 'node[type="GENE"]', function (event) {
        var node = event.target || event.cyTarget;
        var nodeLabel = node.data("name");

        if (!data[nodeLabel]) {
          return;
        }

        var ref = node.popperRef();
        var dummyDomEle = document.createElement("div");
        document.body.appendChild(dummyDomEle);
        var tip = external_tippy_js_default()(dummyDomEle, {
          // tippy props:
          getReferenceClientRect: ref.getBoundingClientRect,
          trigger: "manual",
          placement: "bottom",
          interactive: true,
          theme: "cbioportal",
          // your own custom props
          // content prop can be used when the target is a single element https://atomiks.github.io/tippyjs/v6/constructor/#prop
          content: function () {
            var content = self.generateHTMLContentForNodeTooltip(node, data).get(0);
            return content;
          },
          onHidden: function (instance) {
            instance.destroy();
            dummyDomEle.remove();
          }
        });
        node.one("showqtipevent", function () {
          tip.show();
        });
        node.on("mouseout", function () {
          if (dummyDomEle && dummyDomEle["_tippy"]) {
            tip.hide();
          }
        });
        node.trigger("showqtipevent");
      });
    }
  }); //Every mutation type has a unique color coded. This method is used to retrieve the colors

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getOncoprintColors", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (selectedGene) {
      var oncoprintColors = {
        Missense_Mutation: "rgb(0,128,0)",
        inframe: "#993404",
        truncating: "#000000",
        Fusion: "rgb(139,0,201)",
        AMP: "rgb(255,0,0)",
        gain: "#ffb6c1",
        heatloss: "#8fd8d8",
        homdel: "rgb(0,0,255)",
        DeepDel: "rgb(0,0,255)",
        "5'Flank": "rgb(207,88,188)",
        in_frame_del: "rgb(166,128,40)"
      };

      if (oncoprintColors[selectedGene] !== undefined) {
        return oncoprintColors[selectedGene];
      } else {
        //Types are not on the list corresponds to black
        return "rgb(0,0,0)";
      }
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateSVGForPatientNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, patientData) {
      //Here we should use the parameter patientData when calculating the expressions
      var genomicDataBoxCount = this.countVisibleGenomicDataByType(); // Experimental data overlay part !

      var dataURI = "data:image/svg+xml;utf8,";
      var svgNameSpace = "http://www.w3.org/2000/svg"; //nodeLabel refers to the nodeLabels in the overlay data

      var nodeLabel = ele.data("name"); // If there is no genomic data for this node return !

      if (!(nodeLabel in patientData)) {
        return dataURI;
      } //this parameter refers to the count of alteration types for each gene


      var alterationBoxCount = this.getAlterationCountForPatient(patientData[nodeLabel]);
      var eleBBox = ele.boundingBox();
      var svg = document.createElementNS(svgNameSpace, "svg"); //this parameter is set to 12 since there are 12 different possiblities for types

      var term = alterationBoxCount > 12 ? alterationBoxCount - 12 : 0;
      var reqWidth = 150 + term * 35;
      var overlayRecBoxW = reqWidth - 10;
      var overlayRecBoxH = 25; // It seems this should be set according to the node size !

      svg.setAttribute("width", reqWidth);
      svg.setAttribute("height", eleBBox.h); // This is important you need to include this to succesfully render in cytoscape.js!

      svg.setAttribute("xmlns", svgNameSpace); // Overlay Data Rect

      var overLayRectBBox = {
        w: overlayRecBoxW,
        h: overlayRecBoxH,
        x: reqWidth / 2 - overlayRecBoxW / 2,
        y: eleBBox.h / 2 + overlayRecBoxH / 2 - 18
      };
      var genomicBoxCounter = 0; //required width is calculated for each gene since box count is different for each gene

      for (var j in patientData[nodeLabel]) {
        var genomicAlterationData = patientData[nodeLabel];
        var alterationType = j;

        if (!this.visibleGenomicDataMapByType[nodeLabel]) {
          continue;
        } //get the color string corresponding to the alterationType


        var colorString = this.getOncoprintColors(alterationType);

        if (genomicAlterationData[alterationType] !== undefined) {
          genomicDataRectangleGeneratorPatient(overLayRectBBox.x + genomicBoxCounter * overLayRectBBox.w / alterationBoxCount, overLayRectBBox.y, overLayRectBBox.w / alterationBoxCount, overLayRectBBox.h, 100, svg, alterationType, colorString);
        } else {
          genomicDataRectangleGeneratorPatient(overLayRectBBox.x + genomicBoxCounter * overLayRectBBox.w / alterationBoxCount, overLayRectBBox.y, overLayRectBBox.w / alterationBoxCount, overLayRectBBox.h, null, svg, "", null);
        }

        genomicBoxCounter++;
      } //This function differs from genomicRectangleGenerator. genomicDataRectangleGeneratorPatient
      //has an extra parameter text. In patient view alterationTypes of genes are displayed instead of
      //alteration percentage. Hence a text is sent to this method which is alterationType


      function genomicDataRectangleGeneratorPatient(x, y, w, h, percent, parentSVG, text, colorString) {
        if (percent) {
          var isNegativePercent = percent < 0; // Rectangle Part

          var overlayRect = document.createElementNS(svgNameSpace, "rect");
          overlayRect.setAttribute("x", x);
          overlayRect.setAttribute("y", y);
          overlayRect.setAttribute("width", w);
          overlayRect.setAttribute("height", h);
          overlayRect.setAttribute("style", "stroke-width:1;stroke:rgb(0,0,0);opacity:1;fill:" + colorString + ";"); // Text Part

          var fontSize = 14;
          var textLength = 4;
          var xOffset = w / 2 - textLength * 4;
          var yOffset = fontSize / 3;
          var svgText = document.createElementNS(svgNameSpace, "text");

          if (colorString === "rgb(0,0,0)") {
            svgText.setAttribute("fill", "white");
          }

          svgText.setAttribute("x", x + xOffset);
          svgText.setAttribute("y", y + h / 2 + yOffset);
          svgText.setAttribute("font-family", "Arial");
          svgText.setAttribute("font-size", fontSize + ""); //first 4 letters of the alterationTypes are used

          svgText.innerHTML = text.substring(0, 4);
          parentSVG.appendChild(overlayRect);
          parentSVG.appendChild(svgText);
        } else {
          //Normally
          colorString = "rgb(210,210,210)";
        }
      }

      return svg;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateOncoprintForPatientNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      // const dataURI = 'data:image/svg+xml;utf8,'
      // nodeLabel refers to the nodeLabels in the overlay data
      var patientData = this.patientData;
      var nodeLabel = ele.data("name");
      var genomicData = patientData[nodeLabel];
      var svgNameSpace = "http://www.w3.org/2000/svg";
      var svgElement = document.createElementNS(svgNameSpace, "svg");

      if (!genomicData) {
        return {
          outerHTML: ""
        };
      }

      var ruleset = new external_oncoprintjs_["GeneticAlterationRuleSet"](genomicData.geneticTrackRuleSetParams);
      var cellWidth = 6;
      var cellPadding = 3;
      var cellHeight = 23;
      var cellVerticalPadding = 8;
      var universalShapes = ruleset.getUniversalShapes(cellWidth, cellHeight);
      var specificShapesPerDatum = ruleset.getSpecificShapesForDatum(genomicData.geneticTrackData, cellWidth, cellHeight);
      var shapesPerDatum = specificShapesPerDatum.map(function (specificShapes) {
        return universalShapes.concat(specificShapes);
      });
      shapesPerDatum.forEach(function (shapes, index) {
        var offsetX = index * (cellWidth + cellPadding); // width + padding

        var offsetY = cellVerticalPadding;
        var g = document.createElementNS(svgNameSpace, "g");
        shapes.forEach(function (shape) {
          return g.appendChild(Object(external_oncoprintjs_["shapeToSvg"])(shape, offsetX, offsetY));
        });
        svgElement.appendChild(g);
      }); // It seems this should be set according to the node size !

      svgElement.setAttribute("width", ((cellWidth + cellPadding) * shapesPerDatum.length).toString());
      svgElement.setAttribute("height", (cellHeight + cellVerticalPadding).toString()); // This is important you need to include this to succesfully render in cytoscape.js!

      svgElement.setAttribute("xmlns", svgNameSpace);
      return svgElement;
    }
  }); // Mapping of alteration type keys to strings
  // See: https://github.com/cBioPortal/cbioportal-frontend/blob/442e108208846255feb1ed5b309218cd44927fb9/src/shared/components/oncoprint/TooltipUtils.ts#L599

  Object.defineProperty(GenomicDataOverlayManager.prototype, "getCNADisplayString", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (alterationTypeKey) {
      var disp_cna = {
        "-2": "HOMODELETED",
        "-1": "HETLOSS",
        "1": "GAIN",
        "2": "AMPLIFIED"
      };
      return disp_cna[alterationTypeKey];
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateSvgIconForSample", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (iconColor, iconText) {
      var html = '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">' + '<g transform="translate(6,6)">' + '<circle r="6" fill="' + iconColor + '" fill-opacity="1"></circle>' + "</g>" + '<g transform="translate(6,5.5)">' + '<text y="4" text-anchor="middle" font-size="10" fill="white" style="cursor: default;">' + iconText + "</text>" + "</g>" + "</svg>";
      return html;
    }
  });
  Object.defineProperty(GenomicDataOverlayManager.prototype, "generateHTMLContentForNodeTooltip", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, patientData) {
      var _this = this;

      var tooltipMaxHeight = "200px";
      var tooltipMaxWidth = "200px";
      var marginBetweenSamples = "10px";
      var sampleIconColorMap = patientData.sampleColors;
      var sampleIndexMap = patientData.sampleIndex;
      var nodeLabel = ele.data("name");
      var data = patientData[nodeLabel]; // Outer wrapper for the entire tooltip

      var wrapper = external_jquery_default()("<div></div>");
      wrapper.css({
        "max-width": tooltipMaxWidth,
        "max-height": tooltipMaxHeight,
        "word-wrap": "break-word",
        "overflow-y": "auto"
      });
      data.geneticTrackData.forEach(function (sample, sampleIndex) {
        var sampleId = sample.sample;
        var iconColor = sampleIconColorMap[sampleId];
        var iconText = (sampleIndexMap[sampleId] + 1).toString();

        var sampleIconSvgHTML = _this.generateSvgIconForSample(iconColor, iconText);

        var margin = sampleIndex > 0 ? marginBetweenSamples : "0px"; // Inner wrapper for a single sample

        var sampleWrapper = external_jquery_default()("<div></div>");
        sampleWrapper.css({
          "margin-top": margin
        });
        var sampleData = sample.data;
        var mutationInfo = [];
        var cnaInfo = [];
        var fusionInfo = [];
        sampleData.forEach(function (data) {
          var geneSymbol = data.gene.hugoGeneSymbol;

          if (sample.disp_mut && data.proteinChange && data.mutationType !== "Fusion") {
            var proteinChange = data.proteinChange;
            mutationInfo.push({
              gene: geneSymbol,
              proteinChange: proteinChange
            });
          }

          if (sample.disp_cna && data.alteration) {
            var cnaLabelKey = data.alteration;

            var cnaLabel = _this.getCNADisplayString(cnaLabelKey);

            cnaInfo.push({
              gene: geneSymbol,
              cnaLabel: cnaLabel
            });
          }

          if (sample.disp_fusion && data.proteinChange && data.mutationType === "Fusion") {
            var proteinChange = data.proteinChange;
            fusionInfo.push({
              gene: geneSymbol,
              proteinChange: proteinChange
            });
          }
        }); // Prepare HTML for tooltip

        var mutationInfoHTML = mutationInfo.length > 0 ? "Mutation: " : "";
        var cnaInfoHTML = cnaInfo.length > 0 ? "CNA: " : "";
        var fusionInfoHTML = fusionInfo.length > 0 ? "Fusion: " : "";
        mutationInfo.forEach(function (mutation, index) {
          mutationInfoHTML += "<b>" + mutation.gene + " " + mutation.proteinChange + "</b>";

          if (index !== mutationInfo.length - 1) {
            mutationInfoHTML += ", ";
          } else {
            mutationInfoHTML += "<br>";
          }
        });
        cnaInfo.forEach(function (cna, index) {
          cnaInfoHTML += "<b>" + cna.gene + " " + cna.cnaLabel + "</b>";

          if (index !== cnaInfo.length - 1) {
            cnaInfoHTML += ", ";
          } else {
            cnaInfoHTML += "<br>";
          }
        });
        fusionInfo.forEach(function (fusion, index) {
          fusionInfoHTML += "<b>" + fusion.gene + " " + fusion.proteinChange + "</b>";

          if (index !== fusionInfo.length - 1) {
            fusionInfoHTML += ", ";
          } else {
            fusionInfoHTML += "<br>";
          }
        });
        var sampleIdHTML = "<b> " + sampleId + "</b>" + "<br>";
        sampleWrapper.append(external_jquery_default()("<div>" + sampleIconSvgHTML + sampleIdHTML + mutationInfoHTML + cnaInfoHTML + fusionInfoHTML + +"</div>"));
        wrapper.append(sampleWrapper);
      });
      return wrapper;
    }
  });
  return GenomicDataOverlayManager;
}();

/* harmony default export */ var managers_GenomicDataOverlayManager = (GenomicDataOverlayManager_GenomicDataOverlayManager);
// CONCATENATED MODULE: ./src/managers/EditorActionsManager.tsx
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var EditorActionsManager_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var _ = __webpack_require__(6);

var EditorActionsManager_EditorActionsManager =
/** @class */
function () {
  function EditorActionsManager(isCollaborative, shareDBManager, cyInst, isCBioPortal, undoRedoManager, portalAccessor, profiles, genomicDataOverlayColorScheme, colorSchemeChangeCallback) {
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "genomicDataOverlayManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "edgeEditing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "selectedNodeStack", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "layoutProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "FIT_CONSTANT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "observers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "svgExporter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "undoRedoManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCbioPortal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCollaborative", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shareDBManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "portalAccessor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "viewUtilities", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "profiles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "genomicDataOverlayColorScheme", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "colorSchemeChangeCallback", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }); // Set cy instance and set real time manager reference if collaborative mode

    Object(external_mobx_["makeObservable"])(this);
    this.cy = cyInst;
    this.isCollaborative = isCollaborative;
    this.isCbioPortal = isCBioPortal;
    this.profiles = profiles;
    this.genomicDataOverlayColorScheme = genomicDataOverlayColorScheme;
    this.colorSchemeChangeCallback = colorSchemeChangeCallback;
    var edgeEditingOptions = {
      bendPositionsFunction: function (ele) {
        return ele.data('bendPointPositions');
      },
      // A function parameter to get control point positions, should return positions of control points
      controlPositionsFunction: function (ele) {
        return ele.data('controlPointPositions');
      },
      // whether the anchor editing operations are undoable (requires cytoscape-undo-redo.js)
      undoable: true,
      // the size of bend shape is obtained by multipling width of edge with this parameter
      anchorShapeSizeFactor: 6,
      // whether to start the plugin in the enabled state
      enabled: !this.isCbioPortal,
      handleReconnectEdge: this.isCollaborative ? this.reconnectEdge.bind(this) : undefined,
      enableMultipleAnchorRemovalOption: true
    };

    if (!this.isCbioPortal) {
      this.edgeEditing = this.cy.edgeEditing(edgeEditingOptions);
    }

    this.portalAccessor = portalAccessor;

    if (this.isCollaborative) {
      this.shareDBManager = shareDBManager;
    }

    this.FIT_CONSTANT = 50;
    this.layoutProperties = _.clone(EditorActionsManager.defaultLayoutProperties);
    this.observers = [];
    this.genomicDataOverlayManager = new managers_GenomicDataOverlayManager(this.cy);
    this.svgExporter = new utils_SVGExporter(this.edgeEditing, this);
    this.selectedNodeStack = {};
    this.undoRedoManager = undoRedoManager;
    this.undoRedoManager.action("changePositions", this.doChangePosition, this.undoChangePosition);
    this.undoRedoManager.action("changeNodeSize", this.doChangeNodeSize, this.undoChangeNodeSize);
    this.undoRedoManager.action("changeCompoundSize", this.doChangeCompoundSize, this.undoChangeCompoundSize);
    this.undoRedoManager.action("changeName", this.doChangename, this.undoChangeName);
    this.undoRedoManager.action("hideNode", this.doHide, this.undoHide);
    this.undoRedoManager.action("showAllNodes", this.doShow, this.undoShow); // HighlightOthers is the type of highlight from the menu and by searching, while highlightInvalidGenes is for only invalid genes

    this.undoRedoManager.action("highlightInvalidGenes", this.doHighlightInvalidGenes, this.undoHighlightInvalidGenes);
    this.undoRedoManager.action("removeHighlightInvalidGenes", this.undoHighlightInvalidGenes, this.doHighlightInvalidGenes);
    this.undoRedoManager.action("highlightOthers", this.doHighlight, this.undoHighlight);
    this.undoRedoManager.action("removeOtherHighlight", this.undoHighlight, this.doHighlight);
  }

  ;
  Object.defineProperty(EditorActionsManager.prototype, "setProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index, profile) {
      this.profiles[index] = profile;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profile) {
      this.profiles.push(profile);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removeProfiles", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.profiles.length = 0;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "setGenomicDataOverlayColorScheme", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (scheme) {
      this.genomicDataOverlayColorScheme = scheme;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "setViewUtilities", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (viewUtilitiesRef) {
      this.viewUtilities = viewUtilitiesRef;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "getGenomicDataOverlayColorScheme", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.genomicDataOverlayColorScheme;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "handleChangePositionByAlignment", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (movedNodeArr) {
      if (this.isCollaborative) this.shareDBManager.changeElementsPositionByAlignment(movedNodeArr);else this.undoRedoManager.do("changePositions", movedNodeArr);
    }
  });
  ;
  /*
   * Undo redo for changing positions of nodes via programatically (node.position)
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doChangePosition", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (movedNodes) {
      var newMovedNodes = [];

      for (var i = 0; i < movedNodes.length; i++) {
        var currentNodePosition = {
          x: movedNodes[i].node.position().x,
          y: movedNodes[i].node.position().y
        };
        newMovedNodes.push({
          node: movedNodes[i].node,
          oldPosition: currentNodePosition,
          nextPosition: movedNodes[i].nextPosition
        });
        movedNodes[i].node.position(movedNodes[i].nextPosition);
      }

      return newMovedNodes;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoChangePosition", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (movedNodes) {
      var newMovedNodes = [];

      for (var i = 0; i < movedNodes.length; i++) {
        var currentNodePosition = {
          x: movedNodes[i].node.position().x,
          y: movedNodes[i].node.position().y
        };
        newMovedNodes.push({
          node: movedNodes[i].node,
          oldPosition: movedNodes[i].oldPosition,
          nextPosition: currentNodePosition
        });
        movedNodes[i].node.position(movedNodes[i].oldPosition);
      }

      return newMovedNodes;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeNodePositionsByArrows", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (selectedNodes) {
      if (this.isCollaborative) this.shareDBManager.changeNodePositionsShareDB(selectedNodes); //node-editing extension already deals for the movement in local mode
    }
  });
  ;
  /*
   * Undo redo for changing size of nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doChangeNodeSize", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.ele.data('w', args.newWidth);
      args.ele.data('h', args.newHeight);
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoChangeNodeSize", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.ele.data('w', args.oldWidth);
      args.ele.data('h', args.oldHeight);
      return args;
    }
  });
  ;
  /*
   * Undo redo for changing size of compounds
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doChangeCompoundSize", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.ele.style('min-width', args.newMinWidth);
      args.ele.style('min-width-bias-left', args.newMinWidthBiasLeft);
      args.ele.style('min-width-bias-right', args.newMinWidthBiasRight);
      args.ele.style('min-height', args.newMinHeight);
      args.ele.style('min-height-bias-top', args.newMinHeightBiasTop);
      args.ele.style('min-height-bias-bottom', args.newMinHeightBiasBottom);
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoChangeCompoundSize", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      if (args.oldMinWidth == undefined) {
        args.ele.style('min-width', 0);
        args.ele.style('min-width-bias-left', 0);
        args.ele.style('min-width-bias-right', 0);
      } else {
        args.ele.style('min-width', args.oldMinWidth);
        args.ele.style('min-width-bias-left', args.oldMinWidthBiasLeft);
        args.ele.style('min-width-bias-right', args.oldMinWidthBiasRight);
      }

      if (args.oldMinHeight == undefined) {
        args.ele.style('min-height', 0);
        args.ele.style('min-height-bias-top', 0);
        args.ele.style('min-height-bias-bottom', 0);
      } else {
        args.ele.style('min-height', args.oldMinHeight);
        args.ele.style('min-height-bias-top', args.oldMinHeightBiasTop);
        args.ele.style('min-height-bias-bottom', args.oldMinHeightBiasBottom);
      }

      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeName", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, newName) {
      if (this.isCollaborative) {
        this.shareDBManager.changeName(ele, newName);
      } else {
        this.changeNameCy(ele, newName);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeNameCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, newName) {
      var currentName = ele.data('name');
      var args = {
        ele: ele,
        oldName: currentName,
        newName: newName
      };
      this.undoRedoManager.do('changeName', args);
    }
  });
  ;
  /*
   * Undo redo for changing name of nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doChangename", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      var currentName = args.ele.data('name');
      var newArgs = {
        ele: args.ele,
        newName: args.newName,
        oldName: currentName
      };
      args.ele.data('name', args.newName);
      return newArgs;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoChangeName", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      var currentName = args.ele.data('name');
      var newArgs = {
        ele: args.ele,
        newName: args.newName,
        oldName: currentName
      };
      args.ele.data('name', args.oldName);
      return newArgs;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "hideSelectedNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      //Hides the selected elements
      var sel = this.cy.nodes(":selected");
      var nodesToHide = sel;
      var b = true; //Hides the parents if they have no children

      sel.parent().each(function (parent) {
        b = true;
        parent.children().each(function (ch) {
          if (!ch.selected()) {
            if (ch.visible()) b = false;
          }
        });
        if (b) nodesToHide = nodesToHide.add(parent);
      });
      this.cy.elements(":selected").unselect();
      if (this.isCollaborative) this.shareDBManager.changeVisibility(nodesToHide, true);else this.undoRedoManager.do('hideNode', nodesToHide);
    }
  });
  ;
  /*
   * Undo redo for hiding nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doHide", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      this.viewUtilities.hide(args);
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoHide", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      this.viewUtilities.show(args);
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "showAllNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var hid = this.cy.nodes(":hidden");
      if (this.isCollaborative) this.shareDBManager.changeVisibility(hid, false);else this.undoRedoManager.do('showAllNodes', hid);
    }
  });
  ;
  /*
   * Undo redo for showing all nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doShow", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      this.viewUtilities.show(args);
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoShow", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      this.viewUtilities.hide(args);
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "highlightElementsInitially", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (invalidHighlightedGenesIDs, invalidGenesIDs, highlightedGenesIDs, highlightedEdgesIDs, hiddenGenesIDs) {
      for (var i in invalidHighlightedGenesIDs) {
        this.cy.$('#' + invalidHighlightedGenesIDs[i]).addClass('invalidGeneHighlight');
      }

      for (var i in invalidGenesIDs) {
        this.cy.$('#' + invalidGenesIDs[i]).addClass('invalidGene');
      }

      for (var i in highlightedGenesIDs) {
        this.cy.$('#' + highlightedGenesIDs[i]).addClass('highlightedNode');
      }

      for (var i in highlightedEdgesIDs) {
        this.cy.$('#' + highlightedEdgesIDs[i]).addClass('highlightedEdge');
      }

      for (var i in hiddenGenesIDs) {
        this.viewUtilities.hide(this.cy.$('#' + hiddenGenesIDs[i]));
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "validateGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var geneSymbols = this.getGeneSymbols();
      this.portalAccessor.validateGenes(geneSymbols, this);
    }
  }); //Get all gene symbols

  Object.defineProperty(EditorActionsManager.prototype, "getGeneSymbols", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var geneSymbols = [];
      this.cy.nodes().forEach(function (gene) {
        if (gene.data().type === "GENE") geneSymbols.push(gene.data().name);
      });
      return geneSymbols;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "highlightInvalidGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (validGeneSymbols) {
      if (this.isCollaborative) {
        var invalidGenes = [];
        this.cy.nodes().forEach(function (gene) {
          if (gene.data().type === "GENE") {
            var geneName = gene.data().name;
            if (validGeneSymbols.indexOf(geneName) < 0) invalidGenes.push(gene.id());
          }
        });
        this.shareDBManager.changeHighlightInvalidGenes(invalidGenes, true); // TODO: Amendment by Ziya

        /*
        if (invalidGenes.length > 0)
            this.notificationManager.createNotification("Invalid genes are highlighted","fail");
        else
            this.notificationManager.createNotification("All gene symbols are valid","success");*/
      } else {
        var highlightedGenes = this.cy.collection();
        this.cy.nodes().forEach(function (gene) {
          if (gene.data().type === "GENE") {
            var geneName = gene.data().name;
            if (validGeneSymbols.indexOf(geneName) < 0) highlightedGenes = highlightedGenes.add(gene);
          }
        }); // TODO: Amendment by Ziya

        /*
                    if (highlightedGenes.size() > 0)
                        this.notificationManager.createNotification("Invalid genes are highlighted","fail");
                    else
                        this.notificationManager.createNotification("All gene symbols are valid","success");*/

        var nodesToAddInvalidHighlight = this.cy.collection();
        highlightedGenes.forEach(function (ele) {
          if (!ele.hasClass('invalidGeneHighlight') && !ele.hasClass('invalidGene')) nodesToAddInvalidHighlight = nodesToAddInvalidHighlight.union(ele);
        });
        this.undoRedoManager.do('highlightInvalidGenes', nodesToAddInvalidHighlight);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removeInvalidGeneHighlights", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (actions) {
      if (this.isCollaborative) {
        var geneIDs = [];
        this.cy.nodes().forEach(function (gene) {
          if (gene.data().type === "GENE") {
            if (gene.hasClass('invalidGeneHighlight') || gene.hasClass('invalidGene')) geneIDs.push(gene.id());
          }
        });
        this.shareDBManager.changeHighlightInvalidGenes(geneIDs, false);
      } else {
        var nodesToRemoveInvalidHighlight = this.cy.collection();
        this.cy.nodes().forEach(function (ele) {
          if (ele.hasClass('invalidGeneHighlight') || ele.hasClass('invalidGene')) nodesToRemoveInvalidHighlight = nodesToRemoveInvalidHighlight.union(ele);
        });
        actions.push({
          name: "removeHighlightInvalidGenes",
          param: nodesToRemoveInvalidHighlight
        }); // this.undoRedoManager.do('removeHighlightInvalidGenes', nodesToRemoveInvalidHighlight);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "doHighlightInvalidGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.each(function (n) {
        if (n.hasClass('highlightedNode')) {
          n.removeClass('highlightedNode');
          n.addClass("invalidGeneHighlight");
        } else n.addClass("invalidGene");
      });
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoHighlightInvalidGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.each(function (n) {
        if (n.hasClass('invalidGeneHighlight')) {
          n.removeClass('invalidGeneHighlight');
          n.addClass("highlightedNode");
        } else n.removeClass("invalidGene");
      });
      return args;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "highlightSelected", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var sel = this.cy.elements(":selected");
      sel.unselect();
      var elementsToHighlight = this.cy.collection();
      sel.forEach(function (ele) {
        if (!ele.hasClass('invalidGeneHighlight') && !ele.hasClass('highlightedNode') && !ele.hasClass('highlightedEdge')) elementsToHighlight = elementsToHighlight.union(ele);
      });
      if (this.isCollaborative) this.shareDBManager.changeHighlight(elementsToHighlight, true);else this.undoRedoManager.do('highlightOthers', elementsToHighlight);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "highlightNeighbors", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var sel = this.cy.elements(":selected");
      var neighbors = sel.neighborhood();
      neighbors = neighbors.union(sel);
      neighbors.unselect();
      var elementsToHighlight = this.cy.collection();
      neighbors.forEach(function (ele) {
        if (!ele.hasClass('invalidGeneHighlight') && !ele.hasClass('highlightedNode') && !ele.hasClass('highlightedEdge')) elementsToHighlight = elementsToHighlight.union(ele);
      });
      if (this.isCollaborative) this.shareDBManager.changeHighlight(elementsToHighlight, true);else this.undoRedoManager.do('highlightOthers', elementsToHighlight);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "highlightBySearch", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      if (this.isCollaborative) this.shareDBManager.changeHighlight(args, true);else this.undoRedoManager.do('highlightOthers', args);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeOtherHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (actions) {
      var nodesToRemoveHighlight = this.cy.collection(); //TODO cytoscape selectors may provide more handy functionality instead of iterating over !

      this.cy.elements().forEach(function (ele) {
        if (ele.hasClass('highlightedNode') || ele.hasClass('highlightedEdge') || ele.hasClass('invalidGeneHighlight')) nodesToRemoveHighlight = nodesToRemoveHighlight.add(ele);
      });
      if (this.isCollaborative) this.shareDBManager.changeHighlight(nodesToRemoveHighlight, false);else actions.push({
        name: "removeOtherHighlight",
        param: nodesToRemoveHighlight
      }); // this.undoRedoManager.do('removeOtherHighlight', nodesToRemoveHighlight);
    }
  });
  ;
  /*
   * Undo redo for highlighting of nodes
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "doHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.each(function (n) {
        if (n.isEdge()) n.addClass("highlightedEdge");else {
          if (n.hasClass('invalidGene')) {
            n.removeClass("invalidGene");
            n.addClass("invalidGeneHighlight");
          } else n.addClass("highlightedNode");
        }
      });
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "undoHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (args) {
      args.each(function (n) {
        if (n.isEdge()) n.removeClass("highlightedEdge");else {
          if (n.hasClass('invalidGeneHighlight')) {
            n.removeClass("invalidGeneHighlight");
            n.addClass("invalidGene");
          } else n.removeClass("highlightedNode");
        }
      });
      return args;
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeAllHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var actions = [];
      this.removeInvalidGeneHighlights(actions);
      this.removeOtherHighlight(actions);
      this.cy.undoRedo().do("batch", actions);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "postLayout", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) {
        //Previously this.cy.nodes() was sent as an argument in moveElements function but it caused a problem when
        // the compound node was moved before the child nodes
        var movedNodes = this.cy.collection();
        var parentNodes = this.cy.collection();
        this.cy.nodes().forEach(function (node) {
          if (!node.isParent()) movedNodes = movedNodes.add(node);else parentNodes = parentNodes.add(node);
        });
        this.moveElements(movedNodes);
        this.moveElements(parentNodes);
        var newState = {
          zoomLevel: this.cy.zoom(),
          panLevel: this.cy.pan()
        };
        this.updateGlobalOptions(newState);
      }
    }
  });
  ;
  /*
  * Gets the first empty index from the list in cloud model
  * **/

  Object.defineProperty(EditorActionsManager.prototype, "getEmptyGroupID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) return this.shareDBManager.getEmptyGroupID();else return this.genomicDataOverlayManager.getEmptyGroupID();
    }
  });
  ;
  /*
   * Gets the first empty index from the list in cloud model
   * **/

  Object.defineProperty(EditorActionsManager.prototype, "groupGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerNames, groupID) {
      return this.shareDBManager.groupGenomicData(cancerNames, groupID);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addPubmedIDs", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge, pubmedIDs) {
      if (this.isCollaborative) {
        this.shareDBManager.addPubmedIDs(edge.id(), pubmedIDs);
      } else {
        var pubmedArray = edge.data('pubmedIDs');

        var validPubmedIDs = _.filter(pubmedIDs, function (id) {
          return !isNaN(id);
        });

        pubmedArray.push.apply(pubmedArray, validPubmedIDs);
        edge.data('pubmedIDs', _.uniq(pubmedArray));
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removePubmedID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge, pubmedIDs) {
      if (this.isCollaborative) {
        this.shareDBManager.removePubmedID(edge.id(), pubmedIDs);
      } else {
        var pubmedArray = edge.data('pubmedIDs');
        edge.data('pubmedIDs', _.difference(pubmedArray, pubmedIDs));
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "updateEdgeAnchorPoints", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge) {
      var _a;

      if (this.isCollaborative) {
        var edgeCurveStyle = edge.css('curve-style');
        var numberOfAnchorPoints = 0;
        var anchors = (_a = this.edgeEditing) === null || _a === void 0 ? void 0 : _a.getAnchorsAsArray(edge);
        if (anchors !== undefined) numberOfAnchorPoints = anchors.length / 2;
        var anchorPointsArray = [];

        for (var j = 0; j < numberOfAnchorPoints; j++) {
          anchorPointsArray.push({
            x: anchors[2 * j],
            y: anchors[2 * j + 1]
          });
        }

        this.shareDBManager.updateEdgeAnchorPoints(edge.id(), anchorPointsArray, edgeCurveStyle);
      }
    }
  }); //Related to order the nodes according to the selection of user

  Object.defineProperty(EditorActionsManager.prototype, "pushSelectedNodeStack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      this.selectedNodeStack[ele.id()] = ele;
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removeElementFromSelectedNodeStack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      var nodeID = ele.id();
      if (nodeID in this.selectedNodeStack) delete this.selectedNodeStack[ele.id()];
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "clearSelectedNodeStack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.selectedNodeStack = {};
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "exportSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.svgExporter.exportGraph(this.cy.nodes(), this.cy.edges());
    }
  }); //Simple observer-observable pattern for views!!!!!

  Object.defineProperty(EditorActionsManager.prototype, "registerObserver", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (observer) {
      this.observers.push(observer);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "notifyObservers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      for (var i in this.observers) {
        var observer = this.observers[i];
        observer.notify();
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "registerGenomicDataObserver", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (observer) {
      this.genomicDataOverlayManager.registerObserver(observer);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "updateGenomicDataVisibility", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (dataMap) {
      if (this.isCollaborative) {
        //TODO compound OP
        // this.shareDBManager.clearGenomicVisData();
        this.shareDBManager.addGenomicVisibilityData(dataMap);
      } else {
        for (var _key in dataMap) {
          this.genomicDataOverlayManager.updateGenomicDataVisibility(_key, dataMap[_key]);
        }

        this.genomicDataOverlayManager.showGenomicData();
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "updateGenomicDataColorScheme", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (colorValueMap) {
      this.setGenomicDataOverlayColorScheme(colorValueMap);

      if (this.isCollaborative) {
        this.shareDBManager.updateGenomicDataOverlayColorScheme(colorValueMap);
      } else {
        this.genomicDataOverlayManager.updateColorScheme(colorValueMap);
        this.genomicDataOverlayManager.showGenomicData();
      }
    }
  }); //Global options related functions, zoom etc..

  Object.defineProperty(EditorActionsManager.prototype, "getGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return {
        zoomLevel: this.cy.zoom(),
        panLevel: this.cy.pan()
      };
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "changeGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var globalOptions = op.li;
      this.cy.zoom(globalOptions.zoomLevel);
      this.cy.pan(globalOptions.panLevel);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "updateGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newOptions) {
      if (this.isCollaborative) this.shareDBManager.updateGlobalOptions(newOptions);
    }
  }); //Layout properties related functions

  Object.defineProperty(EditorActionsManager.prototype, "saveLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newLayoutProps) {
      if (this.isCollaborative) {
        // Call a real time function that updated real time object and
        // its callback (updateLayoutPropertiesCallback) will handle sync of this object
        // across collaborators
        this.shareDBManager.updateLayoutProperties(newLayoutProps);
      } else {
        this.layoutProperties = _.clone(newLayoutProps);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "updateLayoutPropertiesCallback", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var newLayoutProps = op.li;
      this.layoutProperties = _.clone(newLayoutProps);
      modals_LayoutProperties.layoutProperties = _.clone(this.layoutProperties); //Notify observers to reflect changes on colalborative object to the views

      this.notifyObservers();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "performLayout", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.undoRedoManager.do("layout", {
        options: this.layoutProperties,
        eles: null,
        zoom: this.cy.zoom(),
        pan: this.cy.pan()
      });
    }
  });
  ; //Node Related Functions

  Object.defineProperty(EditorActionsManager.prototype, "addNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeData, posData) {
      if (this.isCollaborative) {
        this.addNewNodeToShareDB(nodeData, posData);
      } else {
        this.addNodetoCy(nodeData, posData);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      for (var i in nodes) {
        this.addNode(nodes[i].data, nodes[i].position);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNodesCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      var nodeArr = [];

      for (var i in nodes) {
        var nodeData = nodes[i].data;
        var posData = nodes[i].position;
        var newNode = {
          group: "nodes",
          data: nodeData,
          position: {}
        };

        if (nodeData.parent === undefined) {
          delete newNode.data.parent;
        }

        if (posData) {
          newNode.position = {
            x: posData.x,
            y: posData.y
          };
        }

        nodeArr[i] = newNode;
      }

      this.cy.add(nodeArr);
      this.cy.nodes().updateCompoundBounds();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNodetoCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeData, posData) {
      var newNode = {
        group: "nodes",
        data: nodeData,
        position: {}
      };

      if (nodeData.parent === undefined) {
        delete newNode.data.parent;
      }

      if (posData) {
        newNode.position = {
          x: posData.x,
          y: posData.y
        };
      } //his.cy.add(newNode);


      this.cy.nodes().updateCompoundBounds();
      this.undoRedoManager.do("add", newNode);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "shareDBNodeAddRemoveEventCallBack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      //Get real time node object and sync it to node addition or removal
      var isRemove = Object.keys(op)[1] === 'od';
      var node = op.oi || op.od; //Removal Operation

      if (isRemove) {
        var nodeID = op.p[1]; //Remove element from existing graph

        var cyEle = this.cy.$("#" + nodeID);
        this.removeElementCy(cyEle);
        this.cy.nodes().updateCompoundBounds();
      } //Addition Operation
      else {
          this.addNewNodeLocally(node);
        }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewNodeLocally", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (realtimeNode) {
      var nodeData = {
        id: realtimeNode.id,
        type: realtimeNode.type,
        name: realtimeNode.name,
        parent: realtimeNode.parent,
        w: realtimeNode.w,
        h: realtimeNode.h
      };

      if (realtimeNode.x != "undefined" && realtimeNode.y != "undefined") {
        this.addNodetoCy(nodeData, {
          x: realtimeNode.x,
          y: realtimeNode.y
        });
      } else {
        // TODO: Amendment by Ziya
        this.addNodetoCy(nodeData, null);
      }

      this.cy.nodes().updateCompoundBounds();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewNodeToShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeData, posData) {
      this.shareDBManager.addNewNode(nodeData, posData);
    }
  });
  ; //Edge related functions

  Object.defineProperty(EditorActionsManager.prototype, "addEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeData) {
      if (this.isCollaborative) {
        this.addNewEdgeShareDB(edgeData);
      } else {
        this.addNewEdgetoCy(edgeData);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addEdges", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edges) {
      for (var i in edges) {
        this.addEdge(edges[i].data);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addEdgesCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edges) {
      var newEdges = [];

      for (var i in edges) {
        var newEdge = {
          group: "edges",
          data: edges[i].data
        };
        newEdges.push(newEdge);
      }

      this.cy.add(newEdges);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewEdgeShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeData) {
      this.shareDBManager.addNewEdge(edgeData);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewEdgetoCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeData) {
      var newEdge = {
        group: "edges",
        data: edgeData
      };
      this.undoRedoManager.do("add", newEdge);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "shareDBEdgeAddRemoveEventCallBack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      //Get real time node object and sync it to node addition or removal
      var isRemove = Object.keys(op)[1] === 'od';
      var edge = op.oi || op.od; //Removal Operation

      if (isRemove) {
        var edgeID = op.p[1]; //Remove element from existing graph

        var cyEle = this.cy.$("#" + edgeID);
        this.removeElementCy(cyEle);
      } //Addition Operation
      else {
          this.addNewEdgeLocally(edge);
        }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "addNewElementsLocally", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (realTimeNodeArray, realTimeEdgeArray) {
      var _a;

      var nodeList = [];
      var nodeMap = {};

      for (var i in realTimeNodeArray) {
        var realTimeNode = realTimeNodeArray[i];
        var nodeID = realTimeNode.id; //Added for backward compatibility when width was not defined

        var nodeWidth = realTimeNode.w == undefined ? 150 : realTimeNode.w;
        var nodeHeight = realTimeNode.h == undefined ? 52 : realTimeNode.h;
        var compoundMinWidth = realTimeNode.minWidth == undefined ? 0 : realTimeNode.minWidth;
        var compoundMinWidthBiasLeft = realTimeNode.minWidthBiasLeft == undefined ? 0 : realTimeNode.minWidthBiasLeft;
        var compoundMinWidthBiasRight = realTimeNode.minWidthBiasRight == undefined ? 0 : realTimeNode.minWidthBiasRight;
        var compoundMinHeight = realTimeNode.minHeight == undefined ? 0 : realTimeNode.minHeight;
        var compoundMinHeightBiasTop = realTimeNode.minHeightBiasTop == undefined ? 0 : realTimeNode.minHeightBiasTop;
        var compoundMinHeightBiasBottom = realTimeNode.minHeightBiasBottom == undefined ? 0 : realTimeNode.minHeightBiasBottom;
        var nodeData = {
          group: 'nodes',
          // TODO: Amendment by Ziya
          position: {},
          data: {
            id: nodeID,
            type: realTimeNode.type,
            name: realTimeNode.name,
            parent: realTimeNode.parent,
            w: nodeWidth,
            h: nodeHeight
          },
          style: {
            'min-width': compoundMinWidth,
            'min-width-bias-left': compoundMinWidthBiasLeft,
            'min-width-bias-right': compoundMinWidthBiasRight,
            'min-height': compoundMinHeight,
            'min-height-bias-top': compoundMinHeightBiasTop,
            'min-height-bias-bottom': compoundMinHeightBiasBottom
          }
        };

        if (nodeData.data.parent === undefined) {
          delete nodeData.data.parent;
        }

        if (realTimeNode.x && realTimeNode.y) {
          nodeData.position = {
            x: realTimeNode.x,
            y: realTimeNode.y
          };
        }

        nodeMap[nodeID] = nodeData;
        nodeList.push(nodeData);
      }

      var edgeList = [];

      for (var i in realTimeEdgeArray) {
        var edge = realTimeEdgeArray[i];
        var edgeID = edge.id; //If source and and target is somehow lost in remote model do not create this edge

        if (!(edge.source in nodeMap && edge.target in nodeMap)) continue;
        var tmpData = {
          id: edgeID,
          type: edge.type,
          source: edge.source,
          target: edge.target,
          pubmedIDs: edge.pubmedIDs,
          name: edge.name
        };

        if (edge.edgeCurveStyle == "unbundled-bezier") {
          tmpData['controlPointPositions'] = edge.anchorPoints;
        } else {
          tmpData['bendPointPositions'] = edge.anchorPoints;
        }

        var edgeData = {
          group: 'edges',
          data: tmpData
        };
        edgeList.push(edgeData);
      }

      this.cy.add(nodeList);
      this.cy.add(edgeList);
      (_a = this.edgeEditing) === null || _a === void 0 ? void 0 : _a.initAnchorPoints(this.cy.edges());
      this.cy.nodes().updateCompoundBounds();
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addNewEdgeLocally", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge) {
      var _a;

      var edgeData = {
        id: edge.id,
        type: edge.type,
        source: edge.source,
        target: edge.target,
        pubmedIDs: edge.pubmedIDs,
        name: edge.name
      };

      if (edge.edgeCurveStyle == "unbundled-bezier") {
        edgeData['controlPointPositions'] = edge.anchorPoints;
      } else {
        edgeData['bendPointPositions'] = edge.anchorPoints;
      }

      this.addNewEdgetoCy(edgeData);
      (_a = this.edgeEditing) === null || _a === void 0 ? void 0 : _a.initAnchorPoints(this.cy.getElementById(edge.id));
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "reconnectEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (sourceID, targetID, edgeData) {
      if (this.isCollaborative) {
        var edge = this.cy.getElementById(edgeData.id);
        this.reconnectEdgeInShareDB(sourceID, targetID, edgeData);
      } else {
        var location = {
          source: sourceID,
          target: targetID
        };
        var edge = this.cy.getElementById(edgeData.id);
        edge.move(location);
      }

      return this.cy.getElementById(edgeData.id);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "reconnectEdgeInShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (sourceID, targetID, edgeData) {
      this.shareDBManager.reconnectEdge(sourceID, targetID, edgeData);
    }
  });
  ; //Removal functions

  Object.defineProperty(EditorActionsManager.prototype, "removeElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      if (this.isCollaborative) {
        this.removeElementsFromShareDB(ele);
      } else {
        this.removeElementsCy(ele);
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeElementCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      this.undoRedoManager.do("remove", ele);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeElementsCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      this.undoRedoManager.do("remove", ele);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeElementsFromShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles) {
      var self = this;
      eles.forEach(function (ele) {
        self.shareDBManager.removeElement(ele.id());
      });
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeElementFromShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      this.shareDBManager.removeElement(ele.id());
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeParents", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles, newParentId) {
      if (this.isCollaborative) {
        this.changeParentShareDB(eles, newParentId);
      } else {
        var parentData = newParentId ? newParentId : null; // Old manual way to change parents in local mode
        //this.changeParentCy(eles, newParentId);
        //Save element's previous width & height in dim array

        var dim_1 = [];
        var id_1 = [];
        eles.forEach(function (ele) {
          var parameters = {
            id: ele.id(),
            width: ele.data("w"),
            height: ele.data("h")
          };
          dim_1.push(parameters);
          id_1.push(ele.id());
        });
        var parentElem = this.cy.getElementById(parentData);
        var param = {
          firstTime: true,
          parentData: parentData,
          nodes: eles,
          posDiffX: !parentData ? 0 : parentElem.position('x') - eles[0].position('x'),
          posDiffY: !parentData ? 0 : parentElem.position('y') - eles[0].position('y')
        };
        this.undoRedoManager.do('changeParent', param); //The elements after change parent operation are different so we find them by using the saved ids
        // and add them to the collection

        var collection = this.cy.collection();

        for (var i in id_1) {
          var elementById = this.cy.getElementById(id_1[i]);
          collection = collection.add(elementById);
        } //Set their previous size to the new elements in the collection


        collection.forEach(function (ele, i) {
          if (ele.id() == dim_1[i].id) ele.data("w", dim_1[i].width);
          ele.data("h", dim_1[i].height);
        });
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeParentShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles, newParentId) {
      var classRef = this;

      function getTopLevelParents(eles) {
        var tpMostNodes = classRef.cy.collection();
        var parentMap = {}; //Get all parents

        eles.forEach(function (node) {
          if (node.isParent()) parentMap[node.id()] = node;
        }); //Get all parents

        eles.forEach(function (node) {
          var nodeParent = node.parent();
          if (parentMap[nodeParent.id()] === undefined) tpMostNodes = tpMostNodes.union(node);
        });
        return tpMostNodes;
      }

      var NodeObj =
      /** @class */
      function () {
        function NodeObj(nodeObj) {
          Object.defineProperty(this, "nodeRef", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          });
          Object.defineProperty(this, "children", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          });
          this.nodeRef = nodeObj;
          this.children = [];
        }

        return NodeObj;
      }();

      var connectedEdges = eles.connectedEdges(); // Traverses given elements and constructs subgraph relations
      // creates a nested structure into rootnodeObj

      function traverseNodes(eles, rootNodeObj) {
        eles.forEach(function (ele) {
          connectedEdges = connectedEdges.union(ele.connectedEdges());

          if (ele.isParent()) {
            rootNodeObj.children.push(new NodeObj(ele));
            var lengthOfChildrenArray = rootNodeObj.children.length;
            traverseNodes(ele.children(), rootNodeObj.children[lengthOfChildrenArray - 1]);
          } else {
            rootNodeObj.children.push(new NodeObj(ele));
          }
        });
      } //Create new collection


      var topMostNodes = getTopLevelParents(eles);
      var rootNodeR = new NodeObj(null);
      traverseNodes(topMostNodes, rootNodeR);
      this.shareDBManager.changeParent(rootNodeR, newParentId, connectedEdges);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "changeParentCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles, newParentId) {
      var lockedNodes = {};
      var self = this;

      function removeNodes(nodes) {
        //Get removed edges first
        var removedEles = nodes.connectedEdges().remove();
        var children = nodes.children();

        if (children != null && children.length > 0) {
          children.forEach(function (childNode) {
            lockedNodes[childNode.id()] = true;
          });
          removedEles = removedEles.union(removeNodes(children));
        }

        removedEles = removedEles.union(nodes.remove());
        self.cy.nodes().updateCompoundBounds();
        return removedEles;
      }

      var removedEles = removeNodes(eles);
      this.undoRedoManager.do("remove", removedEles);

      for (var i = 0; i < removedEles.length; i++) {
        var removedNode = removedEles[i]; //Just alter the parent id of corresponding nodes !

        if (removedNode.isEdge() || lockedNodes[removedNode.id()]) {
          continue;
        }

        removedNode._private.data.parent = newParentId;

        if (removedNode._private.parent) {
          delete removedNode._private.parent;
        }
      }

      self.cy.add(removedEles);
      this.undoRedoManager.do("add", removedEles);
      self.cy.nodes().updateCompoundBounds();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "moveElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles) {
      var classRef = this; //Sync movement to real time api

      if (this.isCollaborative) {
        eles.forEach(function (ele) {
          classRef.shareDBManager.moveElement(ele);
        });
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "resizeElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      if (this.isCollaborative) {
        if (!ele.isParent()) {
          var previousWidth = ele.width();
          var previousHeight = ele.height(); //Sync movement to real time api

          this.shareDBManager.resizeElement(ele, previousWidth, previousHeight);
        } else {
          var minWidth = ele.style('min-width');
          var minWidthBiasLeft = ele.style('min-width-bias-left');
          var minWidthBiasRight = ele.style('min-width-bias-right');
          var minHeight = ele.style('min-height');
          var minHeightBiasTop = ele.style('min-height-bias-top');
          var minHeightBiasBottom = ele.style('min-height-bias-bottom'); //Sync movement to real time api

          this.shareDBManager.resizeCompound(ele, minWidth, minWidthBiasLeft, minWidthBiasRight, minHeight, minHeightBiasTop, minHeightBiasBottom);
        }
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "mergeGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      if (this.isCollaborative) {
        //Collaborative usage
        this.shareDBManager.mergeGraph(nodes, edges);
      } else {
        //Local usage file load
        this.mergeGraphCy(nodes, edges);
      }

      this.fitGraph();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "mergeGraphCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      //Define arrays and maps
      var nodesToBeAdded = [];
      var edgesToBeAdded = [];
      var nodeMap = {}; //Iterate over nodes and find nodes that does not exist in current graph by looking their name

      for (var index in nodes) {
        var ele = nodes[index];
        nodeMap[ele.data.id] = ele;

        if (this.cy.filter('node[name = "' + ele.data.name + '"]').length <= 0) {
          nodesToBeAdded.push(ele);
        }
      }

      this.cy.add(nodesToBeAdded); //Iterate over all edges

      for (var index in edges) {
        //Get corresponding source and target node in merge file
        var ele = edges[index];
        var sourceNode = nodeMap[ele.data.source];
        var targetNode = nodeMap[ele.data.target]; //Check if there are nodes with same name in current graph

        var cySourceNode = this.cy.nodes('[name="' + sourceNode.data.name + '"]');
        var targetNode = this.cy.nodes('[name="' + targetNode.data.name + '"]');

        if (cySourceNode.length > 0) {
          ele.data.source = cySourceNode.id();
        }

        if (targetNode.length > 0) {
          ele.data.target = targetNode.id();
        }

        if (targetNode.length < 0 && cySourceNode.length < 0) {
          continue;
        }

        var edgesBtw = this.cy.filter('edge[source = "' + cySourceNode.id() + '"][target = "' + targetNode.id() + '"]'); //We assume there could be one edge between source and target node with same type

        var isFound = false;
        edgesBtw.forEach(function (edge) {
          if (edge.data().type == ele.data.type) {
            isFound = true;
            return false;
          } //TODO: AMENDMENT by Ziya


          return true;
        });

        if (!isFound) {
          delete ele.data.id;
          edgesToBeAdded.push(ele);
        }
      }

      this.cy.add(edgesToBeAdded);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "fitGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) {
        this.cy.fit(this.FIT_CONSTANT);
        var newState = {
          zoomLevel: this.cy.zoom(),
          panLevel: this.cy.pan()
        };
        this.updateGlobalOptions(newState);
      } else {
        this.cy.fit(this.FIT_CONSTANT);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "loadFile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      var _a;

      if (this.isCollaborative) {
        //Real time load graph
        this.loadfileShareDB(nodes, edges);
      } else {
        //Local usage file load
        this.loadFileCy(nodes, edges);
      }

      (_a = this.edgeEditing) === null || _a === void 0 ? void 0 : _a.initAnchorPoints(this.cy.edges());
      this.fitGraph();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "loadFileCy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      //Remove all elements
      this.removeElementCy(this.cy.elements());
      this.addNodesCy(nodes);
      this.addEdgesCy(edges);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "loadfileShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      this.shareDBManager.loadGraph(nodes, edges);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "removeAllElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) {
        this.shareDBManager.removeAllElements();
      } else {
        this.cy.remove(this.cy.elements());
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "updateHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, isHighlighted) {
      if (isHighlighted) this.undoRedoManager.do('highlightOthers', ele);else this.undoRedoManager.do('removeOtherHighlight', ele);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "updateVisibility", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, isHidden) {
      if (isHidden) this.viewUtilities.hide(ele);else this.viewUtilities.show(ele);
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "updateElementCallback", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var _a, _b, _c, _d;

      var ele = op.oi;
      var eleID = ele.id;
      var cyEle = this.cy.$("#" + eleID);
      this.changeNameCy(cyEle, ele.name);

      if (cyEle.isNode()) {
        //Width and height of simple nodes and compounds is changed differently
        if (cyEle.isParent()) {
          cyEle.style("min-width", ele.minWidth);
          cyEle.style("min-width-bias-left", ele.minWidthBiasLeft);
          cyEle.style("min-width-bias-right", ele.minWidthBiasRight);
          cyEle.style("min-height", ele.minHeight);
          cyEle.style("min-height-bias-top", ele.minHeightBiasTop);
          cyEle.style("min-height-bias-bottom", ele.minHeightBiasBottom);
        } else {
          cyEle.data('w', ele.w);
          cyEle.data('h', ele.h); //Position is changed only for simple nodes because the
          //position of compounds is defined by simple nodes' position

          cyEle.position({
            x: ele.x,
            y: ele.y
          });
        }

        this.updateVisibility(cyEle, ele.isHidden);
        this.updateHighlight(cyEle, ele.isHighlighted);

        if (ele.isInvalidGene) {
          this.doHighlightInvalidGenes(cyEle);
        } else {
          this.undoHighlightInvalidGenes(cyEle);
        }
      } else if (cyEle.isEdge()) {
        var pubmedArray = ele.pubmedIDs;
        cyEle.data('pubmedIDs', pubmedArray);
        this.updateHighlight(cyEle, ele.isHighlighted);
        var anchorPoints = ele.anchorPoints; //If edge is reconnected

        if (ele.source !== cyEle.source().id() || ele.target !== cyEle.target().id()) {
          var location = {
            source: ele.source,
            target: ele.target
          };
          cyEle.move(location); //make sure that bend points are same

          (_a = this.edgeEditing) === null || _a === void 0 ? void 0 : _a.initAnchorPoints(cyEle);
        } else {
          if (ele.edgeCurveStyle === "bezier") {
            var anchors = (_b = this.edgeEditing) === null || _b === void 0 ? void 0 : _b.getAnchorsAsArray(cyEle);

            if (anchors && anchors.length > 0) {
              for (var i = 0; i < anchors.length / 2; i++) {
                (_c = this.edgeEditing) === null || _c === void 0 ? void 0 : _c.deleteSelectedAnchor(cyEle, 0);
              }
            }
          } else if (ele.edgeCurveStyle === "unbundled-bezier") {
            cyEle.data('controlPointPositions', anchorPoints);
          } else {
            cyEle.data('bendPointPositions', anchorPoints);
          }

          (_d = this.edgeEditing) === null || _d === void 0 ? void 0 : _d.initAnchorPoints(cyEle);
        }
      }
    }
  });
  ;
  Object.defineProperty(EditorActionsManager.prototype, "getGenomicDataSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node) {
      // @ts-ignore
      return this.genomicDataOverlayManager.generateSVGForNode(node);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "getOncoprintDataSVG", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node) {
      return this.genomicDataOverlayManager.generateOncoprintForPatientNode(node);
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "removeGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative) {
        this.shareDBManager.clearGenomicData();
      } else {
        // TODO wrap this in afunction in genomic data overlay manager
        this.genomicDataOverlayManager.clearAllGenomicData();
        this.genomicDataOverlayManager.hideGenomicData();
        this.genomicDataOverlayManager.notifyObservers();
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData) {
      var groupID = this.getEmptyGroupID();

      if (this.isCollaborative) {
        var parsedGenomicData = this.genomicDataOverlayManager.prepareGenomicDataShareDB(genomicData);
        this.shareDBManager.addGenomicData(parsedGenomicData.genomicDataMap);
        this.shareDBManager.groupGenomicData(Object.keys(parsedGenomicData.visibilityMap), groupID);
        var currentVisibleGenomicDataCount_1 = this.genomicDataOverlayManager.countVisibleGenomicDataByType();
        Object.keys(parsedGenomicData.visibilityMap).forEach(function (study) {
          if (parsedGenomicData.visibilityMap[study] && currentVisibleGenomicDataCount_1 >= 6) {
            parsedGenomicData.visibilityMap[study] = false;
          } else if (parsedGenomicData.visibilityMap[study]) {
            currentVisibleGenomicDataCount_1++;
          }
        });
        this.shareDBManager.addGenomicVisibilityData(parsedGenomicData.visibilityMap);
      } else {
        this.genomicDataOverlayManager.addGenomicDataLocally(genomicData, groupID);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "adjustVisibilityShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profileId, isEnabled) {
      var targetProfileIndex = this.profiles.map(function (profile) {
        return profile.profileId;
      }).indexOf(profileId);
      this.setProfile(targetProfileIndex, __assign(__assign({}, this.profiles[targetProfileIndex]), {
        enabled: isEnabled
      }));
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addToProfiles", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profileId) {
      // Check if this profile already exists
      if (this.profiles.map(function (profile) {
        return profile.profileId;
      }).includes(profileId)) {
        return;
      }

      this.addProfile({
        profileId: profileId,
        enabled: true
      });
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "addPortalGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicData, groupID) {
      if (this.isCollaborative) {
        var parsedGenomicData = this.genomicDataOverlayManager.preparePortalGenomicDataShareDB(genomicData);
        this.shareDBManager.addGenomicData(parsedGenomicData.genomicDataMap);
        this.shareDBManager.groupGenomicData(Object.keys(parsedGenomicData.visibilityMap), groupID);
        this.shareDBManager.addGenomicVisibilityData(parsedGenomicData.visibilityMap);
      } else {
        this.genomicDataOverlayManager.addPortalGenomicData(genomicData, groupID);
      }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "shareDBGenomicDataHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var isRemove = Object.keys(op)[1] === 'od';
      var newData = op.oi;
      var geneSymbol = op.p[1];

      if (!isRemove) {
        this.genomicDataOverlayManager.addGenomicDataWithGeneSymbol(geneSymbol, newData);
      } // Removal
      else {
          this.genomicDataOverlayManager.removeGenomicDataWithGeneSymbol(geneSymbol);
        }
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "shareDBGenomicDataGroupChangeHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var _this = this;

      var isRemove = Object.keys(op)[1] === 'od';
      var data = op.oi;
      var key = op.p[1]; // Addition

      if (!isRemove) {
        this.genomicDataOverlayManager.addGenomicGroupData(key, data);

        if (data.length !== 1) {
          console.log("Grouped genomic data expected to be of length 1");
        }

        data.forEach(function (profileId) {
          _this.addToProfiles(profileId);
        });
      } else if (!data) {
        this.genomicDataOverlayManager.clearAllGenomicData();
      }

      this.genomicDataOverlayManager.showGenomicData(function (node) {
        _this.resizeElements(node);
      });
      this.genomicDataOverlayManager.notifyObservers();
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "shareDBGenomicDataVisibilityHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var _this = this;

      var data = op.oi;
      var key = op.p[1];
      var isRemove = Object.keys(op)[1] === 'od'; // Addition

      if (!isRemove) {
        this.genomicDataOverlayManager.addGenomicVisData(key, data);
        this.adjustVisibilityShareDB(key, data);
      } // Removal
      else {
          this.genomicDataOverlayManager.removeGenomicVisData();
          this.removeProfiles();
        }

      this.genomicDataOverlayManager.showGenomicData(function (node) {
        _this.resizeElements(node);
      });
      this.genomicDataOverlayManager.notifyObservers();
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "updateGenomicDataColorSchemeHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      var _this = this;

      var colorScheme = op.li;
      this.setGenomicDataOverlayColorScheme(colorScheme);
      this.colorSchemeChangeCallback(colorScheme);
      this.genomicDataOverlayManager.updateColorScheme(colorScheme);
      this.genomicDataOverlayManager.showGenomicData(function (node) {
        _this.resizeElements(node);
      });
      this.genomicDataOverlayManager.notifyObservers();
    }
  });
  Object.defineProperty(EditorActionsManager.prototype, "resizeNodesToContent", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      if (this.isCollaborative) {
        var visibleNumberOfData_1 = this.genomicDataOverlayManager.countVisibleGenomicDataByType();
        var labelWithData_1 = 148 + (visibleNumberOfData_1 - 3) * 36;
        var rt_1 = this.shareDBManager;
        nodes.forEach(function (ele) {
          if (!ele.isParent()) {
            var newWidth = 150;
            var newHeight = 52;

            if (ele.data('name') != "") {
              var labelLength = ele.style('label').length * 10 + 6;
              newWidth = labelLength;
              newHeight = 24;
            }

            if (ele.data('type') !== "PROCESS" && visibleNumberOfData_1 > 0) {
              newHeight = 52;

              if (visibleNumberOfData_1 < 4) {
                if (150 > newWidth) newWidth = 150;
              } else {
                if (labelWithData_1 > newWidth) newWidth = labelWithData_1;
              }
            }

            rt_1.setSizeOfElement(ele, newWidth, newHeight);
          } else {
            //Set the minWidth, minHeight and other properties of compound to 0
            rt_1.resizeCompound(ele, 0, 0, 0, 0, 0, 0);
          }
        });
      } else {
        var ur = this.cy.undoRedo();
        var actions_1 = [];
        var visibleNumberOfData_2 = this.genomicDataOverlayManager.countVisibleGenomicDataByType();
        var labelWithData_2 = 150 + (visibleNumberOfData_2 - 3) * 36;
        nodes.forEach(function (ele) {
          if (!ele.isParent()) {
            var newWidth = 150;
            var newHeight = 52;

            if (ele.data('name') != "") {
              var labelLength = ele.style('label').length * 6 + 24;
              newWidth = labelLength;
              newHeight = 24;
            }

            if (ele.data('type') !== "PROCESS" && visibleNumberOfData_2 > 0) {
              newHeight = 52;

              if (visibleNumberOfData_2 < 4) {
                if (150 > newWidth) newWidth = 150;
              } else {
                if (labelWithData_2 > newWidth) newWidth = labelWithData_2;
              }
            }

            var args = {
              ele: ele,
              oldWidth: ele.width(),
              newWidth: newWidth,
              oldHeight: ele.height(),
              newHeight: newHeight
            };
            actions_1.push({
              name: "changeNodeSize",
              param: args
            });
          } else {
            var args = {
              ele: ele,
              oldMinWidth: ele.style("min-width"),
              newMinWidth: 0,
              oldMinWidthBiasLeft: ele.style("min-width-bias-left"),
              newMinWidthBiasLeft: 0,
              oldMinWidthBiasRight: ele.style("min-width-bias-right"),
              newMinWidthBiasRight: 0,
              oldMinHeight: ele.style("min-height"),
              newMinHeight: 0,
              oldMinHeightBiasTop: ele.style("min-height-bias-top"),
              newMinHeightBiasTop: 0,
              oldMinHeightBiasBottom: ele.style("min-height-bias-bottom"),
              newMinHeightBiasBottom: 0
            };
            actions_1.push({
              name: "changeCompoundSize",
              param: args
            });
          }
        });
        ur.do("batch", actions_1);
      }

      this.cy.nodeEditing('get').refreshGrapples();
    }
  });
  ;
  Object.defineProperty(EditorActionsManager, "defaultLayoutProperties", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
      name: 'fcose',
      nodeRepulsion: 4500,
      idealEdgeLength: 50,
      edgeElasticity: 0.45,
      nestingFactor: 0.1,
      gravity: 0.25,
      numIter: 2500,
      tile: true,
      animate: true,
      randomize: false,
      gravityRangeCompound: 1.5,
      // Gravity force (constant) for compounds
      gravityCompound: 1.0,
      // Gravity range (constant)
      gravityRange: 3.8,
      // Amount of vertical space to put between degree zero nodes during tiling (can also be a function)
      tilingPaddingVertical: 10,
      // Amount of horizontal space to put between degree zero nodes during tiling (can also be a function)
      tilingPaddingHorizontal: 10,
      // Initial cooling factor for incremental layout
      initialEnergyOnIncremental: 0.5,
      animationDuration: 2000,
      animationEasing: 'cubic-bezier(0.17,0.72,0.41,0.98)',
      nodeDimensionsIncludeLabels: true
    }
  });

  EditorActionsManager_decorate([external_mobx_["observable"]], EditorActionsManager.prototype, "profiles", void 0);

  EditorActionsManager_decorate([external_mobx_["observable"]], EditorActionsManager.prototype, "genomicDataOverlayColorScheme", void 0);

  EditorActionsManager_decorate([external_mobx_["action"].bound], EditorActionsManager.prototype, "setProfile", null);

  EditorActionsManager_decorate([external_mobx_["action"].bound], EditorActionsManager.prototype, "addProfile", null);

  EditorActionsManager_decorate([external_mobx_["action"].bound], EditorActionsManager.prototype, "removeProfiles", null);

  EditorActionsManager_decorate([external_mobx_["action"].bound], EditorActionsManager.prototype, "setGenomicDataOverlayColorScheme", null);

  EditorActionsManager_decorate([external_autobind_decorator_default.a], EditorActionsManager.prototype, "setViewUtilities", null);

  EditorActionsManager_decorate([external_autobind_decorator_default.a], EditorActionsManager.prototype, "doHide", null);

  EditorActionsManager_decorate([external_autobind_decorator_default.a], EditorActionsManager.prototype, "undoHide", null);

  EditorActionsManager_decorate([external_autobind_decorator_default.a], EditorActionsManager.prototype, "doShow", null);

  EditorActionsManager_decorate([external_autobind_decorator_default.a], EditorActionsManager.prototype, "undoShow", null);

  EditorActionsManager_decorate([external_autobind_decorator_default.a], EditorActionsManager.prototype, "updateVisibility", null);

  return EditorActionsManager;
}();

/* harmony default export */ var managers_EditorActionsManager = (EditorActionsManager_EditorActionsManager);
// CONCATENATED MODULE: ./src/modals/LayoutProperties.tsx
var LayoutProperties_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var LayoutProperties_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutProperties_LayoutProperties =
/** @class */
function (_super) {
  LayoutProperties_extends(LayoutProperties, _super);

  function LayoutProperties(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "internalLayoutProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.internalLayoutProperties = external_lodash_default.a.clone(managers_EditorActionsManager.defaultLayoutProperties);
    LayoutProperties_1.layoutProperties = external_lodash_default.a.clone(managers_EditorActionsManager.defaultLayoutProperties);
    return _this;
  }

  LayoutProperties_1 = LayoutProperties;
  Object.defineProperty(LayoutProperties.prototype, "updateInternalLayoutProperty", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (property, val) {
      this.internalLayoutProperties[property] = val;
    }
  });
  Object.defineProperty(LayoutProperties.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        id: "layoutPropertiesDiv",
        show: this.props.show,
        onEnter: function () {
          _this.internalLayoutProperties = external_lodash_default.a.clone(LayoutProperties_1.layoutProperties);
        },
        onHide: function () {
          _this.internalLayoutProperties = external_lodash_default.a.clone(LayoutProperties_1.layoutProperties);

          _this.props.handleClose(EModalType.LAYOUT);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Layout Properties")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, {
        id: "layoutPropsForm",
        className: "leftText"
      }, external_react_default.a.createElement(external_react_bootstrap_["Form"], null, external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "control-label",
        sm: 6
      }, "Node Repulsion:"), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.nodeRepulsion.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("nodeRepulsion", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Ideal Edge Length:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.idealEdgeLength.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("idealEdgeLength", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Edge Elasticity:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.edgeElasticity.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("edgeElasticity", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Nesting Factor:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.nestingFactor.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("nestingFactor", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Gravity:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.gravity.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("gravity", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Gravity Range:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.gravityRange.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("gravityRange", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Compound Gravity:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.gravityCompound.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("gravityCompound", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Compound Gravity Range:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.gravityRangeCompound.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("gravityRangeCompound", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Number of Iterations:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.numIter.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("numIter", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Tiling Vertical Padding:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.tilingPaddingVertical.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("tilingPaddingVertical", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Tiling Horizontal Padding:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.tilingPaddingHorizontal.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("tilingPaddingHorizontal", Number(e.target.value));
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Tile Disconnected:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        className: "layProps",
        checked: this.internalLayoutProperties.tile,
        onChange: function (e) {
          _this.updateInternalLayoutProperty("tile", !_this.internalLayoutProperties.tile);
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "control-label",
        sm: 6
      }, "Animate:"), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        className: "layProps",
        checked: this.internalLayoutProperties.animate,
        onChange: function (e) {
          _this.updateInternalLayoutProperty("animate", !_this.internalLayoutProperties.animate);
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Incremental:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        className: "layProps",
        checked: !this.internalLayoutProperties.randomize,
        onChange: function (e) {
          _this.updateInternalLayoutProperty("randomize", !_this.internalLayoutProperties.randomize);
        }
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        className: "rightAlignText",
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Incremental Cooling Factor:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 6
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "number",
        value: this.internalLayoutProperties.initialEnergyOnIncremental.toString(),
        onChange: function (e) {
          _this.updateInternalLayoutProperty("initialEnergyOnIncremental", Number(e.target.value));
        }
      }))))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          LayoutProperties_1.layoutProperties = external_lodash_default.a.clone(_this.internalLayoutProperties);

          _this.props.pathwayActions.setLayoutProperties(LayoutProperties_1.layoutProperties);

          _this.props.handleClose(EModalType.LAYOUT);
        }
      }, "Save"), external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.internalLayoutProperties = external_lodash_default.a.clone(managers_EditorActionsManager.defaultLayoutProperties);
          LayoutProperties_1.layoutProperties = external_lodash_default.a.clone(_this.internalLayoutProperties);

          _this.props.pathwayActions.setLayoutProperties(_this.internalLayoutProperties);
        }
      }, "Default")));
    }
  });
  var LayoutProperties_1;

  LayoutProperties_decorate([external_mobx_["observable"]], LayoutProperties.prototype, "internalLayoutProperties", void 0);

  LayoutProperties_decorate([external_mobx_["action"].bound], LayoutProperties.prototype, "updateInternalLayoutProperty", null);

  LayoutProperties = LayoutProperties_1 = LayoutProperties_decorate([external_mobx_react_["observer"]], LayoutProperties);
  return LayoutProperties;
}(external_react_default.a.Component);

/* harmony default export */ var modals_LayoutProperties = (LayoutProperties_LayoutProperties);
// CONCATENATED MODULE: ./src/modals/PathwayDetailsModal.tsx
var PathwayDetailsModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var PathwayDetailsModal_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PathwayDetailsModal_PathwayDetailsModal =
/** @class */
function (_super) {
  PathwayDetailsModal_extends(PathwayDetailsModal, _super);

  function PathwayDetailsModal(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "pathwayInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    return _this;
  }

  Object.defineProperty(PathwayDetailsModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      this.pathwayInfo = this.props.pathwayActions.getPathwayInfo;
      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        id: "pathwayDetailsDiv",
        show: this.props.show,
        onHide: function () {
          _this.props.handleClose(4);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Pathway Properties")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement(external_react_bootstrap_["Form"], {
        id: "pathwayDetailsForm"
      }, external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        style: {
          textAlign: "left"
        },
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Pathway Title:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        onChange: function (e) {
          _this.pathwayInfo.pathwayTitle = e.target.value;
        },
        value: this.pathwayInfo.pathwayTitle
      }))), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        style: {
          textAlign: "left"
        },
        sm: 4
      }, external_react_default.a.createElement(external_react_bootstrap_["ControlLabel"], null, "Pathway Description:")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement("textarea", {
        className: "form-control",
        rows: 3,
        onChange: function (e) {
          _this.pathwayInfo.pathwayDetails = e.target.value;
        },
        value: this.pathwayInfo.pathwayDetails
      }))))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.pathwayActions.setPathwayInfo(_this.pathwayInfo);

          _this.props.handleClose(EModalType.PW_DETAILS);
        }
      }, "Save")));
    }
  });
  PathwayDetailsModal = PathwayDetailsModal_decorate([external_mobx_react_["observer"]], PathwayDetailsModal);
  return PathwayDetailsModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_PathwayDetailsModal = (PathwayDetailsModal_PathwayDetailsModal);
// CONCATENATED MODULE: ./src/modals/ProfilesColorSchemeModal.tsx
var ProfilesColorSchemeModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var ProfilesColorSchemeModal_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var addButtonImg = __webpack_require__(60);

var deleteButtonImg = __webpack_require__(61);

var ProfilesColorSchemeModal_ProfilesColorSchemeModal =
/** @class */
function (_super) {
  ProfilesColorSchemeModal_extends(ProfilesColorSchemeModal, _super);

  function ProfilesColorSchemeModal(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "colorMappings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "showUniqueValuesWarningModal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);

    _this.initColorMappings();

    return _this;
  }

  Object.defineProperty(ProfilesColorSchemeModal.prototype, "componentDidUpdate", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (prevProps) {
      if (prevProps.show === false && this.props.show === true) {
        this.initColorMappings();
      }
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "initColorMappings", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.colorMappings = Object.entries(this.props.colorValueMapping).map(function (_a) {
        var value = _a[0],
            color = _a[1];
        return {
          value: value,
          color: color
        };
      }).sort(function (o1, o2) {
        return Number(o1.value) - Number(o2.value);
      });
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "handleColorChange", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index, color) {
      this.colorMappings[index].color = color;
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "handleValueChange", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index, value) {
      this.colorMappings[index].value = value;
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "addDefaultColorMapping", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.colorMappings.push({
        value: "0",
        color: "#ffffff"
      });
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "removeColorMapping", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index) {
      this.colorMappings.splice(index, 1);
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "setDefaultColorMapping", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.colorMappings = [{
        value: "-100",
        color: "#0000ff"
      }, {
        value: "0",
        color: "#ffffff"
      }, {
        value: "100",
        color: "#ff0000"
      }];
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "setShowUniqueValuesWarningModal", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (val) {
      this.showUniqueValuesWarningModal = val;
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "handleSaveColorScheme", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var mapping = {};
      this.colorMappings.forEach(function (pair) {
        mapping[pair.value] = pair.color;
      });

      if (Object.keys(mapping).length < 2) {
        this.setShowUniqueValuesWarningModal(true);
        return false;
      } else {
        this.props.handleColorMappingChange(mapping);
        return true;
      }
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "close", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.props.handleClose(EModalType.PROFILES_COLOR_SCHEME);
    }
  });
  Object.defineProperty(ProfilesColorSchemeModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var mappingElements = this.colorMappings.map(function (mapping, index) {
        return external_react_default.a.createElement(external_react_bootstrap_["Row"], {
          style: {
            padding: "10px"
          }
        }, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
          md: 2
        }), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
          md: 3
        }, external_react_default.a.createElement("input", {
          value: mapping.value,
          style: {
            width: "50px"
          },
          onChange: function (event) {
            var value = event.target.value;

            _this.handleValueChange(index, value);
          }
        })), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
          md: 3
        }, external_react_default.a.createElement("input", {
          type: "color",
          value: mapping.color,
          onChange: function (event) {
            var color = event.target.value;

            _this.handleColorChange(index, color);
          }
        })), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
          md: 1
        }, external_react_default.a.createElement("img", {
          src: deleteButtonImg,
          className: "icon-small " + (_this.colorMappings.length > 2 ? "icon-enabled" : "icon-disabled"),
          title: "Remove",
          onClick: function () {
            _this.removeColorMapping(index);
          }
        })), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
          md: 2
        }));
      });
      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        show: this.props.show,
        onHide: function () {
          _this.close();
        },
        bsSize: "small"
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Study Data Overlay Color Scheme")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement(external_react_bootstrap_["Row"], {
        style: {
          paddingTop: "10px",
          paddingLeft: "10px",
          paddingRight: "10px"
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        md: 2
      }), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        md: 3
      }, external_react_default.a.createElement("label", null, "Value")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        md: 3
      }, external_react_default.a.createElement("label", null, "Color")), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        md: 3
      })), external_react_default.a.createElement("hr", {
        className: "horizontal-rule"
      }), mappingElements, external_react_default.a.createElement("img", {
        src: addButtonImg,
        className: "icon-small icon-enabled",
        onClick: this.addDefaultColorMapping,
        title: "Add New Value-Color Mapping"
      }), external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        show: this.showUniqueValuesWarningModal,
        onHide: function () {
          return _this.setShowUniqueValuesWarningModal(false);
        },
        bsSize: "small"
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Warning")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("p", null, "Please set at least two unique value-color mappings.")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.setShowUniqueValuesWarningModal(false);
        }
      }, "OK")))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.close();
        }
      }, "Cancel"), external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.setDefaultColorMapping();
        }
      }, "Default"), external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          var close = _this.handleSaveColorScheme();

          if (close) {
            _this.close();
          }
        }
      }, "Save")));
    }
  });

  ProfilesColorSchemeModal_decorate([external_mobx_["observable"]], ProfilesColorSchemeModal.prototype, "colorMappings", void 0);

  ProfilesColorSchemeModal_decorate([external_mobx_["observable"]], ProfilesColorSchemeModal.prototype, "showUniqueValuesWarningModal", void 0);

  ProfilesColorSchemeModal_decorate([external_mobx_["action"].bound], ProfilesColorSchemeModal.prototype, "handleColorChange", null);

  ProfilesColorSchemeModal_decorate([external_mobx_["action"].bound], ProfilesColorSchemeModal.prototype, "handleValueChange", null);

  ProfilesColorSchemeModal_decorate([external_mobx_["action"].bound], ProfilesColorSchemeModal.prototype, "addDefaultColorMapping", null);

  ProfilesColorSchemeModal_decorate([external_mobx_["action"].bound], ProfilesColorSchemeModal.prototype, "removeColorMapping", null);

  ProfilesColorSchemeModal_decorate([external_mobx_["action"].bound], ProfilesColorSchemeModal.prototype, "setDefaultColorMapping", null);

  ProfilesColorSchemeModal_decorate([external_mobx_["action"].bound], ProfilesColorSchemeModal.prototype, "setShowUniqueValuesWarningModal", null);

  ProfilesColorSchemeModal_decorate([external_autobind_decorator_default.a], ProfilesColorSchemeModal.prototype, "handleSaveColorScheme", null);

  ProfilesColorSchemeModal_decorate([external_autobind_decorator_default.a], ProfilesColorSchemeModal.prototype, "close", null);

  ProfilesColorSchemeModal = ProfilesColorSchemeModal_decorate([external_mobx_react_["observer"]], ProfilesColorSchemeModal);
  return ProfilesColorSchemeModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_ProfilesColorSchemeModal = (ProfilesColorSchemeModal_ProfilesColorSchemeModal);
// CONCATENATED MODULE: ./src/modals/ProfilesModal.tsx
var ProfilesModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var ProfilesModal_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfilesModal_ProfilesModal =
/** @class */
function (_super) {
  ProfilesModal_extends(ProfilesModal, _super);

  function ProfilesModal(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "showEnabledProfileWarningModal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object(external_mobx_["makeObservable"])(_this);
    return _this;
  }

  Object.defineProperty(ProfilesModal.prototype, "setShowEnabledProfileWarningModal", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (val) {
      this.showEnabledProfileWarningModal = val;
    }
  });
  Object.defineProperty(ProfilesModal.prototype, "profileEnabledMap", {
    get: function () {
      var _this = this;

      var enabledProfiles = [];
      this.props.profiles.forEach(function (profile) {
        if (profile.enabled && enabledProfiles.length < _this.props.enabledProfileCountLimit) {
          enabledProfiles.push(profile);
        }
      });
      var profileEnabledMap = {};
      this.props.profiles.forEach(function (profile) {
        var enabled = enabledProfiles.indexOf(profile) > -1;
        profileEnabledMap[profile.profileId] = enabled;
      });
      return profileEnabledMap;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ProfilesModal.prototype, "handleProfileLabelClicked", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index) {
      this.props.handleProfileLabelClicked(index);
    }
  });
  Object.defineProperty(ProfilesModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var profileLabels = this.props.profiles.map(function (profile, i) {
        return external_react_default.a.createElement(external_react_default.a.Fragment, {
          key: i
        }, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
          onClick: function () {
            var enabledProfileCount = _this.props.profiles.filter(function (profile) {
              return profile.enabled;
            }).length;

            if (_this.props.profiles[i].enabled || enabledProfileCount < _this.props.enabledProfileCountLimit) {
              _this.handleProfileLabelClicked(i);

              _this.props.editor.updateGenomicDataVisibility(_this.profileEnabledMap);
            } else {
              _this.setShowEnabledProfileWarningModal(true);
            }
          },
          style: {
            cursor: "pointer",
            margin: "10px"
          },
          bsStyle: _this.props.profiles[i].enabled ? "primary" : "default"
        }, profile.profileId));
      });
      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        show: this.props.show,
        onHide: function () {
          _this.props.handleClose(EModalType.PROFILES);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Genomic Data Set(s) to Show")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, profileLabels.length > 0 ? profileLabels : external_react_default.a.createElement("h4", {
        className: "modal-title"
      }, "There is currently no data to show"), external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        show: this.showEnabledProfileWarningModal,
        onHide: function () {
          return _this.setShowEnabledProfileWarningModal(false);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Warning")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("p", null, "At most 6 data sets can be displayed at the same time, please disable some other data set before enabling this.")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.setShowEnabledProfileWarningModal(false);
        }
      }, "OK")))));
    }
  });

  ProfilesModal_decorate([external_mobx_["observable"]], ProfilesModal.prototype, "showEnabledProfileWarningModal", void 0);

  ProfilesModal_decorate([external_mobx_["action"]], ProfilesModal.prototype, "setShowEnabledProfileWarningModal", null);

  ProfilesModal_decorate([external_mobx_["computed"]], ProfilesModal.prototype, "profileEnabledMap", null);

  ProfilesModal = ProfilesModal_decorate([external_mobx_react_["observer"]], ProfilesModal);
  return ProfilesModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_ProfilesModal = (ProfilesModal_ProfilesModal);
// CONCATENATED MODULE: ./src/modals/QuickHelpModal.tsx
var QuickHelpModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var QuickHelpModal_QuickHelpModal =
/** @class */
function (_super) {
  QuickHelpModal_extends(QuickHelpModal, _super);

  function QuickHelpModal(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(QuickHelpModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        id: "quickHelpModal",
        show: this.props.show,
        onHide: function () {
          _this.props.handleClose(EModalType.HELP);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Quick Help")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("ul", {
        className: "leftText"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To add a node:"), " Drag and drop from node palette"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To add an interaction:"), " Click on interaction type; then click on small circle on source node and release on target node"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To add a node into a container (family, complex, compartment or process):"), " Drag the node into its container node or select nodes to be contained and right click on container node and choose \"Add Selected Into This\""), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To delete nodes/interactions:"), " Select and perform Edit > Delete Selected"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "To overlay experiment data:"), " Select Alteration % > Load From cBioPortal..."))));
    }
  });
  return QuickHelpModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_QuickHelpModal = (QuickHelpModal_QuickHelpModal);
// CONCATENATED MODULE: ./src/utils/CBioPortalAccessor.tsx



var CBioPortalAccessor_CBioPortalAccessor =
/** @class */
function () {
  function CBioPortalAccessor() {}

  Object.defineProperty(CBioPortalAccessor.prototype, "getDataTypes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return [CBioPortalAccessor.MUTATION, CBioPortalAccessor.GENE_EXPRESSION, CBioPortalAccessor.CNA];
    }
  });
  /*
  * Retrieves all cancer studies from cBioPortal
  * **/

  Object.defineProperty(CBioPortalAccessor.prototype, "fetchCancerStudies", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (callbackFunction) {
      var cancerStudies = {};
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          // By lines
          // Match all new line character representations
          var seperator = /\r?\n|\r/;
          var lines = request.responseText.split(seperator); // start from first line skip node meta data

          for (var i = 1; i < lines.length; i++) {
            if (lines[i].length <= 0) continue;
            var lineData = lines[i].split('\t');
            cancerStudies[lineData[0]] = lineData;
          }

          callbackFunction(cancerStudies);
        } else if (request.readyState === XMLHttpRequest.DONE && request.status !== 200) {
          external_react_toastify_["toast"].error("Could not retrieve studies!");
        }
      };

      request.open("GET", CBioPortalAccessor.GET_ALL_CANCER_STUDIES_URL);
      request.send();
    }
  });
  ;
  /**
  * Retrieves all genetic profiles for given cancerStudy from cBioPortal
  */

  Object.defineProperty(CBioPortalAccessor.prototype, "getSupportedGeneticProfiles", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerStudy, callbackFunction) {
      var outData = {};
      var request = new XMLHttpRequest();
      var self = this;

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          // By lines
          // Match all new line character representations
          var seperator = /\r?\n|\r/;
          var lines = request.responseText.split(seperator); // start from first line skip node meta data

          for (var i = 1; i < lines.length; i++) {
            if (lines[i].length <= 0) continue;
            var lineData = lines[i].split('\t');
            var cancerProfileName = lineData[0];

            if (self.isSupportedCancerProfile(cancerProfileName)) {
              outData[cancerProfileName] = lineData;
            }
          }

          callbackFunction(outData);
        } else if (request.readyState === XMLHttpRequest.DONE && request.status !== 200) {
          console.error("Error retrieving studies");
        }
      };

      request.open("GET", CBioPortalAccessor.GET_GENETIC_PROFILES_URL + cancerStudy);
      request.send();
    }
  });
  ;
  Object.defineProperty(CBioPortalAccessor.prototype, "isSupportedCancerProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerProfileName) {
      return cancerProfileName.endsWith(CBioPortalAccessor.MRNA_EXP_STUDY_NAME) || cancerProfileName.endsWith(CBioPortalAccessor.CNA_EXP_STUDY_NAME) || cancerProfileName.endsWith(CBioPortalAccessor.MUTATION_EXP_STUDY_NAME);
    }
  });
  ;
  Object.defineProperty(CBioPortalAccessor, "getDataType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerProfileName) {
      if (cancerProfileName.endsWith(this.MRNA_EXP_STUDY_NAME)) {
        return this.GENE_EXPRESSION;
      } else if (cancerProfileName.endsWith(this.CNA_EXP_STUDY_NAME)) {
        return this.CNA;
      } else if (cancerProfileName.endsWith(this.MUTATION_EXP_STUDY_NAME)) {
        return this.MUTATION;
      }

      return "";
    }
  });
  Object.defineProperty(CBioPortalAccessor.prototype, "calcAlterationPercentages", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (paramLines, geneticProfileId, callbackFunction) {
      // By lines
      // Match all new line character representations
      var seperator = /\r?\n|\r/;
      var lines = paramLines.split(seperator);
      var startIndex = 0; //Find starting index of actual data skip commented lines

      for (var i in lines) {
        if (!lines[i].startsWith('#')) {
          startIndex = parseInt(i);
          break;
        }
      } //Total number of tumor samples in the response


      var tumorSamples = lines[startIndex].split('\t');
      var numOfTumorSamples = tumorSamples.length - 2;
      var outData = {};
      outData[geneticProfileId] = {};
      var geneticProfileType = CBioPortalAccessor.getDataType(geneticProfileId); // skip meta line and iterate over tumor sample data

      for (var i = startIndex + 1; i < lines.length; i++) {
        if (lines[i].length <= 0) continue; //Iterate over samples for each gene to calculate profile data

        var lineData = lines[i].split('\t');
        var profileDataAlteration = 0;

        for (var j = 2; j < lineData.length; j++) {
          if (lineData[j] !== 'NaN') {
            if (geneticProfileType === CBioPortalAccessor.MUTATION) profileDataAlteration++;else if (geneticProfileType === CBioPortalAccessor.CNA && (parseInt(lineData[j]) === CBioPortalAccessor.CNA_GAIN || parseInt(lineData[j]) === CBioPortalAccessor.CNA_DELETION)) {
              profileDataAlteration++;
            } else if (geneticProfileType === CBioPortalAccessor.GENE_EXPRESSION && (parseFloat(lineData[j]) >= CBioPortalAccessor.Z_SCORE_UPPER_THRESHOLD || parseFloat(lineData[j]) <= CBioPortalAccessor.Z_SCORE_LOWER_THRESHOLD)) {
              profileDataAlteration++;
            }
          }
        } //


        outData[geneticProfileId][lineData[1]] = profileDataAlteration / numOfTumorSamples * 100;
      }

      callbackFunction(outData);
    }
  });
  /*
  *
  *    Retrieves profile data associated with the parameters below from cBioPortal
  *    @params
        {
          caseSetId: "gbm_tcga",
          geneticProfileId: "gbm_tcga_mutations",
          genes: ["BRCA1", "BRCA2", "TP53"]
        }
  * */

  Object.defineProperty(CBioPortalAccessor.prototype, "getProfileData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params, callbackFunction) {
      //params
      //caseSetId, geneticProfileId, genes
      var outData = {};
      var request = new XMLHttpRequest();
      var self = this;

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          self.calcAlterationPercentages(request.responseText, params.geneticProfileId, callbackFunction);
          external_react_toastify_["toast"].success(params.geneticProfileId + " has been succesfully loaded from cBioPortal.");
        }
      }; //Create query URL


      var queryURL = CBioPortalAccessor.GET_PROFILE_DATA_URL; //Fetch sequenced case list !!

      queryURL += "&case_set_id=" + params.caseSetId + "_sequenced";
      queryURL += "&genetic_profile_id=" + params.geneticProfileId;
      queryURL += "&gene_list=";
      var isFirst = true;

      for (var _i = 0, _a = params.genes; _i < _a.length; _i++) {
        var gene = _a[_i];

        if (!isFirst) {
          queryURL += "+";
        } else {
          isFirst = false;
        }

        queryURL += gene;
      }

      request.open("GET", queryURL);
      request.send();
    }
  });
  ;
  Object.defineProperty(CBioPortalAccessor.prototype, "validateGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeSymbols, editor) {
      var request = new XMLHttpRequest();
      var self = this;

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          var validGeneSymbols = JSON.parse(request.responseText);

          var validGeneArray = external_lodash_default.a.map(validGeneSymbols, function (object) {
            return object.hugoGeneSymbol;
          });

          editor.highlightInvalidGenes(validGeneArray);
        }
      };

      var queryURL = CBioPortalAccessor.VALIDATE_GENES_URL;
      request.open("POST", queryURL);
      request.setRequestHeader("Content-type", "application/json");
      request.send(JSON.stringify(nodeSymbols));
    }
  });
  Object.defineProperty(CBioPortalAccessor, "CNA_GAIN", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 2
  });
  Object.defineProperty(CBioPortalAccessor, "GET_ALL_CANCER_STUDIES_URL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "https://www.cbioportal.org/webservice.do?cmd=getCancerStudies"
  });
  Object.defineProperty(CBioPortalAccessor, "GET_GENETIC_PROFILES_URL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "https://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id="
  });
  Object.defineProperty(CBioPortalAccessor, "GET_PROFILE_DATA_URL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "https://www.cbioportal.org/webservice.do?cmd=getProfileData"
  });
  Object.defineProperty(CBioPortalAccessor, "MRNA_EXP_STUDY_NAME", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "_mrna_median_Zscores"
  });
  Object.defineProperty(CBioPortalAccessor, "CNA_EXP_STUDY_NAME", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "_gistic"
  });
  Object.defineProperty(CBioPortalAccessor, "VALIDATE_GENES_URL", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'https://www.cbioportal.org/api/genes/fetch?geneIdType=HUGO_GENE_SYMBOL&projection=ID'
  });
  Object.defineProperty(CBioPortalAccessor, "MUTATION_EXP_STUDY_NAME", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "_mutations"
  });
  Object.defineProperty(CBioPortalAccessor, "CNA_DELETION", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -2
  });
  Object.defineProperty(CBioPortalAccessor, "Z_SCORE_UPPER_THRESHOLD", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 2
  });
  Object.defineProperty(CBioPortalAccessor, "Z_SCORE_LOWER_THRESHOLD", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -2
  });
  Object.defineProperty(CBioPortalAccessor, "MUTATION", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Mutation"
  });
  Object.defineProperty(CBioPortalAccessor, "GENE_EXPRESSION", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Gene Expression"
  });
  Object.defineProperty(CBioPortalAccessor, "CNA", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Copy Number Alteration"
  });
  return CBioPortalAccessor;
}();

/* harmony default export */ var utils_CBioPortalAccessor = (CBioPortalAccessor_CBioPortalAccessor);
// CONCATENATED MODULE: ./src/modals/StudyModal.tsx
var StudyModal_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var StudyModal_assign = undefined && undefined.__assign || function () {
  StudyModal_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return StudyModal_assign.apply(this, arguments);
};

var StudyModal_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var StudyModal_StudyModal =
/** @class */
function (_super) {
  StudyModal_extends(StudyModal, _super);

  function StudyModal(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "dataTypes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(_this, "dataTypeFetchResultsReady", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(_this, "currentlySelectedItemIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -1
    });
    Object.defineProperty(_this, "selectedStudies", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "checkboxModalPosition", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        bottom: 0
      }
    });
    Object.defineProperty(_this, "selectedDataTypesPerStudy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "itemArray", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "searchQuery", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    });
    Object.defineProperty(_this, "showDataTypeSelectionModal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(_this, "studyListItemCheckboxChecked", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "selectedStudyData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "portalAccessor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.selectedStudyData = [];
    _this.portalAccessor = new utils_CBioPortalAccessor();

    _this.fetchStudy();

    return _this;
  }

  Object.defineProperty(StudyModal.prototype, "setDataTypeFetchResultsReady", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ready) {
      this.dataTypeFetchResultsReady = ready;
    }
  });
  Object.defineProperty(StudyModal.prototype, "setItemArray", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (itemArray) {
      this.itemArray = itemArray;
    }
  });
  Object.defineProperty(StudyModal.prototype, "setSearchQuery", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (query) {
      this.searchQuery = query;
    }
  });
  Object.defineProperty(StudyModal.prototype, "setSelectedStudyData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (data) {
      this.selectedStudyData = data;
    }
  });
  Object.defineProperty(StudyModal.prototype, "setDataTypeProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (dataType, properties) {
      this.dataTypes[dataType] = properties;
    }
  });
  Object.defineProperty(StudyModal.prototype, "initStudyListItemCheckboxChecked", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (studyCount) {
      this.studyListItemCheckboxChecked = Array(studyCount).fill(false);
    }
  });
  Object.defineProperty(StudyModal.prototype, "initSelectedDataTypesPerStudy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (studyCount) {
      this.selectedDataTypesPerStudy = Array(studyCount).fill("");
    }
  });
  Object.defineProperty(StudyModal.prototype, "toggleStudyListItemCheckboxChecked", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (studyIndex) {
      this.studyListItemCheckboxChecked[studyIndex] = !this.studyListItemCheckboxChecked[studyIndex];
    }
  });
  Object.defineProperty(StudyModal.prototype, "addSelectedStudy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (selectedStudy) {
      this.selectedStudies.push(selectedStudy);
    }
  });
  Object.defineProperty(StudyModal.prototype, "removeSelectedStudy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (selectedStudyData) {
      this.selectedStudies = this.selectedStudies.filter(function (study) {
        return study.data[0] != selectedStudyData[0];
      });
    }
  });
  Object.defineProperty(StudyModal.prototype, "clearSelectedStudies", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.selectedStudies = [];
    }
  });
  Object.defineProperty(StudyModal.prototype, "setShowDataTypeSelectionModal", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (show) {
      this.showDataTypeSelectionModal = show;
    }
  });
  Object.defineProperty(StudyModal.prototype, "clearStudyCheckboxesChecked", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var length = this.studyListItemCheckboxChecked.length;
      this.studyListItemCheckboxChecked = Array(length).fill(false);
    }
  });
  Object.defineProperty(StudyModal.prototype, "clearSelectedDataTypesPerStudy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var length = this.studyListItemCheckboxChecked.length;
      this.selectedDataTypesPerStudy = Array(length).fill("");
    }
  });
  Object.defineProperty(StudyModal.prototype, "unselectDataTypesForStudy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index) {
      this.selectedDataTypesPerStudy[index] = "";
    }
  });
  Object.defineProperty(StudyModal.prototype, "preparePortalAccess", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (studyId) {
      var _this = this;

      this.setDataTypeFetchResultsReady(false);
      this.portalAccessor.getSupportedGeneticProfiles(studyId, function (data) {
        _this.disableAllDataTypes(); // Iterate through profiles


        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
          var profile = _a[_i];
          var type = utils_CBioPortalAccessor.getDataType(profile);

          if (type !== "") {
            _this.setDataTypeProperties(type, StudyModal_assign(StudyModal_assign({}, _this.dataTypes[type]), {
              enabled: true,
              profile: profile
            }));

            setTimeout(function () {
              return _this.setDataTypeFetchResultsReady(true);
            }, 500);
          }
        }
      });
    }
  });
  Object.defineProperty(StudyModal.prototype, "disableAllDataTypes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      for (var _i = 0, _a = Object.keys(this.dataTypes); _i < _a.length; _i++) {
        var dataType = _a[_i];
        this.setDataTypeProperties(dataType, {
          enabled: false,
          checked: false,
          profile: undefined
        });
      }
    }
  });
  Object.defineProperty(StudyModal.prototype, "fetchStudy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      this.portalAccessor.getDataTypes().forEach(function (dataType) {
        _this.setDataTypeProperties(dataType, {
          enabled: false,
          checked: false,
          profile: undefined
        });
      });
      this.portalAccessor.fetchCancerStudies(function (cancerStudies) {
        var temp = [];

        for (var studyTitle in cancerStudies) {
          if (!cancerStudies.hasOwnProperty(studyTitle)) {
            continue;
          }

          var studyData = cancerStudies[studyTitle];
          temp.push(studyData);
        }

        var numOfStudies = temp.length;

        _this.initStudyListItemCheckboxChecked(numOfStudies);

        _this.initSelectedDataTypesPerStudy(numOfStudies);

        _this.setItemArray(temp);
      });
    }
  });
  Object.defineProperty(StudyModal.prototype, "resetModal", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.disableAllDataTypes();
      this.setSelectedStudyData([]);
      this.clearSelectedStudies();
      this.clearStudyCheckboxesChecked();
      this.clearSelectedDataTypesPerStudy();
      this.currentlySelectedItemIndex = -1;
      this.searchQuery = "";
    }
  });
  Object.defineProperty(StudyModal.prototype, "handleCheckboxClick", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (dataType) {
      this.setDataTypeProperties(dataType, StudyModal_assign(StudyModal_assign({}, this.dataTypes[dataType]), {
        checked: !this.dataTypes[dataType].checked
      }));
    }
  });
  Object.defineProperty(StudyModal.prototype, "selectedStudyDataTitle", {
    get: function () {
      if (this.selectedStudyData.length > 1) {
        return this.selectedStudyData[1] || "Choose study";
      } else {
        return "Choose study";
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StudyModal.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      return external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        id: "cbioPortalModal",
        show: this.props.show,
        onHide: function () {
          _this.props.handleClose(EModalType.STUDY);

          _this.resetModal();
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Header, {
        closeButton: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Title, null, "Profile Data from cBioPortal")), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, external_react_default.a.createElement("div", {
        id: "cancerDropDown",
        style: {
          textAlign: "left"
        }
      }, external_react_default.a.createElement("h4", null, "Select Cancer Study"), external_react_default.a.createElement("form", null, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        type: "text",
        placeholder: "Search studies",
        // @ts-ignore
        onChange: function (event) {
          return _this.setSearchQuery(event.target.value);
        }
      })), external_react_default.a.createElement(external_react_bootstrap_["ListGroup"], {
        style: {
          maxHeight: "200px",
          overflow: "auto",
          marginTop: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }
      }, this.itemArray.length < 1 ? external_react_default.a.createElement("span", null, "Fetching studies from cBioPortal...") : this.itemArray.map(function (item, index) {
        return {
          item: item,
          index: index
        };
      }).filter(function (obj) {
        return obj.item[1].toLowerCase().includes(_this.searchQuery.toLowerCase());
      }).map(function (obj) {
        var item = obj.item;
        var index = obj.index;
        var studyTitle = item[1];
        var studyId = item[0];
        return external_react_default.a.createElement(external_react_bootstrap_["ListGroupItem"], {
          id: "listgroupitem" + index,
          key: studyId,
          style: {
            padding: "5px 5px"
          }
        }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
          checked: _this.studyListItemCheckboxChecked[index],
          style: {
            marginTop: "0px",
            marginBottom: "0px"
          },
          onClick: function () {
            var boundingRect = document.getElementById("listgroupitem" + index).getBoundingClientRect();
            var modalMargin = 30;
            _this.checkboxModalPosition = {
              bottom: boundingRect.bottom - modalMargin
            };

            _this.setSelectedStudyData(item);

            _this.preparePortalAccess(studyId);

            _this.toggleStudyListItemCheckboxChecked(index);

            _this.currentlySelectedItemIndex = index;

            if (_this.studyListItemCheckboxChecked[index]) {
              _this.setShowDataTypeSelectionModal(true);
            } else {
              _this.removeSelectedStudy(item);

              _this.unselectDataTypesForStudy(index);
            }
          }
        }, studyTitle), _this.selectedDataTypesPerStudy[index] != "" && external_react_default.a.createElement("span", {
          style: {
            fontSize: "12px",
            marginLeft: "25px"
          }
        }, _this.selectedDataTypesPerStudy[index]));
      }))), external_react_default.a.createElement("div", {
        style: {
          marginTop: "10px"
        }
      }, external_react_default.a.createElement("p", {
        style: {
          textAlign: "left"
        }
      }, external_react_default.a.createElement("b", null, "Warning:"), " At most six different data sets will be overlayed on the genes. You can toggle which ones are to be displayed via \"Alteration %\" ", ">", " \"View Settings\" menu.")), external_react_default.a.createElement(external_react_bootstrap_["Modal"], {
        style: {
          position: "absolute",
          top: this.checkboxModalPosition.bottom + "px"
        },
        dialogClassName: "fitContent",
        show: this.showDataTypeSelectionModal,
        onHide: function () {
          _this.setShowDataTypeSelectionModal(false);
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Modal"].Body, null, this.dataTypeFetchResultsReady === false ? external_react_default.a.createElement("span", null, "Fetching data types from cBioPortal...") : Object.keys(this.dataTypes).map(function (dataType) {
        return external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
          inline: true,
          key: dataType,
          disabled: !_this.dataTypes[dataType].enabled,
          onClick: function () {
            _this.handleCheckboxClick(dataType);
          },
          checked: _this.dataTypes[dataType].checked
        }, dataType);
      })), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          var currentDataTypes = StudyModal_assign({}, _this.dataTypes);

          var selectedCount = Object.keys(currentDataTypes).filter(function (dataType) {
            return currentDataTypes[dataType].checked;
          }).length;

          if (selectedCount == 0) {
            _this.studyListItemCheckboxChecked[_this.currentlySelectedItemIndex] = false;
          }

          _this.setShowDataTypeSelectionModal(false);
        }
      }, "Cancel"), external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          var currentDataTypes = StudyModal_assign({}, _this.dataTypes);

          _this.addSelectedStudy({
            data: _this.selectedStudyData,
            dataTypes: currentDataTypes
          });

          _this.selectedDataTypesPerStudy[_this.currentlySelectedItemIndex] = Object.keys(currentDataTypes).filter(function (dataType) {
            return currentDataTypes[dataType].checked;
          }).join(", ");

          _this.setShowDataTypeSelectionModal(false);
        }
      }, "Add")))), external_react_default.a.createElement(external_react_bootstrap_["Modal"].Footer, null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        bsClass: "success",
        onClick: function () {
          _this.selectedStudies.forEach(function (study) {
            _this.props.loadFromCBio(study.dataTypes, study.data);
          });

          _this.props.handleClose(EModalType.STUDY);

          _this.resetModal();
        }
      }, "Load Data")));
    }
  });

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "dataTypes", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "dataTypeFetchResultsReady", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "selectedStudies", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "selectedDataTypesPerStudy", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "itemArray", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "searchQuery", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "showDataTypeSelectionModal", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "studyListItemCheckboxChecked", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "selectedStudyData", void 0);

  StudyModal_decorate([external_mobx_["observable"]], StudyModal.prototype, "portalAccessor", void 0);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "setDataTypeFetchResultsReady", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "setItemArray", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "setSearchQuery", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "setSelectedStudyData", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "setDataTypeProperties", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "initStudyListItemCheckboxChecked", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "initSelectedDataTypesPerStudy", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "toggleStudyListItemCheckboxChecked", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "addSelectedStudy", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "removeSelectedStudy", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "clearSelectedStudies", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "setShowDataTypeSelectionModal", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "clearStudyCheckboxesChecked", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "clearSelectedDataTypesPerStudy", null);

  StudyModal_decorate([external_mobx_["action"].bound], StudyModal.prototype, "unselectDataTypesForStudy", null);

  StudyModal_decorate([external_autobind_decorator_default.a], StudyModal.prototype, "resetModal", null);

  StudyModal_decorate([external_autobind_decorator_default.a], StudyModal.prototype, "handleCheckboxClick", null);

  StudyModal_decorate([external_mobx_["computed"]], StudyModal.prototype, "selectedStudyDataTitle", null);

  StudyModal = StudyModal_decorate([external_mobx_react_["observer"]], StudyModal);
  return StudyModal;
}(external_react_default.a.Component);

/* harmony default export */ var modals_StudyModal = (StudyModal_StudyModal);
// CONCATENATED MODULE: ./src/ui/Ranking.tsx
var Ranking_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Ranking_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TCGA_PANCAN_PATHWAY_NAMES = ["Cell Cycle", "HIPPO", "MYC", "NOTCH", "NRF2", "PI3K", "RTK-RAS", "TGF-Beta", "TP53", "WNT"];

var Ranking_Ranking =
/** @class */
function (_super) {
  Ranking_extends(Ranking, _super);

  function Ranking(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "bestPathways", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "shownPathways", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "dropDownTitle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "selectedPathway", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isPercentageMatch", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isAlterationEnabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "considerOnlyTCGAPanPathways", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isExpanded", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "COUNT_PERC_EXPLANATION", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Whether we should favor the number of genes of interest matching the ones in a pathway or the percentage of such genes in that pathway. For instance, suppose genes of interest are A, B, and C, and the pathway contains genes B, C, D, and E. When we consider count, the score is 2 (for the two genes that match). However, when we consider percentage the score will be 50% as 2 of the 4 genes in the pathway are among genes of interest."
    });
    Object.defineProperty(_this, "ALTERATION_EXPLANATION", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "When this is checked, each matching gene will not directly contribute to the score as 1 unit but with the alteration frequency percentage of that gene. For instance, suppose genes of interest are A, B, and C with alteration frequencies of 0.5, 0.2, and 0.3, respectively, and the pathway contains genes B, C, D, and E. When this is option isn't checked, the score will be 2 for match count and 50% for the match percentage. However, when this option is checked, the scores will be 0.2+0.3=0.5 and (0.2+0.3)/4=12.5% for match count and percentage, respectively."
    });
    Object.defineProperty(_this, "TCGA_PANCAN_EXPLANATION", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "The pathways listed above were retrieved from <a href='http://www.pathwaymapper.org' target='_blank'>PathwayMapper</a>. When this option is checked, only the pathways under TCGA > PanCanAtlas will be shown. Uncheck to show all."
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.isPercentageMatch = 0;
    _this.isAlterationEnabled = 0;
    _this.considerOnlyTCGAPanPathways = true;
    _this.dropDownTitle = "Match count";
    _this.isExpanded = false;

    _this.setBestPathwayMethod(0);

    _this.selectedPathway = _this.shownPathways[0].pathwayName;
    return _this;
  }

  Object.defineProperty(Ranking.prototype, "setBestPathwayMethod", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (i) {
      this.bestPathways = this.props.bestPathwaysAlgos[i];
      this.filterBestPathwaysByTCGAPanPathways();
    }
  });
  Object.defineProperty(Ranking.prototype, "onPathwayClick", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathway) {
      this.selectedPathway = pathway;
      this.props.pathwayActions.changePathway(this.selectedPathway);
    }
  });
  Object.defineProperty(Ranking.prototype, "onApplyClick", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      // Mapping from dropdown + checkbox selection to pathway method.
      this.setBestPathwayMethod(2 * this.isAlterationEnabled + this.isPercentageMatch);
    }
  });
  Object.defineProperty(Ranking.prototype, "filterBestPathwaysByTCGAPanPathways", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      this.shownPathways = this.bestPathways.filter(function (data) {
        if (_this.considerOnlyTCGAPanPathways) {
          return TCGA_PANCAN_PATHWAY_NAMES.indexOf(data.pathwayName) > -1;
        }

        return true;
      }); // change selected pathway if we are filtered and doesn't exist

      if (this.considerOnlyTCGAPanPathways && TCGA_PANCAN_PATHWAY_NAMES.indexOf(this.selectedPathway) < 0) {
        this.selectedPathway = this.shownPathways[0].pathwayName;
        this.props.pathwayActions.changePathway(this.selectedPathway);
      }
    }
  });
  Object.defineProperty(Ranking.prototype, "toggleConsiderOnlyTCGAPanPathways", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.considerOnlyTCGAPanPathways = !this.considerOnlyTCGAPanPathways;
      this.filterBestPathwaysByTCGAPanPathways();
    }
  });
  Object.defineProperty(Ranking.prototype, "componentDidMount", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.props.pathwayActions.changePathway(this.selectedPathway);
    }
  });
  Object.defineProperty(Ranking.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var lengthThreshold = 13;
      return external_react_default.a.createElement("div", {
        id: "ranking-bar"
      }, this.props.tableComponent && this.props.tableComponent(this.shownPathways.map(function (data) {
        return {
          name: data.pathwayName,
          score: data.score,
          genes: data.genesMatched
        };
      }), this.selectedPathway, this.onPathwayClick), external_react_default.a.createElement("div", {
        className: "indent"
      }, external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        checked: this.considerOnlyTCGAPanPathways,
        id: "tcgaPathwaysCheckbox",
        onClick: this.toggleConsiderOnlyTCGAPanPathways,
        style: {
          fontSize: "13px"
        }
      }, "Show TCGA PanCancer Atlas pathways only\u00A0", external_react_default.a.createElement("span", {
        "data-tip": this.TCGA_PANCAN_EXPLANATION,
        "data-border": "true",
        "data-type": "light",
        "data-place": "left",
        "data-effect": "solid",
        "data-html": "true",
        "data-delay-hide": "500",
        className: "fa fa-question-circle styles-module__infoIcon__zMiog"
      }))), !this.props.patientView && external_react_default.a.createElement("div", {
        className: "info-entry"
      }, external_react_default.a.createElement("div", {
        id: "criteria-title",
        className: "info-title"
      }, external_react_default.a.createElement("b", {
        style: {
          display: "inline-block"
        }
      }, "\u00A0Ranking options")), external_react_default.a.createElement("div", {
        className: "indent"
      }, external_react_default.a.createElement(external_react_bootstrap_["DropdownButton"], {
        title: this.dropDownTitle,
        id: "0",
        style: {
          fontSize: "13px"
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        style: {
          fontSize: "13px"
        },
        onClick: function () {
          _this.isPercentageMatch = 0;
          _this.dropDownTitle = "Match count";

          _this.onApplyClick();
        }
      }, "Match count"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        style: {
          fontSize: "13px"
        },
        onClick: function () {
          _this.isPercentageMatch = 1;
          _this.dropDownTitle = "Match percentage";

          _this.onApplyClick();
        }
      }, "Match percentage")), "\u00A0", external_react_default.a.createElement("div", {
        "data-tip": this.COUNT_PERC_EXPLANATION,
        "data-border": "true",
        "data-type": "light",
        "data-place": "left",
        "data-effect": "solid",
        className: "fa fa-question-circle styles-module__infoIcon__zMiog"
      }), external_react_default.a.createElement(external_react_bootstrap_["Checkbox"], {
        id: "alterationCheckBox",
        onClick: function () {
          _this.isAlterationEnabled = _this.isAlterationEnabled === 1 ? 0 : 1;

          _this.onApplyClick();
        },
        style: {
          fontSize: "13px",
          marginTop: "18px",
          bottom: "4px"
        }
      }, "Consider alteration frequency\u00A0", external_react_default.a.createElement("span", {
        "data-tip": this.ALTERATION_EXPLANATION,
        "data-border": "true",
        "data-type": "light",
        "data-place": "left",
        "data-effect": "solid",
        className: "fa fa-question-circle styles-module__infoIcon__zMiog"
      })))));
    }
  });

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "bestPathways", void 0);

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "shownPathways", void 0);

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "dropDownTitle", void 0);

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "selectedPathway", void 0);

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "considerOnlyTCGAPanPathways", void 0);

  Ranking_decorate([external_mobx_["observable"]], Ranking.prototype, "isExpanded", void 0);

  Ranking_decorate([external_autobind_decorator_default.a], Ranking.prototype, "setBestPathwayMethod", null);

  Ranking_decorate([external_autobind_decorator_default.a], Ranking.prototype, "onPathwayClick", null);

  Ranking_decorate([external_autobind_decorator_default.a], Ranking.prototype, "onApplyClick", null);

  Ranking_decorate([external_mobx_["action"].bound], Ranking.prototype, "filterBestPathwaysByTCGAPanPathways", null);

  Ranking_decorate([external_mobx_["action"].bound], Ranking.prototype, "toggleConsiderOnlyTCGAPanPathways", null);

  Ranking = Ranking_decorate([external_mobx_react_["observer"]], Ranking);
  return Ranking;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Ranking = (Ranking_Ranking);
// CONCATENATED MODULE: ./src/ui/Toolbar.tsx
var Toolbar_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Toolbar_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore


 // @ts-ignore

var Toolbar_addSelImage = __webpack_require__(19); // @ts-ignore


var Toolbar_addAllImage = __webpack_require__(20); // @ts-ignore


var aboutImage = __webpack_require__(17);

var Toolbar_Toolbar =
/** @class */
function (_super) {
  Toolbar_extends(Toolbar, _super);

  function Toolbar(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "selectedGenes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.selectedGenes = [];
    return _this;
  }

  Object.defineProperty(Toolbar.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var studyQuery = "q=" + JSON.stringify(this.props.alterationData) + "&g=" + this.props.genes.map(function (gene) {
        return gene.hugoGeneSymbol;
      }).join("+");
      return external_react_default.a.createElement("div", {
        id: "toolbar",
        style: {
          marginLeft: '0px'
        }
      }, external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Save as PNG",
        "data-place": "right",
        "data-effect": "solid",
        src: save_png_default.a,
        onClick: function () {
          _this.props.pathwayActions.saveAs("PNG");
        }
      }), external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Save as SVG",
        "data-place": "right",
        "data-effect": "solid",
        src: save_svg_default.a,
        onClick: function () {
          _this.props.pathwayActions.saveAs("SVG");
        }
      }), external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Perform layout",
        "data-place": "right",
        "data-effect": "solid",
        src: layout_cose_default.a,
        onClick: this.props.pathwayActions.performLayout
      }), !this.props.patientView && [external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Add selected genes to query",
        "data-place": "right",
        "data-effect": "solid",
        src: Toolbar_addSelImage,
        onClick: function () {
          _this.selectedGenes = _this.props.pathwayActions.getSelectedNodes().filter(function (node) {
            return node.data().type === "GENE";
          }).map(function (node) {
            return node.data().name;
          });

          var noneGeneList = _this.props.pathwayActions.getSelectedNodes().filter(function (node) {
            return node.data().type !== "GENE";
          }).map(function (node) {
            return node.data().name;
          });

          var invalidGenes = [];
          var message = "";

          if (noneGeneList.length > 0) {
            message += "Selection contains nodes that are not genes: " + noneGeneList.join(', ') + ". ";
          }

          _this.selectedGenes.forEach(function (gene) {
            if (!_this.props.validGenes.hasOwnProperty(gene)) {
              invalidGenes.push(gene);
            }
          });

          if (invalidGenes.length === 0) {
            if (_this.selectedGenes.length > 0 && noneGeneList.length === 0) {
              _this.props.onAddGenes(_this.selectedGenes);
            }
          } else {
            message += "Following gene symbols are invalid or already in gene list: " + invalidGenes.join(", ") + ".";
          }

          if (message.length > 0) {
            _this.props.showMessage(message);
          }
        }
      }), external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Add all valid genes to query",
        "data-place": "right",
        "data-effect": "solid",
        src: Toolbar_addAllImage,
        onClick: function () {
          _this.selectedGenes = _this.props.pathwayGenes.filter(function (gene) {
            return _this.props.validGenes.hasOwnProperty(gene);
          });

          if (_this.selectedGenes.length > 0) {
            _this.props.onAddGenes(_this.selectedGenes);
          }
        }
      }), external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Edit pathway",
        "data-place": "right",
        "data-effect": "solid",
        src: edit_default.a,
        onClick: function () {
          {
            window.open("http://pathwaymapper.org/?pathwayName=" + _this.props.selectedPathway + "&" + studyQuery);
          }
        }
      })], external_react_default.a.createElement("img", {
        height: "22px",
        width: "22px",
        "data-border": "true",
        "data-type": "light",
        "data-tip": "Help",
        "data-place": "right",
        "data-effect": "solid",
        src: aboutImage,
        onClick: function () {
          _this.props.handleOpen(EModalType.CHELP);
        }
      }));
    }
  });

  Toolbar_decorate([external_mobx_["observable"]], Toolbar.prototype, "selectedGenes", void 0);

  Toolbar_decorate([external_mobx_["observable"]], Toolbar.prototype, "editor", void 0);

  Toolbar = Toolbar_decorate([external_mobx_react_["observer"]], Toolbar);
  return Toolbar;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Toolbar = (Toolbar_Toolbar);
// CONCATENATED MODULE: ./src/utils/PathwayActions.ts
var PathwayActions_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PathwayActions_PathwayActions =
/** @class */
function () {
  function PathwayActions(pathwayHandler, profiles, fileManager, handleOpen, isCBioPortal, isCollaborative) {
    Object.defineProperty(this, "selectedPathway", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "fileManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "undoRedoManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "pathwayHandler", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "handleOpen", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "eh", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "profiles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "gridOptionsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "uploader", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "merger", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCBioPortal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCollaborative", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "viewOperationsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overlayUploader", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "enabledType", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(this);
    this.pathwayHandler = pathwayHandler;
    this.profiles = profiles;
    this.fileManager = fileManager;
    this.handleOpen = handleOpen;
    this.isCBioPortal = isCBioPortal;
    this.isCollaborative = isCollaborative;
    this.enabledType = EGridType.NONE;
  }

  Object.defineProperty(PathwayActions.prototype, "addProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profile) {
      this.profiles.push(profile);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "clearProfiles", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.profiles.length = 0;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "emphasizeQueryGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (queryGenes) {
      if (this.editor) this.editor.cy.nodes().forEach(function (node) {
        var nodeName = node.data().name;
        var nodeType = node.data().type;

        if (queryGenes.includes(nodeName) && nodeType === "GENE") {
          node.style({
            "border-width": "4px",
            "font-weight": "bold"
          });
        }
      });
    }
  });
  Object.defineProperty(PathwayActions.prototype, "getSelectedNodes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.editor.cy.nodes(":selected");
    }
  });
  Object.defineProperty(PathwayActions.prototype, "setLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (layoutProperties) {
      this.editor.saveLayoutProperties(layoutProperties);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "doesCyHaveElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.editor.cy.elements().length > 0;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "toggleGrid", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (isEnabled) {
      this.gridOptionsManager.setSnapToGuidelines(false);
      this.gridOptionsManager.setShowGrid(isEnabled);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "toggleGuide", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (isEnabled) {
      this.gridOptionsManager.setSnapToGuidelines(isEnabled);
      this.gridOptionsManager.setShowGrid(false);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "adjustGridSettings", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (gridSize, color) {
      this.gridOptionsManager.currentProperties.gridSpacing = gridSize;
      this.gridOptionsManager.currentProperties.guidelinesStyle.strokeStyle = color;
      this.gridOptionsManager.currentProperties.guidelinesStyle.horizontalDistColor = color;
      this.gridOptionsManager.currentProperties.guidelinesStyle.verticalDistColor = color;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "resizeToContent", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.resizeNodesToContent(this.editor.cy.nodes());
    }
  });
  Object.defineProperty(PathwayActions.prototype, "align", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (param) {
      this.viewOperationsManager.handleNodeAlignment(param);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "onChangeFile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (e, isMerge) {
      var file = e.target.files[0];
      this.processFile(file, isMerge); //Can't load the same file twice in a row without this

      e.target.value = "";
    }
  });
  Object.defineProperty(PathwayActions.prototype, "uploadOverlay", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.overlayUploader.click();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "overlayFromText", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (file) {
      var _this = this; // Create a new FormData object.


      var formData = new FormData();
      formData.append("graphFile", file);
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          var linesOfData = request.responseText.split("\n");

          if (linesOfData.length > 0) {
            var profileIdsFromFile = linesOfData[0].split("\t").slice(1);
            profileIdsFromFile.forEach(function (id) {
              return _this.addProfile({
                profileId: id,
                enabled: true
              });
            });
          } else {
            console.log("Error: No valid data");
          }

          _this.editor.addGenomicData(request.responseText);
        }
      };

      request.open("POST", "/loadGraph");
      request.send(formData);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "upload", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      if (this.editor.cy.elements().length > 0) {
        this.handleOpen(EModalType.CONFIRMATION);

        modals_ConfirmationModal.pendingFunction = function () {
          _this.uploader.click();
        };
      } else {
        this.uploader.click();
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "merge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.merger.click();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "setOverlayUploader", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (inputRef) {
      this.overlayUploader = inputRef;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "setUploaders", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (inputRef, isMerge) {
      if (isMerge) this.merger = inputRef;else this.uploader = inputRef;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "getPathwayInfo", {
    get: function () {
      return this.fileManager.getPathwayInfo;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(PathwayActions.prototype, "setPathwayInfo", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (other) {
      this.fileManager.setPathwayInfo(other);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "undo", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.undoRedoManager.undo();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "redo", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.undoRedoManager.redo();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "export", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (isSIFNX) {
      //this.editor.cy.remove('.eh-handle');
      this.eh.hide();
      this.fileManager.saveGraph(isSIFNX, this.editor);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "resetUndoStack", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.undoRedoManager.reset();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "newPathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var commitNewPathway = function () {
        _this.editor.removeAllElements();

        _this.fileManager.setPathwayInfo({
          pathwayTitle: "New Pathway",
          pathwayDetails: ""
        }); //this.removeAllData()


        _this.resetUndoStack();

        _this.pathwayHandler("Dummy");
      };

      if (this.editor.cy.elements().length > 0) {
        this.handleOpen(EModalType.CONFIRMATION);
        modals_ConfirmationModal.pendingFunction = commitNewPathway;
      } else {
        commitNewPathway();
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "changePathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathwayName) {
      this.pathwayHandler(pathwayName);

      if (!this.isCBioPortal) {
        this.fileManager.setPathwayInfo({
          pathwayTitle: pathwayName,
          pathwayDetails: ""
        }); // At the beginning changePathway is called editor is not ready hence removeData shall not be called

        if (this.editor) {
          //this.removeAllData()
          this.resetUndoStack();
        }
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "highlightNeighbours", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.highlightNeighbors();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "highlightSelected", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.highlightSelected();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "validateGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.validateGenes();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "showAll", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.showAllNodes();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "hideSelected", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.hideSelectedNodes();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "deleteSelected", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var selectedEles = this.editor.cy.elements(":selected");
      this.editor.removeElement(selectedEles);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "addEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeTypeIndex) {
      // @ts-ignore
      window.edgeAddingMode = edgeTypeIndex + 1;

      if (edgeTypeIndex === -1) {
        this.eh.disable();
        this.eh.hide();
        return;
      } else {
        // @ts-ignore
        this.eh.enable();
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "changeNodeName", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (oldName, newName) {
      var cyNode = this.editor.cy.$('[name="' + oldName + '"]')[0];
      this.editor.changeName(cyNode, newName);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "addNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeType) {
      var nodeData = {
        type: nodeType.toUpperCase(),
        name: "New " + nodeType,
        w: "150",
        h: "52"
      };
      var extent = this.editor.cy.extent();
      var posData = {
        x: (extent.x1 + extent.x2) / 2,
        y: (extent.y1 + extent.y2) / 2
      };
      this.editor.addNode(nodeData, posData);
      this.pathwayHandler("Additional Pathway");
    }
  });
  Object.defineProperty(PathwayActions.prototype, "searchGene", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneName) {
      var selector = "node[name @*= '" + geneName + "']";
      var nodesContainingSearchedGene = this.editor.cy.filter(selector);
      var nodesToSelect = this.editor.cy.collection();
      nodesContainingSearchedGene.forEach(function (ele, index) {
        if (!ele.hasClass("highlightedNode") && !ele.hasClass("invalidGeneHighlight")) nodesToSelect = nodesToSelect.union(ele);
      });
      this.editor.highlightBySearch(nodesToSelect);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "removeAllData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.removeGenomicData();
      this.clearProfiles();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "removeAllHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.removeAllHighlight();
    }
  });
  Object.defineProperty(PathwayActions.prototype, "processFile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (file, isMerge) {
      var _this = this; // Create a new FormData object.


      var formData = new FormData();
      formData.append("graphFile", file);
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            var pathwayData = utils_SaveLoadUtility.parseGraph(request.responseText, false);

            if (isMerge) {
              _this.editor.mergeGraph(pathwayData.nodes, pathwayData.edges);

              var graphJSON = _this.editor.cy.json(); //TODO change file name maybe, probabyly  not necessary ?
              // Pathway nodes and edges are now combination of both previous and new pathway.


              pathwayData.nodes = graphJSON.elements.nodes; //this.editor.cy.nodes().map((node) => ({data: node.data()}));

              pathwayData.edges = graphJSON.elements.edges; //this.editor.cy.edges().map((edge) => ({data: edge.data()}));

              pathwayData.title = "Additional Pathway";
            } else {
              _this.editor.loadFile(pathwayData.nodes, pathwayData.edges);

              _this.fileManager.setPathwayInfo({
                pathwayTitle: pathwayData.title,
                pathwayDetails: pathwayData.description
              });
            }

            _this.pathwayHandler(pathwayData.title + "_imported");

            _this.resetUndoStack();
          } else {
            console.error("Error processing file: " + request.readyState + request.responseText);
          }
        }
      };

      request.open("POST", "/loadGraph");
      request.send(formData);
    }
  });
  Object.defineProperty(PathwayActions.prototype, "saveAs", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (type) {
      if (type === "SVG") {
        this.fileManager.saveAsSVG(this.editor);
      } else if (type === "PNG") {
        this.fileManager.saveAsPNG(this.editor.cy);
      } else if (type === "JPEG") {
        this.fileManager.saveAsJPEG(this.editor.cy);
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "editorHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor, eh, undoRedoManager, viewOperationsManager, gridOptionsManager) {
      this.editor = editor;
      this.eh = eh;
      this.undoRedoManager = undoRedoManager;
      this.viewOperationsManager = viewOperationsManager;
      this.gridOptionsManager = gridOptionsManager;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "exists", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profileId) {
      var exists = false;
      this.profiles.forEach(function (profile) {
        if (profile.profileId === profileId) {
          exists = true;
        }
      });
      return exists;
    }
  });
  Object.defineProperty(PathwayActions.prototype, "loadSampleData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var data = "gene\tlung\tovarian\tbreast\n" + "PTEN\t-7\t-20\t10\n" + "NF1\t-12\t-4\t30\n" + "PIK3CA\t18\t40\t-50\n" + "KRAS\t11\t-5\t0\n" + "ZIYA\t0\t-2\t0\n" + "AKT1\t3\t30\t-10\n" + "AKT2\t6\t-3\t20\n" + "AKT3\t6\t-3\t20\n" + "\n";

      if (this.exists("lung") || this.exists("ovarian") || this.exists("breast")) {
        return;
      }

      this.editor.addGenomicData(data);

      if (!this.isCollaborative) {
        this.addProfile({
          profileId: "lung",
          enabled: this.profiles.length < 6 ? true : false
        });
        this.addProfile({
          profileId: "ovarian",
          enabled: this.profiles.length < 6 ? true : false
        });
        this.addProfile({
          profileId: "breast",
          enabled: this.profiles.length < 6 ? true : false
        });
      }
    }
  });
  Object.defineProperty(PathwayActions.prototype, "performLayout", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.editor.performLayout();
    }
  });

  PathwayActions_decorate([external_mobx_["observable"]], PathwayActions.prototype, "selectedPathway", void 0);

  PathwayActions_decorate([external_mobx_["observable"]], PathwayActions.prototype, "enabledType", void 0);

  PathwayActions_decorate([external_mobx_["action"].bound], PathwayActions.prototype, "addProfile", null);

  PathwayActions_decorate([external_mobx_["action"].bound], PathwayActions.prototype, "clearProfiles", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "toggleGrid", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "toggleGuide", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "resizeToContent", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "align", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "onChangeFile", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "upload", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "merge", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "setUploaders", null);

  PathwayActions_decorate([external_mobx_["computed"]], PathwayActions.prototype, "getPathwayInfo", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "setPathwayInfo", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "undo", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "redo", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "export", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "resetUndoStack", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "newPathway", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "changePathway", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "highlightNeighbours", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "highlightSelected", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "validateGenes", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "showAll", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "hideSelected", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "deleteSelected", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "addEdge", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "changeNodeName", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "addNode", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "searchGene", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "removeAllData", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "removeAllHighlight", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "processFile", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "saveAs", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "editorHandler", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "exists", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "loadSampleData", null);

  PathwayActions_decorate([external_autobind_decorator_default.a], PathwayActions.prototype, "performLayout", null);

  return PathwayActions;
}();

/* harmony default export */ var utils_PathwayActions = (PathwayActions_PathwayActions);
// EXTERNAL MODULE: ./src/images/toolbar/about.svg
var about = __webpack_require__(17);
var about_default = /*#__PURE__*/__webpack_require__.n(about);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-horizontal-bottom.svg
var align_horizontal_bottom = __webpack_require__(23);
var align_horizontal_bottom_default = /*#__PURE__*/__webpack_require__.n(align_horizontal_bottom);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-horizontal-middle.svg
var align_horizontal_middle = __webpack_require__(24);
var align_horizontal_middle_default = /*#__PURE__*/__webpack_require__.n(align_horizontal_middle);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-horizontal-top.svg
var align_horizontal_top = __webpack_require__(25);
var align_horizontal_top_default = /*#__PURE__*/__webpack_require__.n(align_horizontal_top);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-vertical-center.svg
var align_vertical_center = __webpack_require__(26);
var align_vertical_center_default = /*#__PURE__*/__webpack_require__.n(align_vertical_center);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-vertical-left.svg
var align_vertical_left = __webpack_require__(27);
var align_vertical_left_default = /*#__PURE__*/__webpack_require__.n(align_vertical_left);

// EXTERNAL MODULE: ./src/images/toolbar/align/align-vertical-right.svg
var align_vertical_right = __webpack_require__(28);
var align_vertical_right_default = /*#__PURE__*/__webpack_require__.n(align_vertical_right);

// EXTERNAL MODULE: ./src/images/toolbar/delete-simple.svg
var delete_simple = __webpack_require__(29);
var delete_simple_default = /*#__PURE__*/__webpack_require__.n(delete_simple);

// EXTERNAL MODULE: ./src/images/toolbar/grid.svg
var grid = __webpack_require__(30);
var grid_default = /*#__PURE__*/__webpack_require__.n(grid);

// EXTERNAL MODULE: ./src/images/toolbar/guidelines.svg
var guidelines = __webpack_require__(31);
var guidelines_default = /*#__PURE__*/__webpack_require__.n(guidelines);

// EXTERNAL MODULE: ./src/images/toolbar/hide-selected.svg
var hide_selected = __webpack_require__(32);
var hide_selected_default = /*#__PURE__*/__webpack_require__.n(hide_selected);

// EXTERNAL MODULE: ./src/images/toolbar/layout-properties.svg
var layout_properties = __webpack_require__(33);
var layout_properties_default = /*#__PURE__*/__webpack_require__.n(layout_properties);

// EXTERNAL MODULE: ./src/images/toolbar/load.svg
var load = __webpack_require__(34);
var load_default = /*#__PURE__*/__webpack_require__.n(load);

// EXTERNAL MODULE: ./src/images/toolbar/new.svg
var toolbar_new = __webpack_require__(35);
var new_default = /*#__PURE__*/__webpack_require__.n(toolbar_new);

// EXTERNAL MODULE: ./src/images/toolbar/portal.svg
var portal = __webpack_require__(36);
var portal_default = /*#__PURE__*/__webpack_require__.n(portal);

// EXTERNAL MODULE: ./src/images/toolbar/quick-help.svg
var quick_help = __webpack_require__(37);
var quick_help_default = /*#__PURE__*/__webpack_require__.n(quick_help);

// EXTERNAL MODULE: ./src/images/toolbar/redo.svg
var redo = __webpack_require__(38);
var redo_default = /*#__PURE__*/__webpack_require__.n(redo);

// EXTERNAL MODULE: ./src/images/toolbar/save.svg
var save = __webpack_require__(39);
var save_default = /*#__PURE__*/__webpack_require__.n(save);

// EXTERNAL MODULE: ./src/images/toolbar/settings.svg
var settings = __webpack_require__(40);
var settings_default = /*#__PURE__*/__webpack_require__.n(settings);

// EXTERNAL MODULE: ./src/images/toolbar/show-all.svg
var show_all = __webpack_require__(41);
var show_all_default = /*#__PURE__*/__webpack_require__.n(show_all);

// EXTERNAL MODULE: ./src/images/toolbar/undo.svg
var undo = __webpack_require__(42);
var undo_default = /*#__PURE__*/__webpack_require__.n(undo);

// CONCATENATED MODULE: ./src/ui/Buttonbar.tsx
var Buttonbar_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Buttonbar_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore





var Buttonbar_Buttonbar =
/** @class */
function (_super) {
  Buttonbar_extends(Buttonbar, _super);

  function Buttonbar(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "searchedGene", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.searchedGene = "";
    _this.props.pathwayActions.enabledType = EGridType.NONE;
    return _this;
  }

  Object.defineProperty(Buttonbar.prototype, "setEnabledType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newType) {
      if (newType === this.props.pathwayActions.enabledType) {
        this.props.pathwayActions.enabledType = EGridType.NONE;
      } else {
        this.props.pathwayActions.enabledType = newType;
      } // Enabled type calculated


      if (this.props.pathwayActions.enabledType === EGridType.GRID) {
        this.props.pathwayActions.toggleGrid(true);
      } else if (this.props.pathwayActions.enabledType === EGridType.GUIDE) {
        this.props.pathwayActions.toggleGuide(true);
      } else {
        this.props.pathwayActions.toggleGrid(false); // This will disable both.
      }
    }
  });
  Object.defineProperty(Buttonbar.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var fileFunctions = [{
        svg: new_default.a,
        function: this.props.pathwayActions.newPathway,
        tooltip: "New Pathway"
      }, {
        svg: load_default.a,
        function: this.props.pathwayActions.upload,
        tooltip: "Import Pathway"
      }, {
        svg: save_default.a,
        function: function () {
          _this.props.pathwayActions.export(false);
        },
        tooltip: "Export Pathway"
      }];
      var modFunctions = [{
        svg: delete_simple_default.a,
        function: this.props.pathwayActions.deleteSelected,
        tooltip: "Delete Selected"
      }];

      if (!this.props.pathwayActions.isCollaborative) {
        modFunctions.push({
          svg: undo_default.a,
          function: function () {
            _this.props.pathwayActions.undo();
          },
          tooltip: "Undo"
        }, {
          svg: redo_default.a,
          function: function () {
            _this.props.pathwayActions.redo();
          },
          tooltip: "Redo"
        });
      }

      var alignFunctions = [{
        svg: align_horizontal_top_default.a,
        function: function () {
          _this.props.pathwayActions.align("hTop");
        },
        tooltip: "Align Horizontal Top"
      }, {
        svg: align_horizontal_middle_default.a,
        function: function () {
          _this.props.pathwayActions.align("hMid");
        },
        tooltip: "Align Horizontal Middle"
      }, {
        svg: align_horizontal_bottom_default.a,
        function: function () {
          _this.props.pathwayActions.align("hBot");
        },
        tooltip: "Align Horizontal Bottom"
      }, {
        svg: align_vertical_left_default.a,
        function: function () {
          _this.props.pathwayActions.align("vLeft");
        },
        tooltip: "Align Vertical Left"
      }, {
        svg: align_vertical_center_default.a,
        function: function () {
          _this.props.pathwayActions.align("vCen");
        },
        tooltip: "Align Vertical Center"
      }, {
        svg: align_vertical_right_default.a,
        function: function () {
          _this.props.pathwayActions.align("vRight");
        },
        tooltip: "Align Vertical Right"
      }];
      var utilFunctions = [{
        isFocused: this.props.pathwayActions.enabledType === EGridType.GRID,
        svg: grid_default.a,
        function: function () {
          _this.setEnabledType(EGridType.GRID);
        },
        tooltip: "Enable Grid: Show and snap to grid"
      }, {
        isFocused: this.props.pathwayActions.enabledType === EGridType.GUIDE,
        svg: guidelines_default.a,
        function: function () {
          _this.setEnabledType(EGridType.GUIDE);
        },
        tooltip: "Enable Guidelines: Enable and snap to alignment guidelines"
      }];
      var visibilityFunctions = [{
        svg: hide_selected_default.a,
        function: function () {
          _this.props.pathwayActions.hideSelected();
        },
        tooltip: "Hide Selected"
      }, {
        svg: show_all_default.a,
        function: function () {
          _this.props.pathwayActions.showAll();
        },
        tooltip: "Show All"
      }];
      var layoutFunctions = [{
        svg: layout_cose_default.a,
        function: function () {
          _this.props.pathwayActions.performLayout();
        },
        tooltip: "Perform Layout"
      }, {
        svg: layout_properties_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.LAYOUT);
        },
        tooltip: "Layout Properties"
      }];
      var portalFunctions = [{
        svg: portal_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.STUDY);
        },
        tooltip: "Fetch Genomic Data From cBioPortal"
      }, {
        svg: settings_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.PROFILES);
        },
        tooltip: "Genomic Data Visibility Settings"
      }];
      var infoFunctions = [{
        svg: quick_help_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.HELP);
        },
        tooltip: "Quick Help"
      }, {
        svg: about_default.a,
        function: function () {
          _this.props.handleOpen(EModalType.ABOUT);
        },
        tooltip: "About"
      }];
      var allFunctions = [fileFunctions, modFunctions, alignFunctions, utilFunctions, visibilityFunctions, portalFunctions, layoutFunctions, infoFunctions];
      return external_react_default.a.createElement(external_react_bootstrap_["Navbar"], {
        fluid: true,
        style: {
          backgroundColor: "#eff0f2",
          minHeight: "0px"
        },
        className: "pathway-toolbar"
      }, external_react_default.a.createElement(external_react_bootstrap_["ButtonToolbar"], {
        className: "toolbar pathway-toolbar",
        style: {
          marginBottom: "0px",
          paddingBottom: "0px"
        }
      }, allFunctions.map(function (functions, index) {
        return external_react_default.a.createElement(external_react_bootstrap_["ButtonGroup"], {
          key: index
        }, functions.map(function (svg, index) {
          return external_react_default.a.createElement(external_react_bootstrap_["Button"], {
            key: index,
            className: "toolbar-button" + (svg.isFocused ? " toolbar-button-focused" : ""),
            style: {
              padding: 0
            }
          }, external_react_default.a.createElement("img", {
            height: "22px",
            width: "22px",
            src: svg.svg,
            "data-tip": svg.tooltip,
            "data-place": "bottom",
            "data-effect": "solid",
            onClick: svg.function
          }));
        }));
      }), external_react_default.a.createElement(external_react_bootstrap_["ButtonGroup"], {
        id: "searchGeneToolbar"
      }, external_react_default.a.createElement(external_react_bootstrap_["FormGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["InputGroup"], null, external_react_default.a.createElement(external_react_bootstrap_["FormControl"], {
        id: "searchGene",
        type: "text",
        style: {
          maxHeight: '32px',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        },
        onChange: function (e) {
          _this.searchedGene = e.target.value;
        },
        placeholder: "Search Genes...",
        onKeyPress: function (e) {
          if (e.key !== "Enter") return;

          _this.props.pathwayActions.searchGene(_this.searchedGene);
        }
      }), external_react_default.a.createElement(external_react_bootstrap_["InputGroup"].Addon, {
        id: "search-gene-input-group-addon",
        onClick: function () {
          _this.props.pathwayActions.searchGene(_this.searchedGene);
        },
        style: {
          cursor: 'pointer'
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Glyphicon"], {
        glyph: "search"
      })))))));
    }
  });

  Buttonbar_decorate([external_mobx_["observable"]], Buttonbar.prototype, "searchedGene", void 0);

  Buttonbar = Buttonbar_decorate([external_mobx_react_["observer"]], Buttonbar);
  return Buttonbar;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Buttonbar = (Buttonbar_Buttonbar);
// EXTERNAL MODULE: external "cytoscape"
var external_cytoscape_ = __webpack_require__(7);
var external_cytoscape_default = /*#__PURE__*/__webpack_require__.n(external_cytoscape_);

// EXTERNAL MODULE: ./src/images/nodes/compartment.svg
var compartment = __webpack_require__(43);
var compartment_default = /*#__PURE__*/__webpack_require__.n(compartment);

// EXTERNAL MODULE: ./src/images/nodes/complex.svg
var complex = __webpack_require__(44);
var complex_default = /*#__PURE__*/__webpack_require__.n(complex);

// EXTERNAL MODULE: ./src/images/nodes/family.svg
var family = __webpack_require__(45);
var family_default = /*#__PURE__*/__webpack_require__.n(family);

// EXTERNAL MODULE: ./src/images/nodes/gene.svg
var nodes_gene = __webpack_require__(46);
var gene_default = /*#__PURE__*/__webpack_require__.n(nodes_gene);

// EXTERNAL MODULE: ./src/images/nodes/process.svg
var process = __webpack_require__(47);
var process_default = /*#__PURE__*/__webpack_require__.n(process);

// EXTERNAL MODULE: ./src/images/resizeCue.svg
var resizeCue = __webpack_require__(48);
var resizeCue_default = /*#__PURE__*/__webpack_require__.n(resizeCue);

// CONCATENATED MODULE: ./src/managers/ContextMenuManager.tsx


var ContextMenuManager_ContextMenuManager =
/** @class */
function () {
  function ContextMenuManager(cy, editor, handleOpen, undoRedoManager, isCollaborative) {
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "handleOpen", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "undoRedoManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "isCollaborative", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cy = cy;
    this.editor = editor;
    this.handleOpen = handleOpen;
    this.undoRedoManager = undoRedoManager;
    this.isCollaborative = isCollaborative;
    this.init();
  }

  Object.defineProperty(ContextMenuManager.prototype, "init", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var classRef = this;
      var ctxMenus = this.cy.scratch('cycontextmenus') ? this.cy.contextMenus('get') : this.cy.contextMenus();
      var menuItems = [{
        id: 'deleteSelected',
        content: 'Delete Selected',
        coreAsWell: true,
        onClickFunction: function () {
          var selectedEles = _this.cy.elements(':selected');

          classRef.editor.removeElement(selectedEles);
        },
        disabled: false,
        hasTrailingDivider: false
      }, {
        id: 'hideSelected',
        content: 'Hide Selected',
        coreAsWell: true,
        onClickFunction: function () {
          classRef.editor.hideSelectedNodes();
        },
        disabled: false,
        hasTrailingDivider: false
      }, {
        id: 'loadFromCBioPortal',
        content: 'Load From cBioPortal...',
        coreAsWell: true,
        onClickFunction: function () {
          _this.handleOpen(EModalType.STUDY);
        },
        disabled: false,
        hasTrailingDivider: false
      }, //Context menu items when clicking on nodes/compounds
      {
        id: 'remove',
        content: 'Delete',
        selector: 'node, edge',
        onClickFunction: function (event) {
          var ele = event.target; // The function to be executed on click

          var selectedElements = classRef.cy.nodes(':selected').union(ele);
          classRef.editor.removeElement(selectedElements);
        },
        disabled: false,
        hasTrailingDivider: false,
        coreAsWell: false
      }, {
        id: 'addSelected',
        content: 'Add Selected Into This',
        selector: 'node',
        onClickFunction: function (event) {
          var ele = event.target;
          var selectedNodes = classRef.cy.nodes(':selected');
          var containerType = ele.data('type');
          var validNodes = classRef.cy.collection(); //Do nothing if node is GENE

          if (ele._private.data['type'] === 'GENE' || selectedNodes.size() < 1) {
            return;
          } //Prevent actions like adding root node to children & addition to itself
          else {
              var notValid = false;
              selectedNodes.forEach(function (tmpNode, i) {
                if (ele.id() == tmpNode.id()) {
                  notValid = true;
                  return false;
                }

                if (tmpNode.isParent()) {
                  notValid = classRef.isChildren(tmpNode, ele);

                  if (notValid) {
                    return false;
                  }
                }

                return true;
              });

              if (notValid) {
                return;
              }
            }

          selectedNodes.forEach(function (tmpNode, i) {
            if (containerType == "FAMILY" || containerType == "COMPLEX") {
              if (tmpNode.data('type') != "COMPARTMENT" && tmpNode.data('type') != "PROCESS") {
                validNodes = validNodes.add(tmpNode);
              }
            } else {
              validNodes = validNodes.add(tmpNode);
            }
          });
          var compId = ele.id();
          classRef.editor.changeParents(validNodes, compId); //Unselecting nodes to remove them from selectedNodeStack

          selectedNodes.unselect();
        },
        disabled: false,
        hasTrailingDivider: false,
        coreAsWell: false
      }, {
        id: 'removeSelected',
        content: 'Remove Selected From Parent',
        selector: 'node',
        onClickFunction: function (event) {
          var ele = event.target;
          var selectedNodes = classRef.cy.nodes(':selected');
          var notValid = false;
          selectedNodes.forEach(function (tmpNode, i) {
            if (tmpNode.isParent()) {
              notValid = classRef.isChildren(tmpNode, ele);

              if (notValid) {
                return false;
              }
            }

            return true;
          });

          if (notValid) {
            return;
          }

          classRef.editor.changeParents(selectedNodes, null); //Unselecting nodes to remove them from selectedNodeStack

          selectedNodes.unselect();
        },
        disabled: false,
        hasTrailingDivider: false,
        coreAsWell: false
      }, {
        id: 'performLayout',
        content: 'Perform Layout',
        coreAsWell: true,
        onClickFunction: function () {
          _this.editor.performLayout();
        },
        disabled: false,
        hasTrailingDivider: false
      }];
      var nonCollabItems = [//Context menu items when clicking on blank space
      {
        id: 'undoAction',
        content: 'Undo',
        coreAsWell: true,
        onClickFunction: function () {
          _this.undoRedoManager.undo();
        },
        disabled: false,
        hasTrailingDivider: false
      }, {
        id: 'redoAction',
        content: 'Redo',
        coreAsWell: true,
        onClickFunction: function () {
          _this.undoRedoManager.redo();
        },
        disabled: false,
        hasTrailingDivider: false
      }];

      if (!this.isCollaborative) {
        menuItems = menuItems.concat(nonCollabItems);
      }

      ctxMenus.appendMenuItems(menuItems);
    }
  }); //TODO better move this to another class
  //Utility function to check whether query node is children of given node

  Object.defineProperty(ContextMenuManager.prototype, "isChildren", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node, queryNode) {
      var parent = queryNode.parent()[0];

      while (parent) {
        if (parent.id() == node.id()) {
          return true;
        }

        parent = parent.parent()[0];
      }

      return false;
    }
  });
  return ContextMenuManager;
}();

/* harmony default export */ var managers_ContextMenuManager = (ContextMenuManager_ContextMenuManager);
// CONCATENATED MODULE: ./src/managers/QtipManager.tsx

 // optional for styling

var QtipManager_QtipManager =
/** @class */
function () {
  function QtipManager(cy, editor) {
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cy = cy;
    this.editor = editor;
  }

  Object.defineProperty(QtipManager.prototype, "generateEdgeQtip", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edge) {
      var self = this;
      var pubmedURL = 'https://www.ncbi.nlm.nih.gov/pubmed/';
      var pubmedData = edge.data('pubmedIDs');
      var wrapper = document.createElement('div'); // header

      var header = document.createElement('div');
      header.classList.add('row', 'node-tooltip-header');
      header.innerHTML = "INTERACTION DETAILS";
      wrapper.append(header); // edge label input

      var textInputWrapper = document.createElement('div');
      textInputWrapper.classList.add('col-xs-6', 'inputCol');
      var inputElement = document.createElement('input');
      inputElement.type = 'text';
      inputElement.value = edge.data('name');
      inputElement.classList.add('form-control');
      inputElement.addEventListener("change", function (event) {
        // @ts-ignore
        var value = event.target.value;
        self.editor.changeName(edge, value);
      });
      textInputWrapper.appendChild(inputElement);
      var edgeLabelRowElement = document.createElement('div');
      edgeLabelRowElement.classList.add('row', 'geneDetails');
      var colElement = document.createElement('div');
      colElement.classList.add('col-xs-6', 'qtipLabel');
      colElement.innerHTML = "Label:";
      edgeLabelRowElement.appendChild(colElement);
      edgeLabelRowElement.appendChild(textInputWrapper);
      wrapper.appendChild(edgeLabelRowElement);
      wrapper.appendChild(document.createElement('hr')); // pubmed id input

      var pubmedTextInputWrapper = document.createElement('div');
      pubmedTextInputWrapper.classList.add('col-xs-6', 'inputCol');
      var pubmedIdInputElement = document.createElement('input');
      pubmedIdInputElement.type = 'text';
      pubmedIdInputElement.classList.add('form-control');
      pubmedIdInputElement.addEventListener("change", function (event) {
        // @ts-ignore
        var value = event.target.value;
        var pubmedIdsToAdd = value.split(';'); // @ts-ignore

        event.target.value = "";
        self.editor.addPubmedIDs(edge, pubmedIdsToAdd);
        var pubmedIds = edge.data("pubmedIDs");
        generatePubmedLinks(pubmedIds);
      });
      pubmedTextInputWrapper.appendChild(pubmedIdInputElement);
      var pubmedIdRowElement = document.createElement('div');
      pubmedIdRowElement.classList.add('row', 'geneDetails');
      var pubmedIdColElement = document.createElement('div');
      pubmedIdColElement.classList.add('col-xs-6', 'qtipLabel');
      pubmedIdColElement.innerHTML = "Add Pubmed ID(s):";
      pubmedIdRowElement.appendChild(pubmedIdColElement);
      pubmedIdRowElement.appendChild(pubmedTextInputWrapper);
      wrapper.appendChild(pubmedIdRowElement);

      if (pubmedData.length > 0) {
        generatePubmedLinks(pubmedData);
      }

      function generatePubmedLinks(argData) {
        if (document.getElementsByClassName("pubmedIDList").length > 0) {
          document.getElementsByClassName("pubmedIDList").item(0).remove();
        }

        var pubmedIdListWrapper = document.createElement('div');
        pubmedIdListWrapper.classList.add("pubmedIDList");
        pubmedIdListWrapper.appendChild(document.createElement('hr'));
        var pubmedIdLabel = document.createElement('label');
        pubmedIdLabel.classList.add("col-xs-12", "pubmedIDLabel");
        pubmedIdLabel.innerHTML = "Pubmed IDs";
        pubmedIdListWrapper.appendChild(pubmedIdLabel);

        for (var key in argData) {
          if (!argData.hasOwnProperty(key)) {
            continue;
          }

          var pubmedId = argData[key];
          if (isNaN(pubmedId)) continue;
          var pubmedIdListElement = document.createElement('div');
          var pubmedIdRemoveButton = document.createElement('i');
          pubmedIdRemoveButton.classList.add('fa', 'fa-times', 'qtipRemovePmedID');
          pubmedIdRemoveButton.setAttribute('aria-hidden', 'true');
          pubmedIdRemoveButton.setAttribute('pubmedId', pubmedId);
          pubmedIdRemoveButton.addEventListener("click", function (event) {
            event.target.parentElement.remove();
            var pubmedId = event.target.getAttribute('pubmedId');
            self.editor.removePubmedID(edge, [pubmedId]);
            var pubmedIds = edge.data('pubmedIDs');

            if (pubmedIds.length === 0) {
              document.getElementsByClassName("pubmedIDList").item(0).remove();
            }
          });
          var pubmedContent = document.createElement('div');
          var pubmedIdLabel_1 = document.createElement('label');
          var pubmedIdLink = document.createElement('a');
          pubmedIdLink.setAttribute('target', '_blank');
          var pubmedLink = pubmedURL + pubmedId;
          pubmedIdLink.setAttribute('href', pubmedLink);
          pubmedIdLink.innerHTML = pubmedId.toString();
          pubmedIdLabel_1.appendChild(pubmedIdLink);
          pubmedContent.appendChild(pubmedIdLabel_1);
          pubmedContent.appendChild(pubmedIdRemoveButton);
          pubmedIdListElement.appendChild(pubmedContent);
          pubmedIdListWrapper.appendChild(pubmedIdListElement);
        }

        if (edge.data('pubmedIDs').length > 0) {
          wrapper.appendChild(pubmedIdListWrapper);
        }
      }

      wrapper.classList.add("tooltip-text-style");
      return wrapper;
    }
  });
  Object.defineProperty(QtipManager.prototype, "generateNodeQtip", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (node) {
      var self = this;
      var header = document.createElement('div');
      header.classList.add('row', 'node-tooltip-header');
      header.innerHTML = node.data('type').toUpperCase() + " DETAILS";
      var textInputWrapper = document.createElement('div');
      textInputWrapper.classList.add('col-xs-8', 'inputCol');
      var inputElement = document.createElement('input');
      inputElement.type = 'text';
      inputElement.value = node.data('name');
      inputElement.classList.add('form-control');
      inputElement.addEventListener("change", function (event) {
        // @ts-ignore
        var value = event.target.value;
        self.editor.changeName(node, value);
      });
      textInputWrapper.appendChild(inputElement);
      var wrapper = document.createElement('div');
      var rowElement = document.createElement('div');
      rowElement.classList.add('row', 'geneDetails');
      var colElement = document.createElement('div');
      colElement.classList.add('col-xs-4', 'qtipLabel');
      colElement.innerHTML = "Name:";
      rowElement.appendChild(colElement);
      rowElement.appendChild(textInputWrapper);
      wrapper.append(header);
      wrapper.append(rowElement);

      if (node.data('type') === "GENE") {
        var buttonWrapper = document.createElement('div');
        buttonWrapper.classList.add('row', 'centerText', 'geneDetails');
        var button = document.createElement('button');
        button.type = 'button';
        button.classList.add('btn', 'btn-default');
        button.innerHTML = "My Cancer Genome";
        button.addEventListener("click", function (event) {
          event.preventDefault();
          var name = node.data('name');
          window.open("https://www.mycancergenome.org/content/gene/" + name);
        });
        buttonWrapper.append(button);
        wrapper.append(buttonWrapper);
      }

      wrapper.classList.add("tooltip-text-style");
      return wrapper;
    }
  });
  Object.defineProperty(QtipManager.prototype, "addQtipToElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (eles) {
      var self = this;
      eles.forEach(function (ele) {
        var ref = ele.popperRef();
        var dummyDomEle = document.createElement('div');
        document.body.appendChild(dummyDomEle);
        var tip = external_tippy_js_default()(dummyDomEle, {
          getReferenceClientRect: ref.getBoundingClientRect,
          trigger: 'manual',
          placement: 'bottom',
          interactive: true,
          theme: 'pathwaymapper',
          // your own custom props
          // content prop can be used when the target is a single element https://atomiks.github.io/tippyjs/v6/constructor/#prop
          content: function () {
            var content = ele.isNode() ? self.generateNodeQtip(ele) : self.generateEdgeQtip(ele);
            return content;
          },
          onHidden: function (instance) {
            instance.destroy();
            dummyDomEle.remove();
          }
        });
        self.cy.one("pan zoom", function () {
          if (dummyDomEle && dummyDomEle["_tippy"]) {
            tip.hide();
          }
        });
        ele.one("showqtipevent", function () {
          tip.show();
        });
      });
    }
  }); //Utility Functions

  Object.defineProperty(QtipManager.prototype, "capitalizeFirstLetter", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  });
  return QtipManager;
}();

/* harmony default export */ var managers_QtipManager = (QtipManager_QtipManager);
// CONCATENATED MODULE: ./src/managers/ShareDBManager.tsx


var sharedb;
var socket;
var connection;

var ShareDBManager_ShareDBManager =
/** @class */
function () {
  function ShareDBManager(postFileLoadCallback) {
    Object.defineProperty(this, "NODEMAP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'nodes'
    });
    Object.defineProperty(this, "EDGEMAP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'edges'
    });
    Object.defineProperty(this, "LAYOUT_PROPS_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'layoutProperties'
    });
    Object.defineProperty(this, "GLOBAL_OPTS_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'globalOptions'
    }); //For storing genomic data information per gene

    Object.defineProperty(this, "GENOMIC_DATA_MAP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'genomicDataMap'
    }); //For storing visibility information of genomic data according to the cancer type

    Object.defineProperty(this, "VISIBLE_GENOMIC_DATA_MAP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'visibleGenomicDataMapByType'
    });
    Object.defineProperty(this, "GENOMIC_DATA_GROUP_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'genomicDataGroupList'
    });
    Object.defineProperty(this, "GENOMIC_DATA_GROUP_COUNT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'genomicDataGroupCount'
    });
    Object.defineProperty(this, "GENOMIC_DATA_COLOR_SCHEME_NAME", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 'genomicDataColorScheme'
    });
    Object.defineProperty(this, "doc", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "postFileLoad", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "reconnectEdge", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: function (sourceID, targetID, edgeData) {
        var edgeMap = this.doc.data[this.EDGEMAP_NAME];
        var edge = edgeMap[edgeData.id];
        var edgeID = edge.id;
        edge.source = sourceID;
        edge.target = targetID;

        if (edgeMap.hasOwnProperty(edgeID)) {
          this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, edge);
        } else {
          throw new Error('Element does not exist in Real Time');
        }
      }
    }); //Doc data maps names and keys

    this.postFileLoad = postFileLoadCallback;
  }

  ;
  Object.defineProperty(ShareDBManager.prototype, "getDoc", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.doc;
    }
  });
  Object.defineProperty(ShareDBManager.prototype, "setEditor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor) {
      this.editor = editor;
    }
  }); //Applies any given sharDB opeation to shared document and notifies other clients

  Object.defineProperty(ShareDBManager.prototype, "applyShareDBOperation", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      this.doc.submitOp(op, this.shareDBError);
    }
  });
  ; //Clears genomic data in shared document and notifies other clients

  Object.defineProperty(ShareDBManager.prototype, "clearShareDBGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var ops = [];
      var genomicMap = this.doc.data[this.GENOMIC_DATA_MAP_NAME];
      var visMap = this.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
      var genomicDataGroupMap = this.doc.data[this.GENOMIC_DATA_GROUP_NAME];
      var genomicDataGroupCount = this.doc.data[this.GENOMIC_DATA_GROUP_COUNT]; //Reset all genomic maps

      for (var _i = 0, _a = Object.keys(genomicMap); _i < _a.length; _i++) {
        var key = _a[_i];
        ops.push({
          p: [this.GENOMIC_DATA_MAP_NAME, key],
          od: genomicMap[key]
        });
      }

      for (var _b = 0, _c = Object.keys(visMap); _b < _c.length; _b++) {
        var key = _c[_b];
        ops.push({
          p: [this.VISIBLE_GENOMIC_DATA_MAP_NAME, key],
          od: visMap[key]
        });
      }

      for (var _d = 0, _e = Object.keys(genomicDataGroupMap); _d < _e.length; _d++) {
        var key = _e[_d];
        ops.push({
          p: [this.GENOMIC_DATA_GROUP_NAME, key],
          od: genomicDataGroupMap[key]
        });
      } //Reset genomic data group count to 0


      ops.push({
        p: [this.GENOMIC_DATA_GROUP_COUNT],
        na: -genomicDataGroupCount
      });
      this.doc.submitOp(ops, this.shareDBError);
    }
  });
  ;
  /*
   * Updates shared document object
   * @param mapName: map name of the object
   * @param objectKey: key of the object
   * @param object: new object
   *
   */

  Object.defineProperty(ShareDBManager.prototype, "updateShareDBObject", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (mapName, objectKey, object) {
      this.doc.submitOp([{
        p: [mapName, objectKey],
        od: this.doc.data[mapName][objectKey],
        oi: object
      }], this.shareDBError);
    }
  });
  ;
  /*
   * Inserts a new shared document object
   * @param mapName: map name of the object
   * @param objectKey: key of the object
   * @param object: new object
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "insertShareDBObject", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (mapName, objectKey, object) {
      this.doc.submitOp([{
        p: [mapName, objectKey],
        oi: object
      }], this.shareDBError);
    }
  });
  ;
  /*
   * Deletes a shared document object
   * @param mapName: map name of the object
   * @param objectKey: key of the object
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "deleteShareDBObject", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (mapName, objectKey) {
      this.doc.submitOp([{
        p: [mapName, objectKey],
        od: this.doc.data[mapName][objectKey]
      }], this.shareDBError);
    }
  });
  ; //Initializes layout properties of the shared document

  Object.defineProperty(ShareDBManager.prototype, "initializeShareDBLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.doc.submitOp([{
        p: [this.LAYOUT_PROPS_NAME, 0],
        li: [this.editor.layoutProperties]
      }], this.shareDBError);
    }
  });
  ; //Initializes global options of the shared document

  Object.defineProperty(ShareDBManager.prototype, "initializeShareDBGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.doc.submitOp([{
        p: [this.GLOBAL_OPTS_NAME, 0],
        li: [this.editor.getGlobalOptions()]
      }], this.shareDBError);
    }
  });
  ;
  /*
   * Updates layout properties of the shared document and notifies other clients
   * @param object: new layout properties object
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "updateShareDBLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (object) {
      this.doc.submitOp([{
        p: [this.LAYOUT_PROPS_NAME, 0],
        ld: this.doc.data[this.LAYOUT_PROPS_NAME][0],
        li: object
      }], this.shareDBError);
    }
  });
  ;
  /*
   * Updates global options of the shared document and notifies other clients
   * @param object: new global options object
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "updateShareDBGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (object) {
      this.doc.submitOp([{
        p: [this.GLOBAL_OPTS_NAME, 0],
        ld: this.doc.data[this.GLOBAL_OPTS_NAME][0],
        li: object
      }], this.shareDBError);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "updateShareDBGenomicDataOverlayColorScheme", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (object) {
      this.doc.submitOp([{
        p: [this.GENOMIC_DATA_COLOR_SCHEME_NAME, 0],
        ld: this.doc.data[this.GENOMIC_DATA_COLOR_SCHEME_NAME][0],
        li: object
      }], this.shareDBError);
    }
  });
  ; //Increments shared data group count
  //Use this function to increment and keep the group count synchronized

  Object.defineProperty(ShareDBManager.prototype, "incrementShareDBGroupCount", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.doc.submitOp([{
        p: [this.GENOMIC_DATA_GROUP_COUNT],
        na: 1
      }], this.shareDBError);
    }
  });
  ; //Checks whether given operation is a replace or add/delete operation

  Object.defineProperty(ShareDBManager.prototype, "isShareDBReplaceEvent", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (op) {
      return op.hasOwnProperty("oi") && op.hasOwnProperty("od") || op.hasOwnProperty("li") && op.hasOwnProperty("ld");
    }
  });
  ;
  /*
   * Gets the initial value of the shared document
   * without this function shared document values cannot be reached
  */

  Object.defineProperty(ShareDBManager.prototype, "initializeSharedDBDoc", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.doc.subscribe();
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "shareDBError", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (err) {
      if (err) {
        console.error(err);
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "initShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      sharedb = __webpack_require__(62);
      socket = new WebSocket('ws://' + window.location.host);
      connection = new sharedb.Connection(socket);
      var self = this;
      var id = this.getParam('id');

      var loadFileCallback = function () {
        self.onFileLoaded();
      }; //Creates new shared db document and initializes values


      var createNewDocument = function () {
        var new_id = self.getCustomObjId();
        var data = {
          nodes: {},
          edges: {},
          layoutProperties: [_this.editor.layoutProperties],
          globalOptions: [_this.editor.getGlobalOptions()],
          genomicDataMap: {},
          visibleGenomicDataMapByType: {},
          genomicDataGroupList: {},
          genomicDataGroupCount: 0,
          genomicDataColorScheme: [{
            '-100': "#0000ff",
            '0': "#ffffff",
            '100': "#ff0000"
          }]
        };
        window.history.pushState(null, null, '?id=' + new_id);
        self.doc = connection.get('cy', new_id);
        self.doc.create(data, loadFileCallback);
      }; //Check if id exists in parameters
      //If exists open the shared document


      if (id) {
        // Check any document exists with given id
        this.doc = connection.get('cy', id);
        this.doc.fetch(function (err) {
          if (err) throw err;

          if (self.doc.type === null) {
            createNewDocument();
            return;
          }

          self.doc.subscribe(loadFileCallback);
        });
      } else {
        //Create new shared document
        createNewDocument();
      }
    }
  });
  ;
  /*
   * After a file has been initialized and loaded, we can access the
   * document. We will wire up the data in shared document to the UI.
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "onFileLoaded", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.initializeSharedDBDoc();
      this.syncInitialSharedDocData();
      this.initSharedDocEventHandlers();
      this.postFileLoad();
    }
  });
  ;
  /*
   * Synchronizes initial data in the shared document to
   * client's application.
   */

  Object.defineProperty(ShareDBManager.prototype, "syncInitialSharedDocData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      var edgeMap = self.doc.data[this.EDGEMAP_NAME];
      var shareDBLayoutProperties = self.doc.data[this.LAYOUT_PROPS_NAME][0];
      var globalOptions = self.doc.data[this.GLOBAL_OPTS_NAME][0];
      var genomicDataMap = self.doc.data[this.GENOMIC_DATA_MAP_NAME];
      var visDataMap = self.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
      var groupedGenomicDataMap = self.doc.data[this.GENOMIC_DATA_GROUP_NAME];
      var groupedGenomicDataCount = self.doc.data[this.GENOMIC_DATA_GROUP_COUNT];
      var genomicDataColorScheme;

      if (self.doc.data[this.GENOMIC_DATA_COLOR_SCHEME_NAME]) {
        genomicDataColorScheme = self.doc.data[this.GENOMIC_DATA_COLOR_SCHEME_NAME][0];
      }

      var invalidGenes = [];
      var highlightedGenes = [];
      var invalidHighlightedGenes = [];
      var hiddenGenes = [];

      for (var _i = 0, _a = Object.keys(nodeMap); _i < _a.length; _i++) {
        var key = _a[_i];
        var tmpNode = nodeMap[key];
        var tmpNodeId = tmpNode.id;

        if (tmpNode.isInvalidGene && tmpNode.isHighlighted) {
          invalidHighlightedGenes.push(tmpNodeId);
        } else if (tmpNode.isInvalidGene) {
          invalidGenes.push(tmpNodeId);
        } else if (tmpNode.isHighlighted) {
          highlightedGenes.push(tmpNodeId);
        }

        if (tmpNode.isHidden) {
          hiddenGenes.push(tmpNodeId);
        }
      }

      var highlightedEdges = [];

      for (var _b = 0, _c = Object.keys(edgeMap); _b < _c.length; _b++) {
        var key = _c[_b];
        var tmpEdge = edgeMap[key];
        var tmpEdgeId = tmpEdge.id;

        if (tmpEdge.isHighlighted) {
          highlightedEdges.push(tmpEdgeId);
        }
      } //TODO Workaround for legacy pathways
      // Workaround for backward compatibility of legacy pathways
      // Addition of pubmed id field on server if legacy collaborative
      // pathways does not have !


      for (var _d = 0, _e = Object.keys(edgeMap); _d < _e.length; _d++) {
        var key = _e[_d];
        var tmpEdge_1 = edgeMap[key];

        if (tmpEdge_1.pubmedIDs == undefined || tmpEdge_1.name == undefined || tmpEdge_1.bendPoint == undefined || tmpEdge_1.anchorPoints == undefined || tmpEdge_1.edgeCurveStyle == undefined) {
          var pubmedIDs = tmpEdge_1.pubmedIDs == undefined ? [] : tmpEdge_1.pubmedID;
          var edgeLabel = tmpEdge_1.name == undefined ? "" : tmpEdge_1.name;
          var anchorPoints = [];

          if (tmpEdge_1.bendPoint) {
            anchorPoints = tmpEdge_1.bendPoint;
          } else if (tmpEdge_1.anchorPoints) {
            anchorPoints = tmpEdge_1.anchorPoints;
          }

          var edgeCurveStyle = tmpEdge_1.edgeCurveStyle ? tmpEdge_1.edgeCurveStyle : "bezier";
          var param = {
            type: tmpEdge_1.type,
            source: tmpEdge_1.source,
            id: self.getCustomObjId(),
            target: tmpEdge_1.target,
            pubmedID: pubmedIDs,
            name: edgeLabel,
            anchorPoints: anchorPoints,
            edgeCurveStyle: edgeCurveStyle
          };
          var newEdge = self.edgeInitializer(param);
          var tmpEdgeID = tmpEdge_1.id;
          var newEdgeID = newEdge.id;
          var ops = [{
            p: [self.EDGEMAP_NAME, tmpEdgeID],
            od: tmpEdge_1
          }, {
            p: [self.EDGEMAP_NAME, newEdgeID],
            oi: newEdge
          }];
          self.applyShareDBOperation(ops);
        }
      } //Add real time nodes to local graph


      this.editor.addNewElementsLocally(nodeMap, edgeMap); //Adds different type of highlight to nodes and hides if their property is hidden

      this.editor.highlightElementsInitially(invalidHighlightedGenes, invalidGenes, highlightedGenes, highlightedEdges, hiddenGenes); //Update layout properties & global options!!

      if (shareDBLayoutProperties.name == "cose-bilkent") {
        shareDBLayoutProperties.name = "fcose";
        this.updateLayoutProperties(shareDBLayoutProperties);
      }

      this.editor.updateLayoutPropertiesCallback({
        li: shareDBLayoutProperties
      });
      this.editor.changeGlobalOptions({
        li: globalOptions
      }); //Sync already available genomic data !

      if (!groupedGenomicDataMap) {
        self.insertShareDBObject(self.GENOMIC_DATA_MAP_NAME, '0', []);

        for (var _f = 0, _g = Object.keys(visDataMap); _f < _g.length; _f++) {
          var key = _g[_f];

          var currentMap = external_lodash_default.a.clone(groupedGenomicDataMap['0']); // currentMap.push(visibilityMapKeys[key]);


          self.updateShareDBObject(self.GENOMIC_DATA_MAP_NAME, '0', currentMap);
        }
      }

      if (!groupedGenomicDataCount) {
        var count = self.doc.data[self.GENOMIC_DATA_GROUP_COUNT];
        var op = [{
          p: [self.GENOMIC_DATA_GROUP_COUNT],
          na: -count
        }];
        self.applyShareDBOperation(op);
        groupedGenomicDataCount = self.doc.data[self.GENOMIC_DATA_GROUP_COUNT];
      }

      if (!genomicDataColorScheme) {
        genomicDataColorScheme = this.editor.getGenomicDataOverlayColorScheme();
        var op_1 = [{
          p: [self.GENOMIC_DATA_COLOR_SCHEME_NAME],
          oi: [genomicDataColorScheme]
        }];
        this.applyShareDBOperation(op_1);
      }

      this.editor.updateGenomicDataColorSchemeHandler({
        li: genomicDataColorScheme
      });

      for (var _h = 0, _j = Object.keys(genomicDataMap); _h < _j.length; _h++) {
        var key_g = _j[_h];
        this.editor.genomicDataOverlayManager.genomicDataMap[key_g] = genomicDataMap[key_g];
      }

      for (var _k = 0, _l = Object.keys(groupedGenomicDataMap); _k < _l.length; _k++) {
        var key_g = _l[_k];
        this.editor.genomicDataOverlayManager.groupedGenomicDataMap[key_g] = groupedGenomicDataMap[key_g];
        var data = groupedGenomicDataMap[key_g];

        if (data.length !== 1) {
          console.log("Grouped genomic data expected to be of length 1 (from sync)");
        }

        data.forEach(function (profileId) {
          _this.editor.addToProfiles(profileId);
        });
      }

      for (var _m = 0, _o = Object.keys(visDataMap); _m < _o.length; _m++) {
        var key_g = _o[_m];
        this.editor.genomicDataOverlayManager.visibleGenomicDataMapByType[key_g] = visDataMap[key_g];
        this.editor.adjustVisibilityShareDB(key_g, visDataMap[key_g]);
      } //Does not seem necessary for not but just for sake of completeness


      this.editor.genomicDataOverlayManager.groupedGenomicDataCount = groupedGenomicDataCount;
      this.editor.genomicDataOverlayManager.showGenomicData(function (node) {
        _this.editor.resizeElements(node);
      });
      this.editor.genomicDataOverlayManager.notifyObservers();
      this.editor.cy.style().update();
      this.editor.cy.fit(50);
    }
  });
  ;
  /*
   * Initialize event listeners for any operation coming from shareDB
   *
   */

  Object.defineProperty(ShareDBManager.prototype, "initSharedDocEventHandlers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var self = this; //Setup event handlers for maps

      var nodeAddRemoveHandler = function (op) {
        self.editor.shareDBNodeAddRemoveEventCallBack(op);
      };

      var edgeAddRemoveHandler = function (op) {
        self.editor.shareDBEdgeAddRemoveEventCallBack(op);
      };

      var genomicDataAddRemoveHandler = function (op) {
        self.editor.shareDBGenomicDataHandler(op);
      };

      var genomicDataVisibilityChangeHandler = function (op) {
        self.editor.shareDBGenomicDataVisibilityHandler(op);
        self.checkShareDBGenomicData();
      };

      var genomicDataGroupChangeHandler = function (op) {
        self.editor.shareDBGenomicDataGroupChangeHandler(op);
      };

      var updateElementHandler = function (op) {
        self.editor.updateElementCallback(op);
      };

      var updateLayoutPropsHandler = function (op) {
        self.editor.updateLayoutPropertiesCallback(op);
      };

      var updateGlobalOptionsHandler = function (op) {
        self.editor.changeGlobalOptions(op);
      };

      var updateGenomicDataColorSchemeHandler = function (op) {
        self.editor.updateGenomicDataColorSchemeHandler(op);
      }; //Event listeners for maps


      this.doc.on('op', function (op, source) {
        for (var i = 0; i < op.length; i++) {
          var handleOp = op[i];
          var path = handleOp.p[0];
          var isReplaceEvent = self.isShareDBReplaceEvent(handleOp);

          if (!isReplaceEvent) {
            if (path === self.NODEMAP_NAME) {
              nodeAddRemoveHandler(handleOp);
            } else if (path === self.EDGEMAP_NAME) {
              edgeAddRemoveHandler(handleOp);
            } else if (path === self.GENOMIC_DATA_MAP_NAME) {
              genomicDataAddRemoveHandler(handleOp);
            } else if (path === self.VISIBLE_GENOMIC_DATA_MAP_NAME) {
              genomicDataVisibilityChangeHandler(handleOp);
            } else if (path === self.GENOMIC_DATA_GROUP_NAME) {
              genomicDataGroupChangeHandler(handleOp);
            }
          } else {
            //Then it is update event
            if (path === self.NODEMAP_NAME) {
              updateElementHandler(handleOp);
            } else if (path === self.EDGEMAP_NAME) {
              updateElementHandler(handleOp);
            } else if (path === self.LAYOUT_PROPS_NAME) {
              updateLayoutPropsHandler(handleOp);
            } else if (path === self.GLOBAL_OPTS_NAME) {
              updateGlobalOptionsHandler(handleOp);
            } else if (path === self.GENOMIC_DATA_COLOR_SCHEME_NAME) {
              updateGenomicDataColorSchemeHandler(handleOp);
            }
          }
        }
      });
    }
  });
  ;
  /*
   * Make sure that genomic cloud data is syncronized
   */

  Object.defineProperty(ShareDBManager.prototype, "checkShareDBGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var self = this;
      var genomicDataMap = self.doc.data[this.GENOMIC_DATA_MAP_NAME];
      var visDataMap = self.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
      var groupedGenomicDataMap = self.doc.data[this.GENOMIC_DATA_GROUP_NAME];
      var groupedGenomicDataCount = self.doc.data[this.GENOMIC_DATA_GROUP_COUNT];

      for (var key in genomicDataMap) {
        this.editor.genomicDataOverlayManager.genomicDataMap[key] = genomicDataMap[key];
      }

      for (var key in visDataMap) {
        this.editor.genomicDataOverlayManager.visibleGenomicDataMapByType[key] = visDataMap[key];
      }

      for (var key in groupedGenomicDataMap) {
        this.editor.genomicDataOverlayManager.groupedGenomicDataMap[key] = groupedGenomicDataMap[key];
      }

      this.editor.genomicDataOverlayManager.groupedGenomicDataCount = groupedGenomicDataCount;
      this.editor.genomicDataOverlayManager.showGenomicData(function (node) {
        _this.editor.resizeElements(node);
      });
      this.editor.genomicDataOverlayManager.notifyObservers();
    }
  });
  ;
  /*
   * Gets the first empty index from the shared document
   * genomic data group count and increments counter by 1
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "getEmptyGroupID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var returnCount = this.doc.data[this.GENOMIC_DATA_GROUP_COUNT];
      this.incrementShareDBGroupCount();
      return returnCount;
    }
  });
  ;
  /*
   * Gets the first empty index from the shared document
   * Initializes & inserts a new genomic data
   * by group id or group name
   *
  */

  Object.defineProperty(ShareDBManager.prototype, "groupGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cancerNames, inGroupId) {
      var genomicGroupMap = this.doc.data[this.GENOMIC_DATA_GROUP_NAME];
      var genomicVisMap = this.doc.data[this.VISIBLE_GENOMIC_DATA_MAP_NAME];
      var groupID = "" + inGroupId;
      var currentGroup = [];
      if (genomicGroupMap.hasOwnProperty(groupID)) currentGroup = external_lodash_default.a.clone(genomicGroupMap[groupID]);

      for (var i in cancerNames) {
        if (!genomicVisMap.hasOwnProperty(cancerNames[i])) currentGroup.push(cancerNames[i]);
      } // If group id already exists change existing object


      if (genomicGroupMap.hasOwnProperty(groupID)) {
        this.updateShareDBObject(this.GENOMIC_DATA_GROUP_NAME, groupID, currentGroup);
      } else {
        //Insert new group
        this.insertShareDBObject(this.GENOMIC_DATA_GROUP_NAME, groupID, currentGroup);
      }
    }
  });
  ; //Clears genomic data on shared document

  Object.defineProperty(ShareDBManager.prototype, "clearGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.clearShareDBGenomicData();
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (geneData) {
      var genomicMap = this.doc.data[this.GENOMIC_DATA_MAP_NAME]; //Iterate over all genmoic data which is mapped by geneSymbol to list of alteration values
      //that are also mapped by cancer name and associated value

      var ops = [];

      for (var geneSymbol in geneData) {
        var genomicMapEntry = {};
        if (genomicMap.hasOwnProperty(geneSymbol)) genomicMapEntry = external_lodash_default.a.clone(genomicMap[geneSymbol]);

        for (var cancerType in geneData[geneSymbol]) {
          if (!(cancerType in genomicMapEntry)) genomicMapEntry[cancerType] = parseInt(geneData[geneSymbol][cancerType]).toFixed(2);
        }

        ops.push({
          p: [this.GENOMIC_DATA_MAP_NAME, geneSymbol],
          oi: genomicMapEntry
        });
      }

      this.applyShareDBOperation(ops);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addGenomicVisibilityData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (visMap) {
      var ops = [];

      for (var cancerStudy in visMap) {
        ops.push({
          p: [this.VISIBLE_GENOMIC_DATA_MAP_NAME, cancerStudy],
          oi: visMap[cancerStudy]
        });
      }

      this.applyShareDBOperation(ops);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeVisibility", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodesToHide, isHidden) {
      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      nodesToHide.forEach(function (ele) {
        var nodeID = ele.id();

        if (nodeMap.hasOwnProperty(nodeID)) {
          var realTimeNode = nodeMap[nodeID];
          realTimeNode.isHidden = isHidden;
          self.updateShareDBObject(self.NODEMAP_NAME, nodeID, realTimeNode);
        }
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeHighlight", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (elementsToHighlight, isHighlighted) {
      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      var edgeMap = self.doc.data[this.EDGEMAP_NAME];
      elementsToHighlight.forEach(function (ele) {
        var elementID = ele.id();

        if (nodeMap.hasOwnProperty(elementID)) {
          var realTimeNode = nodeMap[elementID];
          realTimeNode.isHighlighted = isHighlighted;
          self.updateShareDBObject(self.NODEMAP_NAME, elementID, realTimeNode);
        }

        if (edgeMap.hasOwnProperty(elementID)) {
          var realTimeEdge = edgeMap[elementID];
          realTimeEdge.isHighlighted = isHighlighted;
          self.updateShareDBObject(self.EDGEMAP_NAME, elementID, realTimeEdge);
        }
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addNewNode", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeData, posData) {
      var realTimeGeneratedID = this.getCustomObjId();
      var params = {
        name: nodeData.name,
        type: nodeData.type,
        id: realTimeGeneratedID,
        parent: nodeData.parent,
        w: nodeData.w,
        h: nodeData.h,
        minWidth: nodeData.minWidth,
        minWidthBiasLeft: nodeData.minWidthBiasLeft,
        minWidthBiasRight: nodeData.minWidthBiasRight,
        minHeight: nodeData.minHeight,
        minHeightBiasTop: nodeData.minHeightBiasTop,
        minHeightBiasBottom: nodeData.minHeightBiasBottom
      }; //Ensures new node is compatible with the other nodes

      var newNode = this.nodeInitializer(params);

      if (posData) {
        newNode.x = posData.x;
        newNode.y = posData.y;
      }

      this.insertShareDBObject(this.NODEMAP_NAME, realTimeGeneratedID, newNode);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addNewEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeData) {
      var realTimeGeneratedID = this.getCustomObjId();
      var params = {
        type: edgeData.type,
        id: realTimeGeneratedID,
        source: edgeData.source,
        target: edgeData.target,
        pubmedIDs: edgeData.pubmedIDs,
        name: edgeData.name,
        anchorPoints: edgeData.anchorPoints
      }; //Ensures new edge is compatible with the other edge

      var newEdge = this.edgeInitializer(params);
      this.insertShareDBObject(this.EDGEMAP_NAME, realTimeGeneratedID, newEdge);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "removeElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (elementID) {
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];
      var nodeMap = this.doc.data[this.NODEMAP_NAME];

      if (nodeMap.hasOwnProperty(elementID)) {
        this.deleteShareDBObject(this.NODEMAP_NAME, elementID);
      } else if (edgeMap.hasOwnProperty(elementID)) {
        this.deleteShareDBObject(this.EDGEMAP_NAME, elementID);
      } else {
        throw new Error('Element does not exist in Real Time');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "moveElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var elementID = ele.id();
      var newPos = ele.position();

      if (nodeMap.hasOwnProperty(elementID)) {
        var tmpNode = nodeMap[elementID];
        tmpNode.x = newPos.x;
        tmpNode.y = newPos.y;
        this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
      } else {
        throw new Error('Element does not exist in nodes !!! ');
      }
    }
  });
  ; //This function is used for movements of all selected elements wrt alignment selected

  Object.defineProperty(ShareDBManager.prototype, "changeElementsPositionByAlignment", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (coll) {
      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      coll.forEach(function (ele) {
        var elementID = ele.node.id();

        if (nodeMap.hasOwnProperty(elementID)) {
          var tmpNode = nodeMap[elementID];
          tmpNode.x = ele.nextPosition.x;
          tmpNode.y = ele.nextPosition.y;
          self.updateShareDBObject(self.NODEMAP_NAME, elementID, tmpNode);
        } else {
          throw new Error('Element does not exist in nodes !!! ');
        }
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "resizeElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, previousWidth, previousHeight) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var elementID = ele.id();
      var newWidth = ele.width();
      var newHeight = ele.height();
      var currentX = ele.position('x');
      var currentY = ele.position('y');

      if (nodeMap.hasOwnProperty(elementID)) {
        var tmpNode = nodeMap[elementID];
        tmpNode.x = currentX + newWidth - previousWidth;
        tmpNode.y = currentY + newHeight - previousHeight;
        tmpNode.w = newWidth;
        tmpNode.h = newHeight;
        this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
      } else {
        throw new Error('Element does not exist in nodes !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "setSizeOfElement", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, newWidth, newHeight) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var elementID = ele.id();

      if (nodeMap.hasOwnProperty(elementID)) {
        var tmpNode = nodeMap[elementID];
        tmpNode.w = newWidth;
        tmpNode.h = newHeight;
        this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
      } else {
        throw new Error('Element does not exist in nodes !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "resizeCompound", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, minWidth, minWidthBiasLeft, minWidthBiasRight, minHeight, minHeightBiasTop, minHeightBiasBottom) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var elementID = ele.id();
      var currentX = ele.position('x');
      var currentY = ele.position('y');

      if (nodeMap.hasOwnProperty(elementID)) {
        var tmpNode = nodeMap[elementID];
        tmpNode.x = currentX;
        tmpNode.y = currentY;
        tmpNode.minWidth = minWidth;
        tmpNode.minWidthBiasLeft = minWidthBiasLeft;
        tmpNode.minWidthBiasRight = minWidthBiasRight;
        tmpNode.minHeight = minHeight;
        tmpNode.minHeightBiasTop = minHeightBiasTop;
        tmpNode.minHeightBiasBottom = minHeightBiasBottom;
        this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
      } else {
        throw new Error('Element does not exist in nodes !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeNodePositionsShareDB", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      var self = this;
      var nodeMap = self.doc.data[self.NODEMAP_NAME];
      nodes.forEach(function (ele) {
        var nodeID = ele.id();

        if (nodeMap.hasOwnProperty(nodeID)) {
          var realTimeNode = nodeMap[nodeID];
          realTimeNode.x = ele.position('x');
          realTimeNode.y = ele.position('y');
          self.updateShareDBObject(self.NODEMAP_NAME, nodeID, realTimeNode);
        } else {
          throw new Error('Element does not exist in nodes !!! ');
        }
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeHighlightInvalidGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodeIDs, isInvalid) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME]; //TODO check compound operation inside or outside of for ?

      for (var i in nodeIDs) {
        var nodeID = nodeIDs[i];

        if (nodeMap.hasOwnProperty(nodeID)) {
          var collaborativeNode = nodeMap[nodeID];
          collaborativeNode.isInvalidGene = isInvalid;
          this.updateShareDBObject(this.NODEMAP_NAME, nodeID, collaborativeNode);
        }
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "addPubmedIDs", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeID, pubmedIDs) {
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];

      if (edgeMap.hasOwnProperty(edgeID)) {
        var tmpEdge = edgeMap[edgeID];
        var nonDuplicateArray = [];

        for (var i = 0; i < pubmedIDs.length; i++) {
          if (tmpEdge.pubmedIDs.indexOf(pubmedIDs[i]) < 0) {
            nonDuplicateArray.push(pubmedIDs[i]);
          }
        }

        tmpEdge.pubmedIDs = tmpEdge.pubmedIDs.concat(nonDuplicateArray);
        this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
      } else {
        throw new Error('Edge does not exist in real time !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "removePubmedID", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeID, pubmedIDs) {
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];

      if (edgeMap.hasOwnProperty(edgeID)) {
        var tmpEdge = edgeMap[edgeID];
        var removedIndices = [];

        for (var i = 0; i < pubmedIDs.length; i++) {
          var tmpID = pubmedIDs[i];
          var index = tmpEdge.pubmedIDs.indexOf(tmpID);

          if (index >= 0) {
            removedIndices.push(index);
          }
        }

        for (var i = 0; i < removedIndices.length; i++) {
          tmpEdge.pubmedIDs.remove(removedIndices[i]);
        }

        this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
      } else {
        throw new Error('Edge does not exist in real time !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "updateEdgeAnchorPoints", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeID, anchorPointsArray, edgeCurveStyle) {
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];

      if (edgeMap.hasOwnProperty(edgeID)) {
        var tmpEdge = edgeMap[edgeID];
        tmpEdge.anchorPoints = anchorPointsArray;
        tmpEdge.edgeCurveStyle = edgeCurveStyle;
        this.updateShareDBObject(this.EDGEMAP_NAME, edgeID, tmpEdge);
      } else {
        throw new Error('Edge does not exist in real time !!! ');
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeName", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (ele, newName) {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];
      var elementID = ele.id();

      if (ele.isNode()) {
        if (nodeMap.hasOwnProperty(elementID)) {
          var tmpNode = nodeMap[elementID];
          tmpNode.name = newName;
          this.updateShareDBObject(this.NODEMAP_NAME, elementID, tmpNode);
        } else {
          throw new Error('Element does not exist in nodes !!! ');
        }
      } else {
        if (edgeMap.hasOwnProperty(elementID)) {
          var tmpEdge = edgeMap[elementID];
          tmpEdge.name = newName;
          this.updateShareDBObject(this.EDGEMAP_NAME, elementID, tmpEdge);
        } else {
          throw new Error('Element does not exist in edges !!! ');
        }
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "changeParent", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (rootNode, newParentId, connectedEdges) {
      var self = this;
      var nodeLookupTable = {};

      function traverseFromRoot(rootNode, parId) {
        /*
         remove outermost node,
         create new real time node with given parentId,
         pass id of this real time node to children,
         repeat in a recursive manner
         after that restore the edges that dissapear by removed nodes
         during change parent
         */
        var refNode = rootNode.nodeRef;
        var children = rootNode.children;
        var newParentId = parId;

        if (refNode) {
          var refNodeId = refNode.id();
          var nodeData = refNode.data();
          var posData = refNode.position();
          var currentWidth = refNode.data('w');
          var currentHeight = refNode.data('h');
          var newNodeData = {
            name: nodeData.name,
            type: nodeData.type,
            x: posData.x,
            y: posData.y,
            w: currentWidth,
            h: currentHeight,
            parent: -1
          };

          if (parId) {
            newNodeData.parent = parId;
          }

          self.removeElement(refNodeId);
          var newNode = self.nodeInitializer(newNodeData);
          var newNodeId = newNode.id;
          self.insertShareDBObject(self.NODEMAP_NAME, newNodeId, newNode);
          newParentId = newNodeId;
          nodeLookupTable[refNodeId] = newNodeId;
        }

        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
          var childNode = children_1[_i];
          traverseFromRoot(childNode, newParentId);
        }
      } //Begin traversing from given root node


      traverseFromRoot(rootNode, newParentId); //Restore edges that dissapear by the change parent operation
      //TODO compound operations ?

      connectedEdges.forEach(function (edge, index) {
        var edgeData = edge.data();
        self.removeElement(edge.id());
        var newSource = nodeLookupTable[edgeData.source];
        var newTarget = nodeLookupTable[edgeData.target];

        if (newSource) {
          edgeData.source = newSource;
        }

        if (newTarget) {
          edgeData.target = newTarget;
        }

        self.addNewEdge(edgeData);
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "removeAllElements", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var nodeMap = this.doc.data[this.NODEMAP_NAME];
      var edgeMap = this.doc.data[this.EDGEMAP_NAME];
      var ops = []; //Remove all real time nodes

      for (var _i = 0, _a = Object.keys(nodeMap); _i < _a.length; _i++) {
        var key = _a[_i];
        ops.push({
          p: [this.NODEMAP_NAME, key],
          od: nodeMap[key]
        });
      } //Remove all real time edges


      for (var _b = 0, _c = Object.keys(edgeMap); _b < _c.length; _b++) {
        var key = _c[_b];
        ops.push({
          p: [this.EDGEMAP_NAME, key],
          od: edgeMap[key]
        });
      }

      this.applyShareDBOperation(ops);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "loadGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      var self = this;
      this.removeAllElements(); //Function that traverses graph tree recursively.

      var oldIdNewIdMap = {};

      function traverseTree(node, newParentId) {
        node.data.x = node.position.x;
        node.data.y = node.position.y; //Update parent !

        if (newParentId) {
          var parent = node.data.parent;

          if (parent) {
            node.data.parent = newParentId;
          }
        } //Create new real time node


        var newNodeId = self.getCustomObjId();
        var params = node.data;
        oldIdNewIdMap[params.id] = newNodeId;
        var newNode = self.nodeInitializer(params);
        newNode.id = newNodeId;
        self.insertShareDBObject(self.NODEMAP_NAME, newNodeId, newNode); //If node has children recursively traverse sub graphs and update parent field of child nodes

        if (node.children.length > 0) {
          for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var tmpNode = _a[_i];
            traverseTree(tmpNode, newNodeId);
          }
        }
      } //Create graph hierarchy from given list of flat nodes


      var tree = utils_GraphUtilities.createGraphHierarchyRealTime(nodes); //Traverse from root nodes of tree

      for (var _i = 0, tree_1 = tree; _i < tree_1.length; _i++) {
        var rootLevelNode = tree_1[_i];
        traverseTree(rootLevelNode, undefined);
      }
      /*
        Create real time edges, update the source and target fields, since new ids will be generated for the nodes in
        real time
      */


      for (var _a = 0, edges_1 = edges; _a < edges_1.length; _a++) {
        var edge = edges_1[_a];
        edge.data.source = oldIdNewIdMap[edge.data.source];
        edge.data.target = oldIdNewIdMap[edge.data.target];
        var edgeCurveStyle = "bezier";

        if (edge.data.bendPointPositions && edge.data.bendPointPositions.length > 0) {
          edge.data['anchorPoints'] = edge.data['bendPointPositions'];
          delete edge.data['bendPointPositions'];
          edgeCurveStyle = "segments";
        } else if (edge.data.controlPointPositions && edge.data.controlPointPositions.length > 0) {
          edge.data['anchorPoints'] = edge.data['controlPointPositions'];
          delete edge.data['controlPointPositions'];
          edgeCurveStyle = "unbundled-bezier";
        }

        var params = edge.data;
        params.edgeCurveStyle = edgeCurveStyle;
        var newEdgeID = self.getCustomObjId();
        params.id = newEdgeID;
        var newEdge = self.edgeInitializer(params);
        self.insertShareDBObject(self.EDGEMAP_NAME, newEdgeID, newEdge);
      }
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "mergeGraph", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes, edges) {
      var self = this;
      var nodeMap = self.doc.data[this.NODEMAP_NAME];
      var realTimeNodeMap = nodeMap;
      var realTimeNodeLookupTable = {};
      var realTimeNodeNameLookupTable = {};
      var oldIdNewIdMap = {}; //Create lookup table for real time nodes
      //items are stored in an array in the resulting array of nodeMap.items()
      // [0] - id, [1] - object

      for (var i in realTimeNodeMap) {
        var nodeMapItem = realTimeNodeMap[i];
        realTimeNodeLookupTable[nodeMapItem.id] = nodeMapItem;
        realTimeNodeNameLookupTable[nodeMapItem.name] = nodeMapItem;
      } //Recursive traverse definition


      function traverseTree(node, newParentId) {
        //Search by name !
        //We have not found a node that exist in the graph, add normally
        if (!(node.data.name in realTimeNodeNameLookupTable)) {
          node.data.x = node.position.x;
          node.data.y = node.position.y; //Update parent !

          if (newParentId) {
            var parent = node.data.parent;

            if (parent) {
              node.data.parent = newParentId;
            }
          } //Create new real time node


          var newNodeId = self.getCustomObjId();
          oldIdNewIdMap[node.data.id] = newNodeId;
          var newNode = self.nodeInitializer(node.data);
          newNode.id = newNodeId;
          self.insertShareDBObject(self.NODEMAP_NAME, newNodeId, newNode); //If node has children recursively traverse sub graphs and update parent field of child nodes

          if (node.children.length > 0) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
              var tmpNode = _a[_i];
              traverseTree(tmpNode, newNodeId);
            }
          }
        } // At this point there exists another node in the graph with the same name as 'node'
        // we need to update parent field of children of this node if any
        else {
            var sameNameNode = realTimeNodeNameLookupTable[node.data.name];
            var sameNodeId = sameNameNode.id;
            oldIdNewIdMap[node.data.id] = sameNodeId; //If node has children recursively traverse sub graphs and update parent field of child nodes

            if (node.children.length > 0) {
              for (var _b = 0, _c = node.children; _b < _c.length; _b++) {
                var tmpNode = _c[_b];
                traverseTree(tmpNode, sameNodeId);
              }
            }
          }
      } //Traverse from root nodes of tree


      var tree = utils_GraphUtilities.createGraphHierarchyRealTime(nodes);

      for (var _i = 0, tree_2 = tree; _i < tree_2.length; _i++) {
        var rootLevelNode = tree_2[_i];
        traverseTree(rootLevelNode, rootLevelNode.data.id);
      }
      /*
       Create real time edges, update the source and target fields, since new ids will be generated for the nodes in
       real time
       */


      var ops = [];

      for (var _a = 0, edges_2 = edges; _a < edges_2.length; _a++) {
        var edge = edges_2[_a];
        edge.data.source = oldIdNewIdMap[edge.data.source];
        edge.data.target = oldIdNewIdMap[edge.data.target];
        var newEdge = self.edgeInitializer(edge.data);
        var newEdgeID = this.getCustomObjId();
        newEdge.id = newEdgeID;
        ops.push({
          p: [self.EDGEMAP_NAME, newEdgeID],
          oi: newEdge
        });
      }

      self.applyShareDBOperation(ops);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "updateLayoutProperties", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newLayoutProperties) {
      this.updateShareDBLayoutProperties(newLayoutProperties);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "updateGlobalOptions", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newOptions) {
      this.updateShareDBGlobalOptions(newOptions);
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "updateGenomicDataOverlayColorScheme", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (newColorScheme) {
      this.updateShareDBGenomicDataOverlayColorScheme(newColorScheme);
    }
  });
  /*
   * Creates graph hierarchy from given flat list of nodes list, nodes list is assumed to have parent-child
   * relationship by a field 'parent' which represents to the id of the parent node This function is specific
   * for the needs of TCGA Pathway Curation Tool 04/07/2016
   *
   * @param nodes {array}: flat list of nodes of a graph
   * @return {array}: Tree representation in array, entries are root level nodes. node.children gives children nodes
   * of each node in the returned array.
   * a node in corresponding level.
   *
   * */

  Object.defineProperty(ShareDBManager.prototype, "createGraphHierarchy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nodes) {
      //Some arrays and maps for creating graph hierarchy
      var tree = [];
      var mappedArr = {}; // First map the nodes of the array to an object -> create a hash table.

      for (var i = 0, len = nodes.length; i < len; i++) {
        var arrElem = nodes[i];
        mappedArr[arrElem.data.id] = arrElem;
        mappedArr[arrElem.data.id].children = [];
      }

      for (var _i = 0, _a = Object.keys(mappedArr); _i < _a.length; _i++) {
        var id = _a[_i];
        var mappedElem = mappedArr[id]; // If the element is not at the root level, add it to its parent array of children.

        if (mappedElem.data.parent) {
          mappedArr[mappedElem.data.parent].children.push(mappedElem);
        } // If the element is at the root level, add it to first level elements array.
        else {
            tree.push(mappedElem);
          }
      }

      return tree;
    }
  });
  ; //Makes sure that edge is compatible with edges in shared document

  Object.defineProperty(ShareDBManager.prototype, "edgeInitializer", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      var edge = {};
      edge.id = params.id || this.getCustomObjId();
      edge.type = params.type || "undefined";
      edge.source = params.source || "undefined";
      edge.target = params.target || "undefined";
      edge.name = params.name || "";
      edge.isHighlighted = params.isHighlighted || false;
      edge.anchorPoints = params.anchorPoints || [];
      edge.edgeCurveStyle = params.edgeCurveStyle || "bezier";

      if (params.pubmedIDs) {
        if (edge.pubmedIDs == undefined) {
          edge.pubmedIDs = [];
        }

        if (params.pubmedIDs.length > 0) edge.pubmedIDs.push(params.pubmedIDs);
      } else {
        edge.pubmedIDs = [];
      }

      if (params.anchorPoints) {
        if (edge.anchorPoints == undefined) {
          edge.anchorPoints = [];
        } // legacy workaround


        if (Array.isArray(params.anchorPoints[0])) {
          edge.anchorPoints = params.anchorPoints[0];
        } else {
          edge.anchorPoints = params.anchorPoints;
        }
      } else {
        edge.anchorPoints = [];
      }

      return edge;
    }
  });
  ; //Makes sure that node is compatible with nodes in shared document

  Object.defineProperty(ShareDBManager.prototype, "nodeInitializer", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      var node = {};
      node.id = params.id || this.getCustomObjId();
      node.name = params.name || "undefined";
      node.type = params.type || "undefined";
      node.parent = params.parent || "undefined";
      node.x = params.x || "undefined";
      node.y = params.y || "undefined";
      node.w = params.w || "undefined";
      node.h = params.h || "undefined";
      node.minWidth = params.minWidth || 0;
      node.minWidthBiasLeft = params.minWidth || 0;
      node.minWidthBiasRight = params.minWidth || 0;
      node.minHeight = params.minWidth || 0;
      node.minHeightBiasTop = params.minWidth || 0;
      node.minHeightBiasBottom = params.minWidth || 0;
      node.isHidden = params.isHidden || false;
      node.isInvalidGene = params.isInvalidGene || false;
      node.isHighlighted = params.isHighlighted || false;
      return node;
    }
  });
  ; //Makes sure that layout properties is compatible with layout properties in shared document

  Object.defineProperty(ShareDBManager.prototype, "layoutPropertiesInitializer", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      var layoutProperties = {};
      layoutProperties.name = params.name || 'undefined';
      layoutProperties.nodeRepulsion = params.nodeRepulsion || 'undefined'; // this.nodeOverlap = params.nodeOverlap || 'undefined';

      layoutProperties.idealEdgeLength = params.idealEdgeLength || 'undefined';
      layoutProperties.edgeElasticity = params.edgeElasticity || 'undefined';
      layoutProperties.nestingFactor = params.nestingFactor || 'undefined';
      layoutProperties.gravity = params.gravity || 'undefined';
      layoutProperties.numIter = params.numIter || 'undefined';
      layoutProperties.tile = params.tile || 'undefined';
      layoutProperties.animate = params.animate || 'undefined';
      layoutProperties.randomize = params.randomize || false;
      layoutProperties.gravityRangeCompound = params.gravityRangeCompound || 'undefined';
      layoutProperties.gravityCompound = params.gravityCompound || 'undefined';
      layoutProperties.gravityRange = params.gravityRange || 'undefined';
      layoutProperties.tilingPaddingVertical = params.tilingPaddingVertical || 'undefined';
      layoutProperties.tilingPaddingHorizontal = params.tilingPaddingHorizontal || 'undefined';
      layoutProperties.initialEnergyOnIncremental = params.initialEnergyOnIncremental || 'undefined';
      return layoutProperties;
    }
  });
  ; //Makes sure that global options is compatible with global options in shared document

  Object.defineProperty(ShareDBManager.prototype, "globalOptionsInitializer", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (params) {
      var globalOptions = {};
      globalOptions.zoomLevel = params.zoomLevel || 'undefined';
      globalOptions.panLevel = params.panLevel || 'undefined';
      return globalOptions;
    }
  });
  ; //Create unique ID for elements

  Object.defineProperty(ShareDBManager.prototype, "getCustomObjId", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      // see http://stackoverflow.com/a/8809472
      // we need to take care of our own IDs because the ones automatically generated by cytoscape (also UUID)
      // don't comply with xsd:SID type that must not begin with a number
      // Public Domain/MIT
      var d = Date.now();

      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
      }

      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
    }
  });
  ;
  Object.defineProperty(ShareDBManager.prototype, "getParam", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (urlParam) {
      var regExp = new RegExp(urlParam + '=(.*?)($|&)', 'g');
      var match = window.location.search.match(regExp);

      if (match && match.length) {
        match = match[0];
        match = match.replace(urlParam + '=', '').replace('&', '');
      } else {
        match = null;
      }

      return match;
    }
  });
  ;
  return ShareDBManager;
}();

/* harmony default export */ var managers_ShareDBManager = (ShareDBManager_ShareDBManager);
// EXTERNAL MODULE: external "jquery-ui-dist/jquery-ui"
var jquery_ui_ = __webpack_require__(63);

// CONCATENATED MODULE: ./src/utils/DragDropNodeAddPlugin.tsx




var DragDropNodeAddPlugin_DragDropNodeAddPlugin =
/** @class */
function () {
  function DragDropNodeAddPlugin(editor, cy, pathwayHandler) {
    Object.defineProperty(this, "pathwayHandler", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.editor = editor;
    this.cy = cy;
    this.pathwayHandler = pathwayHandler;
    this.initNodeAdd();
  } //TODO JQUERY IS IGNORED


  Object.defineProperty(DragDropNodeAddPlugin.prototype, "initNodeAdd", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var nodeAddClass = this;
      var defaults = {
        height: 30,
        width: 30,
        padding: 5,
        backgroundColorDiv: '#fbfbfb',
        borderColorDiv: '#fff',
        borderWidthDiv: '0px',
        borderRadiusDiv: '5px',
        icon: '',
        nodeParams: function () {
          // return element object to be passed to cy.add() for adding node
          return {};
        }
      };
      var self = this; // @ts-ignore

      external_jquery_default.a.fn.cytoscapeNodeadd = function (params) {
        var options = external_jquery_default.a.extend(true, {}, defaults, params);
        var fn = params;
        var functions = {
          destroy: function () {
            var $this = external_jquery_default()(this);
            $this.find(".ui-cytoscape-nodeadd").remove();
          },
          init: function () {
            return external_jquery_default()(this).each(function () {
              var components = options.components;

              for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
                var component = components_1[_i];
                var dragContainer = component.container; //var explanationText = component.explanationText;

                var $nodeadd = external_jquery_default()('<div class="ui-cytoscape-nodeadd"></div>');
                dragContainer.append($nodeadd);
                var $nodeDragHandle = external_jquery_default()('<div class="ui-cytoscape-nodeadd-nodediv"> \
                                                <span id="ui-cytoscape-nodeadd-icon" class="draggable" nodeType="' + component.nodeType + '">\
                                                  <img src="' + component.icon + '"</img>\
                                                </span>\
                                              </div>');
                $nodeadd.append($nodeDragHandle);
                $nodeDragHandle.bind("mousedown", function (e) {
                  e.stopPropagation(); // don't trigger dragging of nodeadd

                  e.preventDefault(); // don't cause text selection
                }); //Setup UI

                dragContainer.find(".ui-cytoscape-nodeadd-nodediv").css({
                  background: options.backgroundColorDiv,
                  border: options.borderWidthDiv + ' solid ' + options.borderColorDiv,
                  'border-radius': options.borderRadiusDiv
                }); //Init Draggable

                dragContainer.find("#ui-cytoscape-nodeadd-icon").draggable({
                  helper: "clone",
                  cursor: "pointer"
                });
              } // @ts-ignore TODO: AMENDMENT ATTENTION


              var $container = external_jquery_default()(this); //Init Droppable
              // @ts-ignore TODO: Droppable is ignored

              $container.droppable({
                activeClass: "ui-state-highlight",
                // accept: "#ui-cytoscape-nodeadd-icon",
                drop: function (event, ui) {
                  $container.removeClass("ui-state-highlight");
                  var currentOffset = $container.offset();
                  var relX = event.pageX - currentOffset.left;
                  var relY = event.pageY - currentOffset.top;
                  var nodeType = external_jquery_default()(ui.helper).attr('nodeType').toUpperCase();
                  var cy = nodeAddClass.cy; //Hold a map for parents and candidate parent nodes for this addition

                  var nodeMap = {};
                  var parentMap = {}; //Loop through nodes for hit testing about drag position on canvas

                  cy.nodes().forEach(function (node) {
                    var nodeBbox = node.renderedBoundingBox(); //Rectangle point test

                    if (relX <= nodeBbox.x2 && relX >= nodeBbox.x1 && relY <= nodeBbox.y2 && relY >= nodeBbox.y1 && node.data().type != 'GENE') {
                      //If node has a children put an entry to the parentMap
                      if (node.children().length > 0) {
                        parentMap[node.id()] = true;
                      } //If parent of this node is already added to the node map remove it, since our candidate is in deeper level !


                      if (parentMap[node._private.data.parent]) {
                        delete nodeMap[node._private.data.parent];
                      } //Add an entry to node map


                      nodeMap[node.id()] = node;
                    }
                  }); //Check if any parent found, if so set parent field

                  var parent = nodeMap[Object.keys(nodeMap)[0]];
                  var nodeData = {
                    w: "0",
                    h: "100",
                    parent: 0,
                    type: nodeType,
                    name: 'New ' + external_jquery_default()(ui.helper).attr('nodeType')
                  };

                  if (parent) {
                    if (parent.data().type == "FAMILY" || parent.data().type == "COMPLEX") {
                      if (nodeType != "COMPARTMENT" && nodeType != "PROCESS") {
                        nodeData.parent = parent.id();
                      }
                    } else {
                      nodeData.parent = parent.id();
                    }
                  }

                  if (nodeType === "PROCESS") {
                    nodeData.w = "100";
                    nodeData.h = "35";
                  } else {
                    nodeData.w = "150";
                    nodeData.h = "52";
                  } //Adjust position according to the zoom level and pan !
                  //To set rendered position !!!
                  //TODO refactor this !


                  relX = relX / cy.zoom() + cy.extent().x1;
                  relY = relY / cy.zoom() + cy.extent().y1;
                  nodeAddClass.editor.addNode(nodeData, {
                    x: relX,
                    y: relY
                  });
                  self.pathwayHandler("Additional Pathway");
                }
              });
            });
          }
        };

        if (functions[fn]) {
          return functions[fn].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof fn == 'object' || !fn) {
          return functions.init.apply(this, arguments);
        } else {
          external_jquery_default.a.error("No such function `" + fn + "` for jquery.cytoscapenodeadd");
        }

        return external_jquery_default()(this);
      }; // @ts-ignore


      external_jquery_default.a.fn.cynodeadd = external_jquery_default.a.fn.cytoscapeNodeadd;

      try {
        /* Adding as an extension to the core functionality of cytoscape.js*/
        external_cytoscape_default()('core', 'nodeadd', function (options) {
          // @ts-ignore
          external_jquery_default()(this.container()).cytoscapeNodeadd(options);
        });
      } catch (err) {
        console.log(err);
      }
    }
  });
  return DragDropNodeAddPlugin;
}();

/* harmony default export */ var utils_DragDropNodeAddPlugin = (DragDropNodeAddPlugin_DragDropNodeAddPlugin);
// CONCATENATED MODULE: ./src/ui/CytoscapeArea.tsx
var CytoscapeArea_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var CytoscapeArea_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore








 // @ts-ignore

window.$ = external_jquery_default.a;

var edgeHandles = __webpack_require__(64);

var edgeEditing = __webpack_require__(65);

var fcose = __webpack_require__(66);

var nodeEditing = __webpack_require__(67);

var undoRedo = __webpack_require__(68);

var panzoom = __webpack_require__(69);

var styleSheet = __webpack_require__(70);

var panzoomOpts = __webpack_require__(71);

var CytoscapeArea_navigator = __webpack_require__(72);

var contextMenus = __webpack_require__(73);

var konva = __webpack_require__(74);

var viewUtilities = __webpack_require__(75);

var gridGuide = __webpack_require__(76);

var popper = __webpack_require__(77);

var layoutUtilities = __webpack_require__(78);

var CytoscapeArea_CytoscapeArea =
/** @class */
function (_super) {
  CytoscapeArea_extends(CytoscapeArea, _super);

  function CytoscapeArea(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "cyDiv", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "edgeAddingMode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "viewOperationsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "qtipManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "genomicDataExplorerView", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "pathwayDetailsView", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "viewUtilities", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isCollaborative", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isCbioPortal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "shareDBManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "cxtMenuManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "dragDropNodeAddManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "undoRedoManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "portalAccessor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isMountedFirst", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(_this, "eh", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "lastSelectedEdge", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    _this.isCollaborative = props.isCollaborative;
    _this.edgeAddingMode = 0;
    _this.isCbioPortal = props.isCbioPortal;
    return _this;
  }

  Object.defineProperty(CytoscapeArea.prototype, "componentWillUpdate", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (nextProps) {
      if (this.props.selectedPathway !== nextProps.selectedPathway) {
        this.getPathway(nextProps.selectedPathway);
      }
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "componentDidUpdate", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (prevProps) {
      if (this.isCbioPortal && prevProps.selectedPathway !== this.props.selectedPathway) {
        this.props.onPathwayChangeCompleted();
      }
    }
  }); // This method only opens pathways that are available in pathway.json. Namely, imported or merged pathways are not opened via this method.
  // Yet, they individually call parsing method.

  Object.defineProperty(CytoscapeArea.prototype, "getPathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (selectedPathway) {
      if (!selectedPathway || selectedPathway === '') return;
      var data = pathways[selectedPathway]; // It might be non-existent due to pathway being created using collaborative mode, or pathway loaded elsewhere (import vs.)

      if (!data) {
        return;
      } // TODO Problematic const data = pathways["../samples/BLCA-2014-RTK-RAS-PI(3)K-pathway.txt"];


      var parsedGraph = utils_SaveLoadUtility.parseGraph(data, true);
      var allEles = parsedGraph;
      this.editor.loadFile(allEles.nodes, allEles.edges);
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return external_react_default.a.createElement("div", {
        className: this.props.isCbioPortal ? "" : "cyContainer",
        style: {
          "border": "3px solid " + (this.isCbioPortal ? "#4389c0" : "#1abc9c")
        }
      }, external_react_default.a.createElement("div", {
        ref: this.cyDivHandler,
        id: "cy",
        style: {
          "height": this.isCbioPortal ? "800px" : "100%",
          "borderRadius": "6px",
          marginTop: "0px"
        }
      }), external_react_default.a.createElement("div", {
        className: "cytoscape-navigator-wrapper"
      }));
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "componentDidMount", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isMountedFirst) {
        this.init();
        this.isMountedFirst = false;
      }

      this.getPathway(this.props.selectedPathway);
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "cyDivHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (div) {
      this.cyDiv = div;
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "init", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      // Create portal accessor
      this.portalAccessor = new utils_CBioPortalAccessor(); // Initializes cytoscape

      this.initCyJS(); // Initialize cytoscape based handlers here

      this.initCyHandlers();
      this.initKeyboardHandlers();
      this.initUndoRedoFunctionality();
      this.initCBioPortalFunctionalities();
      this.placePanzoomAndOverlay(); //this.appManager = this;
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "placePanzoomAndOverlay", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      //TODO place navigator !!!
      var offset = 5; // @ts-ignore

      var topCy = external_jquery_default()(this.cyDiv).offset().top; //var bottomCy = $('.cyContainer').offset().bottom;
      // @ts-ignore

      var leftCy = external_jquery_default()(this.cyDiv).offset().left; //var rightCy = $('.cyContainer').offset().right;
      // @ts-ignore

      var heightCy = external_jquery_default()(this.cyDiv).outerHeight(); // @ts-ignore

      var widthCy = external_jquery_default()(this.cyDiv).outerWidth();
      var heightNavigator = external_jquery_default()('.cytoscape-navigator-wrapper').outerHeight();
      var widthNavigator = external_jquery_default()('.cytoscape-navigator-wrapper').outerWidth();

      if (!this.isCbioPortal) {
        external_jquery_default()('.cytoscape-navigator-wrapper').css('top', heightCy + topCy - heightNavigator - offset + 16);
        external_jquery_default()('.cytoscape-navigator-wrapper').css('left', widthCy + leftCy - widthNavigator - offset + 24 - 0.5 + 0.35);
      } else {
        external_jquery_default()('.cytoscape-navigator-wrapper').css('bottom', 10.5);
        external_jquery_default()('.cytoscape-navigator-wrapper').css('right', 0);
      }

      external_jquery_default()('.cytoscape-navigator-wrapper').css('z-index', 1039); //Relative is used so that its position depends on the below properties

      external_jquery_default()('.cy-panzoom').css('position', 'relative');
      external_jquery_default()('.cy-panzoom').css('top', 2);
      external_jquery_default()('.cy-panzoom').css('left', widthCy - 51);
      external_jquery_default()('.cy-panzoom').css('z-index', 1039); //Makes the width of panzoom container to 0

      external_jquery_default()('.cy-panzoom').css('width', 200);
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "getPathwayData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      return this.pathwayDetailsView.getPathwayData();
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initCyJS", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      try {
        panzoom(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        CytoscapeArea_navigator(external_cytoscape_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        gridGuide(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        undoRedo(external_cytoscape_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        contextMenus(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        nodeEditing(external_cytoscape_default.a, external_jquery_default.a, konva); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        edgeEditing(external_cytoscape_default.a, external_jquery_default.a, konva); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        viewUtilities(external_cytoscape_default.a, external_jquery_default.a); // register extension
      } catch (err) {
        console.log(err);
      }

      try {
        edgeHandles(external_cytoscape_default.a, external_jquery_default.a);
      } catch (err) {
        console.log(err);
      }

      try {
        popper(external_cytoscape_default.a);
      } catch (err) {
        console.log(err);
      }

      try {
        fcose(external_cytoscape_default.a);
      } catch (err) {
        console.log(err);
      }

      try {
        layoutUtilities(external_cytoscape_default.a);
      } catch (err) {
        console.log(err);
      }

      this.cy = external_cytoscape_default()({
        container: this.cyDiv,
        boxSelectionEnabled: true,
        autounselectify: false,
        wheelSensitivity: 0.1,
        style: styleSheet,
        textureOnViewport: false,
        motionBlur: true,
        layout: {
          name: 'preset'
        }
      });
      this.edgeAddingMode = 0; // var allEles = SaveLoadUtilities.parseGraph(sampleGraph);

      this.undoRedoManager = this.cy.undoRedo(); // Create Manager Classes

      this.shareDBManager = new managers_ShareDBManager(function () {
        var dbDoc = _this.shareDBManager.getDoc();
      });
      this.editor = new managers_EditorActionsManager(this.isCollaborative, this.shareDBManager, this.cy, this.isCbioPortal, this.undoRedoManager, this.portalAccessor, this.props.profiles, this.props.genomicDataOverlayColorScheme, this.props.colorSchemeChangeCallback);
      this.shareDBManager.setEditor(this.editor);

      if (this.isCollaborative) {
        this.shareDBManager.initShareDB();
      }

      this.qtipManager = new managers_QtipManager(this.cy, this.editor);
      this.cxtMenuManager = !this.isCbioPortal ? new managers_ContextMenuManager(this.cy, this.editor, this.props.handleOpen, this.undoRedoManager, this.props.isCollaborative) : undefined;
      this.dragDropNodeAddManager = new utils_DragDropNodeAddPlugin(this.editor, this.cy, this.props.pathwayHandler); // Initialize panzoom

      this.cy.panzoom(panzoomOpts);
      this.cy.layoutUtilities({
        desiredAspectRatio: this.cy.width() / this.cy.height()
      }); // Node Add initialization

      this.cy.nodeadd({
        // Once the explanationText is cast to uppercase they will be node types
        components: [{
          container: external_jquery_default()('#simpleNodeDiv'),
          nodeType: 'Gene',
          icon: gene_default.a
        }, {
          container: external_jquery_default()('#familyNodeDiv'),
          nodeType: 'Family',
          icon: family_default.a
        }, {
          container: external_jquery_default()('#complexNodeDiv'),
          nodeType: 'Complex',
          icon: complex_default.a
        }, {
          container: external_jquery_default()('#compartmentNodeDiv'),
          nodeType: 'Compartment',
          icon: compartment_default.a
        }, {
          container: external_jquery_default()('#processNodeDiv'),
          nodeType: 'Process',
          icon: process_default.a
        }]
      });
      var self = this;
      var edgeHandleDefaults = {
        preview: true,
        stackOrder: 4,
        handleSize: 10,
        handleColor: '#1abc9c',
        handleLineType: 'ghost',
        handleLineWidth: 1,
        handleNodes: 'node',
        hoverDelay: 1,
        cxt: false,
        enabled: false,
        toggleOffOnLeave: true,
        edgeType: function (sourceNode, targetNode) {
          // can return 'flat' for flat edges between nodes or 'node' for intermediate node between them
          // returning null/undefined means an edge can't be added between the two nodes
          return 'flat';
        },
        handlePosition: function (node) {
          return 'middle top'; // sets the position of the handle in the format of "X-AXIS Y-AXIS" such as "left top", "middle top"
        },
        loopAllowed: function (node) {
          // for the specified node, return whether edges from itself to itself are allowed
          return false;
        },
        nodeLoopOffset: -50,
        nodeParams: function (sourceNode, targetNode) {
          // for edges between the specified source and target
          // return element object to be passed to cy.add() for intermediary node
          return {};
        },
        edgeParams: function (sourceNode, targetNode, i) {
          // for edges between the specified source and target
          // return element object to be passed to cy.add() for edge
          // NB: i indicates edge index in case of edgeType: 'node'
          return {};
        },
        start: function (sourceNode) {
          // fired when edgehandles interaction starts (drag on handle)
          var type = self.getGlobalEdgeType(); //self.cy.edgehandles('option', 'ghostEdgeType', type);
        },
        complete: function (sourceNode, targetNodes, addedEntities) {
          //  // Remove recently added edge !
          //  // FBI takes this case from now on :O
          //  // We will take care of addition in our manager :)
          self.cy.remove(addedEntities);
          self.editor.addEdge({
            source: sourceNode.id(),
            target: targetNodes[0].id(),
            // @ts-ignore
            type: self.getGlobalEdgeType(window.edgeAddingMode),
            pubmedIDs: [],
            name: ""
          });
        },
        stop: function (sourceNode) {
          // fired when edgehandles interaction is stopped (either complete with added edges or incomplete)
          //TODO refactor this, so terrible for now
          //$('.edge-palette a').blur().removeClass('active');
          self.edgeAddingMode = -1;
          self.eh.disable();
          self.eh.hide();
          self.props.setActiveEdge(-1);
        }
      }; //Edge Handles initialization

      this.eh = this.cy.edgehandles(edgeHandleDefaults);
      this.eh.disable();
      this.props.editorHandler(this.editor, this.eh, this.undoRedoManager);

      if (!this.isCbioPortal) {
        this.cy.nodeEditing({
          padding: 5,
          undoable: true,
          grappleSize: 8,
          grappleColor: "#ffc90e",
          inactiveGrappleStroke: "inside 1px blue",
          boundingRectangle: true,
          boundingRectangleLineDash: [4, 8],
          boundingRectangleLineColor: "ffc90e",
          boundingRectangleLineWidth: 1.5,
          zIndex: 999,
          moveSelectedNodesOnKeyEvents: function () {
            return true;
          },
          minWidth: function (node) {
            var data = node.data("resizeMinWidth");
            return data ? data : 15;
          },
          minHeight: function (node) {
            var data = node.data("resizeMinHeight");
            return data ? data : 15;
          },
          // Getters for some style properties the defaults returns ele.css('property-name')
          // you are encouraged to override these getters
          getCompoundMinWidth: function (node) {
            return node.style('min-width');
          },
          getCompoundMinHeight: function (node) {
            return node.style('min-height');
          },
          getCompoundMinWidthBiasRight: function (node) {
            return node.style('min-width-bias-right');
          },
          getCompoundMinWidthBiasLeft: function (node) {
            return node.style('min-width-bias-left');
          },
          getCompoundMinHeightBiasTop: function (node) {
            return node.style('min-height-bias-top');
          },
          getCompoundMinHeightBiasBottom: function (node) {
            return node.style('min-height-bias-bottom');
          },
          isFixedAspectRatioResizeMode: function (node) {
            return node.is(".fixedAspectRatioResizeMode");
          },
          isNoResizeMode: function (node) {
            return undefined;
          },
          // These optional function will be executed to set the width/height of a node in this extension
          // Using node.css() is not a recommended way (http://js.cytoscape.org/#eles.style) to do this. Therefore, overriding these defaults
          // so that a data field or something like that will be used to set node dimentions instead of directly calling node.css()
          // is highly recommended (Of course this will require a proper setting in the stylesheet).
          setWidth: function (node, width) {
            node.data('w', width);
          },
          setHeight: function (node, height) {
            node.data('h', height);
          },
          setCompoundMinWidth: function (node, minWidth) {
            node.style('min-width', minWidth);
          },
          setCompoundMinHeight: function (node, minHeight) {
            node.style('min-height', minHeight);
          },
          setCompoundMinWidthBiasLeft: function (node, minWidthBiasLeft) {
            node.style('min-width-bias-left', minWidthBiasLeft);
          },
          setCompoundMinWidthBiasRight: function (node, minHeightBiasRight) {
            node.style('min-width-bias-right', minHeightBiasRight);
          },
          setCompoundMinHeightBiasTop: function (node, minHeightBiasTop) {
            node.style('min-height-bias-top', minHeightBiasTop);
          },
          setCompoundMinHeightBiasBottom: function (node, minHeightBiasBottom) {
            node.style('min-height-bias-bottom', minHeightBiasBottom);
          },
          cursors: {
            // May take any "cursor" css property
            default: "default",
            inactive: "not-allowed",
            nw: "nw-resize",
            n: "n-resize",
            ne: "ne-resize",
            e: "e-resize",
            se: "se-resize",
            s: "s-resize",
            sw: "sw-resize",
            w: "w-resize"
          },
          resizeToContentCueImage: resizeCue_default.a,
          resizeToContentFunction: this.editor.resizeNodesToContent.bind(this.editor)
        });
      } //Navigator for cytoscape js


      var navDefaults = {
        container: '.cytoscape-navigator-wrapper' // can be a HTML or jQuery element or jQuery selector
        ,
        viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
        ,
        thumbnailEventFramerate: 10 // max thumbnail's updates per second triggered by graph updates
        ,
        thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
        ,
        dblClickDelay: 200 // milliseconds
        ,
        removeCustomContainer: true // destroy the container specified by user on plugin destroy
        ,
        rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance

      }; //TODO: AMENDMENT declaration removed

      this.cy.navigator(navDefaults); // get navigator instance, nav

      var viewUtilitiesOpts = {
        node: {
          highlighted: {
            'border-width': 2,
            'border-color': '#bc1142'
          },
          unhighlighted: {
            'opacity': function (ele) {
              // We return the same opacity because to override the unhibhlighted ele opacity in view-utilities
              return ele.css('opacity');
            } // styles for when nodes are unhighlighted.}

          }
        },
        edge: {
          highlighted: {},
          unhighlighted: {
            'opacity': function (ele) {
              // We return the same opacity because to override the unhibhlighted ele opacity in view-utilities
              return ele.css('opacity');
            } // styles for when edges are unhighlighted.

          }
        },
        setVisibilityOnHide: false,
        setDisplayOnHide: true,
        neighbor: function () {
          return false;
        },
        neighborSelectTime: 500 //ms, time to taphold to select desired neighbors

      };
      this.viewUtilities = this.cy.viewUtilities(viewUtilitiesOpts);
      this.editor.setViewUtilities(this.viewUtilities);
      this.placePanzoomAndOverlay();
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "getGlobalEdgeType", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var type = "NONE"; // @ts-ignore

      if (window.edgeAddingMode === 1) {
        type = 'ACTIVATES';
      } // @ts-ignore
      else if (window.edgeAddingMode === 2) {
          type = 'INHIBITS';
        } // @ts-ignore
        else if (window.edgeAddingMode === 3) {
            type = 'INDUCES';
          } // @ts-ignore
          else if (window.edgeAddingMode === 4) {
              type = 'REPRESSES';
            } // @ts-ignore
            else if (window.edgeAddingMode === 5) {
                type = 'BINDS';
              }

      return type;
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initCyHandlers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var that = this;
      var tappedBefore;
      var tappedTimeout;
      this.cy.on('tap', function (event) {
        var tappedNow = event.target;

        if (tappedTimeout !== -1 && tappedBefore !== -1) {
          clearTimeout(tappedTimeout);
        }

        if (tappedBefore === tappedNow) {
          tappedNow.trigger('doubleTap');
          tappedBefore = -1;
        } else {
          // @ts-ignore TODO AMENDMENTsa
          tappedTimeout = setTimeout(function () {
            tappedBefore = -1;
          }, 300);
          tappedBefore = tappedNow;
        }
      });
      this.cy.on('doubleTap', 'node', function (e) {
        // if cBioPortal ignore
        if (that.props.isCbioPortal) return;
        var eventIsDirect = e.target === this;

        if (eventIsDirect) {
          that.qtipManager.addQtipToElements(e.target);
          e.target.trigger("showqtipevent");
        }
      });
      this.cy.on('doubleTap', 'edge', function (e) {
        // if cBioPortal ignore
        if (that.props.isCbioPortal) return;
        var eventIsDirect = e.target === this;

        if (eventIsDirect) {
          that.qtipManager.addQtipToElements(e.target);
          e.target.trigger("showqtipevent");
        }
      });
      this.cy.on('select', 'node', function (e) {
        _this.editor.pushSelectedNodeStack(e.target);
      });
      this.cy.on('unselect', 'node', function (e) {
        _this.editor.removeElementFromSelectedNodeStack(e.target);
      });
      this.cy.on('free', 'node', function (e) {
        //Collect all nodes with descendants in case of compounds
        var selectedNodes = _this.cy.nodes(':selected');

        var nodes = e.target;
        nodes = nodes.union(nodes.descendants());
        nodes = nodes.union(selectedNodes);

        _this.editor.moveElements(nodes);
      });
      this.cy.on('layoutstop', function () {
        _this.editor.postLayout();
      });
      this.cy.on("nodeediting.resizeend", function (_e, _type, node) {
        //Updates 'data' properties from 'style'
        node.data('w', node.width());
        node.data('h', node.height()); //Used for collaborative mode

        _this.editor.resizeElements(node);
      });
      this.cy.on('select', 'edge', function (e) {
        _this.lastSelectedEdge = e.target;
      });
      this.cy.on('bendPointMovement', function () {
        _this.editor.updateEdgeAnchorPoints(_this.lastSelectedEdge);
      });
      this.cy.on('nodeediting.moveend', function () {
        _this.editor.changeNodePositionsByArrows(_this.cy.nodes(":selected"));
      });
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initKeyboardHandlers", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      if (!this.isCollaborative && !this.isCbioPortal) {
        external_jquery_default()(document).keydown(function (e) {
          if (e.which === 89 && (e.ctrlKey || e.metaKey)) {
            _this.undoRedoManager.redo();
          } else if (e.which === 90 && (e.ctrlKey || e.metaKey)) {
            _this.undoRedoManager.undo();
          }
        });
      } else {
        external_jquery_default()('a[role="redo"]').hide();
        external_jquery_default()('a[role="undo"]').hide();
      }

      external_jquery_default()(document).keydown(function (e) {
        if (e.which === 65 && (e.ctrlKey || e.metaKey)) {
          // @ts-ignore
          var tn = document.activeElement.tagName;

          if (tn != "TEXTAREA" && tn != "INPUT") {
            e.preventDefault();

            _this.cy.elements().select();
          }
        } else if (e.which === 8 || e.which === 46) {
          // @ts-ignore
          var tn = document.activeElement.tagName;

          if (tn != "TEXTAREA" && tn != "INPUT") {
            var selectedElements = _this.cy.$(':selected');

            _this.editor.removeElement(selectedElements);
          }
        }
      });
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initUndoRedoFunctionality", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCollaborative || this.isCbioPortal) {
        external_jquery_default()('[role="undo"]').hide();
        external_jquery_default()('[role="redo"]').hide();
        /* TODO: AMENDMENT
        document.getElementById("localOrCollaborativeToolbar").style.display = "none";
        */
      }
    }
  });
  Object.defineProperty(CytoscapeArea.prototype, "initCBioPortalFunctionalities", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.isCbioPortal) {
        var contextMenu = this.cy.contextMenus('get');
        contextMenu.destroy();
      }
    }
  });

  CytoscapeArea_decorate([external_autobind_decorator_default.a], CytoscapeArea.prototype, "cyDivHandler", null);

  CytoscapeArea = CytoscapeArea_decorate([external_mobx_react_["observer"]], CytoscapeArea);
  return CytoscapeArea;
}(external_react_default.a.Component);

/* harmony default export */ var ui_CytoscapeArea = (CytoscapeArea_CytoscapeArea);
// CONCATENATED MODULE: ./src/ui/Menubar.tsx
var Menubar_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Menubar_Menubar =
/** @class */
function (_super) {
  Menubar_extends(Menubar, _super);

  function Menubar(props) {
    return _super.call(this, props) || this;
  }

  Object.defineProperty(Menubar.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var nodeTypes = ["Gene", "Family", "Complex", "Compartment", "Process"];
      var edgeTypes = ["Activates", "Inhibits", "Induces", "Represses", "Binds"];
      var pathwayDropdownData = {};

      for (var _i = 0, _a = Object.keys(pathways); _i < _a.length; _i++) {
        var pwName = _a[_i]; // If a pathway name ain't include 'pathway' word then it is under pancanatlas.

        var isPancanatlas = !pwName.includes('pathway');
        var dashPos = pwName.indexOf('-');
        var pwHead = isPancanatlas ? 'PanCanAtlas' : pwName.substring(0, dashPos);

        if (pwHead in pathwayDropdownData) {
          pathwayDropdownData[pwHead].push(pwName);
        } else {
          pathwayDropdownData[pwHead] = [pwName];
        }
      }

      return external_react_default.a.createElement(external_react_bootstrap_["Navbar"], {
        className: "pathway-navbar"
      }, external_react_default.a.createElement(external_react_bootstrap_["Nav"], null, external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 1,
        title: "Network",
        id: "basic-nav-network"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: this.props.pathwayActions.newPathway
      }, "New"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.PW_DETAILS);
        }
      }, "Properties..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.upload();
        }
      }, "Import"), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        className: "dropdown-submenu",
        eventKey: 1,
        title: "TCGA",
        id: "basic-nav-TCGA"
      }, Object.keys(pathwayDropdownData).map(function (pwHead, index) {
        return external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
          key: index,
          id: pwHead + "_dropdown",
          className: "dropdown-submenu",
          eventKey: 1,
          title: pwHead
        }, pathwayDropdownData[pwHead].map(function (pwName, index) {
          return external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
            key: index,
            onClick: function () {
              if (_this.props.pathwayActions.doesCyHaveElements()) {
                _this.props.handleOpen(EModalType.CONFIRMATION);

                modals_ConfirmationModal.pendingFunction = function () {
                  _this.props.pathwayActions.changePathway(pwName);
                };
              } else {
                _this.props.pathwayActions.changePathway(pwName);
              }
            }
          }, pwName.split('-').join(" "));
        }));
      })), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.merge();
        }
      }, "Merge With..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.export(false);
        }
      }, "Export"), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        className: "dropdown-submenu",
        eventKey: 1,
        title: "Export as",
        id: "basic-nav-export"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.saveAs("JPEG");
        }
      }, "JPEG"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.saveAs("PNG");
        }
      }, "PNG"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.saveAs("SVG");
        }
      }, "SVG"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.export(true);
        }
      }, "SIFNX"))), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 2,
        title: "Edit",
        id: "basic-nav-edit"
      }, external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "add-node-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Add Node"
      }, nodeTypes.map(function (nodeType, index) {
        return external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
          key: index,
          onClick: function () {
            _this.props.pathwayActions.addNode(nodeType);
          }
        }, nodeType);
      })), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "add-edge-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Add Edge"
      }, edgeTypes.map(function (nodeType, i) {
        return external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
          key: i,
          onClick: function () {
            _this.props.pathwayActions.addEdge(i);

            _this.props.setActiveEdge(i);
          }
        }, nodeType);
      })), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.deleteSelected();
        }
      }, "Delete Selected"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.resizeToContent();
        }
      }, "Resize Nodes to Content"), !this.props.pathwayActions.isCollaborative && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.undo();
        }
      }, "Undo"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.redo();
        }
      }, "Redo"))), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 3,
        title: "View",
        id: "basic-nav-view"
      }, external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "align-view-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Align Selected"
      }, external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "align-vertical-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Vertical"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("vLeft");
        }
      }, "Left"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("vCen");
        }
      }, "Center"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("vRight");
        }
      }, "Right")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        id: "align-horizontal-submenu",
        className: "dropdown-submenu",
        eventKey: 2.1,
        title: "Horizontal"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("hTop");
        }
      }, "Top"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("hMid");
        }
      }, "Middle"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.align("hBot");
        }
      }, "Bottom"))), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.GRID);
        }
      }, "Grid..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.hideSelected();
        }
      }, "Hide Selected Nodes"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 1.1,
        onClick: function () {
          _this.props.pathwayActions.showAll();
        }
      }, "Show All Nodes")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 4,
        title: "Highlight",
        id: "basic-nav-highlight"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 4.1,
        onClick: this.props.pathwayActions.highlightSelected
      }, "Highlight Selected"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 4.1,
        onClick: this.props.pathwayActions.highlightNeighbours
      }, "Highlight Neighbors Of Selected"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 4.1,
        onClick: this.props.pathwayActions.validateGenes
      }, "Identify Invalid Genes"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 4.1,
        onClick: this.props.pathwayActions.removeAllHighlight
      }, "Remove All Highlights")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 5,
        title: "Alteration %",
        id: "basic-nav-alteration"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: this.props.pathwayActions.loadSampleData
      }, "Load Sample Data"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: function () {
          _this.props.pathwayActions.uploadOverlay();
        }
      }, "Load From File..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.STUDY);
        }
      }, "Load From cBioPortal..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.PROFILES);
        }
      }, "Data Sets..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.PROFILES_COLOR_SCHEME);
        }
      }, "Color Scheme..."), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 5.1,
        onClick: this.props.pathwayActions.removeAllData
      }, "Remove All Data")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 6,
        title: "Layout",
        id: "basic-nav-layout"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 6.1,
        onClick: this.props.pathwayActions.performLayout
      }, "Perform Layout"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 6.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.LAYOUT);
        }
      }, "Layout Properties...")), external_react_default.a.createElement(external_react_bootstrap_["NavDropdown"], {
        eventKey: 7,
        title: "Help",
        id: "basic-nav-help"
      }, external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 7.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.HELP);
        }
      }, "Quick Help"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 7.1,
        onClick: function () {
          window.open("https://github.com/iVis-at-Bilkent/pathway-mapper");
        }
      }, "How To Use"), external_react_default.a.createElement(external_react_bootstrap_["MenuItem"], {
        eventKey: 7.1,
        onClick: function () {
          _this.props.handleOpen(EModalType.ABOUT);
        }
      }, "About"))), external_react_default.a.createElement(external_react_bootstrap_["Nav"], {
        pullRight: true
      }, external_react_default.a.createElement(external_react_bootstrap_["Navbar"].Brand, null, external_react_default.a.createElement("a", {
        href: "#"
      }, "PathwayMapper"))));
    }
  });
  return Menubar;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Menubar = (Menubar_Menubar);
// EXTERNAL MODULE: ./src/images/edges/activates.svg
var activates = __webpack_require__(49);
var activates_default = /*#__PURE__*/__webpack_require__.n(activates);

// EXTERNAL MODULE: ./src/images/edges/binds.svg
var binds = __webpack_require__(50);
var binds_default = /*#__PURE__*/__webpack_require__.n(binds);

// EXTERNAL MODULE: ./src/images/edges/induces.svg
var induces = __webpack_require__(51);
var induces_default = /*#__PURE__*/__webpack_require__.n(induces);

// EXTERNAL MODULE: ./src/images/edges/inhibits.svg
var inhibits = __webpack_require__(52);
var inhibits_default = /*#__PURE__*/__webpack_require__.n(inhibits);

// EXTERNAL MODULE: ./src/images/edges/represses.svg
var represses = __webpack_require__(53);
var represses_default = /*#__PURE__*/__webpack_require__.n(represses);

// CONCATENATED MODULE: ./src/ui/Sidebar.tsx
var Sidebar_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Sidebar_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore

 // @ts-ignore




var Sidebar_Sidebar =
/** @class */
function (_super) {
  Sidebar_extends(Sidebar, _super);

  function Sidebar(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "activeEdge", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -1
    });
    Object(external_mobx_["makeObservable"])(_this);
    props.setActiveEdgeHandler(_this.setActiveEdge);
    return _this;
  }

  Object.defineProperty(Sidebar.prototype, "addEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeIndex) {
      if (edgeIndex === this.activeEdge) {
        this.setActiveEdge(-1);
        this.props.pathwayActions.addEdge(-1);
        return;
      }

      this.setActiveEdge(edgeIndex);
      this.props.pathwayActions.addEdge(edgeIndex);
    }
  });
  Object.defineProperty(Sidebar.prototype, "setActiveEdge", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (edgeIndex) {
      this.activeEdge = edgeIndex;
    }
  });
  Object.defineProperty(Sidebar.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var edgeTypes = ["Activates", "Inhibits", "Induces", "Represses", "Binds"];
      var edgeImgs = [activates_default.a, inhibits_default.a, induces_default.a, represses_default.a, binds_default.a];
      var nodeIds = ["simpleNodeDiv", "familyNodeDiv", "complexNodeDiv", "compartmentNodeDiv", "processNodeDiv"];
      return external_react_default.a.createElement("div", {
        id: "pathway-sidebar",
        className: "sideBarWrapper"
      }, external_react_default.a.createElement(external_react_bootstrap_["Panel"], {
        className: "pnl"
      }, external_react_default.a.createElement(external_react_bootstrap_["Panel"].Heading, {
        className: "pnl-header"
      }, "Network"), external_react_default.a.createElement(external_react_bootstrap_["Panel"].Body, {
        className: "pnl-body pathwayPanel"
      }, external_react_default.a.createElement("div", {
        className: "buttonContainer"
      }, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.handleOpen(EModalType.PW_DETAILS);
        }
      }, "Properties")), external_react_default.a.createElement("div", {
        className: "buttonContainer"
      }, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.pathwayActions.upload();
        }
      }, "Import")), external_react_default.a.createElement("div", {
        className: "buttonContainer"
      }, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: function () {
          _this.props.pathwayActions.export(false);
        }
      }, "Export")))), external_react_default.a.createElement(external_react_bootstrap_["Panel"], {
        className: "pnl"
      }, external_react_default.a.createElement(external_react_bootstrap_["Panel"].Heading, {
        className: "pnl-header"
      }, "Node Palette"), external_react_default.a.createElement(external_react_bootstrap_["Panel"].Body, {
        className: "pnl-body"
      }, nodeIds.map(function (id) {
        return external_react_default.a.createElement("div", {
          key: id,
          id: id,
          "data-tip": "Click on this and drag to the location on drawing canvas and release!",
          "data-effect": "solid",
          "data-place": "bottom",
          "data-delay-show": "1000",
          className: "dragButtonContainer"
        });
      }))), external_react_default.a.createElement(external_react_bootstrap_["Panel"], {
        className: "pnl edgePanel"
      }, external_react_default.a.createElement(external_react_bootstrap_["Panel"].Heading, {
        className: "pnl-header"
      }, "Interaction Palette"), external_react_default.a.createElement(external_react_bootstrap_["Panel"].Body, {
        className: "pnl-body edgePaletteWrapper"
      }, external_react_default.a.createElement("div", {
        className: "list-group edge-palette"
      }, edgeTypes.map(function (edgeType, i) {
        return external_react_default.a.createElement("div", {
          key: i,
          "data-tip": "Click to activate; then, start the interaction from the little circle on the source node!",
          "data-effect": "solid",
          "data-place": "bottom",
          "data-delay-show": "1000"
        }, external_react_default.a.createElement("a", {
          style: {
            marginBottom: "5px"
          },
          className: "list-group-item " + (_this.activeEdge === i ? "active" : ""),
          onClick: function () {
            _this.addEdge(i);
          },
          href: "#"
        }, external_react_default.a.createElement("img", {
          style: {
            width: "30px"
          },
          className: "pull-left",
          src: edgeImgs[i]
        }), ' ', edgeType));
      })))));
    }
  });

  Sidebar_decorate([external_mobx_["observable"]], Sidebar.prototype, "activeEdge", void 0);

  Sidebar_decorate([external_mobx_["action"].bound], Sidebar.prototype, "setActiveEdge", null);

  Sidebar = Sidebar_decorate([external_mobx_react_["observer"]], Sidebar);
  return Sidebar;
}(external_react_default.a.Component);

/* harmony default export */ var ui_Sidebar = (Sidebar_Sidebar);
// CONCATENATED MODULE: ./src/ui/react-pathway-mapper.tsx
var react_pathway_mapper_extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var react_pathway_mapper_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var maxHeapFn = __webpack_require__(79);

var maxHeap = maxHeapFn();
var EModalType;

(function (EModalType) {
  EModalType[EModalType["STUDY"] = 0] = "STUDY";
  EModalType[EModalType["CONFIRMATION"] = 1] = "CONFIRMATION";
  EModalType[EModalType["PROFILES"] = 2] = "PROFILES";
  EModalType[EModalType["ABOUT"] = 3] = "ABOUT";
  EModalType[EModalType["PW_DETAILS"] = 4] = "PW_DETAILS";
  EModalType[EModalType["GRID"] = 5] = "GRID";
  EModalType[EModalType["HELP"] = 6] = "HELP";
  EModalType[EModalType["LAYOUT"] = 7] = "LAYOUT";
  EModalType[EModalType["CHELP"] = 8] = "CHELP";
  EModalType[EModalType["PROFILES_COLOR_SCHEME"] = 9] = "PROFILES_COLOR_SCHEME";
})(EModalType || (EModalType = {}));

var react_pathway_mapper_PathwayMapper =
/** @class */
function (_super) {
  react_pathway_mapper_extends(PathwayMapper, _super);

  function PathwayMapper(props) {
    var _this = _super.call(this, props) || this;

    Object.defineProperty(_this, "MAX_ALLOWED_PROFILES_ENABLED", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 6
    });
    Object.defineProperty(_this, "selectedPathway", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "fileManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "editor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "pathwayActions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "isModalShown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "colorValueMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "portalAccessor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "alterationData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "patientData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "pathwayGeneMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(_this, "bestPathwaysAlgos", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "oldName", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    });
    Object.defineProperty(_this, "profiles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(_this, "setActiveEdge", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "viewOperationsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_this, "gridOptionsManager", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object(external_mobx_["makeObservable"])(_this);
    _this.fileManager = new managers_FileOperationsManager();
    _this.pathwayActions = new utils_PathwayActions(_this.pathwayHandler, _this.profiles, _this.fileManager, _this.handleOpen, _this.props.isCBioPortal, _this.props.isCollaborative);
    _this.selectedPathway = "";

    if (_this.props.pathwayName) {
      _this.pathwayActions.changePathway(_this.props.pathwayName);
    }

    _this.isModalShown = [false, false, false, false, false, false, false, false, false, false]; // TODO: Change below

    _this.alterationData = {}; //{"study1_gistic" : {"CDK4": 11, "MDM2": 19, "TP53": 29}, "study2_gistic" : {"MDM2": 99, "TP53": 98}, "study3_mutations": {"MDM2": 1, "TP53": 2}};

    _this.extractAllGenes();

    _this.colorValueMap = {
      '-100': "#0000ff",
      '0': "#ffffff",
      '100': "#ff0000"
    };

    if (_this.props.isCBioPortal) {
      //this.overlayPortalData();
      // If cBioPortal mode is 'on' it is very likely to have cBioALterationData
      // but to be on the safe side below assertion is made.
      if (_this.props.cBioAlterationData) {
        if (_this.props.patientView) {
          //PatientView PathwayMapper has a different functionality
          //Alteration types are overlayed instead of alterationpercentage
          _this.calculatePatientData(_this.props.cBioAlterationData);

          _this.addSampleIconData(_this.props.sampleIconData);
        } else {
          _this.calculateAlterationData(_this.props.cBioAlterationData);
        }
      }

      if (_this.props.addGenomicDataHandler) {
        _this.props.addGenomicDataHandler(_this.addGenomicData);
      }

      _this.profiles.push({
        profileId: PathwayMapper_1.CBIO_PROFILE_NAME,
        enabled: true
      });

      _this.getBestPathway(0);

      _this.getBestPathway(1);

      _this.getBestPathway(2);

      _this.getBestPathway(3);
    }

    return _this;
    /*
    const profile1 = {profileId: "study1_gistic", studyId: "study1", enabled: true};
    const profile2 = {profileId: "study2_gistic", studyId: "study2", enabled: true};
    const profile3 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    const profile4 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    const profile5 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    const profile6 = {profileId: "study3_mutations", studyId: "study3", enabled: true};
    this.profiles.push(profile1, profile2, profile3, profile4, profile5, profile6);
    */
  }

  PathwayMapper_1 = PathwayMapper;
  Object.defineProperty(PathwayMapper.prototype, "setColorMapping", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (colorValueMap) {
      this.colorValueMap = colorValueMap;
      this.editor.updateGenomicDataColorScheme(this.colorValueMap);
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "setSelectedPathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathway) {
      this.selectedPathway = pathway;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "setEditor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor) {
      this.editor = editor;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "addProfile", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profile) {
      this.profiles.push(profile);
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "toggleProfileEnabled", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (index) {
      this.profiles[index].enabled = !this.profiles[index].enabled;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "calculateAlterationData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cBioAlterationData) {
      var _this = this; // Transform cBioDataAlteration into AlterationData


      this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME] = {};
      cBioAlterationData.forEach(function (geneAltData) {
        var perc = geneAltData.altered / geneAltData.sequenced * 100; // NaN value is replaced with -101 since NaN value leads to some runtime exceptions (such as with toFixed() function),
        // hence it is represented as -101. It will be recognized in the genomic data svg creation to show N/P instead of
        // a percentage. -101 is chosen because this percentage is impossible to get.

        _this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME][geneAltData.gene] = Object.is(perc, NaN) ? -101 : perc;
      });
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "calculatePatientData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cBioAlterationData) {
      // Transform cBioDataAlteration into Patient Data every alteration is accepted 100% altered
      var _this = this;

      this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME] = {};
      var allTypes = cBioAlterationData.map(function (x) {
        return x.gene;
      }); //const allTypes = cBioAlterationData.map(x => x.percentAltered);

      var uniqueTypes = allTypes.filter(function (x, i, a) {
        return a.indexOf(x) == i;
      }); //This is a flag for GenomicDataOverlayManager showPatientData

      this.patientData["PatientView"] = 1;
      uniqueTypes.forEach(function (x) {
        _this.patientData[x] = {};
      });
      cBioAlterationData.forEach(function (geneAltData) {
        var perc = geneAltData.altered / geneAltData.sequenced * 100;
        _this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME][geneAltData.gene] = Object.is(perc, NaN) ? -101 : perc;
        _this.patientData[geneAltData.gene][geneAltData.percentAltered] = Object.is(perc, NaN) ? -101 : perc;
        _this.patientData[geneAltData.gene]["geneticTrackData"] = geneAltData.geneticTrackData;
        _this.patientData[geneAltData.gene]["geneticTrackRuleSetParams"] = geneAltData.geneticTrackRuleSetParams;
      });
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "addSampleIconData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (sampleIconData) {
      if (sampleIconData) {
        this.patientData["sampleColors"] = sampleIconData.sampleColors;
        this.patientData["sampleIndex"] = sampleIconData.sampleIndex;
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "getGeneStudyMap", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (studyGeneMap) {
      var genomicDataMap = {};

      for (var _i = 0, _a = Object.keys(studyGeneMap); _i < _a.length; _i++) {
        var cancerStudy = _a[_i];
        var cancerData = studyGeneMap[cancerStudy];

        for (var _b = 0, _c = Object.keys(cancerData); _b < _c.length; _b++) {
          var geneSymbol = _c[_b];
          if (genomicDataMap[geneSymbol] === undefined) genomicDataMap[geneSymbol] = {};
          genomicDataMap[geneSymbol][cancerStudy] = studyGeneMap[cancerStudy][geneSymbol].toFixed(2);
        }
      }

      return genomicDataMap;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "getAlterationAveragePerGene", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (genomicDataMap) {
      var geneAlterationMap = {};

      for (var _i = 0, _a = Object.keys(genomicDataMap); _i < _a.length; _i++) {
        var gene = _a[_i];
        var sum = 0,
            count = 0;

        for (var _b = 0, _c = Object.values(genomicDataMap[gene]); _b < _c.length; _b++) {
          var alteration = _c[_b];
          sum += parseFloat(alteration);
          count++;
        }

        if (count === 0) {
          geneAlterationMap[gene] = 0;
        } else {
          geneAlterationMap[gene] = sum / count;
        }
      }

      return geneAlterationMap;
    }
  });
  /**
   *
   * @param rankingMode: number => 0 = Count, 1 = Percentage, 2 = Count with Alteration, 3 = Percentage with Alteration
   *
   */

  Object.defineProperty(PathwayMapper.prototype, "getBestPathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (rankingMode) {
      var genomicDataMap = this.getGeneStudyMap(this.alterationData);
      var alterationPerGene = this.getAlterationAveragePerGene(genomicDataMap);
      maxHeap = maxHeapFn();
      var matchedGenesMap = {};
      var bestPathways = [];

      for (var pathwayName in this.pathwayGeneMap) {
        if (this.pathwayGeneMap.hasOwnProperty(pathwayName)) {
          var genesMatching = []; // Calculate sum of all alterations

          var sumOfAlterations = 0;

          for (var _i = 0, _a = this.props.genes; _i < _a.length; _i++) {
            var gene = _a[_i];

            if (this.pathwayGeneMap[pathwayName].hasOwnProperty(gene.hugoGeneSymbol) && this.pathwayGeneMap[pathwayName][gene.hugoGeneSymbol] === "GENE") {
              genesMatching.push(gene.hugoGeneSymbol);
              sumOfAlterations += alterationPerGene[gene.hugoGeneSymbol];
            }
          }

          matchedGenesMap[pathwayName] = genesMatching;
          var geneCount = 0; // Count number of genes *not processess* in a pathway

          for (var _b = 0, _c = Object.values(this.pathwayGeneMap[pathwayName]); _b < _c.length; _b++) {
            var geneType = _c[_b];

            if (geneType === "GENE") {
              geneCount++;
            }
          }

          if (rankingMode === 0) {
            maxHeap.insert(genesMatching.length, {
              pathwayName: pathwayName
            });
          } else if (rankingMode === 1) {
            maxHeap.insert(genesMatching.length / geneCount * 100, {
              pathwayName: pathwayName
            });
          } else if (rankingMode === 2) {
            maxHeap.insert(sumOfAlterations, {
              pathwayName: pathwayName
            });
          } else if (rankingMode === 3) {
            maxHeap.insert(genesMatching.length * sumOfAlterations / geneCount, {
              pathwayName: pathwayName
            });
          }
        }
      }

      while (maxHeap.size() > 0) {
        var top_1 = maxHeap.extractMax();
        var pathwayName = top_1.getValue().pathwayName;
        bestPathways.push({
          score: top_1.getKey(),
          genesMatched: matchedGenesMap[pathwayName],
          pathwayName: pathwayName
        });
      }

      if (this.bestPathwaysAlgos.length === 0) // First pathway of the first method is shown as the default pathway.
        this.setSelectedPathway(bestPathways[0].pathwayName);
      this.bestPathwaysAlgos.push(bestPathways);
    }
  }); // This method extracts all genes of a pathway and adds it to the pathwayGeneMap
  // so that it can be used by percentage calculation and genomic data 
  // Note: Pathway title

  Object.defineProperty(PathwayMapper.prototype, "includePathway", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathwayData, pathwayName) {
      var genes = pathwayData.nodes;
      var geneHash = {};

      for (var _i = 0, genes_1 = genes; _i < genes_1.length; _i++) {
        var gene = genes_1[_i];
        if (gene.data.type === "GENE") geneHash[gene.data.name] = gene.data.type;
      }

      this.pathwayGeneMap[pathwayData.title] = geneHash;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "extractAllGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      for (var pathwayName in pathways) {
        if (pathways.hasOwnProperty(pathwayName)) {
          var pathwayData = utils_SaveLoadUtility.parseGraph(pathways[pathwayName], true);
          this.includePathway(pathwayData);
        }
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "loadRedirectedPortalData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      if (!this.props.alterationData) {
        // If size 0 that means it is not redirected.
        return;
      }

      var redirectedProfiles = Object.keys(this.props.alterationData).map(function (data) {
        return {
          profileId: data,
          enabled: true
        };
      });
      redirectedProfiles.forEach(function (redirectedProfile) {
        _this.addProfile(redirectedProfile);
      });
      this.editor.addPortalGenomicData(this.props.alterationData, this.editor.getEmptyGroupID());
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "exists", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (profileId) {
      var exists = false;
      this.profiles.forEach(function (profile) {
        if (profile.profileId === profileId) {
          exists = true;
        }
      });
      return exists;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "loadFromCBio", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (dataTypes, studyData) {
      var _this = this;

      if (!this.pathwayActions.doesCyHaveElements()) {
        external_react_toastify_["toast"].warn('Your pathway is empty!');
        return;
      }

      var _loop_1 = function (metadata) {
        if (!metadata.checked) {
          return "continue";
        }

        if (this_1.exists(metadata.profile)) {
          external_react_toastify_["toast"].warn(metadata.profile + " already exists.");
          return "continue";
        }

        var studyId = studyData[0];
        var profileId = metadata.profile;
        var enableNewProfile = this_1.profiles.length < this_1.MAX_ALLOWED_PROFILES_ENABLED;
        var newProfile = {
          studyId: studyId,
          profileId: profileId,
          enabled: enableNewProfile
        };
        this_1.addProfile(newProfile);
        var genes = this_1.editor.cy.nodes().filter(function (node) {
          return node.data("type") === "GENE";
        }).map(function (node) {
          return node.data("name");
        });
        this_1.portalAccessor.getProfileData({
          caseSetId: studyId,
          geneticProfileId: profileId,
          genes: genes
        }, function (data) {
          _this.editor.addPortalGenomicData(data, _this.editor.getEmptyGroupID());

          var visibilityObject = {};
          visibilityObject[newProfile.profileId] = newProfile.enabled;

          _this.editor.updateGenomicDataVisibility(visibilityObject);
        });
      };

      var this_1 = this;

      for (var _i = 0, _a = Object.values(dataTypes); _i < _a.length; _i++) {
        var metadata = _a[_i];

        _loop_1(metadata);
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "setActiveEdgeHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (setActiveEdge) {
      this.setActiveEdge = setActiveEdge;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "colorSchemeChangeCallback", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (colorScheme) {
      this.colorValueMap = colorScheme;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "addGenomicData", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (cBioAlterationData) {
      this.calculateAlterationData(cBioAlterationData);
      this.editor.removeGenomicData();
      this.editor.addPortalGenomicData(this.alterationData, this.editor.getEmptyGroupID());
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "emphasizeQueryGenes", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      this.pathwayActions.emphasizeQueryGenes(this.props.genes.map(function (gene) {
        return gene.hugoGeneSymbol;
      }));
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "render", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      var _this = this;

      var isCBioPortal = this.props.isCBioPortal;
      var cytoComp = external_react_default.a.createElement(ui_CytoscapeArea, {
        profiles: this.profiles,
        isCbioPortal: this.props.isCBioPortal,
        isCollaborative: this.props.isCollaborative,
        setActiveEdge: this.setActiveEdge,
        editorHandler: this.editorHandler,
        selectedPathway: this.selectedPathway,
        pathwayHandler: this.pathwayHandler,
        handleOpen: this.handleOpen,
        onPathwayChangeCompleted: this.emphasizeQueryGenes,
        genomicDataOverlayColorScheme: this.colorValueMap,
        colorSchemeChangeCallback: this.colorSchemeChangeCallback
      });
      return external_react_default.a.createElement("div", {
        className: "pathwayMapper"
      }, external_react_default.a.createElement("div", {
        style: isCBioPortal ? {
          width: window.innerWidth * 0.99
        } : {},
        className: isCBioPortal ? "cBioMode container" : "customMargins"
      }, !isCBioPortal && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", null, external_react_default.a.createElement(ui_Menubar, {
        pathwayActions: this.pathwayActions,
        handleOpen: this.handleOpen,
        setActiveEdge: this.setActiveEdge
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement(ui_Buttonbar, {
        pathwayActions: this.pathwayActions,
        handleOpen: this.handleOpen
      }))), isCBioPortal && external_react_default.a.createElement(external_react_bootstrap_["Row"], {
        style: {
          marginBottom: "6px"
        }
      }, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 2,
        style: {
          paddingRight: '0px',
          marginBottom: '5px'
        }
      }, external_react_default.a.createElement(ui_Toolbar, {
        pathwayActions: this.pathwayActions,
        selectedPathway: this.selectedPathway,
        alterationData: this.alterationData,
        genes: this.props.genes,
        handleOpen: this.handleOpen,
        validGenes: this.props.validGenes,
        showMessage: this.props.showMessage,
        pathwayGenes: Object.keys(this.pathwayGeneMap[this.selectedPathway]),
        onAddGenes: this.props.onAddGenes,
        patientView: this.props.patientView
      })), this.props.messageBanner ? external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 4,
        style: {
          maxHeight: '32px',
          paddingRight: '0px'
        }
      }, this.props.messageBanner()) : external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 4,
        style: {
          maxHeight: '32px',
          paddingRight: '0px'
        }
      }), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 3,
        style: {
          paddingLeft: "0px",
          marginTop: "12px",
          textAlign: "right",
          paddingRight: "25px"
        }
      }, this.selectedPathway)), external_react_default.a.createElement("div", {
        className: isCBioPortal ? "row" : "mainContentWrapper"
      }, !isCBioPortal && external_react_default.a.createElement("div", null, external_react_default.a.createElement(ui_Sidebar, {
        pathwayActions: this.pathwayActions,
        setActiveEdgeHandler: this.setActiveEdgeHandler,
        handleOpen: this.handleOpen
      })), isCBioPortal ? external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 9
      }, cytoComp, external_react_default.a.createElement("div", {
        style: {
          paddingRight: "9px",
          textAlign: "right",
          fontSize: "13px"
        }
      }, "Powered by ", external_react_default.a.createElement("a", {
        href: "https://github.com/iVis-at-Bilkent/pathway-mapper",
        target: "_blank"
      }, "PathwayMapper"))) : cytoComp, isCBioPortal && external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        xs: 3,
        style: {
          paddingLeft: "0px"
        }
      }, external_react_default.a.createElement(ui_Ranking, {
        pathwayActions: this.pathwayActions,
        bestPathwaysAlgos: this.bestPathwaysAlgos,
        tableComponent: this.props.tableComponent,
        patientView: this.props.patientView
      }))), external_react_default.a.createElement("div", {
        id: "invisibles"
      }, external_react_default.a.createElement("div", {
        id: "pm-modals"
      }, external_react_default.a.createElement(modals_ProfilesModal, {
        profiles: this.profiles,
        editor: this.editor,
        show: this.isModalShown[EModalType.PROFILES],
        handleClose: this.handleClose,
        handleProfileLabelClicked: this.toggleProfileEnabled,
        enabledProfileCountLimit: this.MAX_ALLOWED_PROFILES_ENABLED
      }), external_react_default.a.createElement(modals_PathwayDetailsModal, {
        show: this.isModalShown[EModalType.PW_DETAILS],
        handleClose: this.handleClose,
        pathwayActions: this.pathwayActions
      }), external_react_default.a.createElement(modals_GridSettings, {
        show: this.isModalShown[EModalType.GRID],
        handleClose: this.handleClose,
        pathwayActions: this.pathwayActions
      }), external_react_default.a.createElement(modals_QuickHelpModal, {
        show: this.isModalShown[EModalType.HELP],
        handleClose: this.handleClose
      }), external_react_default.a.createElement(modals_LayoutProperties, {
        show: this.isModalShown[EModalType.LAYOUT],
        handleClose: this.handleClose,
        pathwayActions: this.pathwayActions
      }), external_react_default.a.createElement(modals_ConfirmationModal, {
        show: this.isModalShown[EModalType.CONFIRMATION],
        handleClose: this.handleClose
      }), external_react_default.a.createElement(modals_CBioHelpModal, {
        show: this.isModalShown[EModalType.CHELP],
        handleClose: this.handleClose,
        patientView: this.props.patientView
      }), external_react_default.a.createElement(modals_AboutModal, {
        show: this.isModalShown[EModalType.ABOUT],
        handleClose: this.handleClose
      }), external_react_default.a.createElement(modals_ProfilesColorSchemeModal, {
        show: this.isModalShown[EModalType.PROFILES_COLOR_SCHEME],
        handleClose: this.handleClose,
        colorValueMapping: this.colorValueMap,
        handleColorMappingChange: this.setColorMapping
      })), !this.props.isCBioPortal && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(modals_StudyModal, {
        show: this.isModalShown[EModalType.STUDY],
        loadFromCBio: this.loadFromCBio,
        handleClose: this.handleClose
      }), external_react_default.a.createElement(external_react_toastify_["ToastContainer"], {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true
      })), external_react_default.a.createElement(external_react_tooltip_default.a, {
        clickable: true,
        className: isCBioPortal ? "" : "pmTip",
        style: {
          maxWidth: "350px",
          zIndex: 9999999
        }
      }), external_react_default.a.createElement("input", {
        id: "myInput",
        type: "file",
        ref: function (ref) {
          _this.pathwayActions.setUploaders(ref, false);
        },
        style: {
          display: 'none'
        },
        onChange: function (e) {
          _this.pathwayActions.onChangeFile(e, false);
        }
      }), external_react_default.a.createElement("input", {
        id: "myInput2",
        type: "file",
        ref: function (ref) {
          _this.pathwayActions.setUploaders(ref, true);
        },
        style: {
          display: 'none'
        },
        onChange: function (e) {
          _this.pathwayActions.onChangeFile(e, true);
        }
      }), external_react_default.a.createElement("input", {
        id: "myInput3",
        type: "file",
        ref: function (ref) {
          _this.pathwayActions.setOverlayUploader(ref);
        },
        style: {
          display: 'none'
        },
        onChange: function (e) {
          _this.pathwayActions.overlayFromText(e.target.files[0]);
        }
      }))));
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "componentDidMount", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (!this.props.isCBioPortal) {
        $(".container").css('width', "auto");
        $(".container").css('paddingLeft', 0);
        $(".container").css('marginLeft', 5);
      } else {
        this.pathwayActions.emphasizeQueryGenes(this.props.genes.map(function (gene) {
          return gene.hugoGeneSymbol;
        }));
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "componentDidUpdate", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
      if (this.props.isCBioPortal) {
        this.pathwayActions.emphasizeQueryGenes(this.props.genes.map(function (gene) {
          return gene.hugoGeneSymbol;
        }));
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "handleOpen", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (modalId) {
      this.isModalShown[modalId] = true;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "handleClose", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (modalId) {
      this.isModalShown[modalId] = false;
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "editorHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (editor, eh, undoRedoManager) {
      this.setEditor(editor);
      this.gridOptionsManager = new managers_GridOptionsManager(this.editor.cy);
      this.viewOperationsManager = new managers_ViewOperationsManager(this.editor, this.editor.cy);
      this.pathwayActions.editorHandler(editor, eh, undoRedoManager, this.viewOperationsManager, this.gridOptionsManager);

      if (this.props.isCBioPortal) {
        if (this.props.patientView) {
          this.editor.addPortalGenomicData(this.patientData, this.editor.getEmptyGroupID());
        } else {
          this.editor.addPortalGenomicData(this.alterationData, this.editor.getEmptyGroupID());
        }
      } else {
        this.portalAccessor = new utils_CBioPortalAccessor();
        this.loadRedirectedPortalData();
      }
    }
  });
  Object.defineProperty(PathwayMapper.prototype, "pathwayHandler", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (pathway) {
      var _this = this;

      this.setSelectedPathway(pathway);
      if (this.pathwayGeneMap[pathway] && this.props.changePathwayHandler) this.props.changePathwayHandler(Object.keys(this.pathwayGeneMap[pathway]).filter(function (gene) {
        return !_this.alterationData[PathwayMapper_1.CBIO_PROFILE_NAME].hasOwnProperty(gene);
      }));
    }
  });
  var PathwayMapper_1;
  Object.defineProperty(PathwayMapper, "CBIO_PROFILE_NAME", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "cBioPortal_data"
  });

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "selectedPathway", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "editor", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "isModalShown", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "colorValueMap", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "alterationData", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "patientData", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "pathwayGeneMap", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "oldName", void 0);

  react_pathway_mapper_decorate([external_mobx_["observable"]], PathwayMapper.prototype, "profiles", void 0);

  react_pathway_mapper_decorate([external_mobx_["action"].bound], PathwayMapper.prototype, "setColorMapping", null);

  react_pathway_mapper_decorate([external_mobx_["action"]], PathwayMapper.prototype, "setSelectedPathway", null);

  react_pathway_mapper_decorate([external_mobx_["action"]], PathwayMapper.prototype, "setEditor", null);

  react_pathway_mapper_decorate([external_mobx_["action"]], PathwayMapper.prototype, "addProfile", null);

  react_pathway_mapper_decorate([external_mobx_["action"]], PathwayMapper.prototype, "toggleProfileEnabled", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "includePathway", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "loadFromCBio", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "setActiveEdgeHandler", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "colorSchemeChangeCallback", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "addGenomicData", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "emphasizeQueryGenes", null);

  react_pathway_mapper_decorate([external_mobx_["action"].bound], PathwayMapper.prototype, "handleOpen", null);

  react_pathway_mapper_decorate([external_mobx_["action"].bound], PathwayMapper.prototype, "handleClose", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "editorHandler", null);

  react_pathway_mapper_decorate([external_autobind_decorator_default.a], PathwayMapper.prototype, "pathwayHandler", null);

  PathwayMapper = PathwayMapper_1 = react_pathway_mapper_decorate([external_mobx_react_["observer"]], PathwayMapper);
  return PathwayMapper;
}(external_react_default.a.Component);


/* harmony default export */ var react_pathway_mapper = __webpack_exports__["default"] = (react_pathway_mapper_PathwayMapper);

/***/ })
/******/ ]);
//# sourceMappingURL=index.es5.js.map