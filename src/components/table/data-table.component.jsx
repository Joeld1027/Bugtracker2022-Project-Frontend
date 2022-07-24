import { Link } from "react-router-dom";
import "./data-table.styles.css";

const DataTable = () => {
	return (
		<div class="recent-orders">
			<h2>Recent Tickets</h2>
			<table>
				<thead>
					<tr>
						<th>Ticket Name</th>
						<th>Ticket Number</th>
						<th>Due Date</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Foldable Mini Drone</td>
						<td>85631</td>
						<td>Due</td>
						<td class="warning">pending</td>
						<td class="primary">Details</td>
					</tr>
					<tr>
						<td>Foldable Mini Drone</td>
						<td>85631</td>
						<td>Due</td>
						<td class="warning">pending</td>
						<td class="primary">Details</td>
					</tr>
				</tbody>
			</table>
			<Link to="/" href="#">
				Show ALl
			</Link>
		</div>
	);
};

export default DataTable;
