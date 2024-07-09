import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Includes cookies with the request
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-center">
        <h4 className="text-2xl text-green-800">User Login Form</h4>
        <form
          className="border border-blue-950 w-2/5 ml-auto mr-auto mt-5 text-left pl-7"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={credentials.email}
            onChange={handleChange}
            id="username"
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            id="password"
          />
          <br />
          <br />
          <input
            className="p-4 m-4 rounded bg-green-500"
            type="submit"
            value="Login"
          />
          <input
            className="p-4 m-4 rounded bg-blue-400"
            type="reset"
            value="Reset"
          />
        </form>
      </div>
    </>
  );
}

export default Login;
