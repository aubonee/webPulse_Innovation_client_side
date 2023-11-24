import { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, getAuth,
     createUserWithEmailAndPassword, 
       onAuthStateChanged, 
      signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
   
    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true);

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(displayName,photoURL)=>{
        return updateProfile(auth.currentUser,{displayName,photoURL})
        

    }
    
    const signIn=(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);  
      }
    

    const googleSignIn=() =>{
        const provider = new GoogleAuthProvider();
       
        // .then((result) => {
            
        //     const loggedInUser = result.user;
        //     console.log(loggedInUser);
        //     setUser(loggedInUser);
          
        //   })
        //   .catch((error) => {
        //     console.error(error);
        // });
        setLoading(true);
        return      signInWithPopup (auth, provider)  }

        
        const logOut =()=>{
            setLoading(true);
            return signOut(auth);
        }
        useEffect(()=>{
        const  unSubscribe =  onAuthStateChanged(auth,currentUser => {
               console.log('auth state changed', currentUser)
               setUser(currentUser);
            ///////////////////////////////////////////////////////////
            //    if(currentUser){
            //     //get token and store client
            //     const userInfo ={email:currentUser.email};
            //     axiosPublic.post('/jwt',userInfo)
            //     .then(res=>{
            //         if(res.data.token){
            //             localStorage.setItem('access-token',res.data.token); 
                        
            //     }
            //  })
            //    }
            //    else{
            //     //todo:remove token(if token stored in the client side: local storage,caching, in memory)
            //    }
            ///////////////////////////////////////////////////////////
               setLoading(false);
    
          });
          return () =>{
            unSubscribe ();
    
          }
              
       }, [auth])
    
    const authInfo ={
        user,
        loading,
        createUser,
        googleSignIn,
        signIn,
        logOut,
        updateUserProfile,
        setUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;