import React, {useState} from 'react';
import './App.css';

function App() {
  const [who, setWho] = useState('🐼');

  function handleWho(e){
    e.preventDefault();
    const emoji = e.target.getAttribute('data-emoji') || '🐯'
    setWho(emoji);

  }
  return (
    <div className="App">
     <div>💪{who}👊</div>
     <button onClick={handleWho} >Tiger</button>
     <button onClick={handleWho} data-emoji="🐵">Monkey</button>
     <button onClick={handleWho} data-emoji="🐷">Pork</button>
    </div>
  );
}

export default App;
