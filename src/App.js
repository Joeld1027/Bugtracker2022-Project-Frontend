import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import HomePage from "./routes/homepage/homepage.component.jsx";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	);
}

export default App;
