import "./right-side-menu.styles.css";

const RightSideMenu = () => {
	return (
		<div className="right">
			<div class="top">
				<button id="menu-btn">
					<span class="material-symbols-sharp"> menu </span>
				</button>
				<div class="theme-toggler">
					<span class="material-symbols-sharp active"> light_mode </span>
					<span class="material-symbols-sharp"> dark_mode </span>
				</div>
				<div class="profile">
					<div class="info">
						<p>
							Hey, <b>Daniel</b>
						</p>
						<small class="text-muted"> Admin </small>
					</div>
					<div class="profile-photo">
						<img src="./images/profile-1.jpg" alt="" />
					</div>
				</div>
			</div>

			{/* <!-- ============End of Top============ --> */}
			<div class="recent-updates">
				<h2>Recent Updates</h2>
				<div class="updates">
					<div class="update">
						<div class="profile-photo">
							<img src="./images/profile-2.jpg" alt="" />
						</div>
						<div class="message">
							<p>
								<b>Mike Tyson</b> received his order Night Lion tech GPS Drone.
							</p>
							<small class="text-muted"> 2 Minutes ago </small>
						</div>
					</div>
					<div class="update">
						<div class="profile-photo">
							<img src="./images/profile-3.jpg" alt="" />
						</div>
						<div class="message">
							<p>
								<b>Melody</b> declined her order of 2 DJI Air 25.
							</p>
							<small class="text-muted"> 2 Minutes ago </small>
						</div>
					</div>
					<div class="update">
						<div class="profile-photo">
							<img src="./images/profile-4.jpg" alt="" />
						</div>
						<div class="message">
							<p>
								<b>Mandy Roy</b> received his order of LAVENDER KF102 Drone.
							</p>
							<small class="text-muted"> 2 Minutes ago </small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightSideMenu;
