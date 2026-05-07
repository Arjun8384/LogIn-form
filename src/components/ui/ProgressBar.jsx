import PropTypes from "prop-types";

function ProgressBar({ step, totalSteps }) {
  const progressWidth = (step / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span>
          Step {step} of {totalSteps}
        </span>

        <span>
          {Math.round(progressWidth)}%
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progressWidth}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;

ProgressBar.propTypes = {
    step: PropTypes.func.isRequired,
    totalSteps: PropTypes.func.isRequired,
};