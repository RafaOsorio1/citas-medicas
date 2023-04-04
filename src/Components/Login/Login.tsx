import React from "react";

export const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form action="">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" placeholder="Password" />
      </form>
    </div>
  );
};
