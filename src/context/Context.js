import React, { createContext, useState, useContext } from 'react';

// Create the context
const ModalContext = createContext();
const authorName = 'sagar'
const title = 'Sample blog'
const content =     `<p>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
</p>

<hr />

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium  <a className='blog-content-link' href='/#'>officia sit voluptatem </a>voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui de imus, omnis voluptas</p>




<p>At vero eos et accusamus <strong>et iusto odio dignissimos ducimus</strong> qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore pore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat </p>





<h2 className='blog-content-heding'>Heading</h2>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore pore, cum soluta nobis est eligendi optio cumque odio dign issimos ducimus qui blanditiis praesentium</p>
<code>Example code area</code>
<p>cum soluta eniti atque corrupti quos dolore pore, cum soluta nobis nihil impedit quo minus id quod maxime placeat </p>









<h2 className='blog-content-title'>Sub-heading</h2>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore pore, cum soluta eniti atque corrupti quos dolore pore, cum soluta nobis nihil impedit quo minus id quod maxime placeat </p>

<ul>
<li>omnis iste natus error sit voluptatem accusantium </li>
<li>dolore pore, cum soluta nobis nihil impedit quo minus id quod maxime placeat</li>

<li>cum soluta eniti atque corrupti quos dolore pore</li>

</ul>



<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>


<ol>

<li>dolore pore, cum soluta nobis nihil impedit quo minus id quod maxime placeat</li>
<li>cum soluta eniti atque corrupti quos dolore pore</li>
<li>omnisc orrupti  iste natus error sit voluptatem accusantium </li>


</ol>

<p>deleniti atque corrupti quos dolore pore, cum soluta eniti atque corrupti quos dolore pore</p>`
const date = `January 1, 2014`

const dummyData =[
  {authorName : 'sagar',
  title : 'Sample blog',
  content :     `<p>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
</p>

<hr />

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium  <a className='blog-content-link' href='/#'>officia sit voluptatem </a>voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui de imus, omnis voluptas</p>




<p>At vero eos et accusamus <strong>et iusto odio dignissimos ducimus</strong> qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore pore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat </p>





<h2 style="font-size: 2em" className='blog-content-heading'>Heading</h2>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore pore, cum soluta nobis est eligendi optio cumque odio dign issimos ducimus qui blanditiis praesentium</p>
<code>Example code area</code>
<p>cum soluta eniti atque corrupti quos dolore pore, cum soluta nobis nihil impedit quo minus id quod maxime placeat </p>









<h2 className='blog-content-title'>Sub-heading</h2>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore pore, cum soluta eniti atque corrupti quos dolore pore, cum soluta nobis nihil impedit quo minus id quod maxime placeat </p>

<ul>
<li>omnis iste natus error sit voluptatem accusantium </li>
<li>dolore pore, cum soluta nobis nihil impedit quo minus id quod maxime placeat</li>

<li>cum soluta eniti atque corrupti quos dolore pore</li>

</ul>



<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>


<ol>

<li>dolore pore, cum soluta nobis nihil impedit quo minus id quod maxime placeat</li>
<li>cum soluta eniti atque corrupti quos dolore pore</li>
<li>omnisc orrupti  iste natus error sit voluptatem accusantium </li>


</ol>

<p>deleniti atque corrupti quos dolore pore, cum soluta eniti atque corrupti quos dolore pore</p>`
,
date : `January 1, 2014`
},


{
  authorName : 'Peter',
  title: 'Another blog',
  content:`<p>
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  </p>
  
  <hr />
  
  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium  <a className='blog-content-link' href='/#'>officia sit voluptatem </a>voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui de imus, omnis voluptas</p>
  
  
  
  
  <p>At vero eos et accusamus <strong>et iusto odio dignissimos ducimus</strong> qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore pore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat </p>
  
  
  `,
  date : 'July 13, 2015'
}

]
// Create a provider component
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogList, setBlogList] = useState(dummyData)







  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal, blogList, setBlogList }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => {
  return useContext(ModalContext);
};
