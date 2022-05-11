
export interface IApiResult<T> {
  'hydra:member': Array<T>;
  'hydra:view': HydraViewContent;
  // Identique à :
  // 'hydra:view': {
  //   'hydra:first': string;
  //   'hydra:last': string;
  //   'hydra:next': string|undefined;
  //   'hydra:previous': string|undefined;
  // }
}

interface HydraViewContent {
  'hydra:first': string;
  'hydra:last': string;
  'hydra:next': string|undefined;
  'hydra:previous': string|undefined;
}
