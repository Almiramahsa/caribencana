import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Subscription from '../components/Subscription';
import Publications from '../components/Publications';
import DisplayMap from '../components/DisplayMap';
function LandingPage() {
  return (
    <div>
      <Hero />

      <Publications />
      <Subscription />
      <Footer />
    </div>
  );
}

export default LandingPage;
