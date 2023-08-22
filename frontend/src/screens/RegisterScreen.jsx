import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import "./LoginScreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <div className="full-height-container">
      <Container className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col xs={12} sm={10} md={8} lg={12}>
            <FormContainer>
              <h1>Sign Up</h1>
              <Form onSubmit={SubmitHandler}>
                <Form.Group className="my-2" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </Form.Group>

                <Form.Group className="my-2" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </Form.Group>

                <Form.Group className="my-2" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </Form.Group>

                <Form.Group className="my-2" controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ width: "100%" }}
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-2">
                  Sign Up
                </Button>

                <Row className="py-3">
                  <Col>
                    Already Have an Account? <Link to="/Login">Login</Link>
                  </Col>
                </Row>
              </Form>
            </FormContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterScreen;
