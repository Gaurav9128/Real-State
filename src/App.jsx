import React from 'react'
import Hero from './sections/Hero.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import TrustedCompanies from './components/TrustedCompanies.jsx';
import SpendingMap from './components/SpendingMap.jsx';
import InvestorSection from './components/InvestorSection.jsx';
import TrendingNews from './components/TrendingNews.jsx';
import InvestmentCard from './components/InvestmentCard.jsx';
import RecentArticles from './components/RecentArticles.jsx';
import Card from './components/card.jsx';
import TravelSearchUI from './components/Travel.jsx';
import Location from './components/Location.jsx';
import ReviewsSection from './components/ReviewsSection.jsx';
import GoldenVisaCard from './components/GoldenVisaCard.jsx';
import AgentSection from './sections/AgentSection.jsx';
import ListingOptions from './sections/ListingOptions.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <SpendingMap />
      <Card />
      <TravelSearchUI />
      <Location />
      <GoldenVisaCard />
      <InvestorSection />
      <TrendingNews />
      <RecentArticles />
      <InvestmentCard />
      <ReviewsSection />
      <AgentSection />
      <ListingOptions />
      <TrustedCompanies />
      <Footer />
      
    </>
  )
}

export default App
