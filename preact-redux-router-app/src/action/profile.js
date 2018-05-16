/**
 * @file The file of action for dispatch
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */
import {FETCH_USER, FETCH_USERFILLED} from '../lib/const/actionType';

const profile = {
    fetchUser: (accountId) => (dispatch) => {
       dispatch({ type: FETCH_USER });
       fetch(`https://api.github.com/users/${accountId}`)
           .then(response => response.json())
           .then((user) => {
               dispatch({
                   type: FETCH_USERFILLED,
                   data: user
               })
           })
           .catch(error => console.log(error));
    },
}

module.exports = profile;
