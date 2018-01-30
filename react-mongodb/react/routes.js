import React from 'react'
import { Route,} from 'react-router'

import App from './containers/App';
import User from './containers/User';
const routes = (
  <Route>
    <Route path="/" component={App}>
      <Route path="/user" component={User} />
      {/*<Route path="/houseCheck" getComponent={houseCheck1} />
      <Route path="/houseManage" getComponent={houseManage1} />
      <Route path="/houseDetail/:houseId" getComponent={houseDetail1} />
      <Route path="/roomDetail/:houseId/:roomId" getComponent={roomDetail1} />
      <Route path="/popCheck" getComponent={popCheck1} />
      <Route path="/map" getComponent={map} />
      <Route path="/test" getComponent={test} />*/}
    </Route>

    {/*<Route path="/login" getComponent={Login1}></Route>*/}
  </Route>
);
export default routes;
