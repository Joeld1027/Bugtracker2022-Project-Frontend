import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import HomePage from "./routes/homepage/homepage.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Dashboard from "./routes/dashboard/dashboard.component.jsx";
import MainDashboard from "./components/main-dashboard/main-dashboard.component.jsx";
import Tasks from "./routes/tasks/tasks.component.jsx";
import Projects from "./routes/projects/projects.component.jsx";
import Users from "./routes/users/users.component.jsx";
import NewTask from "./routes/new-task/new-task.component.jsx";
import NewProject from "./routes/new-project/new-project.component.jsx";
import RequireAuth from "./components/userAuth/userAuth.component.jsx";
import { setToken } from "./store/user/user.action.js";
import { selectToken } from "./store/user/user.selector.js";

function App() {
	const dispatch = useDispatch();
	const token = useSelector(selectToken);
	console.log(token);

	const verifyUser = useCallback(() => {
		fetch("http://localhost:8082/auth/refreshToken", {
			method: "POST",
			credentials: "include",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ token }),
		}).then(async (response) => {
			if (response.ok) {
				const data = await response.json();
				dispatch(setToken(data.token));
			} else {
				console.log("no response");
			}
			// call refreshToken every 5 minutes to renew the authentication token.
			setTimeout(verifyUser, 150000);
		});
	}, [dispatch]);

	useEffect(() => {
		verifyUser();
	}, [verifyUser]);

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="auth" element={<Authentication />} />
			</Route>

			<Route
				path="dashboard"
				element={
					<RequireAuth>
						<Dashboard />
					</RequireAuth>
				}
			>
				<Route index element={<MainDashboard />} />
				<Route path="tasks" element={<Tasks />} />
				<Route path="tasks/new" element={<NewTask />} />
				<Route path="projects" element={<Projects />} />
				<Route path="projects/new" element={<NewProject />} />
				<Route path="users" element={<Users />} />
			</Route>
		</Routes>
	);
}

export default App;
