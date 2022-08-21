import "./aside.styles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/BTK2.png";
import { setTokenHeader, apiCall } from "../../service/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { selectActive } from "../../store/user/user.selector";
import { useEffect, useState } from "react";
import { setActiveMenu } from "../../store/user/user.action";

const Aside = () => {
	const dispatch = useDispatch();
	const active = useSelector(selectActive);
	const [isActive, setIsActive] = useState(active);

	useEffect(() => {
		setIsActive(active);
	}, [active]);

	const handleMenuClose = () => {
		dispatch(setActiveMenu(false));
	};

	const handleLogout = () => {
		setTokenHeader(localStorage.jwToken);
		apiCall("post", "http://localhost:8081/auth/logout")
			.then((response) => {
				localStorage.clear();
			})
			.catch((err) => console.log(err));
	};

	return (
		<aside style={{ display: isActive === true ? "block" : "" }}>
			<div className="top">
				<div className="logo">
					<img src={Logo} alt="logo" />
					<h2>
						BT<span className="danger">K</span>
					</h2>
				</div>
				<div className="close" id="close-btn" onClick={handleMenuClose}>
					<span className="material-symbols-sharp"> close </span>
				</div>
			</div>

			<div className="sidebar">
				<Link className="active" to="/dashboard">
					<span className="material-symbols-sharp"> dashboard </span>
					<h3>Dashboard</h3>
				</Link>
				<Link to="/dashboard/tasks">
					<span className="material-symbols-sharp"> receipt_long </span>
					<h3>Tasks</h3>
				</Link>
				<Link to="/dashboard/projects">
					<span className="material-symbols-sharp"> inventory </span>
					<h3>Projects</h3>
				</Link>
				<Link to="/dashboard/analytics">
					<span className="material-symbols-sharp"> query_stats </span>
					<h3>Analytics</h3>
				</Link>
				<Link to="/dashboard/users">
					<span className="material-symbols-sharp"> groups </span>
					<h3>Users</h3>
				</Link>
				<Link to="/dashboard/profile">
					<span className="material-symbols-sharp"> person </span>
					<h3>Profile</h3>
				</Link>
				<Link to="/" onClick={handleLogout}>
					<span className="material-symbols-sharp"> logout </span>
					<h3>Logout</h3>
				</Link>
			</div>
		</aside>
	);
};

export default Aside;
