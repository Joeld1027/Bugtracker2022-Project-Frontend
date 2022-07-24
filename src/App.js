import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import HomePage from "./routes/homepage/homepage.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Dashboard from "./routes/dashboard/dashboard.component.jsx";
import MainDashboard from "./components/main-dashboard/main-dashboard.component.jsx";
import Tickets from "./routes/tickets/tickets.component.jsx";
import Projects from "./routes/projects/projects.component.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="auth" element={<Authentication />} />
			</Route>
			<Route path="dashboard" element={<Dashboard />}>
				<Route index element={<MainDashboard />} />
				<Route path="tickets" element={<Tickets />} />
				<Route path="projects" element={<Projects />} />
			</Route>
		</Routes>
	);
}

export default App;
