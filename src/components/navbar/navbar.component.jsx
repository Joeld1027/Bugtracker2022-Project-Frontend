import { Link } from "react-router-dom";
import "./navbar.styles.css";

const NavBar = () => {
	return (
		<div className="navbar">
			<div>
				<Link to="/">Logo</Link>
			</div>
			<div>
				<ul className="nav-li">
					<li>
						<Link to="/auth">Sign In</Link>
					</li>
					<li>Demo</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
