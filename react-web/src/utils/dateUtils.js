export default {
  getDay: function(time,isEmpty){
    let date = time ? new Date(time) : new Date();
    let m = (date.getMonth() + 1);
    let d = date.getDate()
    m = m.padStart(2,'0')
    d = d.padStart(2,'0')
    if(!isEmpty){
      return ''
    }else{
      return date.getFullYear() + '-' + m + '-' + d
    }
    
    
  },
  getDate: function(isEmpty){
    let date = new Date();
    let m = (date.getMonth() + 1);
    let d = date.getDate()
    m = m.padStart(2,'0')
    d = d.padStart(2,'0')
    if(!isEmpty){
      return ''
    }else{
      return date.getFullYear() + '-' + m + '-' + d + " " + this.getHours() + ":" + this.getMinutes()+ ":" + this.getSeconds();
    }
  }
}