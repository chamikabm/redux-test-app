import * as resultActionCreators from './result';
import * as counterActionCreators from './counter';

export const actionCreators = {
  ...resultActionCreators,
  ...counterActionCreators,
};
