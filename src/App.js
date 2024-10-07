import React, { useState } from "react";
import Header from "./components/Header";
import FaqSection from "./components/FaqSection";
import PricingCard from "./components/PricingCard";
import CloudBackupSection from "./components/ClousBasedBackUpSection";

const App = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (isYearly) => {
    setIsYearly(isYearly);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <CloudBackupSection />
        <PricingCard isYearly={isYearly} />
        <FaqSection />
      </main>
    </div>
  );
};

export default App;
