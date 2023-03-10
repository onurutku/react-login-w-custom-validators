const passwordValidator = (value:string|number) => {
    const regex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])");
    const restResult:boolean=regex.test(value.toString())
    if(!value || restResult){
        return {message:[]}
    }else{
        return {message:['- must contain atleast one uppercase character','- must contain atleast one lowercase character','- must contain atleast one number','- must contain at least one special character']}
    } 
    
}
export default passwordValidator;