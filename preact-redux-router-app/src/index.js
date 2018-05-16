/**
 * @file The file of app init
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */

import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import 'preact/devtools';

import store from './store';

let wrap;
const renderApp = () => {
    const App = require('./component/app');
    wrap = render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'),
        wrap
    );
};

renderApp(false);

module.hot && module.hot.accept(
    './component/app.js',
    renderApp
)
