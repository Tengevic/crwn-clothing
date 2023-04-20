import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener,creatUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    console.log("Dispatched")
    console.log(action)
   const {type, payload} = action; 
   switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
   }
}

export const UserProvider =({children}) =>{
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const {currentUser} = state;
    console.log(currentUser);
    useEffect(() =>{
       const unsubscribe = onAuthStateChangedListener((user) =>{
        if(user){
            creatUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
       });

       return unsubscribe;
    },[])

//    const [currentUser, setCurrentUser] = useState(null);
   
    
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }
    const value = {currentUser,setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}