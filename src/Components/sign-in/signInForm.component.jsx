import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react"
import {  creatUserDocumentFromAuth,signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import "./signInForm.styles.scss"

const defaultFormFeild = {
    email:"",
    password:"",
}

const SignInForm = () =>{

    const signInGoogle= async () =>{
        const {user} = await signInWithGooglePopup();
        await creatUserDocumentFromAuth(user);
    }

    const [formFeilds, setformFeilds] = useState(defaultFormFeild);
    const {  email, password} = formFeilds;
   
    const onChangeHandler = async (event) =>{
        const {name,value} = event.target;
        setformFeilds({...formFeilds,[name]:value});
    }
    const resetFormFeild = () =>{
        setformFeilds(defaultFormFeild);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(res)
            resetFormFeild();
        } catch(error){
            if(error.code == "auth/wrong=password"){
                alert('Cannot Create user, email already in use')
            }
            console.log("user creation encounterd an error", error);
            return;
        }
    }
    return (
        <div className="sign-up-conatiner">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>               
              
                <FormInput label="Email" type ="email" required onChange={onChangeHandler} name="email" value ={email}/>

                <FormInput label="Password" type="password" required onChange={onChangeHandler} name="password" value={password}/>
            <div className="buttons-container">
                <Button  type="submit"> Sign In</Button>
                <Button type="button" buttonType="google" onClick={signInGoogle} >google Sign in</Button>
            </div>              
            </form>
        </div>
    )
}
export default SignInForm