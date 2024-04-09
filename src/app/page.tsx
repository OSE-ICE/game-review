"use client";

import { useState } from "react";
import "./globals.css";

const GameReview = ({
  name,
  desc,
  review,
}: {
  name: string;
  desc: string;
  review: number;
}) => {
  return (
    <>
      <div className="review-container">
        <div>Name: {name}</div>
        <div>Description: {desc}</div>
        <div>Review: {review}</div>
      </div>
    </>
  );
};

export default () => {
  const [gameReviews, setGameReviews] = useState([
    { name: "fifa", desc: "football game", review: 10 },
  ]);
  const [showReview, setShowReview] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    desc: "",
    review: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setNewReview({ ...newReview, [field]: e.target.value });
  };

  const handleAddReview = () => {
    setGameReviews([...gameReviews, newReview]);
    setNewReview({ name: "", desc: "", review: 0 });
    setShowReview(false);
  };

  return (
    <>
      {gameReviews.map((review, index) => (
        <GameReview key={index} {...review} />
      ))}
      <div>
        <button className="review-button" onClick={() => setShowReview(true)}>
          New review..
        </button>
      </div>
      {showReview ? (
        <>
          <div>
            Name:{" "}
            <input
              className="review-input"
              onChange={(e) => handleInputChange(e, "name")}
            ></input>
          </div>
          <div>
            Desc:{" "}
            <input
              className="review-input"
              onChange={(e) => handleInputChange(e, "desc")}
            ></input>
          </div>
          <div>
            Score:{" "}
            <input
              className="review-input"
              onChange={(e) => handleInputChange(e, "review")}
            ></input>
          </div>
          <button onClick={handleAddReview}>Add Review</button>
        </>
      ) : null}
    </>
  );
};
