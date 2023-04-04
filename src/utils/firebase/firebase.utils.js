import {initializeApp} from "firebase/app"
import {getAuth, createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCAxpPk_GG7GlBKVATyWR2R-HHU9RC0lrY",
    authDomain: "crwn-clothing-db-dbfa5.firebaseapp.com",
    projectId: "crwn-clothing-db-dbfa5",
    storageBucket: "crwn-clothing-db-dbfa5.appspot.com",
    messagingSenderId: "1047396690623",
    appId: "1:1047396690623:web:79d843017f2e6322c5740a"
  };

  // Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth, addttionalInfo ) => {
  if(!userAuth) return;
  const userDocRef = doc(db,"users",userAuth.uid);


  const userSnapshot =  await getDoc(userDocRef)


  if(!userSnapshot.exists()){
    const {displayName, email, } = userAuth;
    const createdAt = new Date();

    try{

      await setDoc(userDocRef,{displayName, email, createdAt, ...addttionalInfo});
    
    } catch(error) {
        console.log("erorr", error.message)
    }
  }

  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
    
  return await createUserWithEmailAndPassword(auth, email, password)
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
    
  return await signInWithEmailAndPassword(auth, email, password)
};
