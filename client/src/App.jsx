import { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import { getUsers } from './apis/userApi';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  async function fetchUsers() {
    const users = await getUsers();
    setUsers(users);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = useCallback((text) => {
    setSearchText(text);
  }, []);

  function handleClear() {
    setSearchText('');
  }

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, users]);

  return (
    <main className="main">
      <h1 className="heading">User Database</h1>
      <SearchBar
        searchText={searchText}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      {loading ? (
        <p>Loading...</p>
      ) : filteredUsers.length > 0 ? (
        <UserList users={filteredUsers} />
      ) : (
        <p className="error-message">No users found.</p>
      )}
    </main>
  );
}

export default App;
