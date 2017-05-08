import React, { Component } from 'react'
import { withRouter,Redirect } from 'react-router'
export default withRouter(class Bundle extends React.Component {
  constructor(props){
    super(props);
    console.log(this);
    this.state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    }
    this.load = this.load.bind(this);
  }


    componentWillMount() {
      console.log(this.props);
      if(this.props.location.pathname!='/login'){
        
      }else{
        this.load(this.props)
      }

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
      if(this.props.location.pathname!='/login'){
        return <Redirect to="/login" />
      }
        if (!this.state.mod)
            return false
        return this.props.children(this.state.mod)
    }
})
