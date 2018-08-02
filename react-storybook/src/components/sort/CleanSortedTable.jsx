import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class CleanSortedTable extends React.Component {
  constructor(props) {
    super(props);
    this.cleanSort = this.cleanSort.bind(this);
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
  cleanSort(){
    this.refs.table.cleanSort();
  }
  render() {
    return (
      <div style={{padding:'20px'}}>
      <button className='btn btn-default' onClick={ this.cleanSort }>Clean Sort</button>
      <BootstrapTable ref='table' data={this.state.products}>
        <TableHeaderColumn dataField="id" isKey={true} dataSort>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort={ true }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataSort={ true }>Product Price</TableHeaderColumn>
      </BootstrapTable>
      </div>
      )
  }
}