import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import "./LoginScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
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

                {isLoading && <Loader />}

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
