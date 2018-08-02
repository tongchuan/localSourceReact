import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class CustomSortTable extends React.Component {
  constructor(props) {
    super(props);
    this.revertSortFunc = this.revertSortFunc.bind(this);
    this.state= {
      products: []
    }
  }
  componentWillMount(){
    let products = []
    for (let index = 0; index < 10; index++) {
      products.push({
        id: index+1,
        name: 'Item name ' + index,
        price: 2100 + index
      });
      
    }
    this.setState({products})
  }
  revertSortFunc(a, b, order){
    if (order === 'desc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  }
  render() {
    return (
      <div style={{padding:'20px'}}>
      <BootstrapTable data={this.state.products}>
        <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort={ true } sortFunc={ this.revertSortFunc }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataSort={ true } sortFunc={ this.revertSortFunc }>Product Price</TableHeaderColumn>
      </BootstrapTable>
      </div>
      )
  }
}