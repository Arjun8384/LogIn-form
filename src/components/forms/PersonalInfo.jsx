import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { personalInfoSchema } from "../../schemas/validationSchema";

import PropTypes from "prop-types";

import FormInput from "../ui/FormInput";

function PersonalInfo({
  nextStep,
  formData,
  setFormData,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),

    mode: "onChange",

    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      dob: formData.dob || "",
    },
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));

    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1: Personal Information</h2>

      <FormInput
        label="First Name"
        name="firstName"
        register={register}
        error={errors.firstName}
      />

      <FormInput
        label="Last Name"
        name="lastName"
        register={register}
        error={errors.lastName}
      />

      <FormInput
        label="Date of Birth"
        type="text"
        name="dob"
        register={register}
        error={errors.dob}
        placeholder= "Date of Birth"
      />

      <button
        type="submit"
        disabled={!isValid}
        className={isValid ? "btn" : "btn disabled-btn"}
      >
        Next
      </button>
    </form>
  );
}

export default PersonalInfo;

PersonalInfo.propTypes = {
  nextStep: PropTypes.func.isRequired,

  setFormData: PropTypes.func.isRequired,

  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dob: PropTypes.string,
  }).isRequired,
};