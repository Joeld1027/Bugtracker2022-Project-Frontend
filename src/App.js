import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
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
import { setCurrentUser } from "./store/user/user.action.js";
import { setTokenHeader, apiCall } from "./service/apiCall";
import { useEffect } from "react";
import TaskDetailsPage from "./routes/tasks/task-details.component.jsx";
import ProjectDetailsPage from "./routes/projects/project-details.component.jsx";

function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const authUser = () => {
		if (localStorage.jwToken) {
			const userInfo = jwtDecode(localStorage.jwToken);
			if (Date.now() >= userInfo.exp * 1000) {
				localStorage.clear();
			} else {
				// prevent someone from manually tempering with the token
				setTokenHeader(localStorage.jwToken);
				apiCall("get", "http://localhost:8081/auth/currentUser")
					.then((response) => {
						const data = { user: response, token: localStorage.jwToken };
						dispatch(setCurrentUser(data));
						navigate("../dashboard", { replace: true });
					})
					.catch((err) => console.log(err));
			}
		}
	};

	useEffect(() => {
		authUser();
	}, []);

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
				<Route path="tasks/:taskId" element={<TaskDetailsPage />} />
				<Route path="tasks/:taskId/edit" element={<NewTask edit="edit" />} />
				<Route path="tasks/new" element={<NewTask />} />
				<Route path="projects" element={<Projects />} />
				<Route path="projects/:projectId" element={<ProjectDetailsPage />} />
				<Route path="projects/new" element={<NewProject />} />
				<Route path="users" element={<Users />} />
			</Route>
		</Routes>
	);
}

export default App;
