import {signInWithGooglePopup, creatUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user);
    }

    return (<div>
        <h1>Sign in!</h1>
        ,<button onClick={logGoogleUser}>Sidn in with google</button>
    </div>);
}
export default SignIn;