import { Button } from "react-bootstrap";
import { useState } from "react";

const LoginForm = () => {
  const [loggedin, setlogin] = useState("Not Loggedin");
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  async function login(event) {
    event.preventDefault(); // Prevent form submission

    if (!user || !pass) {
      alert("Enter a valid username and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user, password: pass }),
      });

      // Check response status
      if (response.ok) {
        // Redirect to "/path" if login successful
        setlogin("Loggedin");
        window.location.pathname = "/path";
      } else {
        // Handle login failure
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  }

  function changed(e) {
    setuser(e.target.value);
  }

  function passchange(e) {
    setpass(e.target.value);
  }

  return (
    <div className="centerit">
      <div className="Black Navbarnav loginform">
        <form className="formcenter">
          <input
            type="text"
            placeholder="Username"
            name="Username"
            id="Username"
            onChange={changed}
            required
          />
          <input
            type="password"
            placeholder="Enter a Password"
            onChange={passchange}
            required
          />
          <br />
          <Button onClick={login}>Log In</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
