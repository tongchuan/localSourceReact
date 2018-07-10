import React from "react";
import PropTypes from 'prop-types'
import {observer} from 'mobx-react';
import Tree, { TreeNode } from 'rc-tree';

import 'rc-tree/assets/index.css';
@observer
export default class RcTree extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Tree
      prefixCls="rc-tree"
      className="zhangtongchuan"
      showLine={false}
      showIcon={false}
      multiple={false}
      checkable={true}
      defaultExpandAll={false}
      defaultExpandedKeys={['1']}
    
      >
        <TreeNode
          title="张彤川"
          key={'1'}
          className={'ddddddddddddddd'}
          isLeaf={true}
          disabled={false}
          disableCheckbox={false}
          icon={<span className="glyphicon glyphicon-plus" />}
          style={''}>
          <TreeNode title="23232123"
            icon={<span className="glyphicon glyphicon-plus" />}
            disabled={true}
            disableCheckbox={true}
            className={'sss'}
           />
           <TreeNode title="23232123"
            icon={<span className="glyphicon glyphicon-plus" />}
            key="1-2"
            disabled={false}
            disableCheckbox={false}
           />
          </TreeNode>
          <TreeNode
          title="张彤川"
          key={'2'}
          className={'ddddddddddddddd'}
          isLeaf={true}
          disabled={false}
          disableCheckbox={false}
          icon={<span className="glyphicon glyphicon-plus" />}
          style={''}>
          <TreeNode title="23232123"
            icon={<span className="glyphicon glyphicon-plus" />}
            disabled={false}
            disableCheckbox={false}
            className={'sss'}
           />
           <TreeNode title="23232123"
            icon={<span className="glyphicon glyphicon-plus" />}
            key="2-2"
            disabled={false}
            disableCheckbox={false}
           />
          </TreeNode>
      </Tree>
    )
  }
}
RcTree.defaultProps = {

}
RcTree.PropTypes = {

}