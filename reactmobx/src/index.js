import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import Bundle from '@/bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '@/containers/App'
import NewsListContainer                 from 'bundle-loader?lazy&name=[name]!@/containers/news/NewsList' ;
import NewsTestContainer                 from 'bundle-loader?lazy&name=[name]!@/containers/news/NewsTest' ;
import FormTestContainer                 from 'bundle-loader?lazy&name=[name]!@/containers/form/FormTest' ;

const NewsList             = (props) => (<Bundle load={NewsListContainer}             {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const NewsTest             = (props) => (<Bundle load={NewsTestContainer}             {...props}>{ (Page) => <Page {...props} />}</Bundle>)
const FormTest             = (props) => (<Bundle load={FormTestContainer}             {...props}>{ (Page) => <Page {...props} />}</Bundle>)


ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={NewsList}/>
      <Route path="/news" component={NewsList} />
      <Route path="/test" component={NewsTest} />
      <Route path="/formtest" component={FormTest} />
    </Route>
  </Router>,
  document.getElementById('root')
)