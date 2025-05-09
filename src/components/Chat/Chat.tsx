// import { useChat } from "@ai-sdk/react";
// import { useChatBot } from "../../context/ChatContext";
// import ChatInput from "./ChatInput";
// import ChatMessages from "./ChatMessages";
// import Accordion from "../../ui/Accordion";
// import axios from "axios";

// interface Message {
//   id: string;
//   role: "user" | "assistant";
//   content: string;
// }

// export default function Chat() {
//   const { isVisible } = useChatBot();
//   const {
//     messages,
//     input,
//     handleInputChange,
//     // handleSubmit,
//     setMessages,
//     status,
//     error,
//     setInput,
//   } = useChat();

//   // Updated handleSubmit to send the message to the backend API
//   const updatedHandleSubmit = async () => {
//     const userMessage : Message = {
//       role: "user",
//       content: input,
//       id: Date.now().toString(),
//     };

//     // Add the user's message to the current messages
//     setMessages((prevMessages) => [...prevMessages, userMessage]);

//     try {
//       // Make the API call to the backend chat endpoint
//       const response = await axios.post("http://localhost:3000", {
//         messages: [...messages, userMessage],
//       });

//       // Get the AI's response from the backend and add it to the messages
//       const aiMessage : Message = {
//         role: "assistant",
//         content: response.data.answer,  // Adjust based on your backend response structure
//         id: Date.now().toString(),
//       };
//       setMessages((prevMessages) => [...prevMessages, aiMessage]);
//       setInput("");
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <div className="ipad_mini:right-7 phone:right-3 phone:bottom-3 ipad_mini:bottom-7 fixed z-40 flex flex-col transition-all duration-300">
//       {isVisible && (
//         <Accordion>
//           <ChatMessages messages={messages} error={error} status={status} />
//           <ChatInput
//             // input={input}
//             input={input}
//             // handleSubmit={handleSubmit} //previous
//             handleSubmit={updatedHandleSubmit}
//             handleInputChange={handleInputChange}
//             setMessages={setMessages}
//             // status={status}
//             messages={messages}
//           />
//         </Accordion>
//       )}
//     </div>
//   );
// }
import { useChat } from "@ai-sdk/react";
import { useChatBot } from "../../context/ChatContext";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import Accordion from "../../ui/Accordion";

export default function Chat() {
  const { isVisible } = useChatBot();
  const {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat({ api: "/src/api" });

  return (
    <div className="fixed z-40 flex flex-col transition-all duration-300 phone:bottom-3 phone:right-3 ipad_mini:bottom-7 ipad_mini:right-7">
      {isVisible && (
        <Accordion>
          <ChatMessages
            messages={messages}
            error={error}
            isLoading={isLoading}
          />
          <ChatInput
            input={input}
            setInput={setInput}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setMessages={setMessages}
            messages={messages}
          />
        </Accordion>
      )}
    </div>
  );
}
