import { Link } from "react-router-dom";

const UserTable = ({ users = [], title }) => {
	return (
		<div className="data-table">
			<h2>{title ? title : ""}</h2>
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
								<td className="primary">
									<Link to={`./${user._id}`}>Details</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default UserTable;
