import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl">Login</h2>
      <form onSubmit={handleSubmit} className="w-1/3">
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-2 border" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-2 border" />
        <button className="bg-blue-500 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
