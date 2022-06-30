import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div >
      <Card onClikc={(num: number) => console.log(num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>add</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
