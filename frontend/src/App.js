import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Transaksi from "./pages/Transaksi"
import Error from "./pages/Error";
import Profile from "./pages/Profile";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/transaksi" exact element={<Transaksi />} />}
			{user && <Route path="/profile" exact element={<Profile/>}/>}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/dashboard" exact element={<Dashboard />} />
			<Route path="/about" exact element={<About />} />
			<Route path="/" element={<Navigate replace to="/Dashboard" />} />
			<Route path="*" element={<Error />}/>
		</Routes>
	);
}

export default App;
