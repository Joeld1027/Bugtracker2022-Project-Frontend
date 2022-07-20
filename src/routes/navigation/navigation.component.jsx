import { Outlet } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<h1>This is the Navigation</h1>
			<Outlet />
		</div>
	);
};

export default Navigation;
