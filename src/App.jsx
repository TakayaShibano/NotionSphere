import { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, 
        { type: 'user', content: query },
        { type: 'assistant', content: data.response, results: data.results }
      ]);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div className="app">
      <h1>Notion Intelligence Search</h1>
      <ChatInterface messages={messages} onSearch={handleSearch} />
    </div>
  );
}

export default App;
