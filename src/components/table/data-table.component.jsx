import { Link } from "react-router-dom";
import { handleStatus } from "../../utils/public-forms/form.utilities";
import "./data-table.styles.css";

const DataTable = ({ type = "Data", handleCheckbox, tableData, title }) => {
	return (
		<div className="data-table">
			<h2>{title}</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Priority</th>
						{type === "Projects" && <th>Due Date</th>}
						{type === "Tasks" && <th>Status</th>}
						<th></th>
						{type === "Tasks" && handleCheckbox && <th>Add to Project</th>}
					</tr>
				</thead>
				<tbody>
					{tableData && tableData[0] ? (
						tableData.map((data) => {
							let date = new Date(data.deadline).toLocaleDateString();
							return (
								<tr key={data._id}>
									<td>{data.name}</td>
									<td>{data.priority}</td>
									{type === "Projects" && <td>{date}</td>}
									{type === "Tasks" && (
										<td className={`${handleStatus(data.status)}`}>
											{data.status}
										</td>
									)}
									<td></td>
									{type === "Tasks" && handleCheckbox && (
										<th>
											<input
												name="addTasks"
												onChange={handleCheckbox}
												className="data-table-radio"
												type="checkbox"
												value={data._id}
											/>
										</th>
									)}
									<td className="primary">
										{!handleCheckbox && (
											<Link to={`/dashboard/${type.toLowerCase()}/${data._id}`}>
												Details
											</Link>
										)}
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td>No {type} Available</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
