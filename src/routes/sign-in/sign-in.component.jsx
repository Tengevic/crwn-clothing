import {signInWithGooglePopup, creatUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../Components/signUp/signUpForm.component";

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user);
    }

    return (<div>
        <h1>Sign in!</h1>
        <button onClick={logGoogleUser}>Sidn in with google</button>
        <SignUpForm/>
    </div>);
}
export default SignIn;