import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const detailedNews = useLoaderData();
  console.log(detailedNews);
  const { title, details, category_id, image_url } = detailedNews;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">Category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
