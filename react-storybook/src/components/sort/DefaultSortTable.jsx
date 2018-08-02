import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class DefaultSortTable extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      products: [],
      options: {
        defaultSortName: 'name',  // default sort column name
        defaultSortOrder: this.props.defaultSortOrder //'desc' asc  // default sort order
      }
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