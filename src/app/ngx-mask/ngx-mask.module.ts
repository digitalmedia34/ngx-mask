import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskDirective } from './mask.directive';

import { new_config, initial_config, config, initialConfig, optionsConfig } from './config';

@NgModule({
  imports: [CommonModule],
  exports: [MaskDirective],
  declarations: [MaskDirective]
})
export class NgxMaskModule {

  public static forRoot(configValue?: optionsConfig): ModuleWithProviders {
    return {
      ngModule: NgxMaskModule,
      providers: [
        { provide: new_config, useValue: configValue },
        { provide: initial_config, useValue: initialConfig },
        { provide: config, useFactory: _configFactory, deps: [initial_config, new_config] },
      ]
    };
  }
}

/**
 * @internal
 */
export function _configFactory(initConfig: optionsConfig, configValue: optionsConfig | (() => optionsConfig)): Function | optionsConfig {
   return (typeof configValue === 'function') ? configValue() : { ...initConfig, ...configValue };
}
