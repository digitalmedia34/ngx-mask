import { InjectionToken } from '@angular/core';

export interface IConfig {
  clearIfNotMatch: boolean;
  dropSpecialCharacters: boolean;
  specialCharacters: string[];
  patterns: {
    [character: string]: {
      pattern: RegExp,
      optional?: boolean
    }
  };
}
export type optionsConfig = {
  [P in keyof IConfig]?: IConfig[P]
};

export const config: InjectionToken<string> = new InjectionToken('config');
// tslint:disable-next-line:variable-name
export const new_config: InjectionToken<string> = new InjectionToken('NEW_CONFIG');
// tslint:disable-next-line:variable-name
export const initial_config: InjectionToken<IConfig> = new InjectionToken('INITIAL_CONFIG');

export const initialConfig: IConfig = {
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
