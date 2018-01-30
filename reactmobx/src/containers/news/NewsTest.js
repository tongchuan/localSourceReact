import React from "react";
import {observer} from 'mobx-react';

import Store from '@/stores/news/NewsListStore'
@observer
export default class NewsTest extends React.Component {
  constructor(props){
    super(props)
    this.store = new Store();
    this.state = {
      title:'标题'
    }
    this.getNewsList = this.getNewsList.bind(this)
  }
  getNewsList(){
    this.store.getNewsList({name:'kaishi',age:'张'})
  }
  render(){
    return (
      <div>
        <h1>NewsTest</h1>
        <a onClick={this.getNewsList} href="javascript:void(0)">点我</a>
        <div>
          <ul>
            {this.store.newslist.map((item)=>{
              return (
                <li>name:{item.name}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}