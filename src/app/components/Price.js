import React from "react";
import PriceCard from '@/app/components/PriceCard'

export default function Price() {

    const basicFeatures = [
        "Unlimited Updates",
        "Git Repository",
        "NPM installation"
    ];

    const advancedFeatures = [
        "Continuous Integration/Continuous Deployment",
        "Advanced analytics",
        "Third-party API integration",
        "Customizable themes",
        "Role-based access control (RBAC)",
        
    ];

    const premiumFeatures = [
        "Machine learning integration",
        "Blockchain integration",
        "Predictive analytics",
        "Customizable AI models",
        "Advanced data visualization",
        
    ];
  return (
    <section className="container my-24 px-6 mx-auto">
    <div className="mb-32 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
        <PriceCard type={'Basic'} price={199} Features={basicFeatures}></PriceCard>
        <PriceCard type={'Advanced'} price={299} Features={advancedFeatures}></PriceCard>
        <PriceCard type={"Premium"} price={399} Features={premiumFeatures}></PriceCard>
      </div>
    </div>
  </section>
  
  );
}
