import { Navigate } from "react-router-dom"
import { useAppContext } from "../context/appContext"

const ProtectRoute = ({children}) => {
    const { user } = useAppContext()
    if (!user) {
      return <Navigate to='/register' />
    }
    return children
    
}

export default ProtectRoute