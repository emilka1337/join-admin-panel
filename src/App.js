import "./scss/styles.scss";
import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import Header from "./Header";
import Main from "./Main";

export default function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<DarkMode onClick={setDarkMode} />
			<Header />
			<Main />
		</div>
	);
}