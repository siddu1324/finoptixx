import React, { useState } from 'react';
import axios from 'axios';
import './ScenarioChat.css'; // Ensure CSS styles are correctly defined

const scenarioQuestions = [
  "What if sales increase by 10% next quarter?",
  "What if expenses are reduced by 20%?",
  "What if we increase the marketing budget by 15%?",
  "What if hiring is frozen for the next six months?"
];

const ScenarioPlanning = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskClick = async () => {
    if (!question) {
      setResponse('Please enter a question.');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5001/scenario', { question });
      setResponse(res.data.answer);
    } catch (error) {
      console.error('Error asking question:', error);
      setResponse(`Error: ${error.response ? error.response.data.error : 'Server unreachable'}`);
    }
  };

  const handlePresetQuestion = (presetQuestion) => {
    setQuestion(presetQuestion);
    handleAskClick();
  };

  const handleClearChat = () => {
    setResponse('');
  };

  return (
    <div className="chat-interface">
      <h1 className="scenario-chat-header">Scenario Planning</h1>
      <div className="scenario-chat-container">
        <input
          className="scenario-chat-input"
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask a 'what-if' question"
        />
        <button className="scenario-chat-submit" onClick={handleAskClick}>Ask</button>
        <button className="scenario-chat-clear" onClick={handleClearChat}>Clear</button>
      </div>
      <div className="scenario-chat-messages">
        <div className={response ? "bot message" : ""}>{response}</div>
      </div>
      <div className="scenario-chat-suggestions">
        {scenarioQuestions.map((q, index) => (
          <button className="suggestion-button" key={index} onClick={() => handlePresetQuestion(q)}>{q}</button>
        ))}
      </div>
    </div>
  );
};

export default ScenarioPlanning;
