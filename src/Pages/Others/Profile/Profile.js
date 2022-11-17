import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(photoURLRef.current.value);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        onChange={handleNameChange}
        className="mb-3"
        controlId="formBasicName"
      >
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={name}
          placeholder={user.displayName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          readOnly
          defaultValue={user?.email}
          placeholder={user.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo url</Form.Label>
        <Form.Control
          ref={photoURLRef}
          defaultValue={user?.photoURL}
          type="text"
          placeholder="PhotoURL"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
