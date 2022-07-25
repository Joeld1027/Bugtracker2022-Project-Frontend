import "./right-side-menu.styles.css";

const RightSideMenu = () => {
	return (
		<div className="right">
			<div className="top">
				<button id="menu-btn">
					<span className="material-symbols-sharp"> menu </span>
				</button>
				<div className="theme-toggler">
					<span className="material-symbols-sharp active"> light_mode </span>
					<span className="material-symbols-sharp"> dark_mode </span>
				</div>
				<div className="profile">
					<div className="info">
						<p>
							Hey, <b>Daniel</b>
						</p>
						<small className="text-muted"> Admin </small>
					</div>
					<div className="profile-photo">
						<img src="./images/profile-1.jpg" alt="" />
					</div>
				</div>
			</div>

			{/* <!-- ============End of Top============ --> */}
			<div className="recent-updates">
				<h2>Recent Updates</h2>
				<div className="updates">
					<div className="update">
						<div className="profile-photo">
							<img src="./images/profile-2.jpg" alt="" />
						</div>
						<div className="message">
							<p>
								<b>Mike Tyson</b> received his order Night Lion tech GPS Drone.
							</p>
							<small className="text-muted"> 2 Minutes ago </small>
						</div>
					</div>
					<div className="update">
						<div className="profile-photo">
							<img src="./images/profile-3.jpg" alt="" />
						</div>
						<div className="message">
							<p>
								<b>Samantha Nixon</b> declined her order of 2 DJI Air 25.
							</p>
							<small className="text-muted"> 2 Minutes ago </small>
						</div>
					</div>
					<div className="update">
						<div className="profile-photo">
							<img src="./images/profile-4.jpg" alt="" />
						</div>
						<div className="message">
							<p>
								<b>Mandy Roy</b> received his order of LAVENDER KF102 Drone.
							</p>
							<small className="text-muted"> 2 Minutes ago </small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightSideMenu;
