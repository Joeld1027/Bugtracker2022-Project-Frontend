import { Link } from "react-router-dom";

const UserTable = ({ users = [], title, type, handleCheckbox }) => {
	return (
		<div className="data-table">
			<h2>{title ? title : ""}</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Role</th>
						{type !== "edit" ? <th>Email</th> : <th>Add</th>}
					</tr>
				</thead>
				<tbody>
					{users.map((user) => {
						const { name, username, role } = user;
						return (
							<tr key={user._id}>
								<td>{name}</td>
								<td>{role}</td>
								{type !== "edit" ? (
									<td>{username}</td>
								) : (
									<td>
										<input
											name="addDevelopers"
											onChange={handleCheckbox}
											className="data-table-radio"
											type="checkbox"
											value={user._id}
										/>
									</td>
								)}
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
