import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import userAction from '../actions/userAction'
import newsAction from '../actions/newsAction'
import PropTypes from 'prop-types'
// console.log({...userAction, ...newsAction})
// console.log({...userAction})
// console.log(connect)
@connect(
  state => {console.log(state);return state},
  // dispatch => bindActionCreators({...userAction}, dispatch)
  dispatch => bindActionCreators({...userAction, ...newsAction}, dispatch)
)
export default class Detail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 111
    }
    // console.log(userAction.user1({name:'1111'}))
    console.log(this.props)
  }
  // constructor (props) {
  //   spuer(props)
  // }
  componentWillMount(){
    console.log('componentWillMount')
  }
  
  componentDidMount(){
    console.log('componentDidMount')
  }

  render () {
    
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div>
      {JSON.stringify(this.props.userStore.userItem)}
      <input type="button" onClick={this.props.user} value="获取数据" />
      </div>
    )
  }
}
Detail.propTypes = {
  userStore:PropTypes.object,
  user: PropTypes.func
}