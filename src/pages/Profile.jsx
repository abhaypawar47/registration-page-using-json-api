import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      navigate("/register");
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2>Welcome, {user.fullName}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
