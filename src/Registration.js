import React, { useState } from "react";

const Registration = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({
      fullname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>

        <div className="form-input">
          <label>Full Name: </label>
          <input
            type="text"
            placeholder="Enter full name"
            value={input.fullname}
            onChange={handleChange}
            name="fullname"
          ></input>

          <label>email: </label>
          <input
            type="email"
            placeholder="domain@email.com"
            value={input.email}
            onChange={handleChange}
            name="email"
          ></input>

          <label>Password: </label>
          <input
            type="Password"
            placeholder="******"
            value={input.password}
            onChange={handleChange}
            name="password"
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
