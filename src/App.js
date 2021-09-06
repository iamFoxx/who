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
     <div className="emojis_container">💪{who}👊</div>
     <div className="emojis_btn_container">
        <button className="emojis_btn" onClick={handleWho} >Tiger</button>
        <button className="emojis_btn" onClick={handleWho} data-emoji="🐵">Monkey</button>
        <button className="emojis_btn" onClick={handleWho} data-emoji="🐷">Pork</button>
     </div>
    </div>
  );
}

export default App;
