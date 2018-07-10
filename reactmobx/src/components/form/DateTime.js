import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
@observer
export default class DateTime extends React.Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.checkValue = this.checkValue.bind(this)
    this.checkError = this.checkError.bind(this)
    this.state = {
      date: this.props.value ? moment(this.props.value) : null
    }
  }
  checkValue(newValue){
    let oldValue = this.state.date
    newValue = newValue ? moment(newValue).format(this.props.dateFormat) : null
    oldValue = oldValue ? moment(oldValue).format(this.props.dateFormat) : null
    // console.log(newValue,oldValue)
    if(Object.is(newValue, oldValue)){
      return false
    }
    this.setState({
      date: newValue ? moment(newValue) : null
    },()=>{
      this.props.onChang(newValue)
      this.checkError()
    })
  }
  checkRquired(value){
    // console.log(value)
    if(!value){
      if(this.props.required){
        return 'required'
      }
    }
    return ''
  }
  checkError(){
    let value = this.state.date
    let error = this.checkRquired(value)
    this.props.checkError(error)
  }
  onChange(date){
    this.checkValue(date)
  }
  componentDidMount(){
    this.checkError()
  }
  componentWillReceiveProps(newProps){
    this.checkValue(newProps.value)
  }
  render(){
    if(this.props.hidden){
      return null
    }
    return (
      <DatePicker
        selected={this.state.date}
        onChange={this.onChange}
        dateFormat={this.props.dateShowFormat}
        locale={this.props.locale}
        peekNextMonth={this.props.peekNextMonth}
        showMonthDropdown={this.props.showMonthDropdown}
        showYearDropdown={this.props.showYearDropdown}
        showWeekNumbers={this.props.showWeekNumbers}
        dropdownMode={this.props.dropdownMode}
        className={this.props.className}
        todayButton={this.props.todayButton}
        isClearable={this.props.isClearable}
        inline={this.props.inline}
        placeholderText={typeof this.props.placeholder === 'string' ? this.props.placeholder : this.props.placeholder[0]}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        readOnly={this.props.readOnly}
        disabled={this.props.disabled}
        highlightDates={this.props.highlightDates}
        onSelect={this.props.onSelect}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        onClickOutside={this.props.onClickOutside}
        onChangeRaw={this.props.onChangeRaw}
        onMonthChange={this.props.onMonthChange}
        filterDate={this.props.filterDate}
        includeDates={this.props.includeDates}
        openToDate={this.props.openToDate}
        fixedHeight={this.props.fixedHeight}
        dateFormatCalendar={this.props.dateFormatCalendar}
        startDate={this.props.startDate}
        endDate={this.props.endDate}
        monthsShown={this.props.monthsShown}
        scrollableYearDropdown={this.props.scrollableYearDropdown}
        forceShowMonthNavigation={this.props.forceShowMonthNavigation}
        utcOffset={this.props.utcOffset}
        withPortal={this.props.withPortal}
        title={this.props.title}
        name={this.props.name}
        selectsEnd={this.props.selectsEnd}
        selectsStart={this.props.selectsStart}
      />
    )
  }
}

DateTime.defaultProps = {
  dateFormat: "YYYY-MM-DD", //  返回的字符串日期格式 默认是年-月-日
  dateShowFormat: "YYYY-MM-DD", // 显示的日期格式，
  locale: "zh-CN", // 本地语音
  dropdownMode: "scroll", // 年月日选择显示的只能是：select 、scroll
  peekNextMonth: true, // 
  showMonthDropdown: true, // 是否显示月的选择
  showYearDropdown: true, // 是否显示年的选择
  showWeekNumbers: false, // 周日是否可选 默认false（可选） true(不可选)
  className:"form-chontrol", // class名
  todayButton: "今天", // 今天按钮的显示字
  isClearable: true, // 是否显示清楚的小X
  inline: false, //是否默认显示下拉的日期，默认不显示
  selectsStart: false,
  selectsEnd: false,
  onBlur:()=>{},
  // filterDate:(...arg)=>{console.log(arg); return arg[0]},
  placeholder:"请选择日期",
  minDate: null, //minDate={moment().subtract(6, "month")}
  maxDate: null, //moment().add(1, "month"), //maxDate={moment().add(6, "month")}
  readOnly: true,
  disabled: false,
  openToDate: null,//moment("1993-09-28"),// null, // moment("1993-09-28")
  highlightDates: [], //moment().add(7, "days")
  includeDates: null,
  fixedHeight: false,
  dateFormatCalendar: "MMMM YYYY", // MMMM , YYYY
  startDate: null,
  endDate: null,
  monthsShown: 1, //显示几个月
  scrollableYearDropdown: true, //年份是否滚动
  forceShowMonthNavigation: false,
  utcOffset: 0,
  withPortal: false, //弹框选择日期
  value: '',
  hidden: false,
  required: false,
  title: '',
  name: ''
}

DateTime.PropTypes = {
  dateFormat: PropTypes.string,
  dateShowFormat: PropTypes.string,
  hidden:PropTypes.bool,
  required:PropTypes.bool,
  locale: PropTypes.string,
  dropdownMode: PropTypes.oneOf(['scroll', 'select']),
  peekNextMonth: PropTypes.bool,
  showMonthDropdown: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  className: PropTypes.string,
  todayButton: PropTypes.string,
  isClearable: PropTypes.bool,
  inline: PropTypes.bool,
  selectsStart: PropTypes.bool,
  selectsEnd: PropTypes.bool,
  onSelect:PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onClickOutside:PropTypes.func,
  onChangeRaw: PropTypes.func,
  onMonthChange: PropTypes.func,
  filterDate: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  // PropTypes.oneOfType(
  //   PropTypes.array,
  // ),
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  highlightDates: PropTypes.array,
  includeDates: PropTypes.array,
  openToDate: PropTypes.object,
  fixedHeight: PropTypes.bool,
  dateFormatCalendar: PropTypes.string,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  monthsShown: PropTypes.number,
  scrollableYearDropdown: PropTypes.bool,
  forceShowMonthNavigation: PropTypes.bool,
  withPortal: PropTypes.bool,
  value: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string
}