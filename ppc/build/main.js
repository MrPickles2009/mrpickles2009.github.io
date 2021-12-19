webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeRateServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ExchangeRateServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ExchangeRateServiceProvider = /** @class */ (function () {
    function ExchangeRateServiceProvider(http) {
        this.http = http;
    }
    ExchangeRateServiceProvider.prototype.readTextFile = function (file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.send(null);
        return rawFile.responseText;
    };
    ExchangeRateServiceProvider.prototype.getOxrData = function () {
        var apiKey = this.readTextFile("assets/oxrApiKey.txt");
        var url = "https://openexchangerates.org/api/latest.json?app_id=" + apiKey + "&base=USD";
        return this.http.get(url)
            .do(this.logResponse)
            .catch(this.catchError);
    };
    ExchangeRateServiceProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error.json().error || "Server error");
    };
    ExchangeRateServiceProvider.prototype.logResponse = function (res) {
        console.log(res);
    };
    ExchangeRateServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ExchangeRateServiceProvider);
    return ExchangeRateServiceProvider;
}());

//# sourceMappingURL=exchange-rate-service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bgilliam/Documents/GitHub/PetrolPriceConverter/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/bgilliam/Documents/GitHub/PetrolPriceConverter/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exchange_rate_service_exchange_rate_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AppVersion } from '@ionic-native/app-version';
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, oxrService /*, appVersion: AppVersion*/) {
        this.navCtrl = navCtrl;
        this.oxrService = oxrService;
        this.getOxrData();
    }
    AboutPage.prototype.ionViewDidEnter = function () {
        this.timeConverter();
    };
    AboutPage.prototype.getOxrData = function () {
        var _this = this;
        this.oxrService.getOxrData().subscribe(function (data) { return _this.oxrData = data; });
    };
    AboutPage.prototype.timeConverter = function () {
        var unixTime = this.oxrData.timestamp;
        var a = new Date(unixTime * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        //var hour = a.getHours();
        //var min = a.getMinutes();
        //var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year; // + ' ' + hour + ':' + min + ':' + sec;
        var lastRateUpdate = document.getElementById("lastRateUpdate");
        lastRateUpdate.innerText = time;
        console.log("timestamp: " + this.oxrData.timestamp);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/bgilliam/Documents/GitHub/PetrolPriceConverter/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Contact me at the following:</ion-list-header>\n    <ion-item>\n      <ion-icon name="mail" item-start></ion-icon>\n      <a href="mailto:gilliabb@dukes.jmu.edu">gilliabb@dukes.jmu.edu</a>\n    </ion-item>\n  </ion-list>\n  <ion-card class="convertSelect">\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Rates last updated:</ion-label>\n        <ion-label id="lastRateUpdate"></ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/bgilliam/Documents/GitHub/PetrolPriceConverter/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_exchange_rate_service_exchange_rate_service__["a" /* ExchangeRateServiceProvider */] /*, appVersion: AppVersion*/])
    ], AboutPage);
    return AboutPage;
}());

