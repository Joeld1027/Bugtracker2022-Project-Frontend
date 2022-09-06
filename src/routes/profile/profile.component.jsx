import { ProfileContainer } from "./profile.styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect, useState } from "react";
import { deleteUser } from "../../store/user/user.action";

const ProfilePage = ({ receivedUser = null, details = false }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentUser = useSelector(selectCurrentUser);
	const [user, setUser] = useState({});
	const { name, role, username, userSince, _id } = user;
	const userDate = new Date(userSince).toLocaleDateString();

	useEffect(() => {
		if (receivedUser) return setUser(receivedUser);
		return setUser(currentUser);
	}, [currentUser]);

	const handleDelete = () => {
		dispatch(deleteUser(_id));
		navigate("/dashboard/users");
	};

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
					<p className="text-muted">Joined on {userDate}</p>
					<h3 className="contact-info">Contact Information</h3>
					<p>{username}</p>
					<p>1-800-xxx-xxxx</p>
				</div>
			</section>
			<div className="update-link">
				{details === false ? (
					<Link className="primary" to={`./edit`}>
						Update your Profile
					</Link>
				) : (
					<button onClick={handleDelete} className="danger">
						Delete this User
					</button>
				)}
			</div>
		</ProfileContainer>
	);
};

export default ProfilePage;
