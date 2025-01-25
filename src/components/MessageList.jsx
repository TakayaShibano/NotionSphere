function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.type}`}>
          <div className="message-content">{message.content}</div>
          {message.results && (
            <div className="search-results">
              {message.results.map((result, i) => (
                <div key={i} className="result-item">
                  <h3>{result.title}</h3>
                  <p>{result.excerpt}</p>
                  <button onClick={() => handleSummarize(result.id)}>
                    View Summary
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
