import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h2>here is terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        reprehenderit et adipisci sapiente. Magni quidem, sint vero voluptas vel
        delectus necessitatibus fugiat ab. Tempore facere nesciunt blanditiis
        quasi, sit necessitatibus!
      </p>
      <strong>
        Go Back <Link to="/register">Register</Link>
      </strong>
    </div>
  );
};

export default TermsAndConditions;
