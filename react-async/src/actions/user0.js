export const DDD ="DDD"
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export function sss(){
    return (dispatch, getState) => {
        console.log('--------')
        dispatch({type:'RECEIVE_HOT_SEARCH',data:{name:Math.random()}})
        // dispatch('RECEIVE_HOT_SEARCH',{name:'zhang',age:99},{type:'RECEIVE_HOT_SEARCH'})
        console.log('--------')
        // axios.post(
        //     'https://www.baidu.com/s?ie=utf-8&csq=1&pstg=20&mod=2&isbd=1&cqid=d487eedd000035b4&istc=554&ver=QNt8GtZW0r4aje7boK3CyO9W2LN5XyeKCIC&chk=5a5222cd&isid=9DAE93D575346554&ie=utf-8&f=8&rsv_bp=1&rsv_idx=2&tn=baiduhome_pg&wd=react%20router&rsv_spt=1&oq=react%2520router&rsv_pq=c86048f600003710&rsv_t=e6b28%2B1Hyp4RUkim%2FuTyHQSuPlU4PicVCHpUnpj16S80RM%2B64fTB3Dmt8tBZ9AYUw3x2&rqlang=cn&rsv_enter=0&bs=react%20router&f4s=1&_ck=2090.1.108.73.8.734.19&isnop=0&rsv_stat=-2&rsv_bp=1',
        //     {name:'name'},
        //   ).then((d)=>{
        //     dispatch('RECEIVE_HOT_SEARCH',{name:'zhang',age:99},{type:'RECEIVE_HOT_SEARCH'})
        //   }).then((e)=>{

        //   })
        // setTimeout(function(){
            
        // },1000)
        
        // console.log(dispatch)
        // console.log(getState)
    }
}
