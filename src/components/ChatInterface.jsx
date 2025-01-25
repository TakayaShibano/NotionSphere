import { useState } from 'react';
import MessageList from './MessageList';
import SearchInput from './SearchInput';

function ChatInterface({ messages, onSearch }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (query) => {
    setLoading(true);
    await onSearch(query);
    setLoading(false);
  };

  return (
    <div className="chat-interface">
      <MessageList messages={messages} />
      <SearchInput onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

export default ChatInterface;
