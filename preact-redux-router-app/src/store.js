/**
 * @file The file of store for data
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers, {initStore} from './reducer';
// import * as reducers from './reducer/index.js'


const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
    console.log("reducers:"+JSON.stringify(reducers));
    const store = createStore(
      reducers,
      initStore(window.jsonData),
      composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware))
    )

module.hot && module.hot.accept(
    './reducer/index.js',
    () => {
        const nextReducer = require('./reducer/index');
        store.replaceReducer(nextReducer);
    }
);

module.exports = store;
