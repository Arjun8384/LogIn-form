import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z
    .string()
    .min(1, {
      message: "First name is required",
        }),

  lastName: z
    .string()
    .min(1, {
        message: "Last name is required",
        }),
  dob: z
    .string()
    .min(1, "Date of birth is required"),
});

export const accountDetailsSchema = z
  .object({
    email: z.email({
        message: "Invalid email address",
        }),

    password: z
      .string()
      .min(
        8,
        "Password must be at least 8 characters"
      ),

    confirmPassword: z
      .string()
      .min(1, "Confirm your password"),
  })
  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );