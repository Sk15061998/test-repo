import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../icons/MLogo";

const PricingCard = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isYearly, setIsYearly] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/sample-api/mt-cbb.json");
        console.log(result.data, "result");
        setPlans(result.data.pricing_options.plans);
      } catch (error) {
        console.error("Error fetching the data: ", error);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const togglePricing = (yearly) => {
    setIsYearly(yearly);
  };

  return (
    <div className="pricing-cards">
      <div className="flex justify-center items-center space-x-6 bg-gray-900 p-4 rounded-lg">
        <div
          onClick={() => togglePricing(false)}
          className="flex items-center cursor-pointer"
        >
          <div
            className={`w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center`}
          >
            {!isYearly && <div className="w-3 h-3 bg-white rounded-full" />}
          </div>
          <span
            className={`ml-2 text-lg font-semibold ${!isYearly ? "text-white" : "text-gray-400"}`}
          >
            Prices Monthly
          </span>
        </div>

        <div
          onClick={() => togglePricing(true)}
          className="flex items-center cursor-pointer relative"
        >
          <div
            className={`w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center`}
          >
            {isYearly && <div className="w-3 h-3 bg-white rounded-full" />}
          </div>

          <span
            className={`ml-2 text-lg font-semibold ${isYearly ? "text-white" : "text-gray-400"}`}
          >
            Prices Yearly
          </span>
          {isYearly && (
            <span className="absolute top-0 right-0 transform translate-x-8 -translate-y-6 text-xs bg-red-600 text-white px-2 py-0.5 rounded">
              Save 16%
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-gradient-to-r from-gray-800 via-gray-600 to-red-900 text-white rounded-lg p-6 shadow-lg border border-white transition-all duration-500 ease-in-out`}
            style={{ backgroundSize: "100% 500%" }}
          >
            {/* Popular Badge */}
            {isYearly && plan.name === "Pro II" && (
              <div className="absolute top-[35px] right-[20px] bg-white text-red-600 text-sm px-4 py-1.5 transform rotate-45 translate-x-[25%] -translate-y-[40%]">
                Popular
              </div>
            )}

            <div className="flex items-center mb-4">
              <Logo />
              <h2
                className={`text-3xl font-semibold ${plan.name === "Pro Lite" ? "text-gray-300" : "text-white"}`}
              >
                {plan.name}
              </h2>
            </div>

            <p className="text-lg font-semibold mt-16 ml-4">
              {plan.storage} of storage
            </p>
            <p className="text-lg font-semibold ml-4">
              {plan.transfer} of transfer
            </p>

            <div>
              <div className="absolute bottom-16 right-2 font-semibold">
                <p className="text-gray-400">
                  {isYearly
                    ? `€${plan.yearly_price} one time a Year`
                    : `€${plan.monthly_price} per Month`}
                </p>
              </div>
              {isYearly &&
                (plan.name !== "Pro II" ? (
                  <div className="absolute top-2 right-2 font-bold text-white text-xl px-2 py-1 rounded">
                    You save 16%
                  </div>
                ) : (
                  <div className="absolute top-2 right-20 font-bold text-white text-xl px-2 py-1 rounded">
                    You save 16%
                  </div>
                ))}

              <div className="absolute bottom-4 right-2 bg-red-600 text-white text-xl font-semibold py-2 px-4 rounded-lg text-center">
                {isYearly
                  ? `€${plan.monthly_price} per Month`
                  : `€${plan.yearly_price}€ one time a Year`}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 mt-8">
        All prices are one time payments - no subscription is required.
      </p>
    </div>
  );
};

export default PricingCard;
