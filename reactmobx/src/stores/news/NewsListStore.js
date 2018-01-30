import {observable,action,computed} from 'mobx';
import $ from 'jquery';
import Config from '@/stores/config'
export default class NewsListStore {
  @computed get getCount(){
    return this.newslist.length * 10
  }
  @observable newslist = [];
  @action getNewsList(data){
    $.ajax({
      type:'get',
      url:Config.news.list,
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(data),
      success: (data) => {
        this.newslist = Object.assign([],data.data)
        // console.log(data)
      },
      error: (xhr, status, err) => {
      }
    })
  }
}