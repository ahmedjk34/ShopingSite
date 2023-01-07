import React from "react";

function ReviewCard({ name, location, review, picture, rating }) {
  return (
    <div className="reviewCard">
      <p>{review}</p>
      <br></br>
      <img src={require(`${picture}`)} />
      <br></br>
      <p>{name}</p>
      <p>{location}</p>
      <br></br>
      <p>{review}</p>
    </div>
  );
}
export default ReviewCard;
