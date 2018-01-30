import React from 'react'
import Tree, { TreeNode } from 'rc-tree'
export default class MetaTree extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.getChildren = this.getChildren.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }
  getChildren(data){
    return data.map((item) => {
      return (
        <TreeNode title={item.title} key={item.key}>
        {item.children && item.children.length>0 ? this.getChildren(item.children) : undefined}
        </TreeNode>
      )
    })
  }
  onSelect(selected,node){
    if(node.selected){
      let data = {
        id:selected[0],
        node:node.node.props
      }
      console.log(data)
      this.props.onTreeSelected(data)
    }
    // let expandedKeys = JSON.parse(JSON.stringify(this.state.expandedKeys))
    // if(node.selected){
    //   let flag = false
    //   expandedKeys.forEach((item) => {
    //     if(item.key === selected[0]){
    //       flag = true
    //     }
    //   })
    //   if(!flag){
    //     expandedKeys.push(selected[0])
    //   }
    // }else{
    //   expandedKeys.forEach((item, index) => {
    //     if(item.key === selected[0]){
    //       expandedKeys.splice(index,1)
    //       console.log(expandedKeys)
    //     }
    //   })
    // }
    // this.setState({
    //   expandedKeys:expandedKeys
    // })
    console.log([selected,node])
  }
  componentDidMount(){
    // let that = this
    // setInterval(function(){
    //   let treeData = that.state.treeData
    //   treeData.push({title: Math.random(),key:2, children: []})
    //   that.setState({
    //     treeData
    //   })
    // },300)
  }
  render(){
    return (
      <div>
        <Tree 
        defaultExpandAll={false}
        showIcon={false}
        multiple={false}
        checkable={false}
        autoExpandParent={true}
        // defaultSelectedKeys={this.props.selectedkeys}
        selectedKeys={this.props.selectedkeys}
        defaultExpandedKeys={this.props.expandedKeys}
        onSelect={this.onSelect}
        >
        {this.getChildren(this.props.data)}
        </Tree>
      </div>
    )
  }
}