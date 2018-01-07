import React, { Component } from 'react'
import { withRouter,Redirect } from 'react-router'
export default withRouter(class Bundle extends React.Component {
  constructor(props){
    super(props);
    // console.log(this);
    this.state = {
    //   login:{token:'333333'},
        // short for "module" but that's a keyword in js, so "mod"
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
})
