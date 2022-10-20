import Message from "./Message";

export default function Main(props) {
    const requestState = props.requestState;

    return (
        <main className="container-lg py-4">
            {
                requestState.inFlight ? <h2>Loading...</h2> :
                    requestState.error ? <h2>Error displaying messages :(</h2> :
                        requestState.done ? () => {
                            <ul className="messages-heading">
                                <li>ID</li>
                                <li>Full Name</li>
                                <li>Email</li>
                                <li>Text</li>
                                <li>Submitted Date</li>
                            </ul>
                            { props.messages.map((message) => <Message message={message} key={message.id} />) }
                        } : null
            }
        </main>
    )
    // if (requestState.inFlight) {
    //     return (
    //         <main className="container-lg py-4">
    //             <h2>Loading...</h2>
    //         </main>
    //     )
    // } else if (requestState.error) {
    //     return (
    //         <main className="container-lg py-4">
    //             <h2>Error displaying messages :(</h2>
    //         </main>
    //     )
    // } else if (requestState.done) {
    //     return (
    //         <main className="container-lg py-4">
    //             <ul className="messages-heading">
    //                 <li>ID</li>
    //                 <li>Full Name</li>
    //                 <li>Email</li>
    //                 <li>Text</li>
    //                 <li>Submitted Date</li>
    //             </ul>
    //             {props.messages.map((message) => <Message message={message} key={message.id} />)}
    //         </main>
    //     )
    // }
}