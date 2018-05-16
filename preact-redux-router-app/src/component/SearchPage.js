import { h } from 'preact';
import { withRouter } from 'react-router-dom';

const search = (router, queryAccountId) => {
    if (queryAccountId) {
        router.history.push(`/profile/${encodeURIComponent(queryAccountId)}`);
    }
}

const SearchPage = (router) => {
    return(
        <section>
            <p>Enter an account of Github.</p>
            <input
                type="search"
                placeholder="eg: mvpde06"
                onSearch={(e) => search(router, e.target.value)}
                />
        </section>
    )
}

module.exports = withRouter(SearchPage);
