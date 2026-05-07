import { useEffect, useState } from "react";

import PersonalInfo from "./components/forms/PersonalInfo";

import AccountDetails from "./components/forms/AccountDetails";

import ReviewSubmit from "./components/forms/ReviewSubmit";

import ProgressBar from "./components/ui/ProgressBar";

import SuccessMessage from "./components/ui/SuccessMessage";

function App() {
  const [step, setStep] = useState(1);

  const [submitted, setSubmitted] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(false);
  useEffect(() => {
  if (darkMode) {
    document.body.classList.add(
      "dark-theme"
    );
  } else {
    document.body.classList.remove(
      "dark-theme"
    );
  }
}, [darkMode]);

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleFinalSubmit = (data) => {
    console.log(
      "Final Payload:",
      data
    );

    setFormData(data);

    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <button
          className="theme-toggle"
          onClick={() =>
            setDarkMode(
              (prev) => !prev
            )
          }
        >
          {darkMode
            ? "☀️ Light Mode"
            : "🌙 Dark Mode"}
        </button>

        <h1>
          Multi-Step Onboarding Wizard
        </h1>

        <ProgressBar
          step={step}
          totalSteps={3}
        />

        {step === 1 && (
          <PersonalInfo
            nextStep={nextStep}
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )}

        {step === 2 && (
          <AccountDetails
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )}

        {step === 3 && (
          <ReviewSubmit
            prevStep={prevStep}
            formData={formData}
            handleFinalSubmit={
              handleFinalSubmit
            }
          />
        )}
      </div>
    </div>
  );
}

export default App;