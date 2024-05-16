import { useEffect } from 'react';

function TimerComponent() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Timer Component</h2>
      <p>This component subscribes to a timer.</p>
    </div>
  );
}

function ScrollEventListenerComponent() {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll event');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h2>Scroll Event Listener Component</h2>
      <p>This component subscribes to a scroll event.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Cleanup Operations</h1>
      <TimerComponent />
      <ScrollEventListenerComponent />
    </div>
  );
}

export default App;
