import React from "react";

const PartnerDispute = () => {
  return (
    <div>
      <div className="text-center">
        <div className="p-9" style={{ backgroundColor: "#68AC5D" }}>
          <h1 className="text-4xl font-bold text-white">
            Partner Dispute : Resolution Center
          </h1>
          <p className="text-2xl font-semibold text-white my-4">
            Submit a complaint, and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="w-1/3 -translate-y-10 mx-auto">
          {/* Embedded Google Form */}
          <div className="mt-6">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSelAOe616ER5F4QQ9lnBBEXO6QKjpfKkIiegZb-f9ADRwF3TQ/viewform?embedded=true" 
              width="640" 
              height="1300" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0">
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDispute;
