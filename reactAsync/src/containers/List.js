import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import userAction from '../actions/userAction'
import newsAction from '../actions/newsAction'
import PropTypes from 'prop-types'

@connect(
  state => state,
  dispatch => bindActionCreators({...userAction, ...newsAction}, dispatch)
)
export default class List extends React.Component {
  
  constructor (props) {
    super(props)
    console.log(this.props.news)
  }

  render () {
    console.log(this.props.newsStore.list)
    return (
      <div>
      {this.props.newsStore.list.map((item, index) => {
        return (
          <div key={index}>{item.name}</div>
        )
      })}
      <input type="button" onClick={this.props.news} value="获取数据" />
      </div>
    )
  }
}
List.propTypes = {
  newsStore:PropTypes.object,
  news: PropTypes.func
}