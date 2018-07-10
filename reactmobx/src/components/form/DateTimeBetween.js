import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types'
import moment from 'moment';
import DateTime from './DateTime'

@observer
export default class DateTimeBetween extends React.Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.checkError = this.checkError.bind(this)
    this.checkValue = this.checkValue.bind(this)
    this.state = {
      startDate: this.props.value[0],
      endDate: this.props.value[1]
    }
  }
  onChange(index, value){
    let data = [this.state.startDate, this.state.endDate]
    data[index] = value
    this.checkValue(data)
    
  }
  checkValue(newValue){
    let oldValue = [this.state.startDate, this.state.endDate]
    if(JSON.stringify(newValue)===JSON.stringify(oldValue)){
      return false
    }
    this.setState({
      startDate:newValue[0],
      endDate:newValue[1]
    },()=>{
      this.props.onChang(newValue)

    })
    // console.log(JSON.stringify(newValue),JSON.stringify(oldValue))
  }

  checkError(type,value){
    this.props.checkError(type,value)
    // console.log(type,value)
  }

  componentWillReceiveProps(newProps){
    this.checkValue(newProps.value)
  }
  render(){
    return (
      <span className={this.props.wrapClassName}>
      <DateTime
        value={this.state.startDate}
        checkError={this.checkError.bind(this,'startDate')}
        onChang={this.onChange.bind(this,0)}
        selectsStart={true}
        startDate={this.state.startDate ? moment(this.state.startDate) : null}
        endDate={this.state.endDate ? moment(this.state.endDate) : null}
        placeholder={this.props.placeholder[0]}
        dateFormat={this.props.dateShowFormat}
        locale={this.props.locale}
        peekNextMonth={this.props.peekNextMonth}
        showMonthDropdown={this.props.showMonthDropdown}
        showYearDropdown={this.props.showYearDropdown}
        showWeekNumbers={this.props.showWeekNumbers}
        dropdownMode={this.props.dropdownMode}
        className={this.props.startClassName}
        todayButton={this.props.todayButton}
        isClearable={this.props.isClearable}
        inline={this.props.inline}
        minDate={null}
        maxDate={this.state.endDate ? moment(this.state.endDate) : null}
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
        monthsShown={this.props.monthsShown}
        scrollableYearDropdown={this.props.scrollableYearDropdown}
        forceShowMonthNavigation={this.props.forceShowMonthNavigation}
        utcOffset={this.props.utcOffset}
        withPortal={this.props.withPortal}
        title={this.props.title}
        name={this.props.name}
        required={this.props.required}
        disabled={this.props.disabled}
        readOnly={this.props.readOnly}
         />
      <DateTime
        value={this.state.endDate}
        checkError={this.checkError.bind(this,'endDate')}
        onChang={this.onChange.bind(this,1)}
        selectsEnd={true}
        startDate={this.state.startDate ? moment(this.state.startDate) : null}
        endDate={this.state.endDate ? moment(this.state.endDate) : null}
        placeholder={this.props.placeholder[1]}
        dateFormat={this.props.dateShowFormat}
        locale={this.props.locale}
        peekNextMonth={this.props.peekNextMonth}
        showMonthDropdown={this.props.showMonthDropdown}
        showYearDropdown={this.props.showYearDropdown}
        showWeekNumbers={this.props.showWeekNumbers}
        dropdownMode={this.props.dropdownMode}
        className={this.props.endClassName}
        todayButton={this.props.todayButton}
        isClearable={this.props.isClearable}
        inline={this.props.inline}
        minDate={this.state.startDate ? moment(this.state.startDate) : null}
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
        monthsShown={this.props.monthsShown}
        scrollableYearDropdown={this.props.scrollableYearDropdown}
        forceShowMonthNavigation={this.props.forceShowMonthNavigation}
        utcOffset={this.props.utcOffset}
        withPortal={this.props.withPortal}
        title={this.props.title}
        name={this.props.name}
        required={this.props.required}
        disabled={this.props.disabled}
        readOnly={this.props.readOnly} />
      </span>
    )
  }
}
DateTimeBetween.defaultProps = {
  value: [null, null],
  placeholder: ['选择开始日期','选择结束日期'],
  dateFormat: "YYYY-MM-DD", //  返回的字符串日期格式 默认是年-月-日
  dateShowFormat: "YYYY-MM-DD", // 显示的日期格式，
  locale: "zh-CN", // 本地语音
  peekNextMonth: true, // 
  showMonthDropdown: true, // 是否显示月的选择
  showYearDropdown: true, // 是否显示年的选择
  showWeekNumbers: false, // 周日是否可选 默认false（可选） true(不可选)
  dropdownMode: "scroll", // 年月日选择显示的只能是：select 、scroll
  wrapClassName: '',
  startClassName: "form-chontrol",
  endClassName: "form-chontrol",
  todayButton: "今天", // 今天按钮的显示字
  isClearable: true, // 是否显示清楚的小X
  inline: false, //是否默认显示下拉的日期，默认不显示
  minDate: null, //minDate={moment().subtract(6, "month")}
  maxDate: null, //moment().add(1, "month"), //maxDate={moment().add(6, "month")}
  readOnly: true,
  disabled: false,
  highlightDates: [], //moment().add(7, "days")
  includeDates: null,
  openToDate: null,//moment("1993-09-28"),// null, // moment("1993-09-28")
  fixedHeight: false,
  dateFormatCalendar: "MMMM YYYY", // MMMM , YYYY
  monthsShown: 1, //显示几个月
  scrollableYearDropdown: true, //年份是否滚动
  forceShowMonthNavigation: false,
  utcOffset: 0,
  title: '',
  name: ''
}
DateTimeBetween.PropTypes = {
  value: PropTypes.array,
  placeholder: PropTypes.array,
  dateFormat: PropTypes.string,
  dateShowFormat: PropTypes.string,
  onSelect:PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onClickOutside:PropTypes.func,
  onChangeRaw: PropTypes.func,
  onMonthChange: PropTypes.func,
  filterDate: PropTypes.func,
  locale: PropTypes.string,
  peekNextMonth: PropTypes.bool,
  showMonthDropdown: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  dropdownMode: PropTypes.string,
  wrapClassName: PropTypes.string,
  startClassName: PropTypes.string,
  endClassName: PropTypes.string,
  todayButton: PropTypes.string,
  isClearable: PropTypes.bool,
  inline: PropTypes.bool,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  highlightDates: PropTypes.array,
  includeDates: PropTypes.object,
  openToDate: PropTypes.object,
  fixedHeight: PropTypes.bool,
  dateFormatCalendar: PropTypes.string,
  monthsShown: PropTypes.number,
  scrollableYearDropdown: PropTypes.bool,
  forceShowMonthNavigation: PropTypes.bool,
  utcOffset: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
}