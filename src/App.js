import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import Loading from './components/Loading';
import ErrorDisplay from './components/ErrorDisplay';
import NoResults from './components/NoResults';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay error={error} onRetry={fetchUsers} />;
  }

  return (
    <div className="bg-blue-950 min-h-screen">
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        resultCount={filteredUsers.length}
        totalCount={users.length}
      />

      <div className="max-w-8xl max-h-1xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {filteredUsers.length === 0 ? (
          <NoResults />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            {filteredUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
