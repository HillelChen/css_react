// import React from 'react'
import users from "./users.json";
import UserCard from "./components/UserCard/Index";

export default function App() {
  return (
    <>
    <h1>Users</h1>
    <div className="flex">
      {users.map((u) => (
        <UserCard
          key={u.id}
          firstName={u.firstName}
          phoneNumber={u.phoneNumber}
          age={u.age}
          address={u.address}
          image={u.image}
          lastName={u.lastName}
        />
      ))}
    </div>
    </>
  );
}
