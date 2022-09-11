import { useSelector } from "react-redux";
import "../../components/table/data-table.styles.css";
import UserTable from "../../components/user-table/user-table.component";
import { selectAllUsers } from "../../store/user/user.selector";

const Users = () => {
	const users = useSelector(selectAllUsers);

	return (
		<main>
			<div className="tasks-header-container">
				<h1>Users</h1>
			</div>
			<UserTable users={users} />
		</main>
	);
};
export default Users;
