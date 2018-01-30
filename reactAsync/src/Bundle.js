import React, { Component } from 'react'
import { elementType } from 'react-prop-types';
import PropTypes from 'prop-types'
// import { withRouter, Redirect } from 'react-router'
class Bundle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mod: null
    }
    this.load = this.load.bind(this);
  }
  componentWillMount() {
    this.load(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }
  load(props) {
    this.setState({
      mod: null
    })
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }
  render() {
    if (!this.state.mod)
      return false
    return this.props.children(this.state.mod)
  }
}
Bundle.propTypes = {
  load:PropTypes.func,
  children: PropTypes.func
}
export default Bundle
// export default withRouter(Bundle)
