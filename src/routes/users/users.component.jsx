import { useSelector } from "react-redux";
import "../../components/table/data-table.styles.css";
import { selectAllUsers } from "../../store/user/user.selector";

const Users = () => {
	const users = useSelector(selectAllUsers);

	return (
		<main>
			<div className="tasks-header-container">
				<h1>Users</h1>
			</div>
			<div className="data-table">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => {
							const { name, username, role } = user;
							return (
								<tr key={user._id}>
									<td>{name}</td>
									<td>{username}</td>
									<td>{role}</td>
									<td className="primary">Details</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</main>
	);
};
export default Users;
