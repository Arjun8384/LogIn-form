import PropTypes from "prop-types";

function FormInput({
  label,
  type = "text",
  name,
  register,
  error,
  rightElement,
  placeholder,
}) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <div className="input-wrapper">
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />

        {rightElement}
      </div>

      {error && (
        <p className="error-text">
          {error.message}
        </p>
      )}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,

  type: PropTypes.string,

  name: PropTypes.string.isRequired,

  register: PropTypes.func.isRequired,

  rightElement: PropTypes.node,

  placeholder: PropTypes.string,

  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default FormInput;