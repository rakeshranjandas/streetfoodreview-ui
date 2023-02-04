import './App.css'
import UserProfile from './UserProfile'
import SearchBar from './SearchBar'
import UserDisplay from './UserDisplay'

export default function App() {
  return (
    <>
      <div className="user-profile-header">
        <UserProfile />
        <SearchBar />
      </div>
      <UserDisplay />
    </>
  );
}