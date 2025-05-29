import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({childeren}) => {
    if (auth.currentUser === null){
        return <Navigate to="/login" />
    }
    return(
        childeren
    );
}