import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

function RequireAuth({ children }) {
	const auth = useSelector(selectCurrentUser);

	let location = useLocation();

	if (!auth) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/auth" state={{ from: location }} replace />;
	}

	return children;
}

export default RequireAuth;
