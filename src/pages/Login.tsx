import LoginComponents from "../components/Login.tsx";
import {useEffect, useState} from "react";
import LoadingComponents from "../components/Loading.tsx";

function Login() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    },[]);

  return (
    <>
        {isLoading ? <LoadingComponents/> : <LoginComponents/> }
    </>
  )
}

export default Login
