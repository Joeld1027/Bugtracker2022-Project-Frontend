import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiCall } from "../../service/apiCall";
import "./data-table.styles.css";

const DataTable = ({ type = "Data", handleCheckbox, url }) => {
	const [fetchedData, setFetchedData] = useState([]);

	const fetchTableData = (type) => {
		if (type === "Data") return;
		apiCall("get", `http://localhost:8081/${url}`)
			.then((response) => {
				setFetchedData(response);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		if (url) {
			fetchTableData();
		}
	}, []);

	return (
		<div className="data-table">
			<h2>All {type}</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Priority</th>
						{type === "Projects" && <th>Due Date</th>}
						<th>Status</th>
						{type === "Tasks" && handleCheckbox && <th>Add to Project</th>}
					</tr>
				</thead>
				<tbody>
					{fetchedData ? (
						fetchedData.map((data) => {
							let date = data.deadline || null;
							return (
								<tr key={data._id}>
									<td>{data.name}</td>
									<td>{data.priority}</td>
									{type === "Projects" && <td>{date && date.split("T")[0]}</td>}
									<td className="warning">{data.status}</td>
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
										<Link to={`./${data._id}`}>Details</Link>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td>No {type} available </td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
