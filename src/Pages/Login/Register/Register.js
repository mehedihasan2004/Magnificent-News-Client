import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  const { createUser, updateUserInfo, verifyEmail } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        updateUserProfile(name, photoURL);
        handleVerifyEmail();
        toast.success("Cheak your email address and verify");
      })
      .catch((err) => {
        console.error("Error", err);
        setError(err.message);
      });
  };

  const updateUserProfile = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL };
    updateUserInfo(profile)
      .then(() => {})
      .catch((err) => console.error("Error", err));
  };

  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {})
      .catch((err) => console.error("Error", err));
  };

  const handleCheakbox = (e) => {
    setTerms(e.target.checked);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Drop Your Photo URL</Form.Label>
        <Form.Control type="text" name="photo_url" placeholder="Photo url" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleCheakbox}
          label={
            <>
              Accept our <Link to="/terms">terms and conditions</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!terms}>
        Register
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;
