import { ProfileContainer } from "./profile.styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const ProfilePage = () => {
	const currentUser = useSelector(selectCurrentUser);
	const { name, role, username } = currentUser || {};

	return (
		<ProfileContainer>
			<section>
				<div className="avatar">
					<img
						src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
						alt=""
					/>
				</div>
				<div className="user-information">
					<h2 className="primary">
						{name} <span className="text-muted">*{role}*</span>
					</h2>
					<p className="text-muted">usersince</p>
					<h3 className="contact-info">Contact Information</h3>
					<p>{username}</p>
					<p>1-800-xxx-xxxx</p>
				</div>
			</section>
			<div className="update-link">
				<Link className="primary" to="profile/edit">
					Update your Profile
				</Link>
			</div>
		</ProfileContainer>
	);
};

export default ProfilePage;
