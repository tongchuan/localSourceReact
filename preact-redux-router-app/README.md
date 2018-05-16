# Preact-redux-router-app


## Preact 生态

1. preact
2. preact-router
3. preact-redux

> For replacement React and ReactDOM, you can use preact-compat.

## preact和react有什么不同?

1. 需要在".babelrc"设置"babel-plugin-transform-react-jsx"来转换Preact，抛出全局对象"h".
    ```
    "plugins": [
        ["transform-react-jsx", { "pragma": "h" }]
    ]
    ```
2. 组件的render方法可配置"props"和"state"参数，用户熟悉和数据的传递：
    ```
    render(props, state) {
        return (
            <div>{ state.context }</div>
        );
    }
    ```
    So, we can destructuring assignment and initial state in parameter.
    ```
    render(props, { context = '' }) {
        return (
            <div>{ context }</div>
        );
    }
    ```
4. 集成react开发工具
    ```
    import 'preact/devtools';
    ```

    And you can see your preact component in React dev tools.

5. 当启用热更新时，需要额外设置组件，以便自动更换，实时change修改!
    ```
    import { h, render } from 'preact';

    let root;
    renderApp = () => {
        root = render(<App />, document.body, root);
    }

    module.hot && module.hot.accept(
        './app.js',
        renderApp
    );
    ```
    设置完后组件有任何修改，将自动触发热更新

## 用preact-compat减小应用程序的大小

```
// in webpack.config.js
{
    "resolve": {
        "alias": {
            "react": "preact-compat",
            "react-dom": "preact-compat"
        }
    }
}
```

> preact-compat will replace React, ReactDOM to Preact.

## Integrate with React-Router (replace preact-router)

```
// in webpack.config.js
{
    "resolve": {
        "alias": {
            "react": "preact-compat",
            "react-dom": "preact-compat"
        }
    }
}
```

and also need

```
$ yarn add preact-compat react-router-dom
```

So, we can use react-router-dom API in my App without preact-router!

## Integrate with React-Hot-Loader in React app.

```
// in webpack.config.js
{
    "resolve": {
        "alias": {
            "react": "preact-compat",
            "react-dom": "preact-compat",
            'preact-compat': 'preact-compat/dist/preact-compat'
        }
    }
}
```

And you can fix React-Hot-Loader can not find React.createElement API issue.

> But!!!!!!!!!! React-Hot-Loader can not work in Preact app, so you only can use in React warped app as Preact.
