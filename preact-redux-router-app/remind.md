{
  "name": "try-preact",
  "version": "1.0.0",
  "description": "Try Preact.",
  "main": "index.js",
  "scripts": {
    "start": "babel-node ./node_modules/.bin/webpack-dev-server --inline --progress --colors --open",
    "start":"babel-node devServer.js --hot --inline --open",
    "start": "babel-node ./node_modules/.bin/webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --open",
    "dev": "babel-node ./node_modules/.bin/webpack --watch",
    "build": "babel-node ./node_modules/.bin/webpack --optimize-minimize"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mvpdw06/try-preact.git"
  },
  "author": "RyanHsu",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/mvpdw06/try-preact/issues"
  },
  "homepage": "https://github.com/mvpdw06/try-preact#readme",
  "dependencies": {
    "babel-cli": "^6.24.1",
    "babel-loader": "^7.0.0",
    "babel-plugin-transform-react-jsx": "^6.24.1",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "linkstate": "^1.0.1",
    "preact": "^8.1.0",
    "preact-compat": "^3.16.0",
    "preact-redux": "^2.0.1",
    "react-router-dom": "^4.1.1",
    "redux": "^3.7.0",
    "redux-thunk": "^2.2.0",
    "webpack": "^3.8.1",
    "webpack-dev-server": "^2.4.5",
    "whatwg-fetch": "^2.0.3"
  },
  "devDependencies": {
    "html-webpack-plugin": "^3.0.7"
  }
}
