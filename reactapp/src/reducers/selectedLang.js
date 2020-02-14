<<<<<<< HEAD
export default function (selectedLang = null, action){
    if(action.type =='changeLang'){
    return action.selectedLang
} else {
    return selectedLang
    }
}   
=======
export default function(selectedLang = null, action){
    if(action.type == 'changeLang'){
        return action.selectedLang
    } else {
        return selectedLang
    }
}
>>>>>>> bfc69f5f4c350e889b13b7ccfaffd730245d1f2f
