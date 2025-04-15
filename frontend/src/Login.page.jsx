import { useEffect } from "react"


const Login = () => {
    useEffect(() => {
        const controller = new AbortController()
        const getData = async () => {
            const res = await fetch('http://localhost:7001/api/v1/auth/get-data', {signal: controller.signal, credentials: "include"})
            const data = await res.json()
            console.log({data})
        }

        const generateJwt = async () => {
            const res = await fetch('http://localhost:7001/api/v1/login', {signal: controller.signal, credentials: "include"})
            const data = await res.json()
            console.log({data})
            getData()
        }
        
        generateJwt()
        return () => {
            controller.abort('Component unmounted')
        }
    }, [])
    
    return (
        <div>Login</div>
    )
}

export default Login