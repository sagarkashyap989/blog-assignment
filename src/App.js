import { useState } from 'react';
// import './App.css';
import './styles/index.css'

import About from './components/About';
import Banner from './layout/Banner';
import Blog from './layout/Blog';
import CardWrapper from './components/CardWrapper';
import Form from './components/Form';
import Navbar from './layout/Navbar';
import SecondaryNavbar from './layout/SecondaryNavbar';

import { ModalProvider } from './context/Context';
import Footer from './layout/Footer';
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };


  return (
    <ModalProvider>
      <div className='container'>

        <>
          <Navbar />
          <hr />
          <SecondaryNavbar />

          <Banner />


          <CardWrapper></CardWrapper>

          <section className='blog-about-wrapper'>

            <Blog />

            <About />


          </section>


          <Form isModalOpen={isModalOpen} toggleModal={toggleModal} />




        </>
      </div>

      <Footer/>
    </ModalProvider>

  );
}

export default App;
