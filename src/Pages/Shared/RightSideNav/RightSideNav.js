import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const googleProvider = new GoogleAuthProvider();
  const { logInWithProvider } = useContext(AuthContext);
  const handleGoogleLogIn = () => {
    logInWithProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error("Error", err));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleLogIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>
      <h3>Find us on:</h3>
      <ListGroup>
        <ListGroup.Item>
          <FaFacebook /> Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <FaWhatsapp /> Whatsapp
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitter /> Twitter
        </ListGroup.Item>
        <ListGroup.Item>
          <FaInstagram /> Instagram
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitch /> Twitch
        </ListGroup.Item>
      </ListGroup>
      <h3>Our partners</h3>
      <BrandCarousel />
    </div>
  );
};

export default RightSideNav;
