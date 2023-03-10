export default interface LoginState{
    formValue:{
        email:{
            value:string,
            errorMessage:string
        }
        password:{
            value:string,
            errorMessage:string[]
        }
    }
}