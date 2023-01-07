import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewCardInfo } from "./data/data";

function randomIndex() {
  return Math.floor(Math.random() * reviewCardInfo.length);
}
function renderCard() {
  //each client would have : name , location , review , image , rating
  //TO-DO : add reviews and ratings
  //To-DO : stop duplication in the review cards
  const currentElement = reviewCardInfo[randomIndex()];
  return (
    <ReviewCard
      name={currentElement.name}
      location={currentElement.location}
      review={currentElement.review}
      picture={currentElement.picture}
      rating={currentElement.rating}
    ></ReviewCard>
  );
}
function Footer() {
  return (
    <div className="footer">
      <h1>
        <a href="">Customers Reviews </a>
      </h1>
      <div id="reviewCardsHolder">
        {renderCard()}
        {renderCard()}
      </div>
    </div>
  );
}
export default Footer;
