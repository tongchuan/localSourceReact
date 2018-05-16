import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { connect } from 'preact-redux';
import * as Actions from '../action/index';
console.log("Actions:",Actions);

class About extends Component {
    componentDidMount() {
        //const accountId = this.props.match.params.accountId;
        this.props.getAbout();
        //alert("about:this.props"+JSON.stringify(this.props));
    }
    loadingMode = () => (
        <p>Loading...</p>
    )
    // dispatch(eventName, data) {
    //     this.props.dispatch && this.props.dispatch(eventName, data);
    // }
    // onActionAbout(e) {
    //     this.dispatch(getAbout(), e);
    // }
    completeMode = (data) => (
         <div>
            <h2>Load successfully!</h2>
            <ul>
                <li>title: {data.title}</li>
                <li>author: {data.author}</li>
                <p><Link to="/">Back to Home</Link></p>
            </ul>
        </div>
    )
    render(state) {
        //alert("render:this.props:"+JSON.stringify(state));
        return state.about.loading ? this.loadingMode() : this.completeMode(state.about.about);
    }
    // render(state) {
    //     alert("this.props:"+JSON.stringify(this.props));
    //     alert("this.state:"+JSON.stringify(state));
    //     return state.aboutReducer.loading ? this.loadingMode() : this.completeMode(state.aboutReducer.about);
    // }
}

//const mapStateToProps = ({ loading, about }) => {
const mapStateToProps = (state, ownProps) => {
  //alert("component:about--:"+JSON.stringify(state));
   return state;
    // return {
    //     loading:state.aboutReducer.loading,
    //     about:state.aboutReducer.about
    // }
}

//dispatch当前action(fetchUser)
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        getAbout:function () {
            return dispatch(Actions.getAbout());
        }
    }
)

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(About);
