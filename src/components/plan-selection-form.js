import { useState } from "react";
import PlanOption from "./plan-option";
import ExtraOption from "./extra-option";
import PaymentModal from "./paymentModal";

export default function PlanSelectionForm() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedExtraOption, setSelectedExtraOption] = useState(null);
  const [employeeCount, setEmployeeCount] = useState("00 - 000");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePlanChange = (planName) => {
    setSelectedPlan(planName);
  };

  const handleExtraOptionChange = (optionName) => {
    setSelectedExtraOption(optionName);
  };

  const isUpgradeEnabled =
    selectedPlan !== null && selectedExtraOption !== null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md p-6 max-w-3xl mx-auto shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#0b1d2e] dark:text-white">
          Select an add-on plan
        </h2>
        <button className="text-sm text-[#4a57da] dark:text-blue-400">
          Speak to sales?
        </button>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-[#0b1d2e] dark:text-white font-medium">
            How many employees do you wish to add to this plan?
          </label>
          <div className="relative">
            <select
              className="appearance-none bg-white dark:bg-gray-700 border border-[#d0d5dd] dark:border-gray-600 rounded-md px-4 py-2 pr-8 text-[#0b1d2e] dark:text-white"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(e.target.value)}
            >
              <option>00 - 000</option>
              <option>01 - 050</option>
              <option>51 - 100</option>
              <option>101 - 500</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 ">
              <img
                src="/asset/arrow.svg"
                className="w-4 text-[#606060] dark:text-gray-400 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <PlanOption
          title="Voice calls only"
          description="24/7 advice line for immediate support."
          price="---/yr"
          selected={selectedPlan === "Voice calls only"}
          onChange={() => handlePlanChange("Voice calls only")}
        />

        <PlanOption
          title="Voice & video calls"
          description="Both voice and video calling options for flexibility."
          price="---/yr"
          selected={selectedPlan === "Voice & video calls"}
          onChange={() => handlePlanChange("Voice & video calls")}
        />

        <PlanOption
          title="Face to face"
          description="With voice and video calls included."
          price="---/yr"
          selected={selectedPlan === "Face to face"}
          onChange={() => handlePlanChange("Face to face")}
        />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-[#0b1d2e] dark:text-white mb-4">
          Extra add-on
        </h3>

        <div className="space-y-4">
          <ExtraOption
            title="Legal & financial advice"
            description="This add-on is available for all plans."
            price="£--"
            selected={selectedExtraOption === "Legal & financial advice"}
            onChange={() => handleExtraOptionChange("Legal & financial advice")}
          />

          <ExtraOption
            title="Doctor's advice"
            description="This add-on is available for all plans."
            price="£--"
            selected={selectedExtraOption === "Doctor's advice"}
            onChange={() => handleExtraOptionChange("Doctor's advice")}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            isUpgradeEnabled
              ? "bg-[#4a57da] text-white dark:bg-blue-600 hover:bg-[#3a47ca] dark:hover:bg-blue-700"
              : "bg-[#f6f6f6] dark:bg-gray-700 text-[#606060] dark:text-gray-400 cursor-not-allowed"
          }`}
          onClick={openModal}
          disabled={!isUpgradeEnabled}
        >
          Upgrade plan
        </button>
        {isModalOpen && (
          <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </div>
    </div>
  );
}
