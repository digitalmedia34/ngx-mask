webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\nmat-sidenav {\r\n  display: flex;\r\n  overflow: visible;\r\n}\r\n\r\n</style>\r\n\r\n<mat-sidenav-container>\r\n\r\n  <mat-sidenav mode=\"side\" opened=\"false\">\r\n    Side menu\r\n  </mat-sidenav>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <header>\r\n          <h1>\r\n            <span class=\"jq-label\">Angular</span>\r\n            <span class=\"plugin-name\">Mask Plugin</span>\r\n          </h1>\r\n          <span class=\"subtitle\">An Angular Plugin to make masks on form fields and html elements.</span>\r\n        </header>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <mat-grid-list cols=\"1\" rowHeight=\"140px\">\r\n\r\n          <mat-grid-tile>\r\n            <mat-toolbar color=\"primary\">\r\n              <span>Examples</span>\r\n            </mat-toolbar>\r\n          </mat-grid-tile>\r\n\r\n        </mat-grid-list>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title>Mask common case</mat-card-title>\r\n            <mat-card-subtitle>An case of date mask</mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <div class=\"row\">\r\n              <div class=\"col-mat-3\">\r\n                <mat-input-container>\r\n                  <input matInput placeholder=\"Date\" mask=\"00/00/0000\" [formControl]=\"form\" [(ngModel)]=\"dateModel\">\r\n                  <mat-hint><b>Mask:</b> 00/00/0000</mat-hint>\r\n                </mat-input-container>\r\n              </div>\r\n              <div class=\"col-mat-3\">\r\n                <p><b>FormControl:</b> {{ form.value ? form.value : 'Empty' }}</p>\r\n              </div>\r\n              <div class=\"col-mat-3\">\r\n                <p><b>NgModel:</b> {{ dateModel ? dateModel : 'Empty' }}</p>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title>Other common cases</mat-card-title>\r\n            <mat-card-subtitle>Other common cases that you could apply in your projects. Try your self. :D</mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <div class=\"row\">\r\n              <div class=\"col-mat-3\">\r\n                <mat-input-container>\r\n                  <input matInput placeholder=\"Date and Hour\" mask=\"00/00/00 00:00:00\">\r\n                  <mat-hint><b>Mask:</b> 00/00/00 00:00:00</mat-hint>\r\n                </mat-input-container>\r\n              </div>\r\n\r\n              <div class=\"col-mat-3\">\r\n                <mat-input-container>\r\n                  <input matInput placeholder=\"Hour\" mask=\"00:00:00\">\r\n                  <mat-hint><b>Mask:</b> 00:00:00</mat-hint>\r\n                </mat-input-container>\r\n              </div>\r\n\r\n              <div class=\"col-mat-3\">\r\n                <mat-input-container>\r\n                  <input matInput placeholder=\"Mixed Type\" mask=\"AAA 000-S0S\">\r\n                  <mat-hint><b>Mask:</b> AAA 000-S0S</mat-hint>\r\n                </mat-input-container>\r\n              </div>\r\n\r\n              <div class=\"col-mat-3\">\r\n                <mat-input-container>\r\n                  <input matInput placeholder=\"Phone\" mask=\"(000) 000-0000\">\r\n                  <mat-hint><b>Mask:</b> (000) 000-0000</mat-hint>\r\n                </mat-input-container>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title>Masks and special characters</mat-card-title>\r\n            <mat-card-subtitle>\r\n              You could define if you want special characters propagate to the model or not with the\r\n              attribute <b>dropSpecialCharacters</b>.\r\n            </mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <div class=\"row\">\r\n              <div class=\"col-mat-3\">\r\n                <mat-input-container>\r\n                  <input matInput placeholder=\"CPF\" [dropSpecialCharacters]=\"true\" mask=\"000.000.000-00\" [formControl]=\"cpfFormControl\" [(ngModel)]=\"cpfModel\">\r\n                  <mat-hint><b>Mask:</b> 000.000.000-00</mat-hint>\r\n                </mat-input-container>\r\n              </div>\r\n              <div class=\"col-mat-3\">\r\n                <p><b>FormControl:</b> {{ cpfFormControl.value ? cpfFormControl.value : 'Empty' }}</p>\r\n              </div>\r\n              <div class=\"col-mat-3\">\r\n                <p><b>NgModel:</b> {{ cpfModel ? cpfModel : 'Empty' }}</p>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title>Clear if not match</mat-card-title>\r\n            <mat-card-subtitle>\r\n              You could clear the input if the value not match the mask, you'll just need to set <b>clearIfNotMatch</b> attribute.\r\n            </mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <div class=\"row\">\r\n              <div class=\"col-mat-3\">\r\n                <mat-input-container>\r\n                  <input matInput placeholder=\"Clear if not match\" [clearIfNotMatch]=\"true\" mask=\"000.000\"\r\n                    [formControl]=\"clearIfNotMatchForm\" [(ngModel)]=\"clearIfNotMatchModel\">\r\n                  <mat-hint><b>Mask:</b> 000.000</mat-hint>\r\n                </mat-input-container>\r\n              </div>\r\n              <div class=\"col-mat-3\">\r\n                <p><b>FormControl:</b> {{ clearIfNotMatchForm.value ? clearIfNotMatchForm.value : 'Empty' }}</p>\r\n              </div>\r\n              <div class=\"col-mat-3\">\r\n                <p><b>NgModel:</b> {{ clearIfNotMatchModel ? clearIfNotMatchModel : 'Empty' }}</p>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n        <mat-grid-list cols=\"1\" rowHeight=\"140px\">\r\n\r\n          <mat-grid-tile>\r\n            <mat-toolbar color=\"primary\">\r\n              <span>Documentation - comming soon...</span>\r\n            </mat-toolbar>\r\n          </mat-grid-tile>\r\n\r\n        </mat-grid-list>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('30081991');
        this.cpfFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('04787954778');
        this.clearIfNotMatchForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_mask_ngx_mask_module__ = __webpack_require__("../../../../../src/app/ngx-mask/ngx-mask.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_mask_ngx_mask_module__["a" /* NgxMaskModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-mask/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return new_config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initial_config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var config = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('config');
// tslint:disable-next-line:variable-name
var new_config = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('NEW_CONFIG');
// tslint:disable-next-line:variable-name
var initial_config = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('INITIAL_CONFIG');
var initialConfig = {
    clearIfNotMatch: false,
    dropSpecialCharacters: true,
    specialCharacters: ['/', '(', ')', '.', ':', '-', ' ', '+'],
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true
        },
        'A': {
            pattern: new RegExp('\[a-zA-Z0-9\]')
        },
        'S': {
            pattern: new RegExp('\[a-zA-Z\]')
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/ngx-mask/mask.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mask_service__ = __webpack_require__("../../../../../src/app/ngx-mask/mask.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var resolvedPromise = Promise.resolve(null);
var MaskDirective = (function () {
    function MaskDirective(_elementRef, _renderer, _maskService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._maskService = _maskService;
    }
    MaskDirective_1 = MaskDirective;
    MaskDirective.prototype.ngOnInit = function () {
        var _this = this;
        resolvedPromise.then(function () { return _this._maskService.applyValueChanges(_this._elementRef.nativeElement); });
    };
    Object.defineProperty(MaskDirective.prototype, "maskExpression", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.maskExpression = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
        set: function (value) {
            if (!value || !Array.isArray(value) || Array.isArray(value) && !value.length) {
                return;
            }
            this._maskService.maskSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "patterns", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._maskService.maskAvailablePatterns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
        set: function (value) {
            this._maskService.dropSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "clearIfNotMatch", {
        set: function (value) {
            this._maskService.clearIfNotMatch = value;
        },
        enumerable: true,
        configurable: true
    });
    MaskDirective.prototype.onInput = function (e) {
        var el = e.target;
        var position = el.selectionStart;
        var caretShift = 0;
        this._maskService.applyValueChanges(this._elementRef.nativeElement, position, function (shift) { return caretShift = shift; });
        el.selectionStart = el.selectionEnd = position + (
        // tslint:disable-next-line
        e.inputType === 'deleteContentBackward'
            ? 0
            : caretShift);
    };
    MaskDirective.prototype.onBlur = function () {
        this._maskService.clearIfNotMatchFn(this._elementRef.nativeElement);
        this._maskService.applyValueChanges(this._elementRef.nativeElement);
        this._maskService.onTouch();
    };
    /** It writes the value in the input */
    MaskDirective.prototype.writeValue = function (inputValue) {
        this._elementRef.nativeElement.value = this._maskService.applyMask(inputValue, this._maskService.maskExpression);
        this._maskService.applyValueChanges(this._elementRef.nativeElement);
    };
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnChange = function (fn) {
        this._maskService.onChange = fn;
    };
    // tslint:disable-next-line
    MaskDirective.prototype.registerOnTouched = function (fn) {
        this._maskService.onTouch = fn;
    };
    /** It disables the input element */
    MaskDirective.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            return this._renderer.setAttribute(this._elementRef.nativeElement, 'disabled', 'true');
        }
        return this._renderer.removeAttribute(this._elementRef.nativeElement, 'disabled');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('mask'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MaskDirective.prototype, "maskExpression", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "specialCharacters", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "patterns", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "dropSpecialCharacters", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MaskDirective.prototype, "clearIfNotMatch", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onInput", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MaskDirective.prototype, "onBlur", null);
    MaskDirective = MaskDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[mask]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return MaskDirective_1; }),
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_2__mask_service__["a" /* MaskService */]
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_2__mask_service__["a" /* MaskService */]])
    ], MaskDirective);
    return MaskDirective;
    var MaskDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-mask/mask.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("../../../../../src/app/ngx-mask/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MaskService = (function () {
    function MaskService(
        // tslint:disable-next-line:no-any
        document, _config) {
        this.document = document;
        this._config = _config;
        this.maskExpression = '';
        // tslint:disable-next-line
        this.onChange = function (_) { };
        this.onTouch = function () { };
        this._shift = new Set();
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this._regExpForRemove = new RegExp(this.maskSpecialCharacters
            .map(function (item) { return "\\" + item; })
            .join('|'), 'gi');
    }
    MaskService.prototype.applyMask = function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined || inputValue === null) {
            return '';
        }
        var cursor = 0;
        var result = '';
        var inputArray = inputValue.toString()
            .split('');
        // tslint:disable-next-line
        for (var i = 0, inputSymbol = inputArray[0]; i
            < inputArray.length; i++, inputSymbol = inputArray[i]) {
            if (result.length === maskExpression.length) {
                break;
            }
            if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                result += inputSymbol;
                cursor++;
            }
            else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                result += maskExpression[cursor];
                cursor++;
                this._shift.add(cursor);
                i--;
            }
            else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1
                && this.maskAvailablePatterns[maskExpression[cursor]]
                && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                cursor++;
                i--;
            }
        }
        if (result.length + 1 === maskExpression.length
            && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        var shift = 1;
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        return result;
    };
    MaskService.prototype.applyValueChanges = function (element, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        var val = element.value;
        var maskedInput = this.applyMask(val, this.maskExpression, position, cb);
        element.value = maskedInput;
        if (this.dropSpecialCharacters === true) {
            this.onChange(this._removeMask(maskedInput));
        }
        else {
            this.onChange(maskedInput);
        }
        if (element !== this.document.activeElement) {
            this.clearIfNotMatchFn(element);
        }
    };
    MaskService.prototype.clearIfNotMatchFn = function (element) {
        if (this.clearIfNotMatch === true && this.maskExpression.length
            !== element.value.length) {
            element.value = '';
        }
    };
    MaskService.prototype._removeMask = function (value) {
        if (!value) {
            return value;
        }
        return value.replace(this._regExpForRemove, '');
    };
    MaskService.prototype._checkSymbolMask = function (inputSymbol, maskSymbol) {
        return inputSymbol
            === maskSymbol
            || this.maskAvailablePatterns[maskSymbol] && this.maskAvailablePatterns[maskSymbol].pattern
                && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
    };
    MaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* DOCUMENT */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* config */])),
        __metadata("design:paramtypes", [Object, Object])
    ], MaskService);
    return MaskService;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-mask/ngx-mask.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxMaskModule; });
/* unused harmony export _configFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mask_directive__ = __webpack_require__("../../../../../src/app/ngx-mask/mask.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("../../../../../src/app/ngx-mask/config.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgxMaskModule = (function () {
    function NgxMaskModule() {
    }
    NgxMaskModule_1 = NgxMaskModule;
    NgxMaskModule.forRoot = function (configValue) {
        return {
            ngModule: NgxMaskModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__config__["d" /* new_config */], useValue: configValue },
                { provide: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* initial_config */], useValue: __WEBPACK_IMPORTED_MODULE_3__config__["b" /* initialConfig */] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* config */], useFactory: _configFactory, deps: [__WEBPACK_IMPORTED_MODULE_3__config__["c" /* initial_config */], __WEBPACK_IMPORTED_MODULE_3__config__["d" /* new_config */]] },
            ]
        };
    };
    NgxMaskModule = NgxMaskModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mask_directive__["a" /* MaskDirective */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mask_directive__["a" /* MaskDirective */]]
        })
    ], NgxMaskModule);
    return NgxMaskModule;
    var NgxMaskModule_1;
}());

/**
 * @internal
 */
// tslint:disable-next-line:max-line-length
function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : __assign({}, initConfig, configValue);
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map