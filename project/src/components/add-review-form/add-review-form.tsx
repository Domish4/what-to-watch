import React, { ChangeEvent, FormEvent} from 'react';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import { postComment } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
function AddReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();

  const minCharacters = 50;
  const maxCharacters = 400;
  const [formData, setFormData] = useState({
    id: params.id,
    rating: 0,
    comment: '',

  });

  function handleChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value,} = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleRatingChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: Number(target.value) });

  };

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    if (params.id) {
      evt.preventDefault();
      dispatch(postComment({id: params.id, rating: formData.rating, comment: formData.comment}));
    }
  }

  const ratingStars = new Array(10).fill('').map((_, index) => {
    const ratingValue = 10 - index;
    return (
      <React.Fragment key={ratingValue}>
        <input
          className="rating__input"
          id={`star-${ratingValue}`}
          type="radio"
          name="rating"
          value={`${ratingValue}`}
          onChange={handleRatingChange}
          checked={formData.rating === ratingValue}
        />
        <label className="rating__label" htmlFor={`star-${ratingValue}`}>{`Rating ${ratingValue}`}</label>

      </React.Fragment>
    );});

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars" >
          {ratingStars}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" id="comment"
          name="comment" value={formData.comment}
          onChange={handleChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>

      <p className="reviews__description">
        To post review please make sure to set <b>rating </b>
        and describe the film with at least <b>{minCharacters} characters</b>.
        {(formData.comment && formData.comment.length < minCharacters + 1) && <b> Сharacters left: {minCharacters + 1 - formData.comment.length}</b>}
        {(formData.comment && formData.comment.length >= maxCharacters) && <b > Max {maxCharacters} Сharacters</b>}
      </p>

    </form>
  );
}
export default AddReviewForm;
