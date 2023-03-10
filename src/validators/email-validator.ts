const emailValidator=function(value:string){
    if(!value || value.length>3){
        return {message:''}
    }else{
        return {message:'Email is invalid'}
    }
}
export default emailValidator