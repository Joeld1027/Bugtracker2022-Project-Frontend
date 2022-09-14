import { Outlet } from "react-router-dom";
import Aside from "../../components/aside/aside.component";
import RightSideMenu from "../../components/right-side-menu/right-side-menu.component";
// import { Spinner } from "../../public-components/public.styled.components";
import { SetState } from "../../components/hooks/set-state.component";

const Dashboard = () => {
	SetState();

	return (
		<div className="container">
			<Aside />
			<Outlet />
			{/* <main>
				<Spinner>
					<div className="inner-text">LOADING...</div>
				</Spinner>
			</main> */}
			<RightSideMenu />
		</div>
	);
};
export default Dashboard;
