import React from 'react';
import './App.css';
import CommentsList from './CommentsList.js';
import comments from './comments.js';

const App = () => {
  return (
    <div className="App">
      <CommentsList />
      <comments />
    </div>
  );
};

export default App;