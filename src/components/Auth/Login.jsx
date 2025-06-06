import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is:", email);
    console.log("Password is:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl p-20 border-emerald-600">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-2 px-6 text-xl outline-none bg-transparent
             placeholder:text-gray-400 rounded-full"
            type="email"
            placeholder="Enter your Email"
          />
          <input
          value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-2 px-6 text-xl outline-none mt-3 bg-transparent 
            placeholder:text-gray-400 rounded-full"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="border-none cursor-pointer hover:bg-emerald-700 font-semibold
           bg-emerald-600 py-2 px-16 text-lg text-white outline-none mt-7 placeholder:text-white rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
