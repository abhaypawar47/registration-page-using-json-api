import { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>Loading users...</p>
  ) : (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> ({user.username}) — {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
