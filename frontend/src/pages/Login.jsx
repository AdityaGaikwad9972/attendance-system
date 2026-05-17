import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      if (res.data.user.role === "admin") {

        navigate("/admin");

      } else {

        navigate("/student");

      }

    } catch (err) {

      console.log(err);

      alert("Login Failed");

    }

  };

  return (

    <div style={{ padding: "40px" }}>

      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value
          })
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value
          })
        }
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  );

}