import React, { useState } from 'react';
import { UserInterface } from "../interfaces/UserInterface";

/* const characters = 'ABCDEF123456';

const generateRandomId = (length: number) => {
  let randomId = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

 interface UserCardProps {
    userItem: UserInterface;
  
    
  }

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: generateRandomId(6), name: 'User 1' },
    { id: generateRandomId(6), name: 'User 2' },
    // ... other users
  ]);

  const addNewIdToUser = (userId: string) => {
    const newUserList = users.map((user) => {
      if (user.id === userId) {
        // Generate a new ID and add it to the user
        const newId = generateRandomId(6);
        return { ...user, id: newId };
      }
      return user;
    });

    setUsers(newUserList);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} (ID: {user.id}){' '}
            <button onClick={() => addNewIdToUser(user.id)}>Add New ID</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
*/