import { Link, useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { UserAuth } from "../../context/UserContext";
import { useState } from "react";
import { GoogleButton } from "react-google-button";

function Signin() {
  const { login } = UserAuth();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  const naviagte = useNavigate();

  let variantBtn = "primary";

  let non = false;

  if (email === "" || password === "") {
    non = true;
    variantBtn = "secondary";
  }

  const { signInWithGoogle } = UserAuth();
  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    naviagte("/home");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      naviagte("/home");
    } catch (e) {
      setError(e.message);
      if (e.message === "Firebase: Error (auth/user-not-found).") {
        setError("Account Not Found");
      }
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        flexDirection: "column",
        backgroundColor: "#ffdf00",
        padding: 0,
        margin: 0,
        height: "100vh",
        maxWidth: "100vw"
      }}
    >
      <Card
        style={{
          maxWidth: "400px",
          width: "100vw"
        }}
      >
        <Card.Body>
          <b>
            <h2 className="mb-4">Login</h2>
          </b>
          <i>
            <p>
              Dont have an Account?{" "}
              <Link style={{ textDecoration: "none" }} to="/signup">
                Signup
              </Link>
            </p>
          </i>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
          {error && (
            <Alert style={{ marginTop: "10px" }} variant="danger">
              {error}
            </Alert>
          )}
          <Form onSubmit={handleLogin}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="✉️ Email:"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="🔒 Password:"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant={variantBtn}
              size="sm"
              className="w-100 mt-2"
              type="submit"
              style={{ height: "38px" }}
              disabled={non}
            >
              Signup
            </Button>
          </Form>
        </Card.Body>
        <b>
          <p>Password must be 8 characters</p>
        </b>
      </Card>
    </Container>
  );
}

export default Signin;
