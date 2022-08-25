import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { UserAuth } from "../../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";

function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [ConfirmPassword, SetConfirmPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate("");

  const { createUser, user } = UserAuth();

  let variantBtn = "primary";

  let non = false;

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    ConfirmPassword === ""
  ) {
    non = true;
    variantBtn = "secondary";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      return setError("Password is too short. Just like you");
    } else if (password !== ConfirmPassword) {
      return setError("The Passowords Do Not Match");
    }

    try {
      await createUser(email, password);
      navigate("/feed");

    } catch (e) {
      setError(e.message);
      if (e.message === "Firebase: Error (auth/user-not-found).") {
        setError("Account does not exist");
      } else if (e.message === "Firebase: Error (auth/wrong-password).") {
        setError("Password does not match email");
      } else if (
        e.message ===
        "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      ) {
        setError(
          "Account temporarly locked for too many failed login attempts"
        );
      }
    }
  };

  const { signInWithGoogle } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log(user);
    } catch (e) {
      setError(e.message);
    }
    navigate("/home");
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
            <h2 className="mb-4">Let's Get Started</h2>
          </b>
          <i>
            <p>
              Already have an Account?{" "}
              <Link style={{ textDecoration: "none" }} to="/signin">
                Login
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
          <Form onSubmit={handleSubmit}>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="👤 Username:"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

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

            <Form.Group id="ConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={ConfirmPassword}
                placeholder="🔒 Confirm Password:"
                onChange={(e) => SetConfirmPassword(e.target.value)}
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

export default Signup;
