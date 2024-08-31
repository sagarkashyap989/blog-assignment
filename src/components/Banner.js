import React from 'react'

const Banner = () => {
  return (
    <section className="featured-banner">
      <div className="featured-banner__content">
        <h1 className="featured-banner__title playfair-display-header">
          Title of a longer <br></br>Featured Blog Post
        </h1>
        <p className="featured-banner__description">Multiple lines of text from the lende, informing new <br/>readers quickly and efficiently about what's most interesting <br/>in
                        this post's contents.</p>
        <a className="featured-banner__link" href='#'>Continue reading...</a>
      </div>
    </section>
  )
}

export default Banner