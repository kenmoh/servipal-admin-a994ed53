
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Send, Plus } from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
}

interface Conversation {
  id: string;
  user: string;
  userType: 'customer' | 'vendor' | 'rider' | 'dispatch';
  lastMessage: Message;
  avatarUrl?: string;
}

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messageInput, setMessageInput] = useState('');
  
  // Mock conversations data
  const conversations: Conversation[] = [
    {
      id: 'CONV-001',
      user: 'John Doe',
      userType: 'customer',
      lastMessage: {
        id: 'MSG-001',
        sender: 'John Doe',
        content: 'I still haven\'t received my order. Can you help?',
        timestamp: '10:23 AM',
        read: false,
      },
    },
    {
      id: 'CONV-002',
      user: 'Pizza Place',
      userType: 'vendor',
      lastMessage: {
        id: 'MSG-002',
        sender: 'Support',
        content: 'Your verification is complete. You can start accepting orders.',
        timestamp: 'Yesterday',
        read: true,
      },
    },
    {
      id: 'CONV-003',
      user: 'Mike Wilson',
      userType: 'rider',
      lastMessage: {
        id: 'MSG-003',
        sender: 'Mike Wilson',
        content: 'There\'s a problem with the delivery address.',
        timestamp: 'Yesterday',
        read: false,
      },
    },
    {
      id: 'CONV-004',
      user: 'Fast Couriers',
      userType: 'dispatch',
      lastMessage: {
        id: 'MSG-004',
        sender: 'Support',
        content: 'Please assign more riders to the downtown area.',
        timestamp: '2 days ago',
        read: true,
      },
    },
  ];

  // Mock messages for the selected conversation
  const conversationMessages: Record<string, Message[]> = {
    'CONV-001': [
      {
        id: 'MSG-101',
        sender: 'John Doe',
        content: 'Hello, I placed an order (#ORD-005) two hours ago but it still shows as pending.',
        timestamp: '10:10 AM',
        read: true,
      },
      {
        id: 'MSG-102',
        sender: 'Support',
        content: 'Hi John, let me check that for you. Just a moment please.',
        timestamp: '10:15 AM',
        read: true,
      },
      {
        id: 'MSG-103',
        sender: 'Support',
        content: 'I checked with the vendor and they're preparing your order now. The rider should be assigned shortly.',
        timestamp: '10:18 AM',
        read: true,
      },
      {
        id: 'MSG-104',
        sender: 'John Doe',
        content: 'I still haven\'t received my order. Can you help?',
        timestamp: '10:23 AM',
        read: false,
      },
    ],
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedConversation) return;
    
    // In a real app, this would send the message to the backend
    // Then update the UI once the message is successfully sent
    console.log("Sending message:", messageInput);
    setMessageInput('');
  };

  const getUserTypeLabel = (userType: string) => {
    switch(userType) {
      case 'customer': return 'Customer';
      case 'vendor': return 'Vendor';
      case 'rider': return 'Rider';
      case 'dispatch': return 'Dispatch';
      default: return userType;
    }
  };

  return (
    <Layout title="Messaging">
      <div className="h-[calc(100vh-160px)] flex">
        <Card className="w-96 flex-shrink-0 border-r rounded-r-none h-full overflow-hidden">
          <CardHeader className="px-4 py-2 space-y-2">
            <CardTitle>Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-8"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-y-auto h-[calc(100%-80px)]">
            <div className="divide-y">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 ${
                    selectedConversation?.id === conversation.id ? 'bg-gray-50' : ''
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{conversation.user}</h3>
                      <p className="text-xs text-gray-500">{getUserTypeLabel(conversation.userType)}</p>
                    </div>
                    <span className="text-xs text-gray-500">{conversation.lastMessage.timestamp}</span>
                  </div>
                  <p className={`text-sm mt-1 truncate ${!conversation.lastMessage.read ? 'font-semibold' : ''}`}>
                    {conversation.lastMessage.content}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-grow h-full rounded-l-none border-l-0">
          {selectedConversation ? (
            <>
              <CardHeader className="border-b px-6 py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>{selectedConversation.user}</CardTitle>
                    <CardDescription>
                      {getUserTypeLabel(selectedConversation.userType)}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">View Profile</Button>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex flex-col h-[calc(100%-140px)]">
                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                  {(conversationMessages[selectedConversation.id] || []).map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'Support' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.sender === 'Support'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-gray-100'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <span className="text-xs mt-1 block text-right opacity-70">{message.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t p-4 flex gap-2">
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Type your message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-grow"
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </CardContent>
            </>
          ) : (
            <div className="flex h-full items-center justify-center flex-col p-6">
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-2">Select a conversation</h3>
                <p className="text-gray-500">Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default Messages;
