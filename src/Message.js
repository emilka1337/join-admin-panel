export default function Message(props) {
    const message = props.message;

    return (
        <ul className="message">
            <li>{message["id"]}</li>
            <li>{message["fullName"]}</li>
            <li>{message["email"]}</li>
            <li>{message["text"]}</li>
            <li>{message["submittedDate"]}</li>
        </ul>
    )
}