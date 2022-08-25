import { useEffect, useState } from "react";
import "../../components/table/data-table.styles.css";
import { apiCall } from "../../service/apiCall";

const Users = () => {
	const [users, setUsers] = useState([]);
	const getAllUsers = () => {
		apiCall("get", "http://localhost:8081/users")
			.then((res) => {
				setUsers(res);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getAllUsers();
	}, []);
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
