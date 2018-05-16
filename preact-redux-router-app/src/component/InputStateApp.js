import { h, Component }  from 'preact';
import linkState from 'linkstate';
import { Link } from 'react-router-dom';

class InputStateApp extends Component {
    submit = () => {
        console.log('submit value', this.state.text);
    }
    render(props, { text = '' }) {
        return(
            <div>
                <form action="javascript:" onSubmit={this.submit}>
                    <input type="text" value={text} onInput={linkState(this, 'text')} />
                </form>
                <pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
                <p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }
}

module.exports = InputStateApp;