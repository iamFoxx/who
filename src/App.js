import React, {useState} from 'react';
import './App.css';

function App() {
  const [who, setWho] = useState('');

  function handleWho(){
    setWho('🐯');

  }
  return (
    <div className="App">
     <div>💪{who}👊</div>
     <button onClick={handleWho} >Tiger</button>
    </div>
  );
}

export default App;
