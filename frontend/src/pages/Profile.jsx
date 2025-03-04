import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl">Profile</h2>
      {user ? (
        <div className="mt-5">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default Profile;
