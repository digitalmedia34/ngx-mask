import { InjectionToken } from '@angular/core';
export interface IConfig {
    clearIfNotMatch: boolean;
    dropSpecialCharacters: boolean;
    specialCharacters: string[];
    patterns: {
        [character: string]: {
            pattern: RegExp;
            optional?: boolean;
        };
    };
}
export declare type optionsConfig = {
    [P in keyof IConfig]?: IConfig[P];
};
export declare const config: InjectionToken<string>;
export declare const new_config: InjectionToken<string>;
export declare const initial_config: InjectionToken<IConfig>;
export declare const initialConfig: IConfig;
