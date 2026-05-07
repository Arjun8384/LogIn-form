import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { accountDetailsSchema } from "../../schemas/validationSchema";

import FormInput from "../ui/FormInput";

function AccountDetails({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {
  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(
      accountDetailsSchema
    ),

    mode: "onChange",

    defaultValues: {
      email: formData.email || "",
      password: formData.password || "",
      confirmPassword:
        formData.confirmPassword || "",
    },
  });

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2: Account Details</h2>

      <FormInput
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        register={register}
        error={errors.email}
      />

      <FormInput
        label="Password"
        type={
          showPassword
            ? "text"
            : "password"
        }
        name="password"
        placeholder="Enter password"
        register={register}
        error={errors.password}
        rightElement={
          <button
            type="button"
            className="toggle-btn"
            onClick={() =>
              setShowPassword(
                (prev) => !prev
              )
            }
          >
            {showPassword
              ? "Hide"
              : "Show"}
          </button>
        }
      />

      <FormInput
        label="Confirm Password"
        type={
          showConfirmPassword
            ? "text"
            : "password"
        }
        name="confirmPassword"
        placeholder="Confirm password"
        register={register}
        error={errors.confirmPassword}
        rightElement={
          <button
            type="button"
            className="toggle-btn"
            onClick={() =>
              setShowConfirmPassword(
                (prev) => !prev
              )
            }
          >
            {showConfirmPassword
              ? "Hide"
              : "Show"}
          </button>
        }
      />

      <div className="button-group">
        <button
          type="button"
          onClick={prevStep}
        >
          Back
        </button>

        <button
          type="submit"
          disabled={!isValid}
          className={
            isValid
              ? ""
              : "disabled-btn"
          }
        >
          Next
        </button>
      </div>
    </form>
  );
}

AccountDetails.propTypes = {
  nextStep: PropTypes.func.isRequired,

  prevStep: PropTypes.func.isRequired,

  setFormData:
    PropTypes.func.isRequired,

  formData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword:
      PropTypes.string,
  }).isRequired,
};

export default AccountDetails;