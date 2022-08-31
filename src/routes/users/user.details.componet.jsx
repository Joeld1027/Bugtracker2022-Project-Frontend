import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectOneUser } from "../../store/user/user.selector";
import ProfilePage from "../profile/profile.component";

const UserDetailsPage = () => {
	const { userId } = useParams();
	const user = useSelector(selectOneUser(userId));
	return <ProfilePage receivedUser={user} details={true} />;
};

export default UserDetailsPage;
