import * as Yup from "yup";

export const signUpValidation = Yup.object().shape({
  firstName: Yup.string().required("First Name is required!"),
  lastName: Yup.string().required("Last Name is required!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Email format is invalid!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password must be at least 6 characters!")
    .max(21, "Password must be exceed 21 characters!"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required!")
    .oneOf([Yup.ref("password")], "Confirm Password does not match!"),
});
