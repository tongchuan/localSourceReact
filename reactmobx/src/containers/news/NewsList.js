import React from "react";
import {observer} from 'mobx-react';

import Store from '@/stores/news/NewsListStore'
@observer
export default class NewsList extends React.Component {
  constructor(props){
    super(props)
    this.store = new Store();
  }
  componentWillMount(){
    setTimeout(()=>{
      this.store.getNewsList({name:'kaishi',age:'张'})
    },3000)
    // this.store.getNewsList({name:'kaishi',age:'张'})
    console.log('componentWillMount')
  }
  render(){
    return (
      <div>
        <h1>NewsList</h1>
        <div>count:{this.store.getCount}</div>
        <div>{JSON.stringify(this.store.newslist)}</div>
      </div>
    )
  }
}