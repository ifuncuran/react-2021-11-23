import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';
import createUUID from './middleware/createUUID';

import reducer from './reducer';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger,createUUID))
);
