import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Bundle from './Bundle'
import App from './containers/App'
import Header from './components/common/Header'

import ListContainer from 'bundle-loader?lazy&name=[name]!./containers/List';
import DetailContainer from 'bundle-loader?lazy&name=[name]!./containers/Detail';
const List = (props) => (<Bundle load={ListContainer}>{ (Page) => <Page {...props} />}</Bundle>)
const Detail = (props) => (<Bundle load={DetailContainer}>{ (Page) => <Page {...props} />}</Bundle>)
@connect (state => state)
export default class MainRouter extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <Router>
            <div>
              <Route exact path="/" component={App}></Route>
              <Route path="/list" component={List}></Route>
              <Route path="/detail" component={Detail}></Route>
            </div>
        </Router>
      </div>
    );
  }
}