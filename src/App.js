import { useState } from 'react';
// import './App.css';
import './styles/index.css'

import About from './components/About';
import Banner from './components/Banner';
import Blog from './components/Blog';
import CardWrapper from './components/CardWrapper';
import Form from './components/Form';
import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';

import { ModalProvider } from './context/Context';
import Footer from './components/Footer';
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
