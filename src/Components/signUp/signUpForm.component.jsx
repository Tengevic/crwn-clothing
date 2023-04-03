import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react"
import { createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./signUpForm.styles.scss"

const defaultFormFeild = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}

const SignUpForm = () =>{
    const [formFeilds, setformFeilds] = useState(defaultFormFeild);
    const { displayName, email, password, confirmPassword} = formFeilds;
   
    const onChangeHandler = async (event) =>{
        const {name,value} = event.target;
        setformFeilds({...formFeilds,[name]:value});
    }
    const resetFormFeild = () =>{
        setformFeilds(defaultFormFeild);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
       
        if(password !== confirmPassword){
            alert("Password do not match");
            return;
        }
    

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await creatUserDocumentFromAuth(user,{displayName});
            resetFormFeild();
        } catch(error){
            if(error.code == "auth/email-already-in-use"){
                alert('Cannot Create user, email already in use')
            }
            console.log("user creation encounterd an error", error);
        }
    }
    return (
        <div className="sign-up-conatiner">
            <h2>Don't have an account?</h2>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>               
                <FormInput label="Display Name" type="text" required onChange={onChangeHandler} name="displayName" value={displayName}/>

                <FormInput label="Email" type ="email" required onChange={onChangeHandler} name="email" value ={email}/>

                <FormInput label="Password" type="password" required onChange={onChangeHandler} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={onChangeHandler} name="confirmPassword" value={confirmPassword}/>

                <Button  type="submit"> Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm