import "./right-side-menu.styles.css";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector, useDispatch } from "react-redux";
import { setActiveMenu } from "../../store/user/user.action";

const RightSideMenu = () => {
	const user = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	const handleActiveOpen = () => {
		dispatch(setActiveMenu(true));
	};

	return (
		<div className="right">
			<div className="top">
				<button id="menu-btn" onClick={handleActiveOpen}>
					<span className="material-symbols-sharp"> menu </span>
				</button>
				{/* <div className="theme-toggler">
					<span className="material-symbols-sharp active"> light_mode </span>
					<span className="material-symbols-sharp"> dark_mode </span>
				</div> */}
				<div className="profile">
					<div className="info">
						<p>
							Hey, <b>{user.name}</b>
						</p>
						<small className="text-muted"> {user.role} </small>
					</div>
					<div className="profile-photo">
						<img
							src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default RightSideMenu;
