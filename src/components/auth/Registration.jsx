import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(credentials);
      axios
        .post("http://localhost:8080/api/v1/customers/register", credentials, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Includes cookies with the request
        })
        .then((response) => {
          // Handle successful login
          console.log("Registration successful:", response.data);
          if (response.status === 202) {
            navigate("/otpVerification");
          }
        })
        .catch((error) => {
          // Handle login error
          console.error("There was an error logging in:", error);
        });
    };

  return (
    <div className="text-center">
      <h4 className="text-2xl text-green-800">User Registration Form</h4>
      <form
        className="border border-blue-950 w-2/5 ml-auto mr-auto mt-5 text-left pl-7"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          id="email"
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
          value="Register"
        />
        <input
          className="p-4 m-4 rounded bg-blue-400"
          type="reset"
          value="Reset"
        />
      </form>
    </div>
  );
}

export default Registration;
