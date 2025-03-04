import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5002/api/auth/register", { name, email, password });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl">Register</h2>
      <form onSubmit={handleSubmit} className="w-1/3">
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="w-full p-2 mb-2 border" />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-2 border" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-2 border" />
        <button className="bg-green-500 text-white px-4 py-2 w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
