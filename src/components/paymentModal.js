import React, { useState } from "react";
import PaymentModalOptions from "./paymentModal-option";

export default function PaymentModal({ isOpen, onClose }) {
  const [selectedPaymentMode, setSelectedPaymentMode] = useState("Reuben Hale");
  const handlePlanChange = (planName) => {
    setSelectedPaymentMode(planName);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center " onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-md p-6 max-w-3xl mx-auto shadow-sm w-[692px]" onClick={(e) => e.stopPropagation()}>
        <h1 className="text-2xl font-medium text-[#0b1d2e] dark:text-white mb-4">
          Payment methods
        </h1>
        <div className="space-y-4">
          <PaymentModalOptions
            title="Reuben Hale"
            description="Applepay... 8473"
            selected={selectedPaymentMode == "Reuben Hale"}
            onChange={() => handlePlanChange("Reuben Hale")}
          />
          <PaymentModalOptions
            title="Google Pay"
            description=""
            selected={selectedPaymentMode == "Google Pay"}
            onChange={() => handlePlanChange("Google Pay")}
          />
          <PaymentModalOptions
            title="Bank Transfer"
            description=""
            selected={selectedPaymentMode == "Bank Transfer"}
            onChange={() => handlePlanChange("Bank Transfer")}
          />
          <button
            className={`px-6 py-2 border border-[#0B1D2E] rounded-lg font-medium transition-colors text-black dark:bg-blue-600 hover:bg-[#3a47ca] dark:hover:bg-blue-700`}
          >
            Add a new card
          </button>
          <button
            className={`px-6 py-2 rounded-md  font-medium transition-colors bg-[#4a57da] text-white dark:bg-blue-600 hover:bg-[#3a47ca] dark:hover:bg-blue-700`}
          >
            My Surveys
          </button>
        </div>
      </div>
    </div>
  );
}
