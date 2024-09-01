import React from 'react'

const About = () => {
  return (
    <div className='about-wrapper'>

      <div className='about-content'>
        <h3 className='about-heading'>About</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        </p>
      </div>


      <div className='archives-wrap'>
        <div>

          <h3 className='about-heading'>Archives</h3>


          <ul>
            <li><a>
              November 2015</a></li>
            <li><a>  <li><a>
              July 2015</a></li>
            </a></li>
            <li><a>March 2016</a></li>
            <li><a>January 2016</a></li>
            <li><a>
              April 2015</a></li>
            <li><a>January 2016</a></li>
            <li><a>January 2016</a></li>
            <li><a>
              April 2015</a></li>
            <li><a>
              June 2015</a></li>
            <li><a>
              September 2015</a></li>
          </ul>
        </div>





        <div>
          <h3 className='about-heading'>Elsewhere</h3>


          <ul>

            <li><a>Github</a></li>
            <li><a>Twitter</a></li>
            <li><a>Facebook</a></li>
            {/* <li><a>January 2016</a></li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About