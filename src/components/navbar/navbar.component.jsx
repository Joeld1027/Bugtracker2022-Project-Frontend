import "./navbar.styles.css";

const NavBar = () => {
	return (
		<div className="navbar">
			<div>Logo</div>
			<div>
				<ul className="nav-li">
					<li>Sign In</li>
					<li>Register</li>
					<li>Demo</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
