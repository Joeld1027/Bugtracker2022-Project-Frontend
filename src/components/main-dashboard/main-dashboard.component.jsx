import { Link } from "react-router-dom";
import "./main-dashboard.styles.css";

const MainDashboard = () => {
	return (
		<main>
			<h1>Dashboard</h1>
			<div class="date">
				<input type="date" />
			</div>

			<div class="insights">
				<div class="sales">
					<span class="material-symbols-sharp"> analytics </span>
					<div class="middle">
						<div class="left">
							<h3>Total Sales</h3>
							<h1>$25,024</h1>
						</div>
						<div class="progress">
							<svg>
								<circle cx="38" cy="38" r="36"></circle>
							</svg>
							<div class="number">
								<p>81%</p>
							</div>
						</div>
					</div>
					<small class="text-muted"> Last 24 hours </small>
				</div>
				{/* <!-- =============End of Sales=============== --> */}
				<div class="expenses">
					<span class="material-symbols-sharp"> bar_chart </span>
					<div class="middle">
						<div class="left">
							<h3>Total Expenses</h3>
							<h1>$14,160</h1>
						</div>
						<div class="progress">
							<svg>
								<circle cx="38" cy="38" r="36"></circle>
							</svg>
							<div class="number">
								<p>62%</p>
							</div>
						</div>
					</div>
					<small class="text-muted"> Last 24 hours </small>
				</div>
				{/* <!-- =============End of Expenses=============== --> */}
				<div class="income">
					<span class="material-symbols-sharp"> stacked_line_chart </span>
					<div class="middle">
						<div class="left">
							<h3>Total Income</h3>
							<h1>$10,864</h1>
						</div>
						<div class="progress">
							<svg>
								<circle cx="38" cy="38" r="36"></circle>
							</svg>
							<div class="number">
								<p>44%</p>
							</div>
						</div>
					</div>
					<small class="text-muted"> Last 24 hours </small>
				</div>
				{/* <!-- =============End of Income=============== --> */}
			</div>
			{/* <!-- <==============End of Insights===================> --> */}

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
		</main>
	);
};

export default MainDashboard;
