import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      newIndex %= 4;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      newIndex = newIndex >= 0 ? newIndex : newIndex + 4;
      return newIndex;
    });
  };

  const randomPerson = () => {
    setIndex(index => {
      const random = len => Math.floor(Math.random() * len);

      let randomIndex = random(people.length);
      while (randomIndex === index) {
        randomIndex = random(people.length);
      }
      return randomIndex;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
