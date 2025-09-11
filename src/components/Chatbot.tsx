import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to The Hornbill Lodge! I'm here to help you with bookings, room information, and local experiences. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const predefinedResponses: { [key: string]: string } = {
    "booking": "I'd be happy to help you with a booking! Our rooms start from $150 per night. Would you like to check availability for specific dates? You can also call us at +267 123 456 789 for immediate assistance.",
    "rooms": "We offer luxury suites and standard rooms, all with en-suite bathrooms, air conditioning, and stunning views. Our luxury suites feature private balconies and premium amenities. Would you like more details about a specific room type?",
    "experiences": "We offer amazing experiences including flamingo viewing at Nata Bird Sanctuary, Makgadikgadi Pans tours, cultural village visits, and guided nature walks. Which experience interests you most?",
    "location": "We're located in Nata, Botswana, just minutes from the famous Nata Bird Sanctuary and close to the spectacular Makgadikgadi Pans. It's about 2.5 hours drive from Francistown.",
    "contact": "You can reach us at +267 123 456 789 or email info@hornbilllodge.com. We're also available on WhatsApp for quick responses!",
    "default": "Thank you for your question! For detailed information about bookings, rooms, or experiences, I recommend speaking with our team directly at +267 123 456 789. They'll provide personalized assistance for your stay.",
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);

    // Simple keyword matching for responses
    const lowerInput = inputValue.toLowerCase();
    let response = predefinedResponses.default;

    if (lowerInput.includes("book") || lowerInput.includes("reservation") || lowerInput.includes("available")) {
      response = predefinedResponses.booking;
    } else if (lowerInput.includes("room") || lowerInput.includes("suite") || lowerInput.includes("accommodation")) {
      response = predefinedResponses.rooms;
    } else if (lowerInput.includes("experience") || lowerInput.includes("activity") || lowerInput.includes("flamingo") || lowerInput.includes("pans")) {
      response = predefinedResponses.experiences;
    } else if (lowerInput.includes("location") || lowerInput.includes("where") || lowerInput.includes("address")) {
      response = predefinedResponses.location;
    } else if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("email")) {
      response = predefinedResponses.contact;
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-premium hover:shadow-glow transition-all duration-300 z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] shadow-premium z-50 flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
        <CardTitle className="text-lg font-semibold flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-primary-foreground" />
          </div>
          <span>Lodge Assistant</span>
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="h-8 w-8"
        >
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                )}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === "bot" && (
                    <Bot className="w-4 h-4 mt-0.5 text-primary" />
                  )}
                  {message.sender === "user" && (
                    <User className="w-4 h-4 mt-0.5" />
                  )}
                  <p className="leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t flex space-x-2">
          <Input
            placeholder="Ask about bookings, rooms, or experiences..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;