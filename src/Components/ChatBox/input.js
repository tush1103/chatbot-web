
function ChatBox() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const updateResponse = (event) => {
        setInput(event.target.value)
    }
    const inputKeyPress = (event) => {
        if (event.key === "Enter") {
            console.log(input);
        }

    }


    return (
        <div>
            <input type="text" onChange={updateResponse} value={response}/>
        </div>
    );
}


export default ChatBox;