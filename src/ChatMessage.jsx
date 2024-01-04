import React from "react"

const ChatMessage = ({ messages }) => (
    <div>
        <div>
            {messages.map((message, index) => (
                <div key={index} className={message.isUser ? "user-message" : "bot-message"}>
                    {message.text}
                </div>
            ))}
        </div>
    </div>
);
export default ChatMessage;

// export default function ChatMessage() {
//     const [input, setInput] = useState("");
//     const [messages, setMessages] = useState([]);

//     const handleSend = async () => {
//         const response = "response test";
//         setMessages([
//             ...messages,
//             { text: input, isUser: true },
//             { text: response, isUser: false },
//         ]);
//         setInput("");
//     };

//     return (
//         <>
//             <div classname="ChatMessage">
//                 <div className="messages">
//                     {messages.map((message, index) => (
//                         <div key={index} className={message.isUser ? "user-message" : "bot-message"}>{message.text}</div>
//                     ))}
//                 </div >

//                 <div>
//                     <Input
//                         placeholder="Enter Text"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)} />
//                 </div>
//                 <div>
//                     <button className="buttonSend"
//                         onClick={handleSend}>Send</button>
//                 </div>
//             </div>

//         </>
//     );
// }

