import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import Bundle from '@/bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '@/containers/App'
import NewsListContainer                 from 'bundle-loader?lazy&name=[name]!@/containers/news/NewsList' ;
import NewsTestContainer                 from 'bundle-loader?lazy&name=[name]!@/containers/news/NewsTest' ;

const NewsList             = (props) => (<Bundle load={NewsListContainer}             {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const NewsTest             = (props) => (<Bundle load={NewsTestContainer}             {...props}>{ (Page) => <Page {...props} />}</Bundle>)


ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NewsList}/>
      <Route path="/news" component={NewsList} />
      <Route path="/test" component={NewsTest} />
    </Route>
  </Router>,
  document.getElementById('root')
)