/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function IConfig() { }
function IConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    IConfig.prototype.clearIfNotMatch;
    /** @type {?} */
    IConfig.prototype.dropSpecialCharacters;
    /** @type {?} */
    IConfig.prototype.specialCharacters;
    /** @type {?} */
    IConfig.prototype.patterns;
}
export var /** @type {?} */ config = new InjectionToken('config');
// tslint:disable-next-line:variable-name
export var /** @type {?} */ new_config = new InjectionToken('NEW_CONFIG');
// tslint:disable-next-line:variable-name
export var /** @type {?} */ initial_config = new InjectionToken('INITIAL_CONFIG');
export var /** @type {?} */ initialConfig = {
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
