

import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class CustomTextforEmptyData extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      products: [],
      options: {
        noDataText: '暂无数据'
      }
    }
  }

  render() {
    return (
      <div style={{padding:'20px'}}>
      <BootstrapTable data={this.state.products} options={this.state.options}>
        <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
      </div>
      )
  }
}