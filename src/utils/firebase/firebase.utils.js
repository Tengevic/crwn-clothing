import {initializeApp} from "firebase/app"
import {getAuth, createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'


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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  const arr = Array.from(objectsToAdd);
  arr.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef,object)
  });

  await batch.commit();
  console.log('done')
}
export const getCategoriesAndDocuments = async () =>{
  const collectionRef = collection(db, "categories" );
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  },{})

  return categoryMap;
}

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
export const signAuthuser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);