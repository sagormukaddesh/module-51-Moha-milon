import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivetRouts;
PrivetRouts.propTypes = {
    children: PropTypes.node
}