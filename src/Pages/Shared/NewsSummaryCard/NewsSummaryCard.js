import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, author, details, image_url, title, total_view, rating } = news;
  return (
    <Card className=" mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image src={author?.img} style={{ height: "60px" }} roundedCircle />
          <div className="ms-3">
            <p className="my-0">{author?.name}</p>
            <p className="my-0">{author?.published_date}</p>
          </div>
        </div>
        <div className="d-flex">
          <FaRegBookmark className="me-3" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between ">
        <div className="d-flex align-items-center">
          <FaStar className="text-warning" />
          <p>{rating.number}</p>
        </div>
        <div className="d-flex align-items-center">
          <FaRegEye />
          <p>{total_view}</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
