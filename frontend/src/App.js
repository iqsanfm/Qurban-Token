import { Route, Routes, Navigate } from "react-router-dom";
import Transaksi from "./components/Transaksi";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
	const user = localStorage.getItem("Store");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/Signup" exact element={<Signup />} />
			<Route path="/Login" exact element={<Login />} />
      <Route path="/Transaksi" exact element={<Transaksi/>} />
			<Route path="/" element={<Navigate replace to="/signup" />} />
		</Routes>
	);
}

export default App;