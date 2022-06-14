import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/authProvider";
import paths from "../routes/paths";

const RequiredAuth = () => {
    const { isAdmin } = useAuthContext();

    return (
        isAdmin ?
            <Outlet /> :
            <Navigate to={paths.HOME} />
    )
}
export default RequiredAuth