import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class LargeColumnTable extends React.Component {
  constructor(props) {
    super(props);
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
  render() {
    return (
      <div style={{padding:'20px'}}>
      <BootstrapTable data={this.state.products}>
          <TableHeaderColumn width='150' dataField='id' isKey={ true }>ProductID</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
      </BootstrapTable>
      </div>
      )
  }
}