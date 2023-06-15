import React from 'react';
import {useState} from 'react';
function AddReviewForm(): JSX.Element {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const count = [1,2,3,4,5,6,7,8,9,10];

  return (
    <form action="#" className="add-review__form" onChange={() => setText(text)}>
      <div className="rating">
        <div className="rating__stars">
          {count.map((item, index, arr) => {
            const givenRating = arr.length - index;
            return (
              <React.Fragment key={`${item}-${givenRating}`}>
                <input
                  className="rating__input"
                  id={`star-${givenRating}`}
                  type="radio"
                  name="rating"
                  value={givenRating}
                  onChange={() => {
                    setRating(givenRating);
                  }}
                  checked={Number(rating) === givenRating}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${givenRating}`}
                >
            Rating 10
                </label>

              </React.Fragment>
            );})}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(e) => setText(e.target.value)}>{text}</textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>

  );
}

export default AddReviewForm;
