import React,{useState,useEffect} from "react";

import starIcon from "../images/icon-star.svg";
import thankyouImg from "../images/illustration-thank-you.svg";

function Rating() {
  const [selectedRating,setSelectedRating] = useState(null);
  const [ notSubmitted,setNotSubmitted] = useState(true);

  const ratings = [1,2,3,4,5];

  const selectingRating = (e) => {
    setSelectedRating(e.target.value);
  }

  const handleSubmit = () => {
    if(selectedRating){
      setNotSubmitted((pre) => !pre);
    }
  }

  //img preload
  useEffect(() => {
    const image = new Image();
    image.src = "../images/illustration-thank-you.svg";
  },[]);

  return (
    <section className="rating-card">
      {notSubmitted ? (
        <div className="rating-card__container">
          <div className="rating-card__star-icon">
            <img src={starIcon} alt="star icon" />
          </div>
          <h1 className="rating-card__heading">How did we do?</h1>
          <p className="rating-card__para">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <ul className="rating-card__list">
            {ratings.map((rating) => {
              return (
                <li
                  key={rating}
                  className={selectedRating === rating ? "selected" : ""}
                  value={rating}
                  onClick={selectingRating}>
                  {rating}
                </li>
              );
            })}
          </ul>

          <button
            className="rating-card__button"
            type="submit"
            onClick={handleSubmit}>
            submit
          </button>
        </div>
      ) : (
        <div className="rating-card__container submitted">
          <div className="submitted-card">
            <div className="submitted-card__thankyou-img">
              <img src={thankyouImg} alt="thankyou" />
            </div>
            <div className="submitted-card__rating-info">
              You selected {selectedRating} out of 5
            </div>
            <h1 className="submitted-card__thankyou-heading">Thank you!</h1>
            <p className="submitted-card__thankyou-message">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Rating