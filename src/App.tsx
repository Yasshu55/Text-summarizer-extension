import React, { useState } from 'react';
import './App.css';
import { summarizeText } from './api';

const App = () => {
  type Summary = String;
  const [text, setText] = useState('');
  const [summary, setSummary] = useState<Summary>('');

  const handleSummarize = async () => {
    if (text) {
      try {
        const summary = await summarizeText(text);        
        setSummary(summary);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="App">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste a paragraph here..."
      />
      <button onClick={handleSummarize}>Summarize</button>
      <p><strong>Summary:</strong> {summary}</p>
    </div>
  );
}

export default App;