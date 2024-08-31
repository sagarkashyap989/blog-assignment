import React from 'react';

const Card = () => {
  return (
    <article className="card">
      <div className="card__content">
        <header className="card__header">
          <h3 className="card__category">World</h3>
        </header>
        <section className="card__body">
          <h1 className="card__title">Featured Post</h1>
          <h2 className="card__date">Nov 12</h2>
          <p className="card__text">
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </p>
        </section>
        <footer>

          <a href="#" className="card__link">Continue reading</a>
        </footer>
      </div>
      <div className="card__image-container">
        {/* <img src="path/to/image" alt="Card illustration" className="card__image" /> */}
      </div>
    </article>
  );
};

export default Card;
