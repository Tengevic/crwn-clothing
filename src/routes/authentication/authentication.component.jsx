import SignUpForm from "../../Components/signUp/signUpForm.component";
import SignInForm from "../../Components/sign-in/signInForm.component";
import "./authentication.styles.scss"

const Authentication = () => {

    return (
    <div className="authentication-container">
        
        <SignInForm/>
        <SignUpForm/>
    </div>);
}
export default Authentication;