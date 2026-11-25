
import { useState } from "react";
import {
  Bot,
  Send,
  User,
  Sparkles,
  RotateCcw,
  HeartPulse
} from "lucide-react";

const initialMessages = [
  {
    id: 1,
    sender: "bot",
    text: "Hello! I'm Pulse AI, your PulseLink demo assistant. I can explain the platform features and help you navigate the prototype. What would you like to know?"
  }
];

const suggestions = [
  "How does PulseLink work?",
  "How can I find donors?",
  "How do I register as a donor?",
  "How can I create an emergency request?"
];

function getBotResponse(message) {
  const text = message.toLowerCase();

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hello! Welcome to PulseLink. I can help you understand the donor directory, registration page, and emergency request demo.";
  }

  if (
    text.includes("how does") ||
    text.includes("what is pulselink") ||
    text.includes("about pulselink")
  ) {
    return "PulseLink is a frontend demonstration of a smart blood donor and availability network. It brings together sample donor listings, donor registration, and emergency request tracking in one interface.";
  }

  if (
    text.includes("find") ||
    text.includes("search") ||
    text.includes("donor")
  ) {
    return "To explore donors, open Find Donors from the sidebar. You can filter the fictional sample records by blood group, city, and availability. Remember, these records are for demonstration only.";
  }

  if (
    text.includes("register") ||
    text.includes("join")
  ) {
    return "Open the Register page from the sidebar. Enter fictional demo details, choose a blood group and city, select an availability status, and tick the acknowledgement before submitting.";
  }

  if (
    text.includes("emergency") ||
    text.includes("request") ||
    text.includes("blood")
  ) {
    return "Open Emergency Requests to explore the request form and sample request history. This prototype does not contact hospitals or donors. For a real medical emergency, contact a hospital or local emergency services directly.";
  }

  if (
    text.includes("compatibility") ||
    text.includes("compatible") ||
    text.includes("eligibility") ||
    text.includes("transfusion")
  ) {
    return "Blood group matching in this prototype is only a search filter. It cannot determine transfusion compatibility or donor eligibility. Those decisions must be made by qualified medical professionals and blood banks.";
  }

  if (
    text.includes("contact") ||
    text.includes("phone") ||
    text.includes("message")
  ) {
    return "Contact actions in this prototype are simulated. No phone calls, messages, or notifications are sent to real donors.";
  }

  if (
    text.includes("thank")
  ) {
    return "You're welcome! Feel free to explore the different PulseLink sections.";
  }

  return "I can help explain PulseLink's Dashboard, Find Donors, Register, and Emergency Requests pages. Try one of the suggested questions below!";
}

function PulseAI() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = (text) => {
    const trimmedText = text.trim();

    if (!trimmedText) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedText
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getBotResponse(trimmedText)
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      botMessage
    ]);

    setInput("");
  };

  const resetChat = () => {
    setMessages(initialMessages);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="pulse-ai-page">

      <div className="ai-intro">
        <div>
          <span className="eyebrow">YOUR SMART ASSISTANT</span>
          <h2>Meet Pulse AI</h2>
          <p>
            Explore PulseLink features and get help navigating
            the demonstration.
          </p>
        </div>

        <div className="ai-intro-icon">
          <HeartPulse size={35} />
        </div>
      </div>

      <div className="ai-chat-card">

        <div className="ai-chat-header">

          <div className="ai-profile">
            <div className="ai-avatar">
              <Bot size={25} />
            </div>

            <div>
              <h3>Pulse AI Assistant</h3>
              <span>
                <span className="online-dot"></span>
                Demo assistant online
              </span>
            </div>
          </div>

          <button
            className="ai-reset-button"
            onClick={resetChat}
            title="Reset conversation"
          >
            <RotateCcw size={17} />
            <span>Reset</span>
          </button>

        </div>

        <div className="ai-chat-messages">

          <div className="ai-date-label">
            PULSELINK ASSISTANT
          </div>

          {messages.map((message) => (

            <div
              key={message.id}
              className={`ai-message-row ${
                message.sender === "user" ? "user-row" : "bot-row"
              }`}
            >

              {message.sender === "bot" && (
                <div className="message-avatar bot-message-avatar">
                  <Bot size={17} />
                </div>
              )}

              <div
                className={`ai-message ${
                  message.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }`}
              >
                {message.text}
              </div>

              {message.sender === "user" && (
                <div className="message-avatar user-message-avatar">
                  <User size={17} />
                </div>
              )}

            </div>

          ))}

        </div>

        <div className="ai-suggestions">

          <div className="suggestion-heading">
            <Sparkles size={16} />
            <span>Suggested questions</span>
          </div>

          <div className="suggestion-list">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => sendMessage(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>

        </div>

        <form className="ai-chat-input" onSubmit={handleSubmit}>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something about PulseLink..."
            aria-label="Type your message"
          />

          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <Send size={19} />
          </button>

        </form>

        <div className="ai-disclaimer">
          <Bot size={15} />
          Pulse AI uses predefined demo responses, not a live AI service.
          Do not enter personal or medical information. It cannot provide
          medical advice or determine donor eligibility.
        </div>

      </div>

    </div>
  );
}

export default PulseAI;
