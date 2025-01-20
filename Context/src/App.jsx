import './App.css';
import Login from './components/login';
import Profile from './components/profilerofile';
import UserContextProvider from './context/userContextProvider';

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
