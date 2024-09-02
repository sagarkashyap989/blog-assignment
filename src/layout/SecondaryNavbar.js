import React from 'react'

const SecondaryNavbar = () => {


    const data = ['World', 'U.S', 'Technology', 'Design', 'Culture', 'Business', 'Politics', 'Opinion', 'Science', 'Health', 'Style', "Travel"]
  return (
    <div className='secondary-nav-wrapper'>
        
    {data.map((e) =>  (<a  href = '/#' className='secondary-nav-item'>{e}</a>))}
    </div>
  )
}

export default SecondaryNavbar