import { h, Component } from 'preact';
import { Link } from 'react-router-dom';
import { connect } from 'preact-redux';
import { fetchUser } from '../action';

class Profile extends Component {
    componentDidMount() {
        const accountId = this.props.match.params.accountId;
        this.props.fetchUser(accountId);
    }
    loadingMode = () => (
        <p>Loading...</p>
    )
    completeMode = (user) => (
        <div>
            <h2>Load successfully!</h2>
            <ul>
                <li>name: {user.name}</li>
                <li>url: {user.avatar_url}</li>
                <p><Link to="/">Back to Home</Link></p>
            </ul>
        </div>
    )
    render({ loading, user }) {
        return loading ? this.loadingMode() : this.completeMode(user);
    }
}

const mapStateToProps = ({ loading, user }) => {
    return {
        loading,
        user
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        fetchUser: (accountId) => dispatch(fetchUser(accountId))
    }
)

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);