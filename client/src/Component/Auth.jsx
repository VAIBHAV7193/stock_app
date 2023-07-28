import React,{useState,useEffect,createContext, Children, useContext} from 'react';

const AuthContext = createContext();

const AuthProvider = (props) =>{
    const[auth,setAuth] = useState();

    useEffect(()=>{
        const data = localStorage.getItem('auth');
        if(data){
            const parseData =  JSON.parse(data);
            setAuth(parseData)
        }

    },[])

    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {props.children}
        </AuthContext.Provider>
    )
}


const useAuth = ()=>useContext(AuthContext);

export {useAuth,AuthProvider};

