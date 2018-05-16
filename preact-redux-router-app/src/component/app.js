import { h, Component } from 'preact';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    hashHistory,
} from 'react-router-dom';
import Home from './Home';
import InputStateApp from './InputStateApp';
import SearchPage from './SearchPage';
import Profile from './profile';
import BtnSub from './btnSubmit';
import About from './about';
import Detail from './deatil';
import Contact from './contact';
import Error from './Error';
// import createBrowserHistory from 'history'
// export default class initApp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           name:'',
//           age:'',
//           keyWord:''
//         }
//     }
//
//     componentDidMount() {
//        const { dispatch } = this.props
//         console.log(this.props, 'props')
//         dispatch({type: 'GET_ABOUTINFO'})
//     }
//
// }
// let history = createBrowserHistory()-
 const App = () => (
    <div>
        <h1>Hello Preact.</h1>
        <Router history={hashHistory}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={SearchPage} />
                <Route path="/btnSub" component={BtnSub} />
                <Route path="/profile/:accountId" component={Profile} />
                <Route path="/Inputstateapp" component={InputStateApp} />
                <Route path="/about"  component={About} />
                <Route path="/contact"  component={Contact} />
                <Route path="/deatil" component={Detail} />
                <Route component={Error} />
            </Switch>
        </Router>
    </div>
);

module.exports = App;
