import { h } from 'preact';
import { Link } from 'react-router-dom';

const Error = () => (
    <div>
        <p>Opps! there has some error occur.</p>
        <p><Link to="/">Back to Home</Link></p>
    </div>
)

module.exports = Error;