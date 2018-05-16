import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { connect } from 'preact-redux';
//import {contact} from '../action/index';
import * as Actions from '../action/index';

class Contact extends Component {
    componentDidMount() {
        //this.props.getLx();
    }
    loadingMode = () => (
        <p>Loading...</p>
    )
    optParams = () => (
        {
            loading: false,
            mark:'change',
            contact: {
                "name":"opopop",
                "phone": "17701321596",
                "email": "elieen@163.com"
            }
        }
  )
  completeMode = (data) => (
       <div>
          <h2>Load successfully!</h2>
          <ul>
              <li>title:{data.name}</li>
              <li>phone:{data.phone}</li>
              <li>author: {data.email}</li>
              <p><Link to = "/">Back to Home</Link></p>
              <p onClick = {this.props.getLx.bind(this, this.optParams())}>click me</p>
          </ul>
      </div>
  )
  render(state) {
      return state.contactData.loading ? this.loadingMode() : this.completeMode(state.contactData.contact);
  }
}

//const mapStateToProps = ({ loading, about }) => {
let count = 0;
const mapStateToProps = (state, ownProps) => {
   count+=1;
   console.log('state.contactData:'+count+'',state.contactData);
   return state;
}

//dispatch当前action(getLx):
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        //getLx: Actions.getLx(dispatch),//另一种写法:小彤的写法
        getLx: (data) => dispatch(Actions.getLx(data))
    }
)


module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);
