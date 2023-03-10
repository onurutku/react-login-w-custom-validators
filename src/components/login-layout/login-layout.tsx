import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBInput ,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import emailValidator  from '../../validators/email-validator';
import passwordValidator from '../../validators/password-validator'
import LoginState from '../../models/login-state';


export default class LoginLayout extends React.Component{
    state:LoginState={
        formValue:{
            email: {
                value:'',
                errorMessage:''
            },
            password: {
                value:'',
                errorMessage:[]
            },
        },
    }
    constructor(props:any){
        super(props)
    }
    render(): React.ReactNode {
        const emailChanged=(event:React.FormEvent<HTMLInputElement>)=>{
            const value=(event.target as HTMLInputElement).value
            this.setState({formValue : {email:{value:value,errorMessage:emailValidator(value).message},password:{value:this.state.formValue.password.value,errorMessage:this.state.formValue.password.errorMessage}}})
        }
        const passwordChanged=(event:React.FormEvent<HTMLInputElement>)=>{
            const value=(event.target as HTMLInputElement).value
            passwordValidator(value);
            this.setState({formValue : {password:{value:value,errorMessage:passwordValidator(value).message},email:{value:this.state.formValue.email.value,errorMessage:this.state.formValue.email.errorMessage}}})
        }
        return(
                <MDBCard className='w-25 p-3'>
                <MDBCardBody>
                    <MDBCardTitle className='fw-bold mb-4 fs-2 text-center'>Login</MDBCardTitle>
                        <MDBInput className='mb-2' value={this.state.formValue.email.value} onChange={emailChanged} label='Email'/>
                        {this.state.formValue.email.errorMessage && <p style={{color:'red'}}>{this.state.formValue.email.errorMessage}</p>}
                        <MDBInput className='mb-4' value={this.state.formValue.password.value} onChange={passwordChanged} label='Password' type='password'/>
                        <>{this.state.formValue.password.errorMessage.length>0 && this.state.formValue.password.errorMessage.map((message:string,i:number)=><p key={i} style={{color:'red'}}>{message}</p>)}</>
                    <MDBBtn disabled={this.state.formValue.password.errorMessage.length!=0 || this.state.formValue.email.errorMessage!=''} type='submit' className='float-end'>Login</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        )
    }
}