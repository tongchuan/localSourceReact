import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import userAction from '../actions/userAction'
import newsAction from '../actions/newsAction'
// console.log({...userAction, ...newsAction})
// console.log({...userAction})
// console.log(connect)
@connect(
  state => {console.log(state);return state},
  // dispatch => bindActionCreators({...userAction}, dispatch)
  dispatch => bindActionCreators({...userAction, ...newsAction}, dispatch)
)
export default class App extends React.Component {
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
      <div>AppTESTgddd</div>
    )
  }
}