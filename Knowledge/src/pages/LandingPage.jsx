import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Subscription from '../components/Subscription';
import PublicationData from '../components/PublicationData';
function LandingPage() {
  return (
    <div>
      <Hero />
      <PublicationData />
      <Subscription />

      <Footer />
    </div>
  );
}

export default LandingPage;
