import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/navbar.component";

const Navigation = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};

export default Navigation;