//function getAppVersion(){
//  this.appVersion.getAppName();
//  this.appVersion.getPackageName();
//  this.appVersion.getVersionCode();
//  this.appVersion.getVersionNumber();
//}
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exchange_rate_service_exchange_rate_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, oxrService) {
        this.navCtrl = navCtrl;
        this.oxrService = oxrService;
        this.getOxrData();
    }
    HomePage.prototype.ionViewDidEnter = function () {
        //this.curConvert();
    };
    HomePage.prototype.onChange1 = function (selectedValue) {
        this.curSel1 = selectedValue;
    };
    HomePage.prototype.onChange2 = function (selectedValue) {
        this.curSel2 = selectedValue;
    };
    HomePage.prototype.getOxrData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("getting data...");
                        return [4 /*yield*/, this.oxrService.getOxrData().subscribe(function (data) {
                                _this.oxrData = data.rates;
                                console.log("data received!");
                                console.log(_this.oxrData);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.curConvert = function () {
        //USD
        var usdtoeur = this.oxrData.EUR;
        var usdtocad = this.oxrData.CAD;
        var usdtogbp = this.oxrData.GBP;
        var usdtolbp = this.oxrData.LBP;
        var usdtoaud = this.oxrData.AUD;
        var usdtomxn = this.oxrData.MXN;
        //EUR
        var eurtousd = 1 / usdtoeur;
        var eurtocad = usdtocad / usdtoeur;
        var eurtogbp = usdtogbp / usdtoeur;
        var eurtolbp = usdtolbp / usdtoeur;
        var eurtoaud = usdtoaud / usdtoeur;
        var eurtomxn = usdtomxn / usdtoeur;
        //CAD
        var cadtoeur = usdtoeur / usdtocad;
        var cadtousd = 1 / usdtocad;
        var cadtogbp = usdtogbp / usdtocad;
        var cadtolbp = usdtolbp / usdtocad;
        var cadtoaud = usdtoaud / usdtocad;
        var cadtomxn = usdtomxn / usdtocad;
        //GBP
        var gbptoeur = usdtoeur / usdtogbp;
        var gbptousd = 1 / usdtogbp;
        var gbptocad = usdtocad / usdtogbp;
        var gbptolbp = usdtolbp / usdtogbp;
        var gbptoaud = usdtoaud / usdtogbp;
        var gbptomxn = usdtomxn / usdtogbp;
        //LBP
        var lbptoeur = usdtoeur / usdtolbp;
        var lbptousd = 1 / usdtolbp;
        var lbptocad = usdtocad / usdtolbp;
        var lbptogbp = usdtogbp / usdtolbp;
        var lbptoaud = usdtoaud / usdtolbp;
        var lbptomxn = usdtomxn / usdtolbp;
        //AUD
        var audtoeur = usdtoeur / usdtoaud;
        var audtousd = 1 / usdtoaud;
        var audtocad = usdtocad / usdtoaud;
        var audtogbp = usdtogbp / usdtoaud;
        var audtolbp = usdtolbp / usdtoaud;
        var audtomxn = usdtomxn / usdtoaud;
        //MXN
        var mxntoeur = usdtoeur / usdtomxn;
        var mxntousd = 1 / usdtomxn;
        var mxntocad = usdtocad / usdtomxn;
        var mxntogbp = usdtogbp / usdtomxn;
        var mxntolbp = usdtolbp / usdtomxn;
        var mxntoaud = usdtoaud / usdtomxn;
        var GPL = 0.264172;
        var LPG = 3.785411;
        var output = document.getElementById("curOutput");
        switch (Number(this.curSel1)) {
            case 0:
                //eur
                switch (Number(this.curSel2)) {
                    case 0:
                        //eur to eur
                        output.textContent = "€" + this.curInput + "/l";
                        break;
                    case 1:
                        //eur to usd
                        output.textContent = "$" + ((this.curInput * LPG * eurtousd).toFixed(2)).toString() + "/gal";
                        break;
                    case 2:
                        //eur to cad
                        output.textContent = ((this.curInput * 100 * eurtocad).toFixed(1)).toString() + "¢/l";
                        break;
                    case 3:
                        //eur to gbp
                        output.textContent = "£" + ((this.curInput * eurtogbp).toFixed(2)).toString() + "/l";
                        break;
                    case 4:
                        //eur to lbp
                        output.textContent = "£" + ((this.curInput * eurtolbp * 20).toFixed(0)).toString() + "/20l";
                        break;
                    case 5:
                        //eur to aud
                        output.textContent = "$" + ((this.curInput * eurtoaud).toFixed(2)).toString() + "/l";
                        break;
                    case 6:
                        //eur to mxn
                        output.textContent = "$" + ((this.curInput * eurtomxn).toFixed(2)).toString() + "/l";
                        break;
                }
                break;
            case 1:
                //usd
                switch (Number(this.curSel2)) {
                    case 0:
                        //usd to eur
                        output.textContent = "€" + ((this.curInput * GPL * usdtoeur).toFixed(2)).toString() + "/l";
                        break;
                    case 1:
                        //usd to usd
                        output.textContent = "$" + this.curInput + "/gal";
                        break;
                    case 2:
                        //usd to cad
                        output.textContent = ((this.curInput * GPL * 100 * usdtocad).toFixed(1)).toString() + "¢/l";
                        break;
                    case 3:
                        //usd to gbp
                        output.textContent = "£" + ((this.curInput * GPL * usdtogbp).toFixed(2)).toString() + "/l";
                        break;
                    case 4:
                        //usd to lbp
                        output.textContent = "£" + ((this.curInput * GPL * usdtolbp * 20).toFixed(0)).toString() + "/20l";
                        break;
                    case 5:
                        //usd to aud
                        output.textContent = "$" + ((this.curInput * GPL * usdtoaud).toFixed(2)).toString() + "/l";
                        break;
                    case 6:
                        //usd to mxn
                        output.textContent = "$" + ((this.curInput * GPL * usdtomxn).toFixed(2)).toString() + "/l";
                        break;
                }
                break;
            case 2:
                //cad
                switch (Number(this.curSel2)) {
                    case 0:
                        //cad to eur
                        output.textContent = "€" + ((this.curInput / 100 * cadtoeur).toFixed(2)).toString() + "/l";
                        break;
                    case 1:
                        //cad to usd
                        output.textContent = "$" + ((this.curInput / 100 * LPG * cadtousd).toFixed(2)).toString() + "/gal";
                        break;
                    case 2:
                        //cad to cad
                        output.textContent = this.curInput + "¢/l";
                        break;
                    case 3:
                        //cad to gbp
                        output.textContent = "£" + ((this.curInput / 100 * cadtogbp).toFixed(2)).toString() + "/l";
                        break;
                    case 4:
                        //cad to lbp
                        output.textContent = "£" + ((this.curInput / 100 * cadtolbp * 20).toFixed(0)).toString() + "/20l";
                        break;
                    case 5:
                        //cad to aud
                        output.textContent = "$" + ((this.curInput / 100 * cadtoaud).toFixed(2)).toString() + "/l";
                        break;
                    case 6:
                        //cad to mxn
                        output.textContent = "$" + ((this.curInput / 100 * cadtomxn).toFixed(2)).toString() + "/l";
                        break;
                }
                break;
            case 3:
                //gbp
                switch (Number(this.curSel2)) {
                    case 0:
                        //gbp to eur
                        output.textContent = "€" + ((this.curInput * gbptoeur).toFixed(2)).toString() + "/l";
                        break;
                    case 1:
                        //gbp to usd
                        output.textContent = "$" + ((this.curInput * LPG * gbptousd).toFixed(2)).toString() + "/gal";
                        break;
                    case 2:
                        //gbp to cad
                        output.textContent = ((this.curInput * 100 * gbptocad).toFixed(1)).toString() + "¢/l";
                        break;
                    case 3:
                        //gbp to gbp
                        output.textContent = "£" + this.curInput + "/l";
                        break;
                    case 4:
                        //gbp to lbp
                        output.textContent = "£" + ((this.curInput * gbptolbp * 20).toFixed(0)).toString() + "/20l";
                        break;
                    case 5:
                        //gbp to aud
                        output.textContent = "$" + ((this.curInput * gbptoaud).toFixed(2)).toString() + "/l";
                        break;
                    case 6:
                        //gbp to mxn
                        output.textContent = "$" + ((this.curInput * gbptomxn).toFixed(2)).toString() + "/l";
                        break;
                }
                break;
            case 4:
                //lbp
                switch (Number(this.curSel2)) {
                    case 0:
                        //lbp to eur
                        output.textContent = "€" + ((this.curInput * lbptoeur / 20).toFixed(2)).toString() + "/l";
                        break;
                    case 1:
                        //lbp to usd
                        output.textContent = "$" + ((this.curInput * LPG * lbptousd / 20).toFixed(2)).toString() + "/gal";
                        break;
                    case 2:
                        //lbp to cad
                        output.textContent = ((this.curInput * 100 * lbptocad / 20).toFixed(1)).toString() + "¢/l";
                        break;
                    case 3:
                        //lbp to gbp
                        output.textContent = "£" + ((this.curInput * lbptogbp / 20).toFixed(2)).toString() + "/l";
                        break;
                    case 4:
                        //lbp to lbp
                        output.textContent = "£" + this.curInput + "/20l";
                        break;
                    case 5:
                        //lbp to aud
                        output.textContent = "$" + ((this.curInput * lbptoaud / 20).toFixed(2)).toString() + "/l";
                        break;
                    case 6:
                        //lbp to mxn
                        output.textContent = "$" + ((this.curInput * lbptomxn / 20).toFixed(2)).toString() + "/l";
                        break;
                }
                break;
            case 5:
                //aud
                switch (Number(this.curSel2)) {
                    case 0:
                        //aud to eur
                        output.textContent = "€" + ((this.curInput * audtoeur).toFixed(2)).toString() + "/l";
                        break;
                    case 1:
                        //aud to usd
                        output.textContent = "$" + ((this.curInput * LPG * audtousd).toFixed(2)).toString() + "/gal";
                        break;
                    case 2:
                        //aud to cad
                        output.textContent = ((this.curInput * 100 * audtocad).toFixed(1)).toString() + "¢/l";
                        break;
                    case 2:
                        //aud to gbp
                        output.textContent = "£" + ((this.curInput * audtogbp).toFixed(2)).toString() + "/l";
                        break;
                    case 3:
                        //aud to lbp
                        output.textContent = "£" + ((this.curInput * audtolbp * 20).toFixed(2)).toString() + "/20l";
                        break;
                    case 4:
                        //aud to aud
                        output.textContent = "$" + this.curInput + "/l";
                        break;
                    case 5:
                        //aud to mxn
                        output.textContent = "$" + ((this.curInput * audtomxn).toFixed(2)).toString() + "/l";
                        break;
                }
                break;
            case 6:
                //mxn
                switch (Number(this.curSel2)) {
                    case 0:
                        //mxn to eur
                        output.textContent = "€" + ((this.curInput * mxntoeur).toFixed(2)).toString() + "/l";
                        break;
                    case 1:
                        //mxn to usd
                        output.textContent = "$" + ((this.curInput * LPG * mxntousd).toFixed(2)).toString() + "/gal";
                        break;
                    case 2:
                        //mxn to cad
                        output.textContent = ((this.curInput * 100 * mxntocad).toFixed(1)).toString() + "¢/l";
                        break;
                    case 2:
                        //mxn to gbp
                        output.textContent = "£" + ((this.curInput * mxntogbp).toFixed(2)).toString() + "/l";
                        break;
                    case 3:
                        //mxn to lbp
                        output.textContent = "£" + ((this.curInput * mxntolbp * 20).toFixed(2)).toString() + "/20l";
                        break;
                    case 4:
                        //mxn to aud
                        output.textContent = "$" + ((this.curInput * mxntoaud).toFixed(2)).toString() + "/l";
                        break;
                    case 5:
                        //mxn to mxn
                        output.textContent = "$" + this.curInput + "/l";
                        break;
                }
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bgilliam/Documents/GitHub/PetrolPriceConverter/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Petrol Price Converter</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="convertSelect">\n    <ion-card-content>\n      <ion-item>\n        <ion-label color="primary" floating>Click here to Enter Value</ion-label>\n        <ion-input [(ngModel)]="curInput" type="number" clearInput></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Convert from</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-select [(ngModel)]="convertFrom" (ionChange)="onChange1(convertFrom);curConvert();">\n          <ion-option value="0">€/l Euro per Litre</ion-option>\n          <ion-option value="1" checked="true">$/US Dollars per US liquid gallon</ion-option>\n          <ion-option value="2">¢/l Canadian cents per Litre</ion-option>\n          <ion-option value="3">£/l British Pounds per Litre</ion-option>\n          <ion-option value="4">£/20l Lebanese Pounds per 20 Litres</ion-option>\n          <ion-option value="5">$/l Australian Dollars per Litre</ion-option>\n          <ion-option value="6">$/l Mexican Pesos per Litre</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Convert to</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-select [(ngModel)]="convertTo" (ionChange)="onChange2(convertTo);curConvert();">\n          <ion-option value="0" checked="true">€/l Euro per Litre</ion-option>\n          <ion-option value="1">$/US Dollars per US liquid gallon</ion-option>\n          <ion-option value="2">¢/l Canadian cents per Litre</ion-option>\n          <ion-option value="3">£/l British Pounds per Litre</ion-option>\n          <ion-option value="4">£/20l Lebanese Pounds per 20 Litres</ion-option>\n          <ion-option value="5">$/l Australian Dollars per Litre</ion-option>\n          <ion-option value="6">$/l Mexican Pesos per Litre</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Output:</ion-label>\n        <ion-label id="curOutput"></ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/bgilliam/Documents/GitHub/PetrolPriceConverter/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_exchange_rate_service_exchange_rate_service__["a" /* ExchangeRateServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_exchange_rate_service_exchange_rate_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* PetrolPriceConverter */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* PetrolPriceConverter */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* PetrolPriceConverter */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_exchange_rate_service_exchange_rate_service__["a" /* ExchangeRateServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetrolPriceConverter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PetrolPriceConverter = /** @class */ (function () {
    function PetrolPriceConverter(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    PetrolPriceConverter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bgilliam/Documents/GitHub/PetrolPriceConverter/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/bgilliam/Documents/GitHub/PetrolPriceConverter/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], PetrolPriceConverter);
    return PetrolPriceConverter;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map