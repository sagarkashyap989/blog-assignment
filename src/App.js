import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Blog from './components/Blog';
import CardWrapper from './components/CardWrapper';
import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
function App() {
  return (
    <>
      <Navbar />
      <hr />
      <SecondaryNavbar />

      <Banner />


      <CardWrapper></CardWrapper>

      <section  className='blog-about-wrapper'>

        <Blog/>

        <About/>


      </section>



      <div style={{ height: '400px' }}></div>


    </>
  );
}

export default App;
