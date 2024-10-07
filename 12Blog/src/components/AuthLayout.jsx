import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'

export default function Protected({children,authantication = true}) {   
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(()=>{

        // if(authStatus ===true){    so this is alternate of what is below,but easy
        //     navigate("/")
        // }else if(authStatus === false){
        //     navigate("/login")
        // }

        if (authantication && authStatus !== authantication) {
            navigate("/login")
        }else if(!authantication && authStatus !== authantication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authantication])

  return loader ? <h1>Loading ...</h1> : <>{children}</>
}
   