<<<<<<< HEAD
export default function (token='', action){
    if(action.type =='addToken'){
        return action.token
  } else {
      return token
  }
=======
export default function(token = '', action){
    if(action.type == 'addToken'){
        return action.token
    } else {
        return token
    }
>>>>>>> bfc69f5f4c350e889b13b7ccfaffd730245d1f2f
}