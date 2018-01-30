import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import Bundle from '@/bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-tree/assets/index.css';
import '@/less/main.less';
import App from '@/containers/App'
import IndexContainer                 from 'bundle-loader?lazy&name=[name]!@/containers/index/Index' ;
import MetaIndexContainer                 from 'bundle-loader?lazy&name=[name]!@/containers/metadb/Index' ;


const Index             = (props) => (<Bundle load={IndexContainer}             {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const MetaIndex             = (props) => (<Bundle load={MetaIndexContainer}             {...props}>{ (Page) => <Page {...props} />}</Bundle>)


ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/metadb" component={MetaIndex} />
    </Route>
  </Router>,
  document.getElementById('root')
)