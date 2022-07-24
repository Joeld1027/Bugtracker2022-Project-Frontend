import { Link } from "react-router-dom";
import Logo from "../../assets/BTK2.png";
import "./navbar.styles.css";

const NavBar = () => {
	return (
		<div className="navbar">
			<div>
				<Link to="/">
					<img className="logo" src={Logo} alt="logo" />
				</Link>
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
