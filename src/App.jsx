import React from 'react';
import StreakTracker from './components/StreakTracker';
import './index.css';

function App() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:"maroon-100"}} className="App">
      <StreakTracker />
    </div>
  );
}

export default App;
