import { useEffect, useState } from "react";
import Message from "./Message";

export default function Main() {
    const [messages, setMessages] = useState([]);
    const [requestState, setRequestState] = useState({ inFlight: false, error: false, done: false });

    useEffect(() => {
        setRequestState({ inFlight: true, error: false, done: false });

        fetch(`https://join-web-api.herokuapp.com/api/contactMessage`).then(
            data => data.json().then((messages) => {
                setMessages(messages);
                setRequestState({ inFlight: false, error: false, done: true });
            }),
            err => {
                setRequestState({ error: true, inFlight: false, done: false });
                console.error(err);
            }
        );
    }, []);

    if (requestState.inFlight) {
        return (
            <main className="container-lg py-4">
                <h2>Loading...</h2>
            </main>
        )
    } else if (requestState.error) {
        return (
            <main className="container-lg py-4">
                <h2>Error displaying messages :(</h2>
            </main>
        )
    } else if (requestState.done) {
        return (
            <main className="container-lg py-4">
                <ul className="messages-heading">
                    <li>ID</li>
                    <li>Full Name</li>
                    <li>Email</li>
                    <li>Text</li>
                    <li>Submitted Date</li>
                </ul>
                {messages.map((message) => <Message message={message} key={message.id} />)}
            </main>
        )
    }
}

//{ "id": 1, "fullName": "Matin Manafov", "email": "matin@gmail.com", "text": "tyrgr", "submittedDate": "0001-01-01T00:00:00" }, { "id": 2, "fullName": "Matin Manafov", "email": "matin@gmail.com", "text": "I am interested!", "submittedDate": "0001-01-01T00:00:00" }, { "id": 3, "fullName": "Matin Manafov", "email": "matin@gmail.com", "text": "sgdsg", "submittedDate": "0001-01-01T00:00:00" }