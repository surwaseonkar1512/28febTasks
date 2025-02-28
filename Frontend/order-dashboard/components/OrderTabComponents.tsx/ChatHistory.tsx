import React from "react";

const messages = [
  {
    id: 1,
    sender: "Santosh Narate",
    time: "10:15:30",
    text: "VSTATE QUERY RAISED",
    senderInitials: "VN",
    senderType: "other",
  },
  {
    id: 2,
    sender: "Nandkumar Rawate",
    time: "10:18:42",
    text: "Noted. I will check with the team and update you shortly.",
    senderInitials: "NR",
    senderType: "self",
  },
  {
    id: 3,
    sender: "Santosh Narate",
    time: "10:22:10",
    text: "Please check if the documents are submitted correctly.",
    senderInitials: "VN",
    senderType: "other",
  },
  {
    id: 4,
    sender: "Nandkumar Rawate",
    time: "10:25:18",
    text: "I have reviewed them. Some documents are missing. I will send an update.",
    senderInitials: "NR",
    senderType: "self",
  },
  {
    id: 5,
    sender: "Santosh Narate",
    time: "10:28:55",
    text: "Which documents are pending?",
    senderInitials: "VN",
    senderType: "other",
  },
  {
    id: 6,
    sender: "Nandkumar Rawate",
    time: "10:30:40",
    text: "Government approval letter and the company registration certificate.",
    senderInitials: "NR",
    senderType: "self",
  },
  {
    id: 7,
    sender: "Santosh Narate",
    time: "10:35:22",
    text: "Got it. I will get them and upload within an hour.",
    senderInitials: "VN",
    senderType: "other",
  },
  {
    id: 8,
    sender: "Nandkumar Rawate",
    time: "10:45:10",
    text: "Alright, I will check once it's uploaded and proceed accordingly.",
    senderInitials: "NR",
    senderType: "self",
  },
  {
    id: 9,
    sender: "Santosh Narate",
    time: "11:15:35",
    text: "I have uploaded the documents. Please verify.",
    senderInitials: "VN",
    senderType: "other",
  },
  {
    id: 10,
    sender: "Nandkumar Rawate",
    time: "11:20:50",
    text: "Thanks! I am reviewing them now. Will confirm shortly.",
    senderInitials: "NR",
    senderType: "self",
  },
];

const ChatHistory = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg h-96 overflow-y-auto">
      <h2 className="text-lg font-semibold border-b pb-2">
        Communication History
      </h2>
      <div className="mt-2 space-y-4 p-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-center space-x-3 ${
              msg.senderType === "self" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.senderType !== "self" && (
              <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full">
                {msg.senderInitials}
              </div>
            )}

            <div
              className={`max-w-xs p-3 rounded-lg ${
                msg.senderType === "self"
                  ? "bg-blue-500 text-white text-right"
                  : "bg-gray-200 text-black"
              }`}
            >
              <p className="text-sm font-medium">{msg.sender}</p>
              <p className="text-sm">{msg.text}</p>
              <p className="text-xs text-gray-400">{msg.time}</p>
            </div>

            {msg.senderType === "self" && (
              <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-full">
                {msg.senderInitials}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
