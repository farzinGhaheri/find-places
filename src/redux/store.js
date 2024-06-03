import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';
import { rootEpic } from './epics/searchEpic';

const epicMiddleware = createEpicMiddleware();

const middleware = [epicMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

epicMiddleware.run(rootEpic);

export default store;