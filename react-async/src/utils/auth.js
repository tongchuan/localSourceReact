export function login(data){
  let token = Math.random().toString(36).substring(7)
  localStorage.token = token;
  localStorage.userName= data.email
  this.onChange(true);
}
export function getToken(){
  return localStorage.token;
}
export function logout(){
  delete localStorage.token;
  delete localStorage.userName;
  this.onChange(true);
}
export function loggedIn(){
  return !!localStorage.token
}
export function loggedName(){
  return !!localStorage.userName ? localStorage.userName : " "
}
export function onChange(){

}
