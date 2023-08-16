import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "../../components";

import { simulateFetchRequest } from "../../api/api";

import { signUpValidation } from "../../constants";

import "./sign-up.css";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidation),
  });

  const onSubmit = async (data) => {
    try {
      const response = await simulateFetchRequest(data);

      toast(
        `${response.firstName} ${response.lastName} was created successfully`
      );
    } catch (error) {
      toast(error);
    }
  };

  return (
    <div className="sign-up-wrapper">
      <p className="sign-up-title">Create Account</p>
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <input
            className="input"
            placeholder="First Name"
            {...register("firstName")}
          />
          <p className="error">{errors.firstName?.message}</p>
        </div>
        <div className="input-wrapper">
          <input
            className="input"
            placeholder="Last Name"
            {...register("lastName")}
          />
          <p className="error">{errors.lastName?.message}</p>
        </div>
        <div className="input-wrapper">
          <input className="input" placeholder="Email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="input-wrapper">
          <input
            className="input"
            placeholder="Password"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className="input-wrapper">
          <input
            className="input"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>

        <Button type="submit">Create Account</Button>
      </form>
    </div>
  );
};
