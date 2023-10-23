import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h2>Selamat Datang di Home Pages</h2>
      <Footer />
    </div>
  );
};

export default Home;