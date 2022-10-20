import "./scss/styles.scss";
import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import Header from "./Header";
import Main from "./Main";

export default function App() {
	const [messages, setMessages] = useState([]);
	const [requestState, setRequestState] = useState({ inFlight: false, error: false, done: false });
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		const URL = `https://join-web-api.herokuapp.com/api/contactMessage`;

		setRequestState({ inFlight: true, error: false, done: false });
		// console.log(requestState);

		fetch(URL).then(
			data => data.json().then((messages) => {
				setMessages(messages);
				setRequestState({ inFlight: false, error: false, done: true });
			}),
			err => {
				setRequestState({ error: true, inFlight: false, done: false });
				// console.error(err);
			}
		);
	}, []);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<DarkMode onClick={setDarkMode} />
			<Header />
			<Main requestState={requestState} messages={messages} />
		</div>
	);
}


// [{ "id": 1, "fullName": "Matin Manafov", "email": "matin@gmail.com", "text": "tyrgr", "submittedDate": "0001-01-01T00:00:00" }, { "id": 2, "fullName": "Matin Manafov", "email": "matin@gmail.com", "text": "I am interested!", "submittedDate": "0001-01-01T00:00:00" }, { "id": 3, "fullName": "Matin Manafov", "email": "matin@gmail.com", "text": "sgdsg", "submittedDate": "0001-01-01T00:00:00" }]