import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import HomePage from "./routes/homepage/homepage.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Dashboard from "./routes/dashboard/dashboard.component.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="auth" element={<Authentication />} />
			</Route>
			<Route path="dashboard" element={<Dashboard />} />
		</Routes>
	);
}

export default App;
