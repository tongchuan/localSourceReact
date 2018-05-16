import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { connect } from 'preact-redux';

class Deatil extends Component {
    componentDidMount() {
        //const accountId = this.props.match.params.accountId;
        //this.props.getAbout();
        //alert("profile:this.props:"+JSON.stringify(this.props.fetchUser));
    }
    loadingMode = () => (
        <p>Loading...</p>
    )
    completeMode = (data) => (
        <div>
            <h2>titletitletitletitletitle</h2>
            <div>
              {data.contentData}
            </div>
            <ul>
                <p><Link to="/">Back to Home</Link></p>
            </ul>
        </div>
    )

    render() {
        return !this.props.contentData ? this.loadingMode() : this.completeMode(this.props.contentData);
    }
}


module.exports = Deatil;
