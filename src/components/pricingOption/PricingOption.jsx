import React, { use } from "react";
import PricingCard from "../pricingCard/pricingCard";
import DaisyCard from "../DaisyCard/DaisyCard";
const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  //   console.log(pricingData);

  return (
    <div className="p-4">
      <h2 className="text-5xl">Get Our Membership</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))} */}

        {pricingData.map((pricing) => (
          <DaisyCard key={pricing.id} pricing={pricing}></DaisyCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
