import React, { useState, useEffect } from 'react';
import Card from './Card';
import StreakDisplay from './StreakDisplay';
import Reminder from './Reminder';
import '../index.css';

function StreakTracker() {
  const [streak, setStreak] = useState(0);
  const [lastCompleted, setLastCompleted] = useState(null);
  const [streakStarted, setStreakStarted] = useState(false);

  useEffect(() => {
    const storedStreak = localStorage.getItem('streak');
    const storedLastCompleted = localStorage.getItem('lastCompleted');
    const storedStreakStarted = localStorage.getItem('streakStarted');

    if (storedStreak) setStreak(parseInt(storedStreak, 10));
    if (storedLastCompleted) setLastCompleted(new Date(storedLastCompleted));
    if (storedStreakStarted) setStreakStarted(storedStreakStarted === 'true');

  }, []);

  const startStreak = () => {
    setStreakStarted(true);
    localStorage.setItem('streakStarted', 'true');
  };

  const completeDay = () => {
    const now = new Date();
    setLastCompleted(now);
    localStorage.setItem('lastCompleted', now);
    
    if (!lastCompleted || now.getDate() !== new Date(lastCompleted).getDate()) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('streak', newStreak);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!streakStarted ? (
        <Card startStreak={startStreak} />
      ) : (
        <>
          <StreakDisplay streak={streak} completeDay={completeDay} />
          <Reminder lastCompleted={lastCompleted} />
        </>
      )}
    </div>
  );
}

export default StreakTracker;
