import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DataProvider from "./context/DataProvider";

import Allproduct from "./pages/Allproduct";
import Featureproduct from "./pages/Featureproduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<DataProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Allproduct />} />
					<Route path="/featureproduct" element={<Featureproduct />} />
				</Routes>
				<Footer />
			</DataProvider>
		</BrowserRouter>
	);
}

export default App;
