import React from "react";
import PropTypes from 'prop-types'
import {observer} from 'mobx-react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

@observer
export default class Table extends React.Component {
  constructor(props){
    super(props)
    this.trClassFormat = this.trClassFormat.bind(this)
  }
  trClassFormat(row,rowIndex){
    return rowIndex % 2 === 0 ? "tr-odd" : "tr-even"; 
    // console.log(arguments)
  }
  render(){
    return (
      <BootstrapTable
        data={this.props.data}
        height={this.props.height}
        maxHeight={this.props.maxHeight}
        striped={this.props.striped}
        hover={this.props.hover}
        condensed={this.props.condensed}
        bordered={this.props.bordered}
        pagination={this.props.pagination}
        // trClassName={this.trClassFormat}
        // trClassName={"tr-class-or-fun-up"}
        trClassName={this.props.trClassName}
        insertRow={this.props.insertRow}
        deleteRow={this.props.deleteRow}
        selectRow={this.props.selectRow}
        columnFilter={this.props.columnFilter}
        search={this.props.search}
        searchPlaceholder={this.props.searchPlaceholder}
        multiColumnSearch={this.props.multiColumnSearch}
        exportCSV={this.props.exportCSV}
        csvFileName={this.props.csvFileName}
        ignoreSinglePage={this.props.ignoreSinglePage}
        scrollTop={this.props.scrollTop}
        containerStyle={this.props.containerStyle}
        tableStyle={this.props.tableStyle}
        headerStyle={this.props.headerStyle}
        bodyStyle={this.props.bodyStyle}
        containerClass={this.props.containerClass}
        tableContainerClass={this.props.tableContainerClass}
        headerContainerClass={this.props.headerContainerClass}
        bodyContainerClass={this.props.bodyContainerClass}
        tableHeaderClass={this.props.tableHeaderClass}
        tableBodyClass={this.props.tableBodyClass}
        expandableRow={this.props.expandableRow}
        expandComponent={this.props.expandComponent }
        expandColumnOptions={this.props.expandColumnOptions}
        multiColumnSort={this.props.multiColumnSort}
        keyBoardNav={true}
        fetchInfo={{
          dataTotalSize: 100
        }}
        remote={(remoteObj)=>{
          remoteObj.cellEdit = true;
          remoteObj.dropRow = true;
          remoteObj.exportCSV = true;
          remoteObj.filter = true;
          remoteObj.insertRow = true;
          remoteObj.pagination = true;
          remoteObj.search = true;
          remoteObj.sort = true;
          return remoteObj
        }}
        keyField={this.props.isKey}>
        <TableHeaderColumn dataField="id">id</TableHeaderColumn>
        {/* <TableHeaderColumn isKey dataField="id">id</TableHeaderColumn> */}
        <TableHeaderColumn dataField="name">名字</TableHeaderColumn>
        <TableHeaderColumn dataField="price">价格</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}
Table.defaultProps = {
  data: [],
  isKey: 'id',
  striped: false,
  hover: false,
  condensed: false,
  bordered: true,
  pagination: true,
  trClassName: '',
  insertRow: true,
  deleteRow: true,
  selectRow: {
    // mode: 'checkbox',
    // clickToSelect: true,
    // clickToSelectAndEditCell: true,
    // clickToExpand: true,
    // bgColor: '#d2d2d2'
  },
  columnFilter: true,
  search: true,
  searchPlaceholder: '请输入',
  multiColumnSearch: true,
  exportCSV: true,
  csvFileName: '',
  ignoreSinglePage: true,
  scrollTop: 'Bottom',
  containerStyle: {background: '#fff'},
  tableStyle: {},
  headerStyle:{margin: 0},
  bodyStyle: {margin:0},
  containerClass: '',
  tableContainerClass: '',
  headerContainerClass: '',
  bodyContainerClass: '',
  tableHeaderClass: '',
  tableBodyClass: '',
  expandableRow: (row)=>{ return row.id < 3},
  expandComponent: (row)=>{return (<span>222222222222222222222222222222222222222222222222222</span>)},
  expandColumnOptions: {
    expandColumnVisible: true,
    expandColumnComponent: (...arg)=>{
      console.log(arg)
      return (<div>44444444444444444444444</div>)
    },
    columnWidth:100,
    expandColumnBeforeSelectColumn:true,
  },
  multiColumnSort: 2,
  keyBoardNav: true,
  height: 'auto',
  maxHeight: 'auto',
  remote: ''
}
Table.PropTypes = {
  data: PropTypes.array,
  isKey: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  condensed: PropTypes.bool,
  bordered: PropTypes.bool,
  pagination: PropTypes.bool,
  trClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  insertRow: PropTypes.bool,
  deleteRow: PropTypes.bool,
  selectRow: PropTypes.shape({
    mode: PropTypes.string,
    clickToSelect: PropTypes.bool,
    clickToSelectAndEditCell:PropTypes.bool,
    clickToExpand:PropTypes.bool,
    bgColor: PropTypes.oneOfType([PropTypes.string,PropTypes.func]),
    columnWidth:PropTypes.string,
    className: PropTypes.string,
    selected: PropTypes.array,
    unselectable: PropTypes.array,
    hideSelectColumn:PropTypes.bool,
    showOnlySelected: PropTypes.bool,
    onSelect: PropTypes.func,
    onSelectAll: PropTypes.func,
    customComponent: PropTypes.func,
  }),
  columnFilter: PropTypes.bool,
  search: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  multiColumnSearch: PropTypes.bool,
  exportCSV: PropTypes.bool,
  csvFileName: PropTypes.oneOfType([ PropTypes.string, PropTypes.func]),
  ignoreSinglePage: PropTypes.bool,
  scrollTop: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  tableStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  containerClass: PropTypes.string,
  tableContainerClass: PropTypes.string,
  headerContainerClass: PropTypes.string,
  bodyContainerClass: PropTypes.string,
  tableHeaderClass: PropTypes.string,
  tableBodyClass: PropTypes.string,
  expandableRow: PropTypes.func,
  expandComponent: PropTypes.func,
  expandColumnOptions: PropTypes.shape({
    expandColumnVisible: PropTypes.bool,
    expandColumnComponent: PropTypes.func,
    columnWidth:PropTypes.number,
    expandColumnBeforeSelectColumn:PropTypes.bool,
  }),
  multiColumnSort: PropTypes.number,
  keyBoardNav: PropTypes.oneOfType([PropTypes.bool,PropTypes.object]),
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  remote: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
}