import { Send, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(1);

  const conversations = [
    {
      id: 1,
      provider: 'Mike Auto Care',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      lastMessage: 'I can do it tomorrow at 10 AM',
      time: '2 hours ago',
      unread: 2,
    },
    {
      id: 2,
      provider: 'Sarah Clean Pro',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      lastMessage: 'Thanks for choosing our service!',
      time: '1 day ago',
      unread: 0,
    },
    {
      id: 3,
      provider: 'Tom Plumber',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      lastMessage: 'The repair is complete',
      time: '3 days ago',
      unread: 0,
    },
  ];

  const messages = [
    { id: 1, sender: 'them', text: 'Hi! How can I help you?', time: '10:00 AM' },
    { id: 2, sender: 'me', text: 'I need car wash service', time: '10:05 AM' },
    { id: 3, sender: 'them', text: 'Sure! When would you like to schedule?', time: '10:06 AM' },
    { id: 4, sender: 'me', text: 'Tomorrow morning if possible', time: '10:08 AM' },
    { id: 5, sender: 'them', text: 'I can do it tomorrow at 10 AM', time: '10:10 AM' },
  ];

  return (
    <div className="p-8 h-[calc(100vh-2rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground mt-2">Chat with service providers</p>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[calc(100%-8rem)]">
        {/* Conversations List */}
        <Card className="col-span-4">
          <CardContent className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>

            <ScrollArea className="h-[calc(100vh-20rem)]">
              <div className="space-y-2">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                      selectedChat === conv.id
                        ? 'bg-primary/10 border border-primary'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex gap-3">
                      <img
                        src={conv.avatar}
                        alt={conv.provider}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium truncate">{conv.provider}</p>
                          {conv.unread > 0 && (
                            <span className="px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                              {conv.unread}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {conv.lastMessage}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="col-span-8 flex flex-col">
          <CardContent className="p-4 flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center gap-3 pb-4 border-b">
              <img
                src={conversations.find((c) => c.id === selectedChat)?.avatar}
                alt="Provider"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">
                  {conversations.find((c) => c.id === selectedChat)?.provider}
                </p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 py-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        msg.sender === 'me'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="flex gap-2 pt-4 border-t">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
