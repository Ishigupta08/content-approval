import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import PlanSelectionForm from "../components/plan-selection-form";
import PaymentModal from "../components/paymentModal";

function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? "dark" : ""}`}>
      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className="flex-1 flex flex-col bg-[#f4f4f4] dark:bg-gray-900 size-max
"
      >
        <Header />
        <main className="flex-1 p-6 max-h-max">
          <PlanSelectionForm />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
