import { useChatBot } from "../../context/ChatContext";
import { PiChatLight, PiChatSlashLight } from "react-icons/pi";

export default function ChatToggle() {
  const { isVisible, toggleChatbot } = useChatBot();
  return (
    <button className="hover:text-hover" onClick={toggleChatbot}>
      {isVisible ? <PiChatLight size={20} /> : <PiChatSlashLight size={20} />}
    </button>
  );
}
