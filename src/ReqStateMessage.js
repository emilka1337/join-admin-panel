export default function ReqStateMessage(props) {
    return (
        <main className="container-lg py-4">
            <h2>Loading...</h2>
        </main>
    )
    if (props.requestState.inFlight) {
        return (
            <main className="container-lg py-4">
                <h2>Loading...</h2>
            </main>
        )
    } else if (props.requestState.error) {
        return (
            <main className="container-lg py-4">
                <h2>Error displaying messages :(</h2>
            </main>
        )
    }
}