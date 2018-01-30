import React,{ Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actionsUser'
import { bindActionCreators } from 'redux';
class User extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div>
        <div>User</div>
        <div>User</div>
        <div>{/*location*/}</div>
      </div>
    )
  }
}
//
// //影射Store的State到App的Props, 这里用做数据
function mapStateToProps(state) {
    return state;
}
//
// //影射Store的dispath到App的Props,这里用做操作(事件)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}
//
// //练接是中间组件react-redux功能,用于把React的Props, State, Event和Redux的关联
// export default connect(mapStateToProps, mapDispatchToProps)(User);

// function mapStateToProps(state) {
//   return { todos: state }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addTodo }, dispatch)
// }
export default connect(mapStateToProps, mapDispatchToProps)(User)
