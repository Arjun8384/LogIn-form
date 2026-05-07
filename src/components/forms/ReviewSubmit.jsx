import PropTypes from "prop-types";
import { email } from "zod";

function ReviewSubmit({
  prevStep,
  formData,
  handleFinalSubmit,
}) {
  const handleSubmit = () => {
    handleFinalSubmit(formData);
  };

  return (
    <div>
      <h2>Step 3: Review & Submit</h2>

      <div className="review-card">
        <div className="review-item">
          <span>First Name:</span>
          <p>{formData.firstName}</p>
        </div>

        <div className="review-item">
          <span>Last Name:</span>
          <p>{formData.lastName}</p>
        </div>

        <div className="review-item">
          <span>Date of Birth:</span>
          <p>{formData.dob}</p>
        </div>

        <div className="review-item">
          <span>Email:</span>
          <p>{formData.email}</p>
        </div>

        <div className="review-item">
          <span>Password:</span>
          <p>{"•".repeat(formData.password?.length || 0)}</p>
        </div>
      </div>

      <div className="button-group">
        <button onClick={prevStep}>
          Back
        </button>

        <button onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReviewSubmit;

ReviewSubmit.propTypes = {
  prevStep: PropTypes.func.isRequired,
  handleFinalSubmit: PropTypes.func.isRequired, 
  
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dob: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};