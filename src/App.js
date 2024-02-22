import { useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import DarkModeToggle from './components/DarkModeToggle'; // Import the DarkModeToggle component
import './App.css';

const projectID = 'c551396f-8095-42c5-aa72-6ac89159a732';

const App = () => {
  // Check if username exists in localStorage
  const isUserLoggedIn = localStorage.getItem('username');

  // Add useEffect hook to apply dark mode based on localStorage value
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, []);

  // Render login form if user is not logged in
  if (!isUserLoggedIn) return <LoginForm />;

  return (
    <div className="app">
      <DarkModeToggle /> {/* Render the DarkModeToggle component */}
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
};

export default App;
